import type * as Form from "../formSchemaType";
import SelectQuestion from "./SelectQuestion";
import TextQuestion from "./TextQuestion";

const Question = ({ question }: { question: Form.Question }) => {
  if (
    question.type === "text" ||
    question.type === "email" ||
    question.type === "tel" ||
    question.type === "number"
  ) {
    return <TextQuestion question={question} />;
  }

  if (question.type === "checkbox") {
    return <SelectQuestion question={question} />;
  }
};

export default Question;
