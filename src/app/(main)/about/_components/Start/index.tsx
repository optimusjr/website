"use client";

import DiamondIcon from "@/components/icons/Diamond";
import EyeIcon from "@/components/icons/Eye";
import TargetIcon from "@/components/icons/Target";
import Image from "@/components/lib/Image";
import { CheckList, CheckListItem } from "@/components/others/CheckList";
import QuoteButton from "@/components/others/QuoteButton";
import Screen from "@/components/others/Screen";
import Card from "@/components/ui/Card";
import logo from "@/images/OPTIMUS/logo.svg";

import { AboutCard, AboutCardDescription, AboutCardTitle } from "./AboutCard";

const AboutStart = () => (
  <Screen bgColor="secondary" height="firstFull" gap padding>
    <section className="my-8 grid gap-4 animate-fade-in md:grid-cols-2 lg:my-16 lg:gap-16">
      <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
        <span className="text-2xl/none font-bold text-primary-800 lg:text-3xl/none">
          OPTIMUS Jr.
        </span>
        <h1 className="text-4xl/none font-extrabold uppercase sm:text-5xl lg:text-6xl">
          A Empresa Junior de Controle e Automação.
        </h1>
        <p className="text-2xl/none lg:text-3xl/none">
          Trazemos conforto, segurança e economia para os seus ambientes.
        </p>

        <QuoteButton />
      </div>

      <Card bgColor="white" className="my-auto hidden w-full justify-center p-16 md:flex">
        <Image alt="Logotipo da OPTIMUS Jr." src={logo} width={350} priority />
      </Card>
    </section>

    <ul className="grid items-center gap-8 lg:grid-cols-3">
      <AboutCard Icon={TargetIcon}>
        <AboutCardTitle>Missão</AboutCardTitle>
        <AboutCardDescription>
          Desenvolver nossos membros na área de automação, através da vivência empresarial, com foco
          em trazer a melhor experiência para os nossos clientes.
        </AboutCardDescription>
      </AboutCard>

      <AboutCard Icon={DiamondIcon}>
        <AboutCardTitle>Valores</AboutCardTitle>

        <CheckList className="w-full">
          <CheckListItem>Autonomia</CheckListItem>
          <CheckListItem>Resiliência</CheckListItem>
          <CheckListItem>Comprometimento com resultados</CheckListItem>
          <CheckListItem>Sentimento de Ser Dono</CheckListItem>
          <CheckListItem>Orgulho de ser OPTIMUS</CheckListItem>
        </CheckList>
      </AboutCard>

      <AboutCard Icon={EyeIcon}>
        <AboutCardTitle>Visão</AboutCardTitle>
        <AboutCardDescription>
          Entrar e atuar com constância no mercado de automação residencial, com preços justos e
          qualidade de excelência, gerando conforto, praticidade e economia para os clientes.
        </AboutCardDescription>
      </AboutCard>
    </ul>
  </Screen>
);

export default AboutStart;
