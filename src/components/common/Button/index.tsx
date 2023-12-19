import styles from "./button.module.scss";

interface Props<T extends React.ElementType> {
  as?: T;
  size?: "normal";
  variant?: "filled" | "text" | "outlined";
  className?: string;
  children?: React.ReactNode;
}

const Button = <T extends React.ElementType = "button">({
  as,
  size = "normal",
  variant = "filled",
  className,
  ...props
}: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>) => {
  const Component = as || "button";

  return (
    <Component
      className={[styles.button, styles[size], styles[variant], className].join(" ")}
      {...props}
    />
  );
};

export default Button;
