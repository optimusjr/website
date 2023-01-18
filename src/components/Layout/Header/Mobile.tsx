import Link from "next/link";

import Button from "@/components/common/Button";

import Links from "./Links";
import MenuIcon from "./MenuIcon";
import styles from "./mobile.module.scss";

interface Props {
  show: boolean;
  toggleShow: () => void;
}

export default function Mobile({ show, toggleShow }: Props) {
  return (
    <>
      <div className={styles.menuButton}>
        <Button onClick={toggleShow}>
          <MenuIcon open={show} />
        </Button>
      </div>

      <ul className={styles.menu} aria-hidden={!show}>
        <Links />

        <li className={styles.button}>
          <Button as={Link} href="/budget">
            Faça um Orçamento
          </Button>
        </li>
      </ul>
    </>
  );
}
