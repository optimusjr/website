import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

import useLocalStorage from "@/hooks/useLocalStorage";
import type * as Form from "@/types/formSchemaType";
import { PAGE_POSITION } from "@/types/formSchemaType";

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

function isValidPage(page: Form.Page, formData: Form.Answers) {
  if (page.rule === undefined) {
    return true;
  }

  const conditionValue = formData[page.rule.condition.variable];
  if (conditionValue === undefined) {
    return false;
  }

  if (page.rule.effect === "SHOW") {
    return conditionValue === page.rule.condition.be;
  } else if (page.rule.effect === "HIDE") {
    return !(conditionValue === page.rule.condition.be);
  } else {
    return true;
  }
}

const getNextValidPageIndex = (
  currentIndex: number,
  formSchema: Form.Schema,
  formData: Form.Answers
): number | undefined => {
  let nextIndex = currentIndex + 1;

  while (
    nextIndex < formSchema.pages.length &&
    !isValidPage(formSchema.pages[nextIndex], formData)
  ) {
    nextIndex++;
  }

  return nextIndex < formSchema.pages.length ? nextIndex : undefined;
};

const getPreviousValidPageIndex = (
  currentIndex: number,
  formSchema: Form.Schema,
  formData: Form.Answers
): number => {
  let previousIndex = currentIndex - 1;

  while (previousIndex > 0 && !isValidPage(formSchema.pages[previousIndex], formData)) {
    previousIndex--;
  }

  return previousIndex;
};

function submit() {
  console.log("Function not implemented.");
}
