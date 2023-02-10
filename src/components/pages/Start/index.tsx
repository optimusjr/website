import { m } from "framer-motion";

import Image from "@/components/common/Image";
import Page from "@/components/common/Page";
import bedroomOff from "@/images/bedroom-off.png";
import bedroomOn from "@/images/bedroom-on.png";

import styles from "./start.module.scss";

const Start = () => {
  return (
    <Page backgroundColor="secondary" className={styles.start} firstFullHeight>
      <div className={styles.text}>
        <h1>Leve o futuro para o seu lar.</h1>
        <p>Transformamos sua casa com as nossas soluções de automação residencial.</p>
      </div>

      <div className={styles.image}>
        <m.div transition={{ type: "spring", bounce: 0, duration: 1 }} whileHover={{ scale: 1.1 }}>
          <div>
            <Image alt="Quarto com as luzes apagadas" src={bedroomOff} width={1924} priority />
          </div>

          <m.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ repeat: Infinity, repeatType: "reverse", delay: 5, repeatDelay: 5 }}
          >
            <Image
              alt="Quarto com as luzes acessas"
              src={bedroomOn}
              style={{ position: "absolute" }}
              width={1924}
              priority
            />
          </m.div>
        </m.div>
      </div>
    </Page>
  );
};

export default Start;
