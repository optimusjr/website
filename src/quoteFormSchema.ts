import PlusIcon from "@/components/icons/Eye copy";
import GarageGateIcon from "@/components/icons/GarageGate";
import HexagonsIcon from "@/components/icons/Hexagons";
import LightIcon from "@/components/icons/Light";
import LockedDoorIcon from "@/components/icons/LockedDoor";
import MotionSensorIcon from "@/components/icons/MotionSensor";
import PlugIcon from "@/components/icons/Plug";
import PoolIcon from "@/components/icons/Pool";
import TelevisionIcon from "@/components/icons/Television";
import WindowIcon from "@/components/icons/Window";
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
      title: "Primeiro precisamos conhecer melhor o(a) próximo(a) sócio(a) OPTIMUS JR.",
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
          required: true,
          options: [
            {
              label: "Controle de Iluminação",
              name: "iluminação",
              icon: LightIcon,
            },
            {
              label: "Automação de Tomadas",
              name: "tomadas",
              icon: PlugIcon,
            },
            {
              label: "Controle de dispositivos",
              name: "dispositivos",
              icon: TelevisionIcon,
            },
            {
              label: "Automação de Cortinas",
              name: "cortinas",
              icon: WindowIcon,
            },
            {
              label: "Instalação de Fechadura digital",
              name: "fechadura",
              icon: LockedDoorIcon,
            },
            {
              label: "Automação de Portão Eletrônico",
              name: "portão",
              icon: GarageGateIcon,
            },
            {
              label: "Instalação de Sensores",
              name: "sensores",
              icon: MotionSensorIcon,
            },
            {
              label: "Automação de Piscinas",
              name: "piscinas",
              icon: PoolIcon,
            },
            {
              label: "Criação de Cenários",
              name: "cenários",
              icon: HexagonsIcon,
            },
            {
              label: "Outro (Especifique nas próximas páginas)",
              name: "outro",
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
