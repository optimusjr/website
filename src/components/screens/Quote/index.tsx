import MultiPageForm from "@/components/common/MultiPageForm";
import Screen from "@/components/common/Screen";
import Typography from "@/components/common/Typography";
import quoteFormSchema from "@/quoteFormSchema";

import styles from "./quote.module.scss";

const Quote = () => {
  return (
    <Screen backgroundColor="secondary" firstFullHeight>
      <Typography className={styles.title} component="h1" variant="h2">
        {quoteFormSchema.title}
      </Typography>

      <MultiPageForm schema={quoteFormSchema} />
    </Screen>
  );
};

export default Quote;
