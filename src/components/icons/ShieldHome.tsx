import { Props } from "@/utils/types/GenericIconType";

const ShieldHomeIcon = <T extends React.ElementType = "svg">({ as, ...props }: Props<T>) => {
  const Component = as || "svg";

  return (
    <Component viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>Casa protegida por um escudo</title>
      <path d="M21 11c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5l9-4 9 4v6m-9 10c3.75-1 7-5.46 7-9.78V6.3l-7-3.12L5 6.3v4.92C5 15.54 8.25 20 12 21m-1-7h2v3h3v-5h2l-6-5-6 5h2v5h3v-3" />
    </Component>
  );
};
export default ShieldHomeIcon;
