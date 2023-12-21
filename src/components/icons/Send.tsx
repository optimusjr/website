interface Props<T extends React.ElementType> {
  as?: T;
}

const SendIcon = <T extends React.ElementType = "svg">({
  as,
  ...props
}: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>) => {
  const Component = as || "svg";

  return (
    <Component viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>Avião de Papel</title>
      <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
    </Component>
  );
};

export default SendIcon;
