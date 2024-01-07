import { tv } from "tailwind-variants";

import type { PropsWithChildren } from "@/utils/types/PropsWithChildren";

const { container, title, strap } = tv({
  slots: {
    container: "text-center",
    title: "text-4xl font-semibold uppercase md:text-5xl lg:text-6xl",
    strap: "pb-4 text-2xl font-medium text-primary-800 sm:text-3xl",
  },
})();

interface Props extends PropsWithChildren {
  strap?: string;
  className?: {
    container?: string;
    strap?: string;
    title?: string;
  };
}

const Title = ({ strap: strapText, className, children }: Props) => (
  <div className={container({ className: className?.container })}>
    {strap && <span className={strap({ className: className?.strap })}>{strapText}</span>}
    <h2 className={title({ className: className?.title })}>{children}</h2>
  </div>
);

export default Title;
