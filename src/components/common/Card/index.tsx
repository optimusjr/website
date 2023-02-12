import styles from "./card.module.scss";

interface Props<T extends React.ElementType> {
  as?: T;
  className?: string;
  cardLayout?: "column" | "row" | "none";
  children?: React.ReactNode;
}

const Card = <T extends React.ElementType = "div">({
  as,
  className,
  cardLayout = "column",
  ...props
}: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>) => {
  const Component = as || "div";

  return (
    <Component className={[styles.card, styles[cardLayout], className].join(" ")} {...props} />
  );
};

export default Card;
