import { tv } from "tailwind-variants";

import Typography from "@/components/Typography";

const title = tv({
  base: "grid text-center",
});

interface Props {
  strap?: string;
  children: React.ReactNode;
  className?: string;
}

const Title = ({ strap, className, children }: Props) => (
  <div className={title({ className })}>
    {strap && <Typography variant="strap">{strap}</Typography>}
    <Typography variant="h2">{children}</Typography>
  </div>
);

export default Title;
