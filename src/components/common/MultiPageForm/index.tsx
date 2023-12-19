import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import { MultiFormProvider } from "@/context/MultiFormContext";
import useMultiForm from "@/hooks/useMultiForm";
import * as Form from "@/types/formSchemaType";
import { PAGE_POSITION } from "@/types/formSchemaType";

import FormPage from "./FormPage";
import styles from "./multiPageForm.module.scss";

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
  const { goToNextPage, goToPreviousPage, currentPage } = useMultiForm();

  return (
    <Card
      onSubmit={(e: React.FormEvent) => {
        e.preventDefault();
        goToNextPage();
      }}
      as="form"
      className={styles.card}
    >
      <FormPage />

      <div className={styles.controlButtons}>
        <Button>
          {currentPage.position === PAGE_POSITION.FIRST
            ? "Vamos lá!"
            : currentPage.position === PAGE_POSITION.LAST
            ? "Enviar"
            : "Próxima página"}
        </Button>

        {currentPage.position !== PAGE_POSITION.FIRST && (
          <Button onClick={goToPreviousPage} type="button" variant="outlined">
            Página anterior
          </Button>
        )}
      </div>
    </Card>
  );
};
