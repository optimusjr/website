import { ChangeEvent, ComponentProps, startTransition, useState } from "react";

import Checkbox from "@/components/common/Checkbox";
import { TextArea, TextField } from "@/components/common/TextField";
import useMultiForm from "@/hooks/useMultiForm";
import type * as Form from "@/types/formSchemaType";

import styles from "./question.module.scss";

const Question = ({ question }: { question: Form.Question }) => {
  if (question.type === "text" || question.type === "email" || question.type === "tel") {
    return <TextQuestion question={question} />;
  } else if (question.type === "checkbox") {
    return <SelectQuestion question={question} />;
  }
};

export default Question;

const TextQuestion = ({ question }: { question: Form.TextQuestion }) => {
  const { formData, setFormData } = useMultiForm();
  const [answer, setAnswer] = useState(
    typeof formData[question.name] === "string" ? (formData[question.name] as string) : ""
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement> & ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);

    startTransition(() => {
      setFormData({
        ...formData,
        [question.name]: e.target.value,
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
      {question.options.map((option) => (
        <SelectQuestionOption key={option.name} option={option} />
      ))}
    </div>
  </fieldset>
);

const SelectQuestionOption = ({ option }: { option: Form.Option }) => {
  const { formData, setFormData } = useMultiForm();
  const [isChecked, setChecked] = useState(
    typeof formData[option.name] === "boolean" ? (formData[option.name] as boolean) : false
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);

    startTransition(() => {
      setFormData({
        ...formData,
        [option.name]: e.target.checked,
      });
    });
  };

  return (
    <Checkbox
      Icon={option.icon}
      checked={isChecked}
      label={option.label}
      name={option.name}
      onChange={handleChange}
    />
  );
};
