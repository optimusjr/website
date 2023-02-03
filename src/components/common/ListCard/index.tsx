import { HTMLMotionProps, m } from "framer-motion";

import Card from "../Card";
import styles from "./listCard.module.scss";

interface Props {
  layout?: "column" | "row" | "none";
  customAnime?: HTMLMotionProps<"li">;
  className?: string;

  children: React.ReactNode;
}

const ListCard = ({ layout, customAnime, className, children }: Props) => {
  const animation = customAnime
    ? customAnime
    : {
        initial: { y: 20, opacity: 0, boxShadow: "none" },
        whileInView: { y: 0, opacity: 1, boxShadow: "none" },
        viewport: { once: true },
      };

  return (
    <Card
      as={m.li}
      className={`${className} ${styles.listCard}`}
      cardLayout={layout}
      {...animation}
    >
      {children}
    </Card>
  );
};

export default ListCard;
