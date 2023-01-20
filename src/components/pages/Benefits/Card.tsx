import { m } from "framer-motion";
import type { ReactNode } from "react";

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
      }}
      whileHover={{
        scale: 1.05,
        boxShadow:
          "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)",
      }}
      viewport={{ once: true }}
      className={styles.card}
    >
      {children}
    </m.li>
  );
};

export default Card;
