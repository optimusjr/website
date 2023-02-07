import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Button from "@/components/common/Button";
import wordmark from "@/images/icons/OPTIMUS/wordmark.svg";

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
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/">
            <div className={styles.iconWrapper}>
              <img src="/icon.svg" alt="Ícone da OPTIMUS Jr." height="40" width="40" />
            </div>
            <Image src={wordmark} alt="'OPTIMUS Jr.' escrito em letras estilizadas" height="18" />
          </Link>
        </div>

        <ul className={styles.center}>
          <Links />
        </ul>

        <m.div className={styles.right} whileHover="hover" animate="rest">
          <Button as={Link} href="/budget">
            <div>Faça um Orçamento</div>

            <m.img
              variants={{ hover: { x: [0, 5, 0], transition: { repeat: Infinity } } }}
              src="/images/icons/arrow-right.svg"
              alt="Seta apontando para direita"
              height="24"
              width="24"
            />
          </Button>
        </m.div>

        <Mobile show={showMobile} toggleShow={toggleShowMobile} />
      </header>
    </div>
  );
}
