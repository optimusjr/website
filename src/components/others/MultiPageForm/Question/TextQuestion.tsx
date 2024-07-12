"use client";

import { ChangeEvent, ComponentProps, startTransition, useState } from "react";

import TextField from "@/components/ui/TextField";

import useFormContext from "../FormContext/useFormContext";
import type * as Form from "../formSchemaType";

const TextQuestion = ({ question }: { question: Form.TextQuestion }) => {
  const { formData, setFormData } = useFormContext();
  const [answer, setAnswer] = useState(
    typeof formData[question.name] === "string"
      ? (formData[question.name] as string)
      : question.type === "number"
        ? "1"
        : "",
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

  const props: ComponentProps<typeof TextField> = {
    label: question.label,
    name: question.name,
    placeholder: question.placeholder,
    required: question.required,
    autoComplete: question.autocomplete,
    type: question.type,
    multiline: question.multiline,
    value: answer,
    onChange: handleChange,
  };

  return <TextField {...props} />;
};

export default TextQuestion;
