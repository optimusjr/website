import Link from "next/link";
import { tv } from "tailwind-variants";

const LinkStyles = tv({
  base: "max-w-[40vw] overflow-hidden overflow-ellipsis whitespace-nowrap text-lg/tight underline transition-colors hover:decoration-transparent",
});

const StyledLink = ({ className, ...props }: React.ComponentProps<typeof Link>) => (
  <Link className={LinkStyles(className)} {...props} />
);

export default StyledLink;
export { LinkStyles, StyledLink };
