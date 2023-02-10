interface Props<T extends React.ElementType> {
  as?: T;
}

const ArrowLeftIcon = <T extends React.ElementType = "div">({
  as,
  ...props
}: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>) => {
  const Component = as || "svg";

  return (
    <Component viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
    </Component>
  );
};

export default ArrowLeftIcon;
