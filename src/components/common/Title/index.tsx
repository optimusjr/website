import styles from "./title.module.scss";

interface Props {
  children: React.ReactNode;
}

const Title = ({ children }: Props) => {
  return <div className={styles.title}>{children}</div>;
};

export default Title;
