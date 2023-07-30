import Link from "@/components/common/Link";

import styles from "./links.module.scss";

interface Props {
  hideMobile: () => void;
}

const Links = ({ hideMobile }: Props) => (
  <>
    <li className={styles.link}>
      <Link href="/about" onClick={hideMobile}>
        Sobre Nós
      </Link>
    </li>
    <li className={styles.link} onClick={hideMobile}>
      <Link href="/#services">Serviços</Link>
    </li>
    <li className={styles.link} onClick={hideMobile}>
      <Link href="/#contact">Contato</Link>
    </li>
  </>
);

export default Links;
