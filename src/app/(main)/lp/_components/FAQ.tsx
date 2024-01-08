import Accordion from "@/components/Accordion";
import Screen from "@/components/Screen";
import Title from "@/components/Title";
import Typography from "@/components/Typography";

interface Props {
  questions: {
    question: string;
    answer: string;
  }[];
}

const FAQ = ({ questions }: Props) => (
  <Screen bgColor="white" className="items-start md:grid md:grid-cols-2">
    <Title
      className={{ container: "p-4 sm:p-8 md:sticky md:top-0 md:p-16 md:text-left" }}
      strap="Perguntas frequentes"
    >
      Você tem alguma dúvida?
    </Title>

    <Accordion className="p-4 sm:p-8 md:p-16">
      {questions.map((question, key) => (
        <Accordion.item key={key} title={question.question}>
          <Typography>{question.answer}</Typography>
        </Accordion.item>
      ))}
    </Accordion>
  </Screen>
);

export default FAQ;
