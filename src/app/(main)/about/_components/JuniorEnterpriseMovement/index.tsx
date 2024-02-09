"use client";

import { m } from "framer-motion";

import Image from "@/components/lib/Image";
import Screen from "@/components/others/Screen";
import Card from "@/components/ui/Card";
import Link from "@/components/ui/Link";
import Mej from "@/images/mej.png";
import fadeIn from "@/utils/animations/fadeIn";

import CardDecorations from "./CardDecorations";

const JuniorEnterpriseMovement = () => (
  <Screen
    bgColor="white"
    className="grid items-center gap-8 md:grid-cols-2 md:items-start"
    gap
    padding
  >
    <div className="mt-4 md:mt-0">
      <Screen.title className={{ container: "mb-4 gap-0 text-left" }} strap="Conheça o MEJ">
        O Movimento Empresa Júnior
      </Screen.title>
      <p className="mb-2">
        O &ldquo;Jr.&rdquo; em OPTIMUS Jr. não é apenas uma formalidade. Ele simboliza nossa conexão
        com o <Link href="https://brasiljunior.org.br/conheca-o-mej">MEJ</Link> (Movimento Empresa
        Júnior), a rede nacional com mais de 1500 empresas juniores, provenientes de mais de 300
        instituições de ensino superior diferentes, que juntas já ultrapassam mais de R$
        70.000.000,00 em faturamento.
      </p>
      <p>
        Aqui em Salvador, o MEJ é representado pelo{" "}
        <Link href="https://www.instagram.com/nejsalvador/">NEJ Salvador</Link> (Núcleo das Empresas
        Juniores de Salvador). Com o lema de &ldquo;De Farol a Farol&rdquo;, o NEJ promove
        colaboração e compartilhamento de experiências entre as Empresas Juniores de Salvador e
        região. Essa parceria fortalece o movimento, contribuindo para o desenvolvimento e impacto
        positivo no cenário empreendedor local.
      </p>
    </div>

    <m.div className="relative mb-16" {...fadeIn} whileHover="hover">
      <Card as={m.div} className="overflow-hidden" variants={{ hover: { rotate: -1 } }}>
        <Image alt="Logo do NEJ Salvador estilizado" src={Mej} />
      </Card>
      <CardDecorations
        as={m.svg}
        className="absolute top-0 w-full"
        variants={{ hover: { rotate: 1 } }}
      />
    </m.div>
  </Screen>
);

export default JuniorEnterpriseMovement;