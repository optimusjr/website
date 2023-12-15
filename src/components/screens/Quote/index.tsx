import { useState } from "react";

import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import Screen from "@/components/common/Screen";
import Typography from "@/components/common/Typography";
import { FormDataProvider } from "@/context/FormDataContext";
import quoteFormSchema from "@/quoteFormSchema";

import FormPage from "./FormPage";
import styles from "./quote.module.scss";

const Quote = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <FormDataProvider>
      <Screen backgroundColor="secondary" className={styles.quote} firstFullHeight>
        <Typography component="h1" variant="h2">
          {quoteFormSchema.title}
        </Typography>

        <Card
          onSubmit={(e: React.FormEvent) => {
            e.preventDefault();
            setCurrentPage(currentPage + 1);
          }}
          as="form"
          className={styles.quoteForm}
        >
          <FormPage page={quoteFormSchema.pages[currentPage]} />

          <div className={styles.controlButtons}>
            <Button>{currentPage === 0 ? "Vamos lá!" : "Próxima Página"}</Button>

            {currentPage !== 0 && (
              <Button
                onClick={() => {
                  setCurrentPage(currentPage - 1);
                }}
                type="button"
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

export default Quote;
