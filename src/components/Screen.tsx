import { tv, type VariantProps } from "tailwind-variants";

const screen = tv({
  base: "flex flex-col items-center gap-4 p-4 sm:gap-8 sm:p-8 md:gap-16 md:p-16",
  variants: {
    backgroundColor: {
      white: "bg-white",
      secondary: "bg-secondary-600",
    },
    height: {
      full: "h-screen",
      firstFull: "h-[calc(100vh-64px)]",
    },
  },
});

interface Props extends VariantProps<typeof screen> {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const Screen = ({ children, id, className, height, backgroundColor }: Props) => (
  <article
    className={screen({
      backgroundColor,
      height,
      className,
    })}
    id={id}
  >
    {children}
  </article>
);

export default Screen;
