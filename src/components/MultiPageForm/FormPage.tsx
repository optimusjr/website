"use client";

import { AnimatePresence, m, MotionProps } from "framer-motion";

import useFormContext from "./FormContext/useFormContext";
import Question from "./Question";

const FormPage = () => {
  const { currentPage } = useFormContext();

  const page = currentPage.page;

  const animation = {
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    initial: { opacity: 0 },
  } as MotionProps;

  return (
    <fieldset className="flex flex-col gap-4">
      <AnimatePresence initial={false} mode="popLayout">
        <m.legend
          className="text-3xl font-bold text-primary-800"
          // necessário para forçar o componente a renderizar quando o texto mudar, e assim executar a animação
          key={page.title}
          {...animation}
        >
          {page.title}
        </m.legend>

        {page.description && (
          <m.p
            className="text-xl"
            // necessário para forçar o componente a renderizar quando o texto mudar, e assim executar a animação
            key={page.description}
            {...animation}
          >
            {page.description}
          </m.p>
        )}
      </AnimatePresence>

      {page.questions && (
        <div className="mb-8 flex flex-col gap-8">
          {page.questions.map((question) => (
            <m.div {...animation} key={question.name}>
              <Question question={question} />
            </m.div>
          ))}
        </div>
      )}
    </fieldset>
  );
};
export default FormPage;
