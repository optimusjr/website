import { m } from "framer-motion";

import styles from "./card.module.scss";

interface Props {
  layout?: "column" | "row";
  noAnime?: boolean;
  className?: string;

  children: React.ReactNode;
}

const Card = ({ layout = "column", noAnime, className, children }: Props) => {
  const classes = `${styles.card} ${styles[layout]} ${className}`;

  if (noAnime) {
    return <li className={classes}>{children}</li>;
  }

  return (
    <m.li
      initial={{ y: 20, opacity: 0, boxShadow: "none" }}
      whileInView={{ y: 0, opacity: 1, boxShadow: "none" }}
      viewport={{ once: true }}
      className={classes}
    >
      {children}
    </m.li>
  );
};

export default Card;
