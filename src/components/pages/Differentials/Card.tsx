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
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
      }}
      className={styles.card}
    >
      {children}
    </m.li>
  );
};

export default Card;
