import { Props } from "@/utils/types/GenericIconType";
const GarageGateIcon = <T extends React.ElementType = "svg">({
  as,
  ...props
}: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>) => {
  const Component = as || "svg";

  return (
    <Component viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>Portão de Garagem</title>
      <path d="M22 9V20H20V11H4V20H2V9L12 5L22 9M19 12H5V14H19V12M19 18H5V20H19V18M19 15H5V17H19V15Z" />
    </Component>
  );
};

export default GarageGateIcon;
