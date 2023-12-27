"use client";

import { m, MotionProps } from "framer-motion";

import Alert from "@/components/common/Alert";
import AnimateHeight from "@/components/common/AnimateHeight";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import Link from "@/components/common/Link";
import Typography from "@/components/common/Typography";
import LoadingIcon from "@/components/icons/Loading";
import SendIcon from "@/components/icons/Send";
import config from "@/config";
import type * as Form from "@/types/formSchemaType";

import { MultiFormProvider } from "./FormContext";
import { PAGE_POSITION } from "./FormContext/helpers";
import useFormContext from "./FormContext/useFormContext";
import FormPage from "./FormPage";
import styles from "./multiPageForm.module.scss";

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
  const { goToNextPage, goToPreviousPage, currentPage, hasSubmissionError, isLoading } =
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
      className={styles.card}
    >
      <AnimateHeight>
        <FormPage />
      </AnimateHeight>

      <Alert severity="error" show={hasSubmissionError}>
        Ops! Algo deu errado. Não se preocupe, não é culpa sua. Por favor, tente novamente.
        <p>
          Se o problema persistir, nos avise&nbsp;
          <Link href={`https://wa.me/${config.WHATSAPP.replace(/[^0-9]/g, "")}`}>
            clicando&nbsp;aqui
          </Link>
          .
        </p>
      </Alert>

      <div className={styles.controlButtons}>
        <Button>
          {currentPage.position === PAGE_POSITION.FIRST ? (
            <m.div {...animation}>Vamos lá!</m.div>
          ) : currentPage.position === PAGE_POSITION.LAST && !isLoading ? (
            <>
              <SendIcon as={m.svg} {...animation} /> <m.div {...animation}>Enviar</m.div>
            </>
          ) : currentPage.position === PAGE_POSITION.LAST && isLoading ? (
            <>
              <m.div {...animation} style={{ lineHeight: "0" }}>
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

        {currentPage.position !== PAGE_POSITION.FIRST ? (
          <Button onClick={goToPreviousPage} type="button" variant="outlined">
            Página anterior
          </Button>
        ) : (
          <div className={styles.skip}>
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
