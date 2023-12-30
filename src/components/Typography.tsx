import { tv, type VariantProps } from "tailwind-variants";

const typography = tv({
  variants: {
    variant: {
      p: "text-lg/tight",
      h1: "font-extrabold uppercase leading-1",
      h2: "text-4xl/1 font-semibold uppercase md:text-5xl lg:text-6xl",
      h3: "text-2xl/1 font-bold uppercase",
      a: "max-w-[40vw] overflow-hidden overflow-ellipsis border-b-1 border-solid text-lg/tight transition-colors hover:border-transparent",
    },
    color: {
      primary: "text-primary-800",
      neutral: "text-neutral-900",
      white: "text-neutral-50",
    },
  },
  compoundVariants: [
    {
      variant: "a",
      color: "primary",
      className: "border-primary-800",
    },
    {
      variant: "a",
      color: "neutral",
      className: "border-neutral-900",
    },
  ],
  defaultVariants: {
    variant: "p",
    color: "neutral",
  },
});

interface Props<T extends React.ElementType> extends VariantProps<typeof typography> {
  component?: T;
  className?: string;
}

const Typography = <T extends React.ElementType = "div">({
  component,
  variant,
  color,
  className,
  ...props
}: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>) => {
  const Component: React.ElementType = component || (variant === undefined ? "p" : variant);

  return <Component className={typography({ variant, color, className })} {...props} />;
};

export default Typography;
