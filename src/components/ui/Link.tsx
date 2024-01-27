import { tv } from "tailwind-variants";

import UnstyledLink from "@/components/lib/Link";

const linkStyle = tv({
  base: "max-w-[40vw] overflow-hidden overflow-ellipsis whitespace-nowrap text-lg/tight underline transition-colors hover:decoration-transparent",
});

const Link = ({ className, ...props }: React.ComponentProps<typeof UnstyledLink>) => (
  <UnstyledLink className={linkStyle(className)} {...props} />
);

export default Link;
export { Link, linkStyle };
