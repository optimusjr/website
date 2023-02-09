import { AnimatePresence, m } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import Button from "@/components/common/Button";
import Card from "@/components/common/Card";

import CloseIcon from "./close";
import styles from "./prosel.module.scss";

const PROSEL = () => {
  // Comente a linha abaixo para ativar o banner quando for época de processo seletivo.
  // return null;

  const [isOpen, setIsOpen] = useState(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <m.div
          className={styles.container}
          initial={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ linear: true }}
        >
          <Card cardLayout="none" className={styles.dialog}>
            <h3>Estamos contratando!</h3>
            <p>
              Estão abertas as inscrições para o nosso processo seletivo. Venha trabalhar com a
              gente!
            </p>

            <Button as={Link} href="/prosel" onClick={() => setIsOpen(false)}>
              Quero me Inscrever!
            </Button>
            <Button variant="text" className={styles.close} onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </Button>
          </Card>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default PROSEL;
