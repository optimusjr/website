import { tv } from "tailwind-variants";

import Typography from "@/components/Typography";

const { base, strap: strapClass } = tv({
  slots: {
    base: "grid text-center",
    strap: "pb-4 text-2xl font-medium text-primary-800 md:text-3xl",
  },
})();

interface Props {
  strap?: string;
  children: React.ReactNode;
  className?: {
    container?: string;
    strap?: string;
    title?: string;
  };
}

const Title = ({ strap, className, children }: Props) => (
  <div className={base({ className: className?.container })}>
    {strap && <span className={strapClass({ className: className?.strap })}>{strap}</span>}
    <Typography className={className?.title} variant="h2">
      {children}
    </Typography>
  </div>
);

export default Title;
