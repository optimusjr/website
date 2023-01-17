import Link from "next/link";
import { useState } from "react";

import Button from "@/components/common/Button";

import styles from "./header.module.scss";
import Links from "./Links";
import Mobile from "./Mobile";

export default function Header() {
  const [showMobile, setShowMobile] = useState(false);

  const toggleShowMobile = () => {
    setShowMobile(!showMobile);
  };

  return (
    <div className={styles.container}>
      <header className={showMobile ? `${styles.header} ${styles.showMobile}` : styles.header}>
        <div className={styles.left}>
          <Link href="/">
            <div className={styles.iconWrapper}>
              <img src="/icon.svg" alt="Ícone da OPTIMUS Jr." height="36" width="36" />
            </div>
            <img
              src="/images/icons/OPTIMUS/wordmark.svg"
              alt="OPTIMUS Jr. escrito em letras brancas"
              height="16"
            />
          </Link>
        </div>

        <ul className={styles.center}>
          <Links />
        </ul>

        <div className={styles.right}>
          <Button as={Link} href="/budget">
            <div>Faça um Orçamento</div>
            <img
              src="/images/icons/arrow-right.svg"
              alt="Seta apontando para direita"
              height="24"
              width="24"
            />
          </Button>
        </div>

        <Mobile show={showMobile} toggleShow={toggleShowMobile} />
      </header>
    </div>
  );
}
