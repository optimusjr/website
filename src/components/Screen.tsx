import { tv, type VariantProps } from "tailwind-variants";

const screen = tv({
  base: "flex flex-col items-center",
  variants: {
    backgroundColor: {
      white: "bg-neutral-50",
      secondary: "bg-secondary-100",
    },
    height: {
      full: "min-h-screen",
      firstFull: "min-h-[calc(100vh-64px)]",
    },
    gap: {
      true: "gap-4 sm:gap-8 md:gap-16",
    },
    padding: {
      true: "p-4 sm:p-8 md:p-16",
    },
    shadow: {
      true: "drop-shadow-md",
    },
  },
});

interface Props extends VariantProps<typeof screen> {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const Screen = ({ children, id, className, ...props }: Props) => (
  <article className={screen({ ...props, className })} id={id}>
    {children}
  </article>
);

export default Screen;
