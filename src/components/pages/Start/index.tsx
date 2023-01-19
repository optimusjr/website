import { m } from "framer-motion";
import Image from "next/image";

import bedroomOff from "../../../../public/images/bedroom-off.png";
import bedroomOn from "../../../../public/images/bedroom-on.png";
import styles from "./start.module.scss";

const Start = () => {
  return (
    <article className={styles.start}>
      <div className={styles.text}>
        <h1>Leve o futuro para o seu lar.</h1>
        <p>Controle tudo em sua casa com as nossas soluções de automação residencial.</p>
      </div>

      <div className={styles.image}>
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
      </div>
    </article>
  );
};

export default Start;
