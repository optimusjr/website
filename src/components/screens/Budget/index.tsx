import { useState } from "react";

import budgetFormSchema from "@/budgetFormSchema";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import Screen from "@/components/common/Screen";
import Typography from "@/components/common/Typography";
import { FormDataProvider } from "@/context/FormDataContext";

import styles from "./budget.module.scss";
import FormPage from "./FormPage";

const Budget = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <FormDataProvider>
      <Screen backgroundColor="secondary" className={styles.budget} firstFullHeight>
        <Typography component="h1" variant="h2">
          {budgetFormSchema.title}
        </Typography>

        <Card
          onSubmit={(e: React.FormEvent) => {
            e.preventDefault();
          }}
          as="form"
          className={styles.budgetForm}
        >
          <FormPage page={budgetFormSchema.pages[currentPage]} />

          <div className={styles.controlButtons}>
            <Button
              onClick={() => {
                setCurrentPage(currentPage + 1);
              }}
            >
              {currentPage === 0 ? "Vamos lá!" : "Próxima Página"}
            </Button>

            {currentPage !== 0 && (
              <Button
                onClick={() => {
                  setCurrentPage(currentPage - 1);
                }}
              >
                Página Anterior
              </Button>
            )}
          </div>
        </Card>
      </Screen>
    </FormDataProvider>
  );
};

export default Budget;
