"use client";

import { AnimatePresence, m } from "framer-motion";

import Button from "@/components/Button";
import ChevronIcon from "@/components/icons/Chevron";
import Typography from "@/components/Typography";
import useToggle from "@/hooks/useToggle";

import styles from "./accordion.module.scss";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Accordion = ({ title, children }: Props) => {
  const [open, toggleOpen] = useToggle(false);

  return (
    <m.li className={styles.item}>
      <div className={styles.title}>
        <Typography variant="h3">{title}</Typography>
        <Button onClick={toggleOpen} variant="text">
          <ChevronIcon open={open} />
        </Button>
      </div>

      <AnimatePresence>
        {open ? (
          <m.div
            animate={{ opacity: 1, height: "auto" }}
            className={styles.contentContainer}
            exit={{ opacity: 0, height: 0 }}
            initial={{ opacity: 0, height: 0 }}
          >
            <div className={styles.content}>{children}</div>
          </m.div>
        ) : null}
      </AnimatePresence>
      <hr className={styles.line} />
    </m.li>
  );
};

interface ContainerProps {
  children: React.ReactNode;
}

const AccordionContainer = ({ children }: ContainerProps) => {
  return <ul className={styles.container}>{children}</ul>;
};

export default Accordion;
export { Accordion, AccordionContainer };