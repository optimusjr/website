"use client";

import MultiPageForm from "@/components/MultiPageForm";
import Screen from "@/components/Screen";
import Title from "@/components/Title";
import quoteFormSchema from "@/quoteFormSchema";

const Quote = () => {
  return (
    <Screen bgColor="secondary" height="firstFull" gap padding>
      <Title>{quoteFormSchema.title}</Title>

      <MultiPageForm schema={quoteFormSchema} />
    </Screen>
  );
};

export default Quote;
