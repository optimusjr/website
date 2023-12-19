import SofaIcon from "@/components/icons/Sofa";
import type * as Form from "@/types/formSchemaType";

const quoteFormSchema: Form.Schema = {
  title: "Formulário de Orçamento",
  pages: [
    {
      title: "Bem-vindo(a) à OPTIMUS Jr.",
      description:
        "Olá, nossa equipe se sente extremamente honrada em poder ajudar, siga o formulário rápido e intuitivo para podemos apresentar um orçamento exclusivo referente ao seu projeto.",
    },
    {
      title: "Fale um pouco sobre você",
      description:
        "Precisamos de alguns dados, para efetuarmos a precificação do serviço e entrar em contato.",
      questions: [
        {
          type: "text",
          name: "nome",
          label: "Qual o seu nome?",
          placeholder: "John Smith",
          required: true,
        },
        {
          type: "email",
          name: "email",
          label: "Qual o seu email?",
          placeholder: "exemplo@optimusjr.com.br",
          required: true,
        },
        {
          type: "tel",
          name: "telefone",
          label: "Qual o seu número de telefone?",
          placeholder: "71 98765-4321",
          required: true,
        },
        {
          type: "text",
          name: "endereço",
          label: "Qual seu endereço?",
          placeholder: "Rua Prof. Aristides Novis nº 02 Federação",
          required: true,
        },
        {
          type: "text",
          name: "CEP",
          label: "Qual o seu CEP?",
          placeholder: "40210-630",
          required: true,
        },
      ],
    },
    {
      title: "Conta para nós quais serviços lhe interessaram no momento",
      description: "Quais dos nossos serviços você tem interesse?",
      questions: [
        {
          type: "checkbox",
          label: "Selecione os serviços:",
          name: "serviços",
          options: [
            {
              label: "Controle de Iluminação",
              name: "iluminação",
              icon: SofaIcon,
            },
            {
              label: "Automação de Tomadas",
              name: "tomadas",
              icon: SofaIcon,
            },
            {
              label: "Controle de dispositivos",
              name: "dispositivos",
              icon: SofaIcon,
            },
            {
              label: "Automação de Cortinas",
              name: "cortinas",
              icon: SofaIcon,
            },
            {
              label: "Instalação de Fechadura digital",
              name: "fechadura",
              icon: SofaIcon,
            },
            {
              label: "Automação de Portão Eletrônico",
              name: "portão",
              icon: SofaIcon,
            },
            {
              label: "Instalação de Sensores",
              name: "sensores",
              icon: SofaIcon,
            },
            {
              label: "Criação de Cenários",
              name: "cenários",
              icon: SofaIcon,
            },
            {
              label: "Outro (Especifique nas próximas páginas)",
              name: "outro",
              icon: SofaIcon,
            },
          ],
        },
      ],
    },
    {
      title: "Quais são os cômodos em que você deseja controlar a iluminação?",
      rule: {
        effect: "SHOW",
        condition: {
          variable: "iluminação",
          be: true,
        },
      },
      questions: [
        {
          type: "checkbox",
          label: "Selecione os cômodos:",
          name: "iluminação-cômodos",
          options: [
            {
              label: "Sala de Estar/Jantar",
              name: "sala",
            },
            {
              label: "Quarto(s)",
              name: "quartos",
            },
            {
              label: "Cozinha",
              name: "cozinha",
            },
            {
              label: "Banheiro",
              name: "banheiro",
            },
          ],
        },
      ],
    },
  ],
};

export default quoteFormSchema;
