import { AnimatePresence, m } from "framer-motion";
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

      <AnimatePresence initial={false}>
        {show && (
          <m.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            className={styles.menuContainer}
          >
            <ul className={styles.menu}>
              <Links />

              <li className={styles.button}>
                <Button as={Link} href="/budget">
                  Faça um Orçamento
                </Button>
              </li>
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
