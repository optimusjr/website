import useMultiForm from "@/hooks/useMultiForm";

import styles from "./formPage.module.scss";
import Question from "./Question";

const FormPage = () => {
  const { currentPage } = useMultiForm();

  const page = currentPage.page;

  return (
    <fieldset className={styles.formPage}>
      <legend className={styles.pageTitle}>{page.title}</legend>
      {page.description && <p className={styles.pageDescription}>{page.description}</p>}

      {page.questions && (
        <div className={styles.questions}>
          {page.questions.map((question) => (
            <Question key={question.name} question={question} />
          ))}
        </div>
      )}
    </fieldset>
  );
};
export default FormPage;
