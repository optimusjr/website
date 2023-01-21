import { m } from "framer-motion";
import type { ReactNode } from "react";

import variables from "@/styles/variables.module.scss";

import styles from "./card.module.scss";

interface Props {
  children: ReactNode;
}

const Card = ({ children }: Props) => {
  return (
    <m.li
      initial={{ y: 20, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        boxShadow: variables.shadow2,
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: variables.shadow3,
      }}
      viewport={{ once: true }}
      className={styles.card}
    >
      {children}
    </m.li>
  );
};

export default Card;
