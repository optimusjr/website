import Typography from "@/components/common/Typography";

import styles from "./title.module.scss";

interface Props {
  strap?: string;
  children: React.ReactNode;
}

const Title = ({ strap, children }: Props) => {
  return (
    <div className={styles.title}>
      {strap && <Typography variant="strap">{strap}</Typography>}
      <Typography variant="h2">{children}</Typography>
    </div>
  );
};

export default Title;
