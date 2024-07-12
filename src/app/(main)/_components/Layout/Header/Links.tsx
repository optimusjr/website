import { tv } from "tailwind-variants";

import Link from "@/components/lib/Link";

const { base, link } = tv({
  slots: {
    base: "contents",
    link: "whitespace-nowrap text-center text-neutral-900 transition-colors hover:text-black",
  },
})();

interface Props {
  hideMobile: () => void;
}

const Links = ({ hideMobile }: Props) => (
  <>
    <li className={base()}>
      <Link className={link()} href="/about" onClick={hideMobile}>
        Sobre Nós
      </Link>
    </li>
    <li className={base()} onClick={hideMobile}>
      <Link className={link()} href="/#services">
        Serviços
      </Link>
    </li>
    <li className={base()} onClick={hideMobile}>
      <Link className={link()} href="/#contact">
        Contato
      </Link>
    </li>
  </>
);

export default Links;
