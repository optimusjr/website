import { HTMLMotionProps, m } from "framer-motion";

import styles from "./card.module.scss";

interface Props {
  layout?: "column" | "row";
  customAnime?: HTMLMotionProps<"li">;
  className?: string;

  children: React.ReactNode;
}

const Card = ({ layout = "column", customAnime, className, children }: Props) => {
  const classes = `${styles.card} ${styles[layout]} ${className}`;

  const animation = customAnime
    ? customAnime
    : {
        initial: { y: 20, opacity: 0, boxShadow: "none" },
        whileInView: { y: 0, opacity: 1, boxShadow: "none" },
        viewport: { once: true },
      };

  return (
    <m.li {...animation} className={classes}>
      {children}
    </m.li>
  );
};

export default Card;
