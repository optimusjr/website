import NextLink, { LinkProps } from "next/link";

interface Props extends LinkProps {
  children: React.ReactNode;
}

const Link = (props: Props) => {
  const isExternal = props.href.toString().startsWith("https");

  return (
    <NextLink
      rel={isExternal ? "noopener noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
      {...props}
    />
  );
};

export default Link;
