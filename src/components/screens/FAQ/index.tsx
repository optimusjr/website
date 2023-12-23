import { Accordion, AccordionContainer } from "@/components/common/Accordion";
import Screen from "@/components/common/Screen";
import Title from "@/components/common/Title";
import Typography from "@/components/common/Typography";

import styles from "./FAQ.module.scss";

interface Props {
  questions: {
    question: string;
    answer: string;
  }[];
}

const FAQ = ({ questions }: Props) => (
  <Screen backgroundColor="white" className={styles.screen}>
    <Title className={styles.title} strap="Perguntas frequentes">
      Você tem alguma dúvida?
    </Title>

    <AccordionContainer>
      {questions.map((question, key) => (
        <Accordion key={key} title={question.question}>
          <Typography>{question.answer}</Typography>
        </Accordion>
      ))}
    </AccordionContainer>
  </Screen>
);

export default FAQ;
