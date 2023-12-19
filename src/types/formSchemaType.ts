export interface Option {
  label: string;
  name: string;
  icon?: () => React.ReactElement;
}

interface GenericQuestion {
  label: string;
  name: string;
}

export interface TextQuestion extends GenericQuestion {
  type: "text" | "email" | "tel";
  required?: boolean;
  multiline?: boolean;
  placeholder?: string;
}

export interface SelectQuestion extends GenericQuestion {
  type: "checkbox";
  options: Option[];
}

export type Question = TextQuestion | SelectQuestion;

interface Condition {
  variable: string;
  be: boolean;
}

interface Rule {
  effect: "SHOW" | "HIDE";
  condition: Condition;
}

export interface Page {
  title: string;
  description?: string;
  rule?: Rule;
  questions?: Question[];
}

export interface Schema {
  title: string;
  pages: Page[];
}

export interface Answers {
  [key: string]: string | boolean;
}

export enum PAGE_POSITION {
  FIRST,
  MIDDLE,
  LAST,
}
