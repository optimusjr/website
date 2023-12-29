"use client";

import { HTMLMotionProps, m } from "framer-motion";

import cn from "@/utils/cn";

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
        initial: { y: 20, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.4 },
      };

  return (
    <Card as={m.li} cardLayout={layout} className={cn(styles.listCard, className)} {...animation}>
      {children}
    </Card>
  );
};

export default ListCard;
