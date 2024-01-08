"use client";

import { m } from "framer-motion";

import Card from "@/components/Card";
import DeviceIcon from "@/components/icons/Devices";
import HomeAssistantIcon from "@/components/icons/HomeAssistant";
import LeafIcon from "@/components/icons/Leaf";
import RocketIcon from "@/components/icons/Rocket";
import ShieldHomeIcon from "@/components/icons/ShieldHome";
import SofaIcon from "@/components/icons/Sofa";
import Screen from "@/components/Screen";
import Title from "@/components/Title";
import fadeIn from "@/utils/animations/fadeIn";

const Benefits = () => (
  <Screen bgColor="white" className="relative z-10" gap padding shadow>
    <Title strap="Vantagens">Por que automatizar sua casa?</Title>

    <ul className="grid auto-rows-fr gap-4 sm:gap-8 md:grid-cols-2 md:gap-16 xl:grid-cols-3 2xl:grid-cols-6">
      <BenefitCard
        Icon={DeviceIcon}
        description="Nunca foi tão prático realizar suas atividades diárias, você poderá programar seus dispositivos para realizarem essas atividades por você e te auxiliar no dia a dia."
        title="Praticidade"
      />
      <BenefitCard
        Icon={LeafIcon}
        description="Monitore seu gasto de energia, tenha controle dos seus dispositivos à distância e economize na conta de energia."
        title="Economia"
      />
      <BenefitCard
        Icon={ShieldHomeIcon}
        description="Seu ambiente poderá ser controlado e monitorado de qualquer lugar do mundo com apenas um toque."
        title="Segurança"
      />
      <BenefitCard
        Icon={SofaIcon}
        description="Tenha o controle da sua casa na palma da sua mão, sem precisar se levantar do seu lugar."
        title="Conforto"
      />
      <BenefitCard
        Icon={RocketIcon}
        description="Integração com as tecnologias emergentes do mercado. Controle sua casa por comando de voz, seja esse por Alexa ou até mesmo do seu celular."
        title="Tecnologia de Ponta"
      />
      <BenefitCard
        Icon={HomeAssistantIcon}
        description="Dê ao seu ambiente um toque futurístico! Além de todas as demais vantagens, seu espaço ficará moderno e bonito, valorizando o imóvel."
        title="Design"
      />
    </ul>
  </Screen>
);

interface CardProps {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const BenefitCard = ({ Icon, title, description }: CardProps) => (
  <Card as={m.li} className="flex flex-col items-center gap-4 p-8 text-center" {...fadeIn}>
    <Icon className="w-32 flex-shrink-0" />
    <Card.title className="text-2xl">{title}</Card.title>
    <p className="text-lg/tight">{description}</p>
  </Card>
);

export default Benefits;
