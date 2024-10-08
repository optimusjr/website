import { Props } from "@/utils/types/GenericIconType";

const CheckIcon = <T extends React.ElementType = "svg">({ as, ...props }: Props<T>) => {
  const Component = as || "svg";

  return (
    <Component viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>Simbolo de verificado</title>
      <path d="m23 12-2.4-2.8.3-3.7-3.6-.8-1.9-3.2L12 3 8.6 1.5 6.7 4.7l-3.6.8.3 3.7L1 12l2.4 2.8-.3 3.7 3.6.8 1.9 3.2L12 21l3.4 1.5 1.9-3.2 3.6-.8-.3-3.7L23 12m-4.3 4.9-2.7.6-1.4 2.4-2.6-1.1-2.6 1.1L8 17.5l-2.7-.6.2-2.8L3.7 12l1.8-2.1-.2-2.8L8 6.5l1.4-2.4L12 5.2l2.6-1.1L16 6.5l2.7.6-.2 2.8 1.8 2.1-1.8 2.1.2 2.8m-2.1-9.3L18 9l-8 8-4-4 1.4-1.4 2.6 2.6 6.6-6.6Z" />
    </Component>
  );
};

export default CheckIcon;
