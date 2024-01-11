import Link from "next/link";
import { tv } from "tailwind-variants";

const LinkStyles = tv({
  base: "max-w-[40vw] overflow-hidden overflow-ellipsis whitespace-nowrap border-b-1 text-lg/tight transition-colors hover:border-transparent",
});

const StyledLink = ({ className, ...props }: React.ComponentProps<typeof Link>) => {
  return <Link className={LinkStyles(className)} {...props} />;
};

export default StyledLink;
export { LinkStyles, StyledLink };
