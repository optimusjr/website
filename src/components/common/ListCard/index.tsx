import { HTMLMotionProps, m } from "framer-motion";

import fadeInTop from "@/animations/fadeInTop";

import Card from "../Card";
import styles from "./listCard.module.scss";

interface Props {
  layout?: "column" | "row" | "none";
  customAnime?: HTMLMotionProps<"li">;
  className?: string;

  children: React.ReactNode;
}

const ListCard = ({ layout, customAnime, className, children }: Props) => {
  const animation = customAnime ? customAnime : fadeInTop;

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
