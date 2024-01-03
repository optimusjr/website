"use client";

import { AnimatePresence, m } from "framer-motion";

import Button from "@/components/Button";
import ChevronIcon from "@/components/icons/Chevron";
import Typography from "@/components/Typography";
import useToggle from "@/hooks/useToggle";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Accordion = ({ title, children }: Props) => {
  const [open, toggleOpen] = useToggle(false);

  return (
    <m.li>
      <div className="flex content-between items-start py-4">
        <Typography className="text-neutral-900" variant="h3">
          {title}
        </Typography>
        <Button onClick={toggleOpen} variant="text">
          <ChevronIcon open={open} />
        </Button>
      </div>

      <AnimatePresence>
        {open ? (
          <m.div
            animate={{ opacity: 1, height: "auto" }}
            className="overflow-hidden"
            exit={{ opacity: 0, height: 0 }}
            initial={{ opacity: 0, height: 0 }}
          >
            <div className="pb-4">{children}</div>
          </m.div>
        ) : null}
      </AnimatePresence>
      <hr className="m-0 border-0 border-t-[1.5px] border-neutral-400" />
    </m.li>
  );
};

interface ContainerProps {
  children: React.ReactNode;
}

const AccordionContainer = ({ children }: ContainerProps) => {
  return <ul className="flex flex-col gap-8">{children}</ul>;
};

export default Accordion;
export { Accordion, AccordionContainer };
