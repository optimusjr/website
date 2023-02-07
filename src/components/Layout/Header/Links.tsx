import Link from "next/link";

import styles from "./links.module.scss";

export default function Links() {
  return (
    <>
      <li className={styles.link}>
        <Link href="/about">Sobre Nós</Link>
      </li>
      <li className={styles.link}>
        <Link href="/#services">Serviços</Link>
      </li>
      <li className={styles.link}>
        <Link href="/#contact">Contato</Link>
      </li>
    </>
  );
}
