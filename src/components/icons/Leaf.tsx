import { Props } from "@/utils/types/GenericIconType";
const LeafIcon = <T extends React.ElementType = "svg">({
  as,
  ...props
}: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>) => {
  const Component = as || "svg";

  return (
    <Component viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>Folha</title>
      <path d="M8.04 16.34c1.01-2.51 2.15-5.38 6.46-6.34 0 0-5 0-6.62 4.63 0 0-.88-.88-.88-1.88s1-3.12 3.5-3.62c.71-.13 1.5-.26 2.28-.37 1.97-.26 3.86-.54 4.22-1.26 0 0-1.5 8.5-7 8.5-.18 0-.43-.06-.67-.15L8.86 17l-.95-.33.13-.33M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Z" />
    </Component>
  );
};

export default LeafIcon;
