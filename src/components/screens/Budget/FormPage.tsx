import TextField from "@/components/common/TextField";
import type { FormAnswers, FormPage } from "@/types/formSchemaType";

import styles from "./FormPage.module.scss";

interface Props {
  data: FormAnswers;
  setData: (newData: FormAnswers) => void;
  page: FormPage;
}

const FormPage = ({ page }: Props) => {
  return (
    <div className={styles.formPage}>
      <h2>{page.title}</h2>
      {page.description && <p>{page.description}</p>}

      <div className={styles.questions}>
        {page.questions &&
          page.questions.map((question, key) => {
            if (question.type === "text" || question.type === "email" || question.type === "tel") {
              return (
                <TextField
                  key={key}
                  label={question.label}
                  name={question.name}
                  placeholder={question.placeholder}
                  required={question.required}
                  type={question.type}
                />
              );
            }
          })}
      </div>
    </div>
  );
};

export default FormPage;
