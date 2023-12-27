"use client";

import { ChangeEvent, startTransition, useEffect, useState } from "react";

import Alert from "@/components/common/Alert";
import Checkbox from "@/components/common/Checkbox";
import type * as Form from "@/types/formSchemaType";

import useFormContext from "../FormContext/useFormContext";
import styles from "./selectQuestion.module.scss";

const SelectQuestion = ({ question }: { question: Form.SelectQuestion }) => {
  const [isValid, setIsValid] = useState(true);
  const { formData, setProgressBlocked, showProgressBlocked } = useFormContext();

  useEffect(() => {
    if (question.required) {
      const isAtLeastOneOptionIsMarked = question.options.some((option) => formData[option.name]);

      if (isValid && !isAtLeastOneOptionIsMarked) {
        setIsValid(false);
        startTransition(() => {
          setProgressBlocked(true);
        });
      }

      if (!isValid && isAtLeastOneOptionIsMarked) {
        setIsValid(true);
        startTransition(() => {
          setProgressBlocked(false);
        });
      }
    }

    return () => {
      startTransition(() => {
        setProgressBlocked(false);
      });
    };
  }, [formData]);

  return (
    <fieldset className={styles.checkboxQuestion}>
      {question.label && <legend>{question.label}</legend>}

      <Alert className={styles.error} severity="error" show={!isValid && showProgressBlocked}>
        Por favor, escolha pelo menos um item.
      </Alert>

      <div className={styles.optionsContainer}>
        {question.options.map((option) => (
          <SelectQuestionOption key={option.name} option={option} />
        ))}
      </div>
    </fieldset>
  );
};

export default SelectQuestion;

const SelectQuestionOption = ({ option }: { option: Form.Option }) => {
  const { formData, setFormData } = useFormContext();
  const [isChecked, setChecked] = useState(
    typeof formData[option.name] === "boolean" ? (formData[option.name] as boolean) : false,
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
