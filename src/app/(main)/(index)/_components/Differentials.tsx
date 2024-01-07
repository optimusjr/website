"use client";

import { m } from "framer-motion";

import Card from "@/components/Card";
import CapIcon from "@/components/icons/Cap";
import CheckIcon from "@/components/icons/Check";
import HandIcon from "@/components/icons/Hand";
import TenIcon from "@/components/icons/Ten";
import Screen from "@/components/Screen";
import Title from "@/components/Title";
import fadeIn from "@/utils/animations/fadeIn";

const Differentials = () => (
  <Screen backgroundColor="white" className="relative z-10" gap padding shadow>
    <Title strap="Diferenciais">Por que somos a escolha certa?</Title>

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
    <Icon className="h-auto w-16 flex-shrink-0 sm:w-32" />
    <div>
      <h3 className="text-xl font-bold uppercase text-primary-800 sm:text-2xl">{title}</h3>
      <p className="text-lg/tight">{description}</p>
    </div>
  </Card>
);
