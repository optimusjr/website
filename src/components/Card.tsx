import { tv, type VariantProps } from "tailwind-variants";

const card = tv({
  base: "bg-200 gap-4 rounded-3xl fill-black p-8 shadow-md",
  variants: {
    cardLayout: {
      column: "flex flex-col text-center",
      row: "grid grid-cols-[1fr_2fr] text-left",
    },
    color: {
      white: "bg-white",
      neutral: "bg-neutral-200",
    },
  },
  defaultVariants: {
    color: "neutral",
  },
});

interface Props<T extends React.ElementType> extends VariantProps<typeof card> {
  as?: T;
  className?: string;
  children?: React.ReactNode;
}

const Card = <T extends React.ElementType = "div">({
  as,
  className,
  cardLayout,
  ...props
}: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>) => {
  const Component = as || "div";

  return <Component className={card({ cardLayout, className })} {...props} />;
};

export default Card;
