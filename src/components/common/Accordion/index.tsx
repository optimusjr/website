import { useState } from "react";

import Button from "@/components/common/Button";
import Typography from "@/components/common/Typography";
import ChevronIcon from "@/components/icons/Chevron";

import styles from "./accordion.module.scss";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Accordion = ({ title, children }: Props) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <li className={styles.item}>
      <div className={styles.title}>
        <Typography variant="h3">{title}</Typography>
        <Button onClick={toggleOpen} variant="text">
          <ChevronIcon open={open} />
        </Button>
      </div>
      {open ? children : null}
    </li>
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
