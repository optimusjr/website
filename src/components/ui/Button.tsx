import { tv, type VariantProps } from "tailwind-variants";

import type { PropsWithChildren } from "@/utils/types/PropsWithChildren";

const button = tv({
  base: "flex items-center gap-2 whitespace-nowrap rounded-full",
  variants: {
    variant: {
      filled:
        "bg-primary-800 fill-white text-white hover:bg-primary-700 hover:shadow-md active:bg-primary-900 active:shadow-none",
      outlined: "border-2 border-primary-800 text-primary-800",
      text: "bg-neutral-900/0 hover:bg-neutral-900/10 active:bg-neutral-900/20",
    },
    size: {
      normal: "min-h-10 p-4 py-2 text-xl leading-0",
    },
  },
  defaultVariants: {
    variant: "filled",
    size: "normal",
  },
});

interface Props<T extends React.ElementType>
  extends PropsWithChildren,
    VariantProps<typeof button> {
  as?: T;
  className?: string;
}

const Button = <T extends React.ElementType = "button">(
  props: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>,
) => {
  const { as, size, variant, className, ...componentProps } = props;
  const Component = as || "button";

  return <Component className={button({ size, variant, className })} {...componentProps} />;
};

export default Button;
