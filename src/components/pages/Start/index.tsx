import { m } from "framer-motion";
import Image from "next/image";

import bedroomOff from "@/images/bedroom-off.png";
import bedroomOn from "@/images/bedroom-on.png";

import styles from "./start.module.scss";

const fadeInTop = {
  initial: { y: 20, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
};

const Start = () => {
  return (
    <article className={styles.start}>
      <m.div {...fadeInTop} transition={{ duration: 0.4 }} className={styles.text}>
        <h1>Leve o futuro para o seu lar.</h1>
        <p>Controle tudo em sua casa com as nossas soluções de automação residencial.</p>
      </m.div>

      <m.div {...fadeInTop} transition={{ duration: 0.4 }} className={styles.image}>
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
    </article>
  );
};

export default Start;
