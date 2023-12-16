import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

import type * as Form from "@/types/formSchemaType";

const MultiFormContext = createContext({
  formSchema: {} as Form.Schema,
  formData: {} as Form.Answers,
  setFormData: (() => ({})) as Dispatch<SetStateAction<Form.Answers>>,

  currentPage: {
    page: {} as Form.Page,
    index: 0,
  },
  goToNextPage: () => {
    /* do nothing */
  },
  goToPreviousPage: () => {
    /* do nothing */
  },
});
export { MultiFormContext };

interface Props {
  children: ReactNode;
  formSchema: Form.Schema;
}

export const MultiFormProvider = ({ children, formSchema }: Props) => {
  const [formData, setFormData] = useState({} as Form.Answers);
  const [index, setIndex] = useState(0);

  const goToNextPage = () => {
    if (index < formSchema.pages.length) {
      setIndex(index + 1);
    }
    /*
    const updatePage = (page: number) => {
      if (page >= 0 && page < quoteFormSchema.pages.length) {
        const rule = quoteFormSchema.pages[page].rule;

        if (rule === undefined) {
          setCurrentPageIndex(page);
        }else (rule.condition.variable === rule.condition.be){
        }
      }
      */
  };

  const goToPreviousPage = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const currentPage = {
    page: formSchema.pages[index],
    index,
  };

  return (
    <MultiFormContext.Provider
      value={{
        formSchema,
        formData,
        setFormData,
        currentPage,
        goToNextPage,
        goToPreviousPage,
      }}
    >
      {children}
    </MultiFormContext.Provider>
  );
};
