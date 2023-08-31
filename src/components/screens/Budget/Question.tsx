import { ChangeEvent, ComponentProps, useState, useTransition } from "react";

import Checkbox from "@/components/common/Checkbox";
import { TextArea, TextField } from "@/components/common/TextField";
import useFormData from "@/hooks/useFormData";
import type * as Form from "@/types/formSchemaType";

import styles from "./FormPage.module.scss";

const Question = ({ question }: { question: Form.Question }) => {
  if (question.type === "text" || question.type === "email" || question.type === "tel") {
    return <TextQuestion question={question} />;
  } else if (question.type === "checkbox") {
    return <SelectQuestion question={question} />;
  }
};

const TextQuestion = ({ question }: { question: Form.TextQuestion }) => {
  const [, startTransition] = useTransition();
  const { formData, setFormData } = useFormData();
  const [answer, setAnswer] = useState(
    typeof formData[question.name] === "string" ? (formData[question.name] as string) : ""
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement> & ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);

    startTransition(() => {
      setFormData((data) => {
        data[question.name] = e.target.value;
        return data;
      });
    });
  };

  const props: ComponentProps<typeof TextField> & ComponentProps<typeof TextArea> = {
    label: question.label,
    name: question.name,
    placeholder: question.placeholder,
    required: question.required,
    type: question.type,
    value: answer,
    onChange: handleChange,
  };

  return question.multiline ? <TextArea {...props} /> : <TextField {...props} />;
};

const SelectQuestion = ({ question }: { question: Form.SelectQuestion }) => (
  <fieldset className={styles.checkboxQuestion}>
    <legend>{question.label}</legend>
    <div className={styles.optionsContainer}>
      {question.options.map((option, key) => (
        <SelectQuestionOption key={key} option={option} />
      ))}
    </div>
  </fieldset>
);

const SelectQuestionOption = ({ option }: { option: Form.Option }) => {
  const [, startTransition] = useTransition();
  const { formData, setFormData } = useFormData();
  const [isChecked, setChecked] = useState(
    typeof formData[option.name] === "boolean" ? (formData[option.name] as boolean) : false
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);

    startTransition(() => {
      setFormData((data) => {
        data[option.name] = e.target.checked;
        return data;
      });
    });
  };

  return (
    <Checkbox checked={isChecked} label={option.label} name={option.name} onChange={handleChange} />
  );
};

export default Question;
