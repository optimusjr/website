import { Props } from "@/utils/types/GenericIconType";

const EmailIcon = <T extends React.ElementType = "svg">({ as, ...props }: Props<T>) => {
  const Component = as || "svg";

  return (
    <Component viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>Envelope de Carta (Ícone de Email)</title>
      <path d="M20 8l-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z" />
    </Component>
  );
};

export default EmailIcon;
