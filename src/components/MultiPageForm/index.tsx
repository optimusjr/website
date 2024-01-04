"use client";

import { AnimatePresence, m, MotionProps } from "framer-motion";

import Alert from "@/components/Alert";
import AnimateHeight from "@/components/AnimateHeight";
import Button from "@/components/Button";
import Card from "@/components/Card";
import LoadingIcon from "@/components/icons/Loading";
import SendIcon from "@/components/icons/Send";
import Link from "@/components/Link";
import Typography from "@/components/Typography";
import config from "@/config";

import { MultiFormProvider } from "./FormContext";
import { PAGE_POSITION } from "./FormContext/helpers";
import useFormContext from "./FormContext/useFormContext";
import FormPage from "./FormPage";
import type * as Form from "./formSchemaType";

interface Props {
  schema: Form.Schema;
}

const MultiPageForm = ({ schema }: Props) => {
  return (
    <MultiFormProvider formSchema={schema}>
      <FormCard />
    </MultiFormProvider>
  );
};

export default MultiPageForm;

const FormCard = () => {
  const { goToNextPage, goToPreviousPage, currentPage, isLoading, hasSubmissionError } =
    useFormContext();

  const animation = {
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    initial: { opacity: 0 },
  } as MotionProps;

  return (
    <Card
      onSubmit={(e: React.FormEvent) => {
        e.preventDefault();
        goToNextPage();
      }}
      as="form"
      className="w-full max-w-[768px]"
    >
      <AnimateHeight>
        <FormPage />
      </AnimateHeight>

      <Alert severity="error" show={hasSubmissionError}>
        Ops! Algo deu errado. Não se preocupe, não é culpa sua. Por favor, tente novamente.
        <p>
          Se o problema persistir, nos avise&nbsp;
          <Link
            className="underline"
            href={`https://wa.me/${config.WHATSAPP.replace(/[^0-9]/g, "")}`}
          >
            clicando&nbsp;aqui
          </Link>
          .
        </p>
      </Alert>

      <div className="flex flex-row-reverse flex-wrap-reverse justify-between gap-4 sm:flex-nowrap">
        <AnimatePresence initial={false} mode="popLayout">
          <Button className="w-full justify-center sm:w-auto">
            {currentPage.position === PAGE_POSITION.FIRST ? (
              <m.div {...animation}>Vamos lá!</m.div>
            ) : currentPage.position === PAGE_POSITION.LAST && !isLoading ? (
              <>
                <SendIcon as={m.svg} {...animation} /> <m.div {...animation}>Enviar</m.div>
              </>
            ) : currentPage.position === PAGE_POSITION.LAST && isLoading ? (
              <>
                <m.div {...animation} className="leading-0">
                  <LoadingIcon
                    animate={{ rotate: 360 }}
                    as={m.svg}
                    transition={{ ease: "linear", duration: 1, repeat: Infinity }}
                  />
                </m.div>
                <m.div {...animation}>Enviando</m.div>
              </>
            ) : (
              <m.div {...animation}>Próxima página</m.div>
            )}
          </Button>
        </AnimatePresence>

        {currentPage.position !== PAGE_POSITION.FIRST ? (
          <Button
            className="w-full justify-center sm:w-auto"
            onClick={goToPreviousPage}
            type="button"
            variant="outlined"
          >
            Página anterior
          </Button>
        ) : (
          <div>
            <Typography>Prefere falar diretamente com um ser humano?</Typography>
            <Typography>
              <Typography
                component={Link}
                href={`https://wa.me/${config.WHATSAPP.replace(/[^0-9]/g, "")}`}
                variant="a"
              >
                Clique&nbsp;aqui
              </Typography>
              &nbsp;e converse com um dos nossos vendedores.
            </Typography>
          </div>
        )}
      </div>
    </Card>
  );
};
