interface Option {
  label: string;
  name: string;
  icon?: () => React.ReactElement;
}

interface GenericQuestion {
  label: string;
  name: string;
  required?: boolean;
}

interface TextQuestion extends GenericQuestion {
  type: "text" | "email" | "tel";
  multiline?: boolean;
  placeholder?: string;
}

interface SelectQuestion extends GenericQuestion {
  type: "checkbox";
  options?: Option[];
}

type Question = TextQuestion | SelectQuestion;

interface Condition {
  variable: string;
  be: boolean;
}

interface Rule {
  effect: "SHOW";
  condition: Condition;
}

interface FormPage {
  title: string;
  description?: string;
  rule?: Rule;
  questions?: Question[];
}

interface FormSchema {
  title: string;
  pages: FormPage[];
}

interface FormAnswers {
  [key: string]: string | boolean;
}

export type { FormAnswers, FormPage, FormSchema };
