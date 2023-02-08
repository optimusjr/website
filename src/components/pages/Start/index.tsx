import { m } from "framer-motion";
import Image from "next-image-export-optimizer";

import fadeInTop from "@/animations/fadeInTop";
import Page from "@/components/common/Page";
import bedroomOff from "@/images/bedroom-off.png";
import bedroomOn from "@/images/bedroom-on.png";

import styles from "./start.module.scss";

const Start = () => {
  return (
    <Page backgroundColor="secondary" firstFullHeight className={styles.start}>
      <m.div {...fadeInTop} className={styles.text}>
        <h1>Leve o futuro para o seu lar.</h1>
        <p>Transformamos sua casa com as nossas soluções de automação residencial.</p>
      </m.div>

      <m.div {...fadeInTop} className={styles.image}>
        <m.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", bounce: 0, duration: 1 }}>
          <div>
            <Image
              placeholder="empty"
              priority
              src={bedroomOff}
              width={1924}
              alt="Quarto com as luzes apagadas"
            />
          </div>

          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, repeatType: "reverse", delay: 5, repeatDelay: 5 }}
          >
            <Image
              priority
              src={bedroomOn}
              width={1924}
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
