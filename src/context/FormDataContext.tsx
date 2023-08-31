import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

import type * as Form from "@/types/formSchemaType";

const FormDataContext = createContext({
  formData: {} as Form.Answers,
  setFormData: (() => ({})) as Dispatch<SetStateAction<Form.Answers>>,
});
export { FormDataContext };

interface Props {
  children: ReactNode;
}

export const FormDataProvider = ({ children }: Props) => {
  const [formData, setFormData] = useState({} as Form.Answers);

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};
