"use client";

import { m } from "framer-motion";

import Screen from "@/components/others/Screen";
import Image from "@/components/others/StyledImage";
import Card from "@/components/ui/Card";
import Link from "@/components/ui/Link";
import team from "@/images/team.png";
import fadeIn from "@/utils/animations/fadeIn";

const OurHistory = () => (
  <Screen
    bgColor="white"
    className="grid items-center gap-8 md:grid-cols-2 md:items-start"
    gap
    padding
  >
    <Card as={m.div} {...fadeIn}>
      <Image alt="Membros da OPTIMUS Jr." src={team} />
    </Card>

    <div className="row-start-1 mt-4 md:row-auto md:mt-0">
      <Screen.title className={{ container: "mb-2 gap-0 text-left" }} strap="Nossa História">
        A Trajetória da OPTIMUS Jr.
      </Screen.title>
      <p className="mb-2">
        Fundada em 2010, a OPTIMUS Jr. é a empresa júnior do curso de Engenharia de Controle e
        Automação da <Link href="https://ufba.br/">UFBA</Link> (Universidade Federal da Bahia). Como
        uma instituição sem fins lucrativos, nosso objetivo é transformar o conhecimento dos nossos
        membros em soluções inovadoras, promovendo o desenvolvimento acadêmico, profissional e o
        empreendedorismo.
      </p>
      <p>
        Atualmente, a OPTIMUS Jr. continua comprometida com sua missão de oferecer soluções de
        automação de alta qualidade. Nossa equipe de membros dedicados e talentosos trabalha em
        projetos desafiadores, colaborando com empresas e organizações para enfrentar os desafios do
        mundo real.
      </p>
    </div>
  </Screen>
);

export default OurHistory;
