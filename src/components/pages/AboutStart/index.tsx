import { m } from "framer-motion";
import Image from "next-image-export-optimizer";

import fadeInTop from "@/animations/fadeInTop";
import Button from "@/components/common/Button";
import ListCard from "@/components/common/ListCard";
import Page from "@/components/common/Page";
import DiamondIcon from "@/components/pages/AboutStart/icons/Diamond";
import EyeIcon from "@/components/pages/AboutStart/icons/Eye";
import TargetIcon from "@/components/pages/AboutStart/icons/Target";
import logo from "@/images/icons/OPTIMUS/logo.svg";

import styles from "./about.module.scss";

const AboutStart = () => {
  return (
    <>
      <Page backgroundColor="secondary">
        <m.section {...fadeInTop} className={styles.intro}>
          <div>
            <span>OPTIMUS Jr.</span>
            <h1>A Empresa Junior de Controle e Automação.</h1>
            <p>Trazemos conforto, segurança e economia para os seus ambientes.</p>

            <Button size="large">Faça um Orçamento</Button>
          </div>

          <div className={styles.image}>
            <Image placeholder="empty" src={logo} alt="Logotipo da OPTIMUS Jr." priority />
          </div>
        </m.section>

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
            <EyeIcon />

            <h3>Visão</h3>
            <p>
              Entrar e atuar com constância no mercado de automação residencial, com preços justos e
              qualidade de excelência, gerando conforto, praticidade e economia para os clientes.
            </p>
          </ListCard>

          <ListCard>
            <DiamondIcon />

            <h3>Valores</h3>
            <ul className={styles.values}>
              <li>&#8226; Autonomia</li>
              <li>&#8226; Resiliência</li>
              <li>&#8226; Comprometimento com os resultados</li>
              <li>&#8226; Ser Dono</li>
              <li>&#8226; Orgulho de ser OPTIMUS</li>
            </ul>
          </ListCard>
        </ul>
      </Page>
    </>
  );
};

export default AboutStart;
