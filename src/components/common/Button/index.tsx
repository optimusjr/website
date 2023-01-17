import styles from "./button.module.scss";

interface Props<T extends React.ElementType> {
  as?: T;
  children?: React.ReactNode;
}

function Button<T extends React.ElementType = "button">({
  as,
  ...props
}: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>) {
  const Component = as || "button";

  return <Component className={styles.button} {...props} />;
}

export default Button;
