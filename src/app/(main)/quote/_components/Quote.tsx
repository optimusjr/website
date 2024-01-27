"use client";

import MultiPageForm from "@/components/others/MultiPageForm";
import Screen from "@/components/others/Screen";
import quoteFormSchema from "@/quoteFormSchema";

const Quote = () => (
  <Screen bgColor="secondary" height="firstFull" gap padding>
    <Screen.title>{quoteFormSchema.title}</Screen.title>

    <MultiPageForm schema={quoteFormSchema} />
  </Screen>
);

export default Quote;
