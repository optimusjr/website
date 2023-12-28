import Typography from "@/components/common/Typography";
import cn from "@/utils/cn";

import styles from "./title.module.scss";

interface Props {
  strap?: string;
  children: React.ReactNode;
  className?: string;
}

const Title = ({ strap, className, children }: Props) => (
  <div className={cn(styles.title, className)}>
    {strap && <Typography variant="strap">{strap}</Typography>}
    <Typography variant="h2">{children}</Typography>
  </div>
);

export default Title;
