import styles from "./page.module.scss";

interface Props {
  children: React.ReactNode;
  id?: string;
  className?: string;
  fullHeight?: boolean;
  backgroundColor: "white" | "secondary";
}

const Page = ({ children, id, className, fullHeight, backgroundColor }: Props) => {
  return (
    <article
      id={id}
      className={`${styles.page} ${styles[backgroundColor]} ${
        fullHeight ? styles.full : ""
      } ${className}`}
    >
      {children}
    </article>
  );
};

export default Page;
