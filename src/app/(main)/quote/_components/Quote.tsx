"use client";

import MultiPageForm from "@/components/others/MultiPageForm";
import { Screen, ScreenTitle } from "@/components/others/Screen";
import quoteFormSchema from "@/quoteFormSchema";

const Quote = () => (
  <Screen bgColor="secondary" height="firstFull" gap padding>
    <ScreenTitle>{quoteFormSchema.title}</ScreenTitle>

    <MultiPageForm schema={quoteFormSchema} />
  </Screen>
);

export default Quote;
