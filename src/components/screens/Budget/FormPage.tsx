import { ChangeEvent, ComponentProps, Dispatch, SetStateAction } from "react";

import { TextArea, TextField } from "@/components/common/TextField";
import type { FormAnswers, FormPage } from "@/types/formSchemaType";

import styles from "./FormPage.module.scss";

interface Props {
  data: FormAnswers;
  setData: Dispatch<SetStateAction<FormAnswers>>;
  page: FormPage;
}

const FormPage = ({ page, data, setData }: Props) => {
  return (
    <div className={styles.formPage}>
      <h2>{page.title}</h2>
      {page.description && <p>{page.description}</p>}

      <div className={styles.questions}>
        {page.questions &&
          page.questions.map((question, key) => {
            if (question.type === "text" || question.type === "email" || question.type === "tel") {
              const props: ComponentProps<typeof TextField> & ComponentProps<typeof TextArea> = {
                key: key,
                label: question.label,
                name: question.name,
                placeholder: question.placeholder,
                required: question.required,
                type: question.type,

                value: data[question.name] as string,
                onChange: (e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) =>
                  setData((data) => {
                    data[question.name] = e.target.value;
                    return data;
                  }),
              };

              return question.multiline ? <TextArea {...props} /> : <TextField {...props} />;
            }
          })}
      </div>
    </div>
  );
};

export default FormPage;
