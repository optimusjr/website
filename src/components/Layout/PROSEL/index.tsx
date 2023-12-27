"use client";

import { AnimatePresence, m } from "framer-motion";
import { useState } from "react";

import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import Link from "@/components/common/Link";
import Typography from "@/components/common/Typography";
import CloseIcon from "@/components/icons/Close";
import config from "@/config";

import styles from "./prosel.module.scss";

const PROSEL = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!config.IS_PROSEL) {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <m.div
          className={styles.container}
          exit={{ y: 20, opacity: 0 }}
          initial={{ y: 0, opacity: 1 }}
          transition={{ linear: true }}
        >
          <Card cardLayout="none" className={styles.dialog}>
            <Typography variant="h3">Estamos contratando!</Typography>
            <Typography>
              Estão abertas as inscrições para o nosso processo seletivo. Venha trabalhar com a
              gente!
            </Typography>

            <Button as={Link} href={config.PROSEL_FORM_URL} onClick={() => setIsOpen(false)}>
              Quero me Inscrever!
            </Button>
            <Button className={styles.close} onClick={() => setIsOpen(false)} variant="text">
              <CloseIcon />
            </Button>
          </Card>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default PROSEL;
