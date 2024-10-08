import { tv, type VariantProps } from "tailwind-variants";

import type { PropsWithChildren } from "@/utils/types/PropsWithChildren";

const screen = tv({
  base: "flex flex-col items-center",
  variants: {
    bgColor: {
      black: "bg-black",
      white: "bg-white",
      neutral: "bg-neutral-200",
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
      true: "p-4 pb-8 sm:p-8 md:p-16",
    },
    shadow: {
      true: "drop-shadow-md",
    },
  },
});

interface Props<T extends React.ElementType>
  extends PropsWithChildren,
    VariantProps<typeof screen> {
  as?: T;
  id?: string;
  className?: string;
}

const Screen = <T extends React.ElementType = "article">(props: Props<T>) => {
  const { children, as, id, className, ...tvProps } = props;
  const Component = as || "article";

  return (
    <Component className={screen({ ...tvProps, className })} id={id}>
      {children}
    </Component>
  );
};

const { wrapper, strap, title } = tv({
  slots: {
    wrapper: "flex flex-col gap-4 text-center",
    strap: "text-2xl font-medium text-primary-800 sm:text-3xl",
    title: "text-4xl font-semibold uppercase md:text-5xl lg:text-6xl",
  },
})();

interface TitleProps extends PropsWithChildren {
  strap?: string;
  className?: {
    wrapper?: string;
    strap?: string;
    title?: string;
  };
}

const ScreenTitle = ({ strap: strapText, className, children }: TitleProps) => (
  <div className={wrapper({ className: className?.wrapper })}>
    {strap && <span className={strap({ className: className?.strap })}>{strapText}</span>}
    <h2 className={title({ className: className?.title })}>{children}</h2>
  </div>
);

export { Screen, ScreenTitle };
export default Screen;
