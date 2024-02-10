"use client";
import { m } from "framer-motion";

import Image from "@/components/lib/Image";
import Screen from "@/components/others/Screen";
import StyledImage from "@/components/others/StyledImage";
import Card from "@/components/ui/Card";
import Link from "@/components/ui/Link";
import mej from "@/images/mej.png";
import team from "@/images/team.png";
import fadeIn from "@/utils/animations/fadeIn";

import CardDecorations from "./CardDecorations";
import Section from "./Section";

const Information = () => (
  <Screen bgColor="white" className="gap-8 py-8 pb-16 4xs:p-8" gap padding>
    <Section>
      <Section.illustration>
        <Card as={m.div} {...fadeIn} className="overflow-hidden">
          <StyledImage alt="Membros da OPTIMUS Jr." src={team} disableWrapper />
        </Card>
      </Section.illustration>
      <Section.content>
        <Section.title strap="Nossa História">A Trajetória da OPTIMUS&nbsp;Jr.</Section.title>
        <p>
          Fundada em 2010, a OPTIMUS Jr. é a empresa júnior do curso de Engenharia de Controle e
          Automação da <Link href="https://ufba.br/">UFBA</Link> (Universidade Federal da Bahia).
          Como uma instituição sem fins lucrativos, nosso objetivo é transformar o conhecimento dos
          nossos membros em soluções inovadoras, promovendo o desenvolvimento acadêmico,
          profissional e o empreendedorismo.
        </p>
        <p>
          Atualmente, a OPTIMUS Jr. continua comprometida com sua missão de oferecer soluções de
          automação de alta qualidade. Nossa equipe de membros dedicados e talentosos trabalha em
          projetos desafiadores, colaborando com empresas e organizações para enfrentar os desafios
          do mundo real.
        </p>
      </Section.content>
    </Section>
    <Section>
      <Section.content>
        <Section.title strap="Conheça o MEJ">O Movimento Empresa Júnior</Section.title>
        <p>
          O &ldquo;Jr.&rdquo; em OPTIMUS Jr. não é apenas uma formalidade. Ele simboliza nossa
          conexão com o <Link href="https://brasiljunior.org.br/conheca-o-mej">MEJ</Link> (Movimento
          Empresa Júnior), a rede nacional com mais de 1500 empresas juniores, que juntas já
          ultrapassam mais de 70 Milhões em faturamento.
        </p>
        <p>
          Aqui em Salvador, o MEJ é representado pelo{" "}
          <Link href="https://www.instagram.com/nejsalvador/">NEJ Salvador</Link> (Núcleo das
          Empresas Juniores de Salvador). Com o lema de &ldquo;De Farol a Farol&rdquo;, o NEJ
          promove a colaboração e o compartilhamento de experiências entre as Empresas Juniores da
          região. Essa parceria fortalece o movimento, contribui para o desenvolvimento do cenário
          empreendedor local.
        </p>
      </Section.content>
      <Section.illustration>
        <m.div className="relative" {...fadeIn} whileHover="hover">
          <Card as={m.div} className="overflow-hidden" variants={{ hover: { rotate: -1 } }}>
            <Image alt="Logo do NEJ Salvador estilizado" src={mej} />
          </Card>
          <CardDecorations
            as={m.svg}
            className="absolute top-0 w-full"
            variants={{ hover: { rotate: 1 } }}
          />
        </m.div>
      </Section.illustration>
    </Section>
  </Screen>
);

export default Information;
