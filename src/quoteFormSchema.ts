import GarageGateIcon from "@/components/icons/GarageGate";
import HexagonsIcon from "@/components/icons/Hexagons";
import LightIcon from "@/components/icons/Light";
import LockedDoorIcon from "@/components/icons/LockedDoor";
import MotionSensorIcon from "@/components/icons/MotionSensor";
import PlugIcon from "@/components/icons/Plug";
import PlusIcon from "@/components/icons/Plus";
import PoolIcon from "@/components/icons/Pool";
import TelevisionIcon from "@/components/icons/Television";
import WindowIcon from "@/components/icons/Window";
import type * as Form from "@/components/MultiPageForm/formSchemaType";

const quoteFormSchema: Form.Schema = {
  title: "Formulário de Orçamento",
  pages: [
    {
      title: "Bem-vindo(a) à OPTIMUS Jr.",
      description:
        "Olá, nossa equipe se sente extremamente honrada em poder ajudar, siga o formulário rápido e intuitivo para podemos apresentar um orçamento exclusivo referente ao seu projeto.",
    },
    {
      title: "Primeiro precisamos conhecer melhor o(a) próximo(a) sócio(a) OPTIMUS JR.",
      description:
        "Precisamos de alguns dados, para efetuarmos a precificação do serviço e entrar em contato.",
      questions: [
        {
          type: "text",
          name: "nome",
          label: "Qual o seu nome?",
          placeholder: "John Smith",
          autocomplete: "name",
          required: true,
        },
        {
          type: "email",
          name: "email",
          label: "Qual o seu email?",
          placeholder: "exemplo@optimusjr.com.br",
          autocomplete: "email",
          required: true,
        },
        {
          type: "tel",
          name: "telefone",
          label: "Qual o seu número de telefone?",
          placeholder: "71 98765-4321",
          autocomplete: "tel",
          required: true,
        },
        {
          type: "text",
          name: "endereço",
          label: "Qual seu endereço?",
          placeholder: "Rua Prof. Aristides Novis, 02 - Federação",
          autocomplete: "street-address",
          required: true,
        },
        {
          type: "text",
          name: "CEP",
          label: "Qual o seu CEP?",
          placeholder: "40210-630",
          autocomplete: "postal-code",
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
          name: "Selecione os serviços",
          required: true,
          options: [
            { label: "Controle de Iluminação", name: "serviços>iluminação", icon: LightIcon },
            { label: "Automação de Tomadas", name: "serviços>tomadas", icon: PlugIcon },
            {
              label: "Controle de dispositivos",
              name: "serviços>dispositivos",
              icon: TelevisionIcon,
            },
            { label: "Automação de Cortinas", name: "serviços>cortinas", icon: WindowIcon },
            {
              label: "Instalação de Fechadura digital",
              name: "serviços>fechadura",
              icon: LockedDoorIcon,
            },
            {
              label: "Automação de Portão Eletrônico",
              name: "serviços>portão",
              icon: GarageGateIcon,
            },
            { label: "Instalação de Sensores", name: "serviços>sensores", icon: MotionSensorIcon },
            { label: "Automação de Piscinas", name: "serviços>piscinas", icon: PoolIcon },
            { label: "Criação de Cenários", name: "serviços>cenários", icon: HexagonsIcon },
            {
              label: "Outro (Especifique nas próximas páginas)",
              name: "serviços>outro",
              icon: PlusIcon,
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
          variable: "serviços>iluminação",
          be: true,
        },
      },
      questions: [
        {
          type: "checkbox",
          label: "Selecione os cômodos:",
          name: "cômodos para iluminação",
          options: [
            { label: "Sala de Estar/Jantar", name: "iluminação>Sala de Estar/Jantar" },
            { label: "Quarto(s)", name: "iluminação>Quarto(s)" },
            { label: "Cozinha", name: "iluminação>Cozinha" },
            { label: "Banheiro", name: "iluminação>Banheiro" },
            { label: "Área de serviço", name: "iluminação>Área de serviço" },
            { label: "Área Externa", name: "iluminação>Área Externa" },
          ],
        },
        {
          type: "text",
          name: "cômodos (custom)",
          label: "Outro(s) cômodo(s) para automação (se houver):",
          placeholder: "Ex: Copa, escritório, garagem...",
        },
      ],
    },
    {
      title: "Nesses locais possuem quantos interruptores?",
      description:
        "Precisamos saber quantos interruptores possuem nesses locais e quantas teclas eles possuem.",
      rule: {
        effect: "SHOW",
        condition: {
          variable: "serviços>iluminação",
          be: true,
        },
      },
      questions: [
        {
          type: "text",
          name: "n° de interruptores",
          required: true,
          label: "Informe abaixo da forma que achar certo, sinta-se a vontade",
          placeholder: "Ex: A sala possui um interruptor com 2 teclas, a cozinha...",
        },
      ],
    },
    {
      title: "Quais locais da casa pretende instalar as tomadas automatizadas?",
      rule: {
        effect: "SHOW",
        condition: {
          variable: "serviços>tomadas",
          be: true,
        },
      },
      questions: [
        {
          type: "checkbox",
          label: "Selecione os cômodos:",
          name: "cômodos para tomadas:",
          options: [
            { label: "Sala de Estar/Jantar", name: "tomadas>Sala de Estar/Jantar" },
            { label: "Quarto(s)", name: "tomadas>Quarto(s)" },
            { label: "Cozinha", name: "tomadas>Cozinha" },
            { label: "Banheiro", name: "tomadas>Banheiro" },
            { label: "Área de serviço", name: "tomadas>Área de serviço" },
            { label: "Área Externa", name: "tomadas>Área Externa" },
          ],
        },
        {
          type: "text",
          name: "cômodos (custom)",
          label: "Outro(s) cômodo(s) para automação (se houver):",
          placeholder: "Ex: Copa, escritório, garagem...",
        },
      ],
    },
    {
      title: "Nesses locais contam atualmente com quantas tomadas?",
      rule: {
        effect: "SHOW",
        condition: {
          variable: "serviços>tomadas",
          be: true,
        },
      },
      questions: [
        {
          type: "text",
          name: "n° de tomadas",
          required: true,
          label: "Os cômodos citados contam com quantas tomadas?",
          placeholder: "Ex: A sala possui 5 tomadas, a cozinha 8...",
        },
      ],
    },
    {
      title: "Quais dispositivos eletrônicos deseja controlar em sua residência?",
      rule: {
        effect: "SHOW",
        condition: {
          variable: "serviços>dispositivos",
          be: true,
        },
      },
      questions: [
        {
          type: "checkbox",
          label: "Selecione os dispositivos:",
          name: "dispositivos para automatizar",
          options: [
            { label: "Ar-Condicionado", name: "dispositivos>Ar-Condicionado" },
            { label: "Televisão", name: "dispositivos>Televisão" },
            { label: "Cafeteira", name: "dispositivos>Cafeteira" },
            { label: "Caixa de Som", name: "dispositivos>Caixa de Som" },
          ],
        },
        {
          type: "text",
          name: "dispositivos (custom)",
          label: "Outro(s) dispositivos(s) para automação (se houver):",
          placeholder: "Ex: Ventilador, Sanduicheira, TV Box...",
        },
      ],
    },
    {
      title: "Nos conte sobre suas cortinas",
      rule: {
        effect: "SHOW",
        condition: {
          variable: "serviços>cortinas",
          be: true,
        },
      },
      questions: [
        {
          label: "Quantas cortinas planeja automatizar",
          type: "number",
          required: true,
          name: "n° de cortinas",
        },
      ],
    },
    {
      title: "Que legal! As fechaduras eletrônicas são o futuro",
      rule: {
        effect: "SHOW",
        condition: {
          variable: "serviços>fechadura",
          be: true,
        },
      },
      questions: [
        {
          label: "Quantas planeja colocar no seu lar ou estabelecimento?",
          name: "n° de fechaduras",
          type: "number",
          required: true,
        },
      ],
    },
    {
      title: "Ótimo! Agora conta para gente qual tipo de controle cogita obter com essa fechadura.",
      rule: {
        effect: "SHOW",
        condition: {
          variable: "serviços>fechadura",
          be: true,
        },
      },
      questions: [
        {
          type: "checkbox",
          name: "fechadura>funcionalidades",
          options: [
            { label: "Controle Biométrico", name: "fechadura>Controle Biométrico" },
            { label: "Controle Através Pin", name: "fechadura>Controle Através Pin" },
            {
              label: "Controle Por Meio de Cartões",
              name: "fechadura>Controle Por Meio de Cartões",
            },
            {
              label: "Controle a Distância e por Assistentes Virtuais",
              name: "fechadura>Controle a Distância e por Assistentes Virtuais",
            },
          ],
        },
        {
          type: "text",
          name: "fechadura (custom)",
          label: "Outro(s) modos de controle para fechadura (se houver):",
        },
      ],
    },
    {
      title: "Nos conte um pouco mais a respeito do portão.",
      rule: {
        effect: "SHOW",
        condition: {
          variable: "serviços>portão",
          be: true,
        },
      },
      questions: [
        {
          type: "text",
          name: "Informações sobre o portão",
          required: true,
          label:
            "Em qual local está localizado, tipo de abertura, entre outras coisas que podem ser úteis",
        },
      ],
    },
    {
      title: "Quais sensores pretende instalar para tornar seu ambiente muito mais moderno",
      rule: {
        effect: "SHOW",
        condition: {
          variable: "serviços>sensores",
          be: true,
        },
      },
      questions: [
        {
          type: "checkbox",
          name: "tipos de sensores",
          options: [
            {
              label: "Sensor de Presença e Movimento",
              name: "sensores>Sensor de presença e Movimento",
            },
            {
              label: "Sensor de Temperatura e Umidade",
              name: "sensores>Sensor de Temperatura e Umidade",
            },
            {
              label: "Sensor de Portas e Janelas",
              name: "sensores>Sensor de Portas e Janelas",
            },
            { label: "Sensor de Fumaça", name: "sensores>Sensor de Fumaça" },
          ],
        },
        {
          type: "text",
          name: "tipos de sensores (custom)",
          label: "Outro(s) tipo(s) de sensores (se houver):",
        },
      ],
    },
    {
      title:
        "Muito bom, descreva para nós que tipo de cenário imagina na sua nova CASA INTELIGENTE",
      rule: {
        effect: "SHOW",
        condition: {
          variable: "serviços>cenários",
          be: true,
        },
      },
      questions: [
        {
          type: "text",
          name: "Informações sobre os cenários",
          multiline: true,
          required: true,
          label: "Sinta-se a vontade para descrever qualquer tipo de cenário para nós criamos",
        },
      ],
    },
    {
      title: "Pelo visto você escolheu uma solução personalizada",
      rule: {
        effect: "SHOW",
        condition: {
          variable: "serviços>outro",
          be: true,
        },
      },
      questions: [
        {
          type: "text",
          name: "Informações sobre o seu serviço personalizado",
          multiline: true,
          required: true,
          label: "Qual serviço não listado anteriormente você tem em mente? Descreva com detalhes",
        },
      ],
    },
    {
      title: "Já estamos finalizando",
      questions: [
        {
          type: "text",
          name: "Informações extras",
          multiline: true,
          label: "Deseja falar algo mais? Você pode descrever melhor como deseja suas automações",
        },
      ],
    },
    {
      title: "Ficamos extremamente gratos com o contato",
      description:
        "Devido à complexidade de cada serviço, pedimos um pequeno prazo para conseguimos elaborar o projeto e apresentar de maneira exclusiva as melhores opções para cada SÓCIO OPTIMUS!!",
    },
  ],
};

export default quoteFormSchema;
