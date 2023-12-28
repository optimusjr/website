"use client";

import { AnimatePresence, m, MotionProps } from "framer-motion";

import useFormContext from "./FormContext/useFormContext";
import styles from "./formPage.module.scss";
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
    <fieldset className={styles.formPage}>
      <AnimatePresence initial={false} mode="popLayout">
        <m.legend
          className={styles.pageTitle}
          // necessário para forçar o componente a renderizar quando o texto mudar, e assim executar a animação
          key={page.title}
          {...animation}
        >
          {page.title}
        </m.legend>
      </AnimatePresence>

      {page.description && (
        <m.p
          className={styles.pageDescription}
          // necessário para forçar o componente a renderizar quando o texto mudar, e assim executar a animação
          key={page.description}
          {...animation}
        >
          {page.description}
        </m.p>
      )}

      {page.questions && (
        <div className={styles.questions}>
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
