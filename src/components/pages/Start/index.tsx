import { m } from "framer-motion";
import Image from "next/image";

import bedroomOff from "@/images/bedroom-off.png";
import bedroomOn from "@/images/bedroom-on.png";
import variables from "@/styles/variables.module.scss";

import styles from "./start.module.scss";

const Start = () => {
  return (
    <m.article className={styles.start}>
      <div className={styles.text}>
        <h1>Leve o futuro para o seu lar.</h1>
        <p>Controle tudo em sua casa com as nossas soluções de automação residencial.</p>
      </div>

      <m.div
        initial={{ scale: 1.1, boxShadow: variables.shadow4 }}
        animate={{ scale: 1, boxShadow: variables.shadow3 }}
        transition={{ duration: 0.4 }}
        className={styles.image}
      >
        <div>
          <Image src={bedroomOff} alt="Quarto com as luzes apagadas" />
        </div>

        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, repeatType: "reverse", delay: 5, repeatDelay: 5 }}
        >
          <Image
            src={bedroomOn}
            alt="Quarto com as luzes acessas"
            style={{ position: "absolute" }}
          />
        </m.div>
      </m.div>
    </m.article>
  );
};

export default Start;
