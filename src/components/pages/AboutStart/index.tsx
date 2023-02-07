import Image from "next-image-export-optimizer";

import Button from "@/components/common/Button";
import Page from "@/components/common/Page";
import logo from "@/images/icons/OPTIMUS/logo.svg";

import styles from "./about.module.scss";

const AboutStart = () => {
  return (
    <Page backgroundColor="secondary" firstFullHeight className={styles.aboutStart}>
      <div>
        <span>OPTIMUS Jr.</span>
        <h1>A Empresa Junior de Controle e Automação.</h1>
        <p>Trazemos conforto, segurança e economia para os seus ambientes.</p>

        <Button size="large">Faça um Orçamento</Button>
      </div>

      <div className={styles.image}>
        <Image placeholder="empty" src={logo} alt="Logotipo da OPTIMUS Jr." priority />
      </div>
    </Page>
  );
};

export default AboutStart;
