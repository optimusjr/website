"use client";

import { HTMLMotionProps, m } from "framer-motion";

import fadeIn from "@/utils/animations/fadeIn";
import type { PropsWithChildren } from "@/utils/types/PropsWithChildren";

import Card from "./Card";

interface Props extends PropsWithChildren {
  cardLayout?: "column" | "row";
  customAnime?: HTMLMotionProps<"li">;
  className?: string;
}

const ListCard = ({ cardLayout, customAnime, className, children }: Props) => {
  const animation = customAnime ? customAnime : fadeIn;

  return (
    <Card as={m.li} cardLayout={cardLayout} className={className} {...animation}>
      {children}
    </Card>
  );
};

export default ListCard;
