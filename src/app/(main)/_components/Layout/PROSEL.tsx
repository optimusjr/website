"use client";

import { AnimatePresence, m } from "framer-motion";
import { useState } from "react";

import Button from "@/components/Button";
import Card from "@/components/Card";
import CloseIcon from "@/components/icons/Close";
import Link from "@/components/Link";
import Typography from "@/components/Typography";
import config from "@/config";

const PROSEL = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!config.IS_PROSEL) {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <m.div
          animate={{ y: 0, opacity: 1 }}
          className="fixed bottom-0 left-0 sm:p-4"
          exit={{ y: 20, opacity: 0 }}
          initial={{ y: 20, opacity: 0 }}
          transition={{ linear: true }}
        >
          <Card
            cardLayout="none"
            className="flex flex-col items-start rounded-b-none p-6 shadow-2xl sm:max-w-lg sm:rounded-2xl"
          >
            <div className="flex w-full items-center justify-between">
              <Typography color="primary" variant="h3">
                Estamos contratando!
              </Typography>

              <Button onClick={() => setIsOpen(false)} variant="text">
                <CloseIcon />
              </Button>
            </div>
            <Typography>
              Estão abertas as inscrições para o nosso processo seletivo. Venha trabalhar com a
              gente!
            </Typography>

            <Button as={Link} href={config.PROSEL_FORM_URL} onClick={() => setIsOpen(false)}>
              Quero me Inscrever!
            </Button>
          </Card>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default PROSEL;
