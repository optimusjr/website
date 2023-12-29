import cn from "@/utils/cn";

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
}: Props) => (
  <article
    className={cn(
      styles.screen,
      styles[backgroundColor],
      fullHeight ? styles.full : "",
      firstFullHeight ? styles.firstFull : "",
      className,
    )}
    id={id}
  >
    {children}
  </article>
);

export default Screen;
