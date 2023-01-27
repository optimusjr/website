import { m } from "framer-motion";

import styles from "./card.module.scss";

interface Props {
  layout?: "column" | "row";
  children: React.ReactNode;
}

const Card = ({ layout = "column", children }: Props) => {
  return (
    <m.li
      initial={{ y: 20, opacity: 0, boxShadow: "none" }}
      whileInView={{ y: 0, opacity: 1, boxShadow: "none" }}
      viewport={{ once: true }}
      className={`${styles.card} ${styles[layout]}`}
    >
      {children}
    </m.li>
  );
};

export default Card;
