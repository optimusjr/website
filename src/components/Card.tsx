import { tv, type VariantProps } from "tailwind-variants";

import { PropsWithChildren } from "@/utils/types/PropsWithChildren";

const card = tv({
  base: "bg-200 rounded-3xl fill-black shadow-md",
  variants: {
    cardLayout: {
      column: "flex flex-col text-center",
      row: "grid grid-cols-[1fr_2fr] text-left",
    },
    bgColor: {
      white: "bg-white",
      neutral: "bg-neutral-200",
    },
    gap: { true: "gap-8" },
    padding: { true: "p-8" },
  },
  defaultVariants: {
    bgColor: "neutral",
  },
});

interface Props<T extends React.ElementType> extends PropsWithChildren, VariantProps<typeof card> {
  as?: T;
  className?: string;
}

const Card = <T extends React.ElementType = "div">({
  as,
  className,
  cardLayout,
  bgColor,
  gap,
  padding,
  ...props
}: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>) => {
  const Component = as || "div";

  return (
    <Component className={card({ cardLayout, bgColor, gap, padding, className })} {...props} />
  );
};

const cardTitle = tv({
  base: "text-2xl/none font-bold uppercase text-primary-800",
});

interface TitleProps<T extends React.ElementType> extends PropsWithChildren {
  as?: T;
  className?: string;
}

Card.title = <T extends React.ElementType = "h3">({ as, className, children }: TitleProps<T>) => {
  const Component = as || "h3";

  return <Component className={cardTitle({ className })}>{children}</Component>;
};

export default Card;
