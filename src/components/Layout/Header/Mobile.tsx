import { AnimatePresence, m } from "framer-motion";
import Link from "next/link";

import Button from "@/components/common/Button";

import Links from "./Links";
import MenuIcon from "./MenuIcon";
import styles from "./mobile.module.scss";

interface Props {
  show: boolean;
  toggleShow: () => void;
  hideShow: () => void;
}

const Mobile = ({ show, toggleShow, hideShow }: Props) => {
  return (
    <>
      <div className={styles.menuButton}>
        <Button aria-label="Abrir menu" onClick={toggleShow}>
          <MenuIcon open={show} />
        </Button>
      </div>

      <AnimatePresence initial={false}>
        {show && (
          <m.div
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            animate="open"
            className={styles.menuContainer}
            exit="collapsed"
            initial="collapsed"
          >
            <ul className={styles.menu}>
              <Links hideMobile={hideShow} />

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
};

export default Mobile;
