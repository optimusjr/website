// Opção para pergunta do tipo multiplica escolha. Cada opção pode ter esses elementos
export interface Option {
  /**
   * Texto da opção.
   */
  label: string;
  /**
   * Texto não visível para o usuário, apenas para quem receberá o formulário.
   *
   * Deve ser único para cada pergunta/opção em todo o formulário.
   */
  name: string;
  /**
   * Ícone, deve ser importado da pasta src/components/icons
   */
  icon?: React.ComponentType;
}

export interface TextQuestion {
  /**
   * Texto da pergunta
   */
  label: string;
  /**
   * Texto não visível para o usuário, apenas para quem receberá o formulário.
   *
   * Deve ser único para cada pergunta/opção em todo o formulário.
   */
  name: string;
  /**
   * Tipo de entrada de texto
   */
  type: "text" | "email" | "tel" | "number";
  /**
   * Indica se a resposta é obrigatória. Não permite o usuário prosseguir sem responder
   */
  required?: boolean;
  /**
   * Caso verdadeiro, permite entrada de múltiplas linhas
   */
  multiline?: boolean;
  /**
   * Insira um exemplo de resposta valida
   */
  placeholder?: string;
  /**
   * Permite ao navegador sugerir ou completar valores automaticamente informando o tipo de informação.
   * Saiba mais em {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete}
   */
  autocomplete?: HTMLInputElement["autocomplete"];
}

export interface SelectQuestion {
  /**
   * Legenda para o grupo de opções
   */
  label?: string;
  /**
   * Texto não visível para o usuário, apenas para quem receberá o formulário.
   *
   * Deve ser único para cada pergunta/opção em todo o formulário.
   */
  name: string;
  /**
   * Tipo de pergunta de múltipla escolha.
   *
   * Por enquanto, apenas é permitido a opção checkbox,
   * mas essa opção serve caso no futuro sejam adicionadas perguntas com radio buttons
   */
  type: "checkbox";
  /**
   * Indica se a resposta é obrigatória. Não permite o usuário prosseguir sem responder
   */
  required?: boolean;
  options: Option[];
}

export type Question = TextQuestion | SelectQuestion;

interface Condition {
  /**
   * Nome da variável (correspondente à propriedade 'name' em outras interfaces)
   * que será avaliada.
   */
  variable: string;
  /**
   * Valor que a variável deve ter para satisfazer a condição
   */
  be: boolean | string;
}

interface Rule {
  /**
   * Efeito da regra (mostrar ou esconder)
   */
  effect: "SHOW" | "HIDE";
  /**
   * Condição que determina quando aplicar a regra
   *
   * Caso a resposta da pergunta com o 'name' igual ao valor de variable
   * seja igual ao valor de be, a condição será verdadeira.
   */
  condition: Condition;
}

export interface Page {
  title: string;
  description?: string;
  /**
   * Regra que controla a visibilidade da página
   */
  rule?: Rule;
  questions?: Question[];
}

/**
 * Define as estruturas de esquemas de formulário para facilitar a criação
 * e validação de formulários. Cada esquema é composto por páginas, que contêm
 * perguntas, e estas podem ser de dois tipos principais: {@link TextQuestion} e {@link SelectQuestion}.
 */
export interface Schema {
  title: string;
  pages: Page[];
}

export interface Answers {
  [key: string]: string | boolean;
}
