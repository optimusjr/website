import { m } from "framer-motion";
import Image from "next/image";

import Page from "@/components/common/Page";
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
    <Page backgroundColor="secondary" className={styles.start}>
      <m.div {...fadeInTop} transition={{ duration: 0.4 }} className={styles.text}>
        <h1>Leve o futuro para o seu lar.</h1>
        <p>Transformamos sua casa com as nossas soluções de automação residencial.</p>
      </m.div>

      <m.div {...fadeInTop} transition={{ duration: 0.4 }} className={styles.image}>
        <m.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", bounce: 0, duration: 1 }}>
          <div>
            <Image priority src={bedroomOff} alt="Quarto com as luzes apagadas" />
          </div>

          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, repeatType: "reverse", delay: 5, repeatDelay: 5 }}
          >
            <Image
              priority
              src={bedroomOn}
              alt="Quarto com as luzes acessas"
              style={{ position: "absolute" }}
            />
          </m.div>
        </m.div>
      </m.div>
    </Page>
  );
};

export default Start;
