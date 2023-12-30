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
  className?: string;
}

const Title = ({ strap, className, children }: Props) => (
  <div className={base({ className })}>
    {strap && <span className={strapClass()}>{strap}</span>}
    <Typography variant="h2">{children}</Typography>
  </div>
);

export default Title;
