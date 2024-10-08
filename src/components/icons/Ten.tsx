import { Props } from "@/utils/types/GenericIconType";

const TenIcon = <T extends React.ElementType = "svg">({ as, ...props }: Props<T>) => {
  const Component = as || "svg";

  return (
    <Component viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>Calendário com o número 10 escrito</title>
      <path d="M21 17V3H7v14h14m0-16a2 2 0 0 1 2 2v14c0 1.11-.89 2-2 2H7a2 2 0 0 1-2-2V3c0-1.1.9-2 2-2h14M3 5v16h16v2H3a2 2 0 0 1-2-2V5h2m9 0H8v2h2v8h2V5m6 0h-2c-1.1 0-2 .9-2 2v6a2 2 0 0 0 2 2h2c1.11 0 2-.89 2-2V7a2 2 0 0 0-2-2m0 8h-2V7h2v6Z" />
    </Component>
  );
};
export default TenIcon;
