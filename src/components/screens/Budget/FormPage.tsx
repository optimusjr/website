import Question from "@/components/screens/Budget/Question";
import type * as Form from "@/types/formSchemaType";

import styles from "./FormPage.module.scss";

interface Props {
  page: Form.Page;
}

const FormPage = ({ page }: Props) => (
  <fieldset className={styles.formPage}>
    <legend className={styles.pageTitle}>{page.title}</legend>
    {page.description && <p className={styles.pageDescription}>{page.description}</p>}

    {page.questions && (
      <div className={styles.questions}>
        {page.questions.map((question, key) => (
          <Question key={key} question={question} />
        ))}
      </div>
    )}
  </fieldset>
);
export default FormPage;
