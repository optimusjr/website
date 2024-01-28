import Accordion from "@/components/others/Accordion";
import Screen from "@/components/others/Screen";
import type { PropsWithChildren } from "@/utils/types/PropsWithChildren";

const FAQ = ({ children }: PropsWithChildren) => (
  <Screen bgColor="neutral" className="md:grid md:grid-cols-2 md:items-start" gap padding>
    <Screen.title
      className={{ container: "top-4 sm:top-8 md:sticky md:top-16 md:text-left" }}
      strap="Perguntas frequentes"
    >
      Você tem alguma dúvida?
    </Screen.title>

    <Accordion>{children}</Accordion>
  </Screen>
);

interface Props {
  question: string;
  answer: string;
}

FAQ.question = ({ question, answer }: Props) => (
  <Accordion.item title={question}>
    <p className="text-lg/tight">{answer}</p>
  </Accordion.item>
);

export default FAQ;
