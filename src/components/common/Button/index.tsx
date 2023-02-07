import styles from "./button.module.scss";

interface Props<T extends React.ElementType> {
  as?: T;
  size?: "normal" | "large";
  children?: React.ReactNode;
}

function Button<T extends React.ElementType = "button">({
  as,
  size = "normal",
  ...props
}: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>) {
  const Component = as || "button";

  return <Component className={`${styles.button} ${styles[size]}`} {...props} />;
}

export default Button;
