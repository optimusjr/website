import { AnimatePresence, m } from "framer-motion";

import Button from "@/components/common/Button";
import Link from "@/components/common/Link";
import MenuIcon from "@/components/icons/Menu";

import Links from "./Links";
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
                <Button as={Link} href="https://k4x8qpevahv.typeform.com/to/RF8uSRDA">
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
