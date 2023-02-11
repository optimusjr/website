import { m } from "framer-motion";
import Link from "next/link";
import Image from "next-image-export-optimizer";

import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import ListCard from "@/components/common/ListCard";
import Screen from "@/components/common/Screen";
import ArrowRightIcon from "@/components/icons/ArrowRight";
import CheckOutlineIcon from "@/components/icons/CheckOutline";
import DiamondIcon from "@/components/icons/Diamond";
import EyeIcon from "@/components/icons/Eye";
import TargetIcon from "@/components/icons/Target";
import logo from "@/images/OPTIMUS/logo.svg";

import styles from "./about.module.scss";

const AboutStart = () => {
  return (
    <>
      <Screen backgroundColor="secondary">
        <section className={styles.intro}>
          <div>
            <span>OPTIMUS Jr.</span>
            <h1>A Empresa Junior de Controle e Automação.</h1>
            <p>Trazemos conforto, segurança e economia para os seus ambientes.</p>

            <m.div animate="rest" whileHover="hover">
              <Button as={Link} href="/budget">
                Faça um Orçamento
                <ArrowRightIcon
                  as={m.svg}
                  variants={{ hover: { x: [0, 5, 0], transition: { repeat: Infinity } } }}
                />
              </Button>
            </m.div>
          </div>

          <Card className={styles.image}>
            <Image alt="Logotipo da OPTIMUS Jr." src={logo} width={350} priority />
          </Card>
        </section>

        <ul className={styles.list}>
          <ListCard>
            <TargetIcon />

            <h3>Missão</h3>
            <p>
              Desenvolver nossos membros na área de automação, através da vivência empresarial, com
              foco em trazer a melhor experiência (e sucesso) para os nossos clientes.
            </p>
          </ListCard>

          <ListCard>
            <DiamondIcon />

            <h3>Valores</h3>
            <ul className={styles.values}>
              <li>
                <CheckOutlineIcon /> Autonomia
              </li>
              <li>
                <CheckOutlineIcon /> Resiliência
              </li>
              <li>
                <CheckOutlineIcon /> Comprometimento com resultados
              </li>
              <li>
                <CheckOutlineIcon /> Sentimento de Ser Dono
              </li>
              <li>
                <CheckOutlineIcon /> Orgulho de ser OPTIMUS
              </li>
            </ul>
          </ListCard>

          <ListCard>
            <EyeIcon />

            <h3>Visão</h3>
            <p>
              Entrar e atuar com constância no mercado de automação residencial, com preços justos e
              qualidade de excelência, gerando conforto, praticidade e economia para os clientes.
            </p>
          </ListCard>
        </ul>
      </Screen>
    </>
  );
};

export default AboutStart;
