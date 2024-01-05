"use client";

import { AnimatePresence, m } from "framer-motion";
import { tv } from "tailwind-variants";

import Button from "@/components/Button";
import ChevronIcon from "@/components/icons/Chevron";
import Typography from "@/components/Typography";
import useToggle from "@/hooks/useToggle";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const accordion = tv({
  base: "flex flex-col gap-8",
});

const Accordion = ({ children, className }: Props) => {
  return <ul className={accordion({ className })}>{children}</ul>;
};

interface ItemProps {
  title: string;
  children: React.ReactNode;
}

Accordion.item = ({ title, children }: ItemProps) => {
  const [open, toggleOpen] = useToggle(false);

  return (
    <m.li>
      <div className="flex content-between items-start py-4">
        <Typography variant="h3">{title}</Typography>
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

export default Accordion;
