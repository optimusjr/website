import { m } from "framer-motion";

import styles from "./card.module.scss";

interface Props {
  layout?: "column" | "row";
  noAnime?: boolean;

  children: React.ReactNode;
}

const Card = ({ layout = "column", noAnime, children }: Props) => {
  const className = `${styles.card} ${styles[layout]}`;

  if (noAnime) {
    return <li className={className}>{children}</li>;
  }

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
