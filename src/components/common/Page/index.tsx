import styles from "./page.module.scss";

interface Props {
  children: React.ReactNode;
  backgroundColor: "white" | "secondary";
  className?: string;
  fullHeight?: boolean;
}

const Page = ({ children, backgroundColor, className, fullHeight }: Props) => {
  return (
    <article
      className={`${styles.page} ${styles[backgroundColor]} ${
        fullHeight ? styles.full : ""
      } ${className}`}
    >
      {children}
    </article>
  );
};

export default Page;
