import styles from "./page.module.scss";

interface Props {
  children: React.ReactNode;
  id?: string;
  className?: string;
  fullHeight?: boolean;
  firstFullHeight?: boolean;
  backgroundColor: "white" | "secondary" | "none";
}

const Page = ({ children, id, className, fullHeight, firstFullHeight, backgroundColor }: Props) => {
  return (
    <article
      id={id}
      className={`${styles.page} ${styles[backgroundColor]} ${fullHeight ? styles.full : ""} ${
        firstFullHeight ? styles.firstFull : ""
      } ${className}`}
    >
      {children}
    </article>
  );
};

export default Page;
