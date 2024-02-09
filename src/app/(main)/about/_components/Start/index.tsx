"use client";

import DiamondIcon from "@/components/icons/Diamond";
import EyeIcon from "@/components/icons/Eye";
import TargetIcon from "@/components/icons/Target";
import Image from "@/components/lib/Image";
import CheckList from "@/components/others/CheckList";
import QuoteButton from "@/components/others/QuoteButton";
import Screen from "@/components/others/Screen";
import Card from "@/components/ui/Card";
import logo from "@/images/OPTIMUS/logo.svg";

import AboutCard from "./AboutCard";

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
        <AboutCard.title>Missão</AboutCard.title>
        <AboutCard.description>
          Desenvolver nossos membros na área de automação, através da vivência empresarial, com foco
          em trazer a melhor experiência para os nossos clientes.
        </AboutCard.description>
      </AboutCard>

      <AboutCard Icon={DiamondIcon}>
        <AboutCard.title>Valores</AboutCard.title>

        <CheckList className="w-full">
          <CheckList.item>Autonomia</CheckList.item>
          <CheckList.item>Resiliência</CheckList.item>
          <CheckList.item>Comprometimento com resultados</CheckList.item>
          <CheckList.item>Sentimento de Ser Dono</CheckList.item>
          <CheckList.item>Orgulho de ser OPTIMUS</CheckList.item>
        </CheckList>
      </AboutCard>

      <AboutCard Icon={EyeIcon}>
        <AboutCard.title>Visão</AboutCard.title>
        <AboutCard.description>
          Entrar e atuar com constância no mercado de automação residencial, com preços justos e
          qualidade de excelência, gerando conforto, praticidade e economia para os clientes.
        </AboutCard.description>
      </AboutCard>
    </ul>
  </Screen>
);

export default AboutStart;
