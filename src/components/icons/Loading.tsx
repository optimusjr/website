import { Props } from "@/utils/types/GenericIconType";
const LoadingIcon = <T extends React.ElementType = "svg">({
  as,
  ...props
}: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>) => {
  const Component = as || "svg";

  return (
    <Component viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>Carregando</title>
      <path d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
    </Component>
  );
};

export default LoadingIcon;
