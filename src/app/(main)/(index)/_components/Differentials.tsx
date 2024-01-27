"use client";

import { m } from "framer-motion";

import CapIcon from "@/components/icons/Cap";
import CheckIcon from "@/components/icons/Check";
import HandIcon from "@/components/icons/Hand";
import TenIcon from "@/components/icons/Ten";
import Screen from "@/components/Screen";
import Card from "@/components/ui/Card";
import fadeIn from "@/utils/animations/fadeIn";

const Differentials = () => (
  <Screen bgColor="white" className="relative z-10" gap padding shadow>
    <Screen.title strap="Diferenciais">Por que somos a escolha certa?</Screen.title>

    <ul className="grid auto-rows-fr items-stretch gap-4 sm:gap-8 md:grid-cols-2 md:gap-16">
      <DifferentialCard
        Icon={TenIcon}
        description="Estamos a mais de 10 anos no mercado impactando vidas e negócios."
        title="Mais de 10 anos de experiência"
      />
      <DifferentialCard
        Icon={HandIcon}
        description="Oferecemos preços justos e alta qualidade em nossos serviços."
        title="Melhor preço do mercado"
      />
      <DifferentialCard
        Icon={CapIcon}
        description="Como empresa júnior da UFBA, temos o apoio dos melhores professores da instituição."
        title="Vasto conhecimento técnico"
      />
      <DifferentialCard
        Icon={CheckIcon}
        description="Quem contrata, recomenda! A nossa média de NPS é 9,5."
        title="Selo de qualidade"
      />
    </ul>
  </Screen>
);

export default Differentials;

interface CardProps {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const DifferentialCard = ({ Icon, title, description }: CardProps) => (
  <Card
    as={m.li}
    className="flex items-start gap-6 p-6 sm:gap-8 sm:p-8 md:max-lg:flex-col md:max-lg:items-center md:max-lg:text-center"
    {...fadeIn}
  >
    <Icon className="h-auto w-16 sm:w-32" />
    <div>
      <Card.title className="text-xl/none sm:text-2xl/none">{title}</Card.title>
      <p className="text-lg/tight">{description}</p>
    </div>
  </Card>
);
