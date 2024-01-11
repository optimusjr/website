"use client";

import AnimateHeight from "@/components/AnimateHeight";
import Card from "@/components/Card";

import { MultiFormProvider } from "./FormContext";
import useFormContext from "./FormContext/useFormContext";
import FormPage from "./FormPage";
import type * as Form from "./formSchemaType";
import PaginationControls from "./PaginationControls";

interface Props {
  schema: Form.Schema;
}

const MultiPageForm = ({ schema }: Props) => {
  return (
    <MultiFormProvider formSchema={schema}>
      <FormCard />
    </MultiFormProvider>
  );
};

export default MultiPageForm;

const FormCard = () => {
  const { goToNextPage } = useFormContext();

  return (
    <Card
      onSubmit={(e: React.FormEvent) => {
        e.preventDefault();
        goToNextPage();
      }}
      as="form"
      bgColor="white"
      className="w-full max-w-[768px] p-8"
    >
      <AnimateHeight>
        <FormPage />
      </AnimateHeight>

      <PaginationControls />
    </Card>
  );
};
