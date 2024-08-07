import { Props } from "@/utils/types/GenericIconType";

const CheckOutlineIcon = <T extends React.ElementType = "svg">({ as, ...props }: Props<T>) => {
  const Component = as || "svg";

  return (
    <Component viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>Simbolo de verificado dentro de um circulo</title>
      <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" />
    </Component>
  );
};

export default CheckOutlineIcon;
