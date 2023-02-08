import Link from "next/link";

import styles from "./links.module.scss";

interface Props {
  hideMobile: () => void;
}

export default function Links({ hideMobile }: Props) {
  return (
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
}
