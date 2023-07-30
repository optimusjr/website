import Typography from "@/components/common/Typography";

import styles from "./title.module.scss";

interface Props {
  strap?: string;
  children: React.ReactNode;
  className?: string;
}

const Title = ({ strap, className, children }: Props) => (
  <div className={[styles.title, className].join(" ")}>
    {strap && <Typography variant="strap">{strap}</Typography>}
    <Typography variant="h2">{children}</Typography>
  </div>
);

export default Title;
