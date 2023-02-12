import styles from "./screen.module.scss";

interface Props {
  children: React.ReactNode;
  id?: string;
  className?: string;
  fullHeight?: boolean;
  firstFullHeight?: boolean;
  backgroundColor: "white" | "secondary" | "none";
}

const Screen = ({
  children,
  id,
  className,
  fullHeight,
  firstFullHeight,
  backgroundColor,
}: Props) => {
  return (
    <article
      className={[
        styles.screen,
        styles[backgroundColor],
        fullHeight ? styles.full : "",
        firstFullHeight ? styles.firstFull : "",
        className,
      ].join(" ")}
      id={id}
    >
      {children}
    </article>
  );
};

export default Screen;
