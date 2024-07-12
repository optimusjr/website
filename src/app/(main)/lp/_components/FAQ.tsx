import { Accordion, AccordionItem } from "@/components/others/Accordion";
import { Screen, ScreenTitle } from "@/components/others/Screen";
import type { PropsWithChildren } from "@/utils/types/PropsWithChildren";

const FAQ = ({ children }: PropsWithChildren) => (
  <Screen bgColor="neutral" className="md:grid md:grid-cols-2 md:items-start" gap padding>
    <ScreenTitle
      className={{ wrapper: "top-4 sm:top-8 md:sticky md:top-16 md:text-left" }}
      strap="Perguntas frequentes"
    >
      Você tem alguma dúvida?
    </ScreenTitle>

    <Accordion>{children}</Accordion>
  </Screen>
);

interface Props extends PropsWithChildren {
  question: string;
}

const FAQQuestion = ({ question, children }: Props) => (
  <AccordionItem title={question}>
    <p>{children}</p>
  </AccordionItem>
);

export { FAQ, FAQQuestion };
export default FAQ;
