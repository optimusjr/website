import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: "flex items-center gap-2 whitespace-nowrap rounded-full",
  variants: {
    variant: {
      filled:
        "bg-primary-800 fill-neutral-50 text-neutral-50 hover:bg-primary-700 hover:shadow-md active:bg-primary-900 active:shadow-none",
      outlined: "border-2 border-solid border-primary-800 text-primary-800",
      text: "hover:bg-neutral-300 active:bg-neutral-400",
    },
    size: {
      normal: "min-h-10 px-4 py-2 text-xl/0",
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
