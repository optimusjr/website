import { Props } from "@/utils/types/GenericIconType";

const PlusIcon = <T extends React.ElementType = "svg">({ as, ...props }: Props<T>) => {
  const Component = as || "svg";

  return (
    <Component viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>Mais</title>
      <path d="M18 11H15V14H13V11H10V9H13V6H15V9H18M20 4V16H8V4H20M20 2H8C6.9 2 6 2.9 6 4V16C6 17.11 6.9 18 8 18H20C21.11 18 22 17.11 22 16V4C22 2.9 21.11 2 20 2M4 6H2V20C2 21.11 2.9 22 4 22H18V20H4V6Z" />
    </Component>
  );
};
export default PlusIcon;