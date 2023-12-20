import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import useLocalStorage from "@/hooks/useLocalStorage";
import type * as Form from "@/types/formSchemaType";
import { PAGE_POSITION } from "@/types/formSchemaType";

import { getNextValidPageIndex, getPreviousValidPageIndex, submit } from "./helpers";

interface Context {
  formSchema: Form.Schema;
  formData: Form.Answers;
  setFormData: Dispatch<SetStateAction<Form.Answers>>;
  currentPage: {
    page: Form.Page;
    position: PAGE_POSITION;
    index: number;
  };
  goToNextPage: () => void;
  goToPreviousPage: () => void;
  isProgressBlocked: boolean;
  setProgressBlocked: Dispatch<SetStateAction<boolean>>;
  showProgressBlocked: boolean;
}

const MultiFormContext = createContext({} as Context);
export { MultiFormContext };

interface Props {
  children: ReactNode;
  formSchema: Form.Schema;
}

export const MultiFormProvider = ({ children, formSchema }: Props) => {
  const [formData, setFormData] = useLocalStorage<Form.Answers>(formSchema.title, {});
  const [index, setIndex] = useState(0);

  const nextValidPageIndex = getNextValidPageIndex(index, formSchema, formData);
  const previousValidPageIndex = getPreviousValidPageIndex(index, formSchema, formData);

  const [isProgressBlocked, setProgressBlocked] = useState(false);
  const [showProgressBlocked, setShowProgressBlocked] = useState(false);

  const goToNextPage = () => {
    if (isProgressBlocked) {
      setShowProgressBlocked(true);
      return;
    } else {
      setShowProgressBlocked(false);
    }

    if (nextValidPageIndex === undefined) {
      submit();
    } else {
      setIndex(nextValidPageIndex);
    }
  };

  const goToPreviousPage = () => {
    setIndex(previousValidPageIndex);
  };

  useEffect(() => {
    if (!isProgressBlocked) {
      setShowProgressBlocked(false);
    }
  }, [isProgressBlocked]);

  return (
    <MultiFormContext.Provider
      value={{
        formSchema,
        formData,
        setFormData,
        currentPage: {
          page: formSchema.pages[index],
          position:
            nextValidPageIndex === undefined
              ? PAGE_POSITION.LAST
              : index === 0
              ? PAGE_POSITION.FIRST
              : PAGE_POSITION.MIDDLE,
          index,
        },
        goToNextPage,
        goToPreviousPage,
        isProgressBlocked,
        setProgressBlocked,
        showProgressBlocked,
      }}
    >
      {children}
    </MultiFormContext.Provider>
  );
};

export default () => useContext(MultiFormContext);
