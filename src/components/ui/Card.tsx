import { tv, type VariantProps } from "tailwind-variants";

import { PropsWithChildren } from "@/utils/types/PropsWithChildren";

const card = tv({
  base: "bg-200 rounded-3xl shadow-md",
  variants: {
    bgColor: {
      white: "bg-white",
      neutral: "bg-neutral-200",
    },
  },
  defaultVariants: {
    bgColor: "neutral",
  },
});

interface Props<T extends React.ElementType> extends PropsWithChildren, VariantProps<typeof card> {
  as?: T;
  className?: string;
}

const Card = <T extends React.ElementType = "div">(
  props: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>,
) => {
  const { as, className, bgColor, ...componentProps } = props;
  const Component = as || "div";

  return <Component className={card({ bgColor, className })} {...componentProps} />;
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
