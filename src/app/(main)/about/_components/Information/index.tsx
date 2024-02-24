"use client";
import { m } from "framer-motion";

import Image from "@/components/lib/Image";
import Screen from "@/components/others/Screen";
import StyledImage from "@/components/others/StyledImage";
import Card from "@/components/ui/Card";
import Link from "@/components/ui/Link";
import electrician from "@/images/electrician.png";
import mej from "@/images/mej.png";
import team from "@/images/team.png";
import fadeIn from "@/utils/animations/fadeIn";

import CardDecorations from "./CardDecorations";
import { Section, SectionContent, SectionIllustration, SectionTitle } from "./Section";

const Information = () => (
  <Screen bgColor="white" className="gap-8 py-8 pb-16 4xs:p-8" gap padding>
    <Section>
      <SectionIllustration>
        <Card as={m.div} {...fadeIn} className="overflow-hidden">
          <StyledImage alt="Membros da OPTIMUS Jr." src={team} disableWrapper />
        </Card>
      </SectionIllustration>
      <SectionContent>
        <SectionTitle strap="Nossa História">A Trajetória da OPTIMUS&nbsp;Jr.</SectionTitle>
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
      </SectionContent>
    </Section>
    <Section>
      <SectionContent>
        <SectionTitle strap="Conheça o MEJ">O Movimento Empresa Júnior</SectionTitle>
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
          região. Essa parceria fortalece o movimento e contribui para o desenvolvimento do cenário
          empreendedor local.
        </p>
      </SectionContent>
      <SectionIllustration>
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
      </SectionIllustration>
    </Section>
    <Section>
      <SectionIllustration>
        <Card as={m.div} {...fadeIn} className="overflow-hidden">
          <StyledImage alt="Membros da OPTIMUS Jr." src={electrician} disableWrapper />
        </Card>
      </SectionIllustration>
      <SectionContent>
        <SectionTitle strap="Experiência e Compromisso">Sua Satisfação Garantida</SectionTitle>
        <p>
          Desbloqueie o potencial da sua residência ou empresa com a OPTIMUS Jr.! Com mais de uma
          década de atuação, acumulamos uma vasta experiência entregando sucesso em cada projeto.
        </p>
        <p>
          Seja em automações residenciais e comerciais até automações industriais de ponta, nossa
          equipe dedicada está pronta para te atender da melhor forma possível e elevar sua
          experiência a um novo patamar.
        </p>
      </SectionContent>
    </Section>
  </Screen>
);

export default Information;
