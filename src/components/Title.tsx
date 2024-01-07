import { tv } from "tailwind-variants";

import type { PropsWithChildren } from "@/utils/types/PropsWithChildren";

const { container, strap, title } = tv({
  slots: {
    container: "flex flex-col gap-4 text-center",
    strap: "text-2xl font-medium text-primary-800 sm:text-3xl",
    title: "text-4xl font-semibold uppercase md:text-5xl lg:text-6xl",
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
