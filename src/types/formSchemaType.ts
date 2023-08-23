interface Option {
  label: string;
  name: string;
  icon?: () => React.ReactElement;
}

interface Question {
  type: "text" | "email" | "tel" | "checkbox";
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;

  options?: Option[];
}

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
