import Accordion from "@/components/others/Accordion";
import Screen from "@/components/others/Screen";

interface Props {
  questions: {
    question: string;
    answer: string;
  }[];
}

const FAQ = ({ questions }: Props) => (
  <Screen bgColor="neutral" className="md:grid md:grid-cols-2 md:items-start" gap padding>
    <Screen.title
      className={{ container: "top-4 sm:top-8 md:sticky md:top-16 md:text-left" }}
      strap="Perguntas frequentes"
    >
      Você tem alguma dúvida?
    </Screen.title>

    <Accordion>
      {questions.map((question, key) => (
        <Accordion.item key={key} title={question.question}>
          <p className="text-lg/tight">{question.answer}</p>
        </Accordion.item>
      ))}
    </Accordion>
  </Screen>
);

export default FAQ;
