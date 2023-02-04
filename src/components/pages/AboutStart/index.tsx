import Image from "next/image";

import Page from "@/components/common/Page";
import logo from "@/images/icons/OPTIMUS/logo.svg";

import styles from "./about.module.scss";

const AboutStart = () => {
  return (
    <Page backgroundColor="secondary" className={styles.custom404}>
      <div>
        <h1>Nós somos OPTIMUS Jr.</h1>
        <p>A Empresa Junior de Automação Residencial da Universidade Federal da Bahia (UFBA).</p>
        <p>
          Nossa equipe é formada por alunos do curso de Engenharia de Controle e Automação da UFBA,
          que possuem conhecimento especializado em diferentes áreas da automação e que trabalham em
          conjunto para encontrar soluções criativas para os problemas enfrentados pelos nossos
          clientes.
        </p>
      </div>

      <div className={styles.image}>
        <Image src={logo} alt="Logotipo da OPTIMUS Jr." />
      </div>
    </Page>
  );
};

export default AboutStart;
