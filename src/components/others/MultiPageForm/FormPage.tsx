"use client";

import { AnimatePresence, m } from "framer-motion";

import Alert from "@/components/ui/Alert";
import Link from "@/components/ui/Link";
import config from "@/config";
import fadeSwap from "@/utils/animations/fadeSwap";

import useFormContext from "./FormContext/useFormContext";
import Question from "./Question";

const FormPage = () => {
  const { currentPage } = useFormContext();
  const page = currentPage.page;

  return (
    <fieldset className="flex flex-col pb-8">
      <PageTitle />

      {page.questions && (
        <div className="flex flex-col gap-8">
          {page.questions.map((question) => (
            <m.div {...fadeSwap} key={question.name}>
              <Question question={question} />
            </m.div>
          ))}
        </div>
      )}

      <UnknownErrorAlert />
    </fieldset>
  );
};

const PageTitle = () => {
  const { currentPage } = useFormContext();
  const page = currentPage.page;

  return (
    <div className="mb-4">
      <AnimatePresence initial={false} mode="popLayout">
        <m.legend
          className="text-3xl font-bold text-primary-800"
          // necessário para forçar o componente a renderizar quando o texto mudar, e assim executar a animação
          key={page.title}
          {...fadeSwap}
        >
          {page.title}
        </m.legend>

        {page.description && (
          <m.p
            className="text-xl"
            // necessário para forçar o componente a renderizar quando o texto mudar, e assim executar a animação
            key={page.description}
            {...fadeSwap}
          >
            {page.description}
          </m.p>
        )}
      </AnimatePresence>
    </div>
  );
};

const UnknownErrorAlert = () => {
  const { hasSubmissionError } = useFormContext();

  return (
    <Alert className="mt-4" severity="error" show={hasSubmissionError}>
      <p>Ops! Algo deu errado. Não se preocupe, não é culpa sua. Por favor, tente novamente.</p>
      <p>
        Se o problema persistir, nos avise&nbsp;
        <Link className="text-base" href={config.WHATSAPP_LINK}>
          clicando&nbsp;aqui
        </Link>
        .
      </p>
    </Alert>
  );
};

export default FormPage;
