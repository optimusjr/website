import { tv, type VariantProps } from "tailwind-variants";

const typography = tv({
  variants: {
    variant: {
      p: "text-lg/tight",
      h2: "text-4xl md:text-5xl lg:text-6xl",
      h3: "text-2xl text-primary-800",
      strap: "pb-4 text-2xl font-medium text-primary-800 md:text-3xl",
      a: "border-b-1 max-w-[40vw] overflow-hidden overflow-ellipsis border-solid border-neutral-900 text-lg/tight transition-colors hover:border-transparent",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

interface Props<T extends React.ElementType> extends VariantProps<typeof typography> {
  component?: T;
  className?: string;
}

const Typography = <T extends React.ElementType = "div">({
  component,
  variant,
  className,
  ...props
}: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>) => {
  const Component: React.ElementType =
    component || (variant === undefined ? "p" : variant === "strap" ? "span" : variant);

  return <Component className={typography({ variant, className })} {...props} />;
};

export default Typography;
