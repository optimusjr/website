"use client";

import MultiPageForm from "@/components/MultiPageForm";
import Screen from "@/components/Screen";
import Typography from "@/components/Typography";
import quoteFormSchema from "@/quoteFormSchema";

const Quote = () => {
  return (
    <Screen backgroundColor="secondary" height="firstFull" gap padding>
      <Typography component="h1" variant="h2">
        {quoteFormSchema.title}
      </Typography>

      <MultiPageForm schema={quoteFormSchema} />
    </Screen>
  );
};

export default Quote;
