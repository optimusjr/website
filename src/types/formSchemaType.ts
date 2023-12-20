/*
Este arquivo define as estruturas de esquemas de formulário para facilitar a criação
e validação de formulários. Cada esquema é composto por páginas, que contêm
perguntas, e estas podem ser de dois tipos principais: TextQuestion e SelectQuestion.

Explicação das propriedades comuns:
1. label: Texto breve com a pergunta ou elemento.
2. name: Texto não visível para o usuário, apenas para quem receberá o formulário.
Deve ser único para cada pergunta/opção.
3: required: Indica se a resposta é obrigatória
4. Icon: Ícone, deve ser importado da pasta src/components/icons

As propriedades marcadas com ponto de interrogação (?) são opcionais.
*/

// Opção para pergunta do tipo multiplica escolha. Cada opção pode ter esses elementos
export interface Option {
  label: string;
  name: string;
  icon?: () => React.ReactElement;
}

export interface TextQuestion {
  label: string;
  name: string;
  type: "text" | "email" | "tel"; // Tipo de entrada de texto
  required?: boolean;
  multiline?: boolean; // Permite entrada de múltiplas linhas
  placeholder?: string; // Exemplo de resposta valida
}

export interface SelectQuestion {
  label?: string;
  // Tipo de pergunta de múltipla escolha
  // Por enquanto, apenas é permitido a opção checkbox,
  // mas essa opção serve caso no futuro sejam adicionadas perguntas com radio buttons
  type: "checkbox";
  required?: boolean;
  options: Option[];
}

export type Question = TextQuestion | SelectQuestion;

// Condição da regra
// Caso a resposta da pergunta com o 'name' igual ao valor de variable
// seja igual ao valor de be, a condição será verdadeira
interface Condition {
  // Nome da variável (correspondente à propriedade 'name' em outras interfaces)
  // que será avaliada.
  variable: string;
  be: boolean; // Valor que a variável deve ter para satisfazer a condição
}

interface Rule {
  effect: "SHOW" | "HIDE"; // Efeito da regra (mostrar ou esconder)
  condition: Condition; // Condição que determina quando aplicar a regra
}

export interface Page {
  title: string;
  description?: string;
  rule?: Rule; // Regra que controla a visibilidade da página
  questions?: Question[];
}

export interface Schema {
  title: string;
  pages: Page[];
}

export interface Answers {
  [key: string]: string | boolean;
}
