import cn from "@/utils/cn";

import styles from "./typography.module.scss";

interface Props<T extends React.ElementType> {
  variant?: "h2" | "h3" | "p" | "span" | "strap" | "a";
  component?: T;
  className?: string;
}

const Typography = <T extends React.ElementType = "div">({
  component,
  variant,
  className,
  ...props
}: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>) => {
  const Variant = variant || "p";
  let Component = component || Variant;

  if (Component === "a") {
    Component = "a";
  }

  if (Component === "strap") {
    Component = "span";
  }

  return <Component className={cn(styles[Variant], className)} {...props} />;
};

export default Typography;