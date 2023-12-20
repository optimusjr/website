import type * as Form from "@/types/formSchemaType";

import SelectQuestion from "./SelectQuestion";
import TextQuestion from "./TextQuestion";

const Question = ({ question }: { question: Form.Question }) => {
  if (question.type === "text" || question.type === "email" || question.type === "tel") {
    return <TextQuestion question={question} />;
  } else if (question.type === "checkbox") {
    return <SelectQuestion question={question} />;
  }
};

export default Question;
