import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: "flex whitespace-nowrap items-center gap-2 rounded-full",
  variants: {
    variant: {
      filled:
        "bg-primary-800 hover:bg-primary-700 text-neutral-50 fill-neutral-50 active:shadow-none active:bg-primary-900 hover:shadow-md",
      outlined: "text-primary-800 border-2 border-solid border-primary-800",
      text: "hover:bg-neutral-300 active:bg-neutral-400",
    },
    size: {
      normal: "py-2 px-4 min-h-10 text-xl/[0]",
    },
  },
  defaultVariants: {
    variant: "filled",
    size: "normal",
  },
});

interface Props<T extends React.ElementType> extends VariantProps<typeof button> {
  as?: T;
  className?: string;
  children?: React.ReactNode;
}

const Button = <T extends React.ElementType = "button">({
  as,
  size,
  variant,
  className,
  ...props
}: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>) => {
  const Component = as || "button";

  return <Component className={button({ size, variant, className })} {...props} />;
};

export default Button;
