export default {
  SITE_URL: "https://optimusjr.com.br",
  QUOTE_URL: "/quote",
  IS_PROSEL: false,
  PROSEL_FORM_URL: "https://forms.gle/YYviJ7yPabRXaSZn8",

  EMAIL: "contato@optimusjr.com.br",
  PHONE_NUMBER: "(71) 99610-0916",
  WHATSAPP: "+55 71 9610-0916",

  WHATSAPP_LINK: "https://wa.me/557196100916",
  INSTAGRAM: "https://www.instagram.com/optimusjrautomacao/",
  LINKEDIN: "https://br.linkedin.com/company/optimusjr",
  FACEBOOK: "https://pt-br.facebook.com/OptimusJrAutomacao/",

  /**
   * Ao enviar um formulário pelo site, a primeira tentativa será enviar as respostas
   * para o email informado no campo "EMAIL" desse arquivo, utilizando o serviço
   * Form Submit (https://formsubmit.co/).
   *
   * Entretanto, caso o Form Submit falhe, antes de mostrar algum erro, tentaremos enviar
   * novamente, mas agora utilizando o serviço Static Forms (https://www.staticforms.xyz/).
   * Mas ele não permite utilizar o email diretamente, como o Form Submit faz. E sim, pede
   * uma chave de acesso. Mas não se preocupe, esta chave não é uma senha, ou segredo.
   * É apenas uma forma de ocultar o endereço de email.
   */
  STATIC_FORMS_ACCESS_KEY: "b7d363fa-7422-4f28-8e6a-e3d08e276a21",
};
