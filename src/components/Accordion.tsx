"use client";

import { AnimatePresence, m } from "framer-motion";
import { tv } from "tailwind-variants";

import Button from "@/components/Button";
import ChevronIcon from "@/components/icons/Chevron";
import useToggle from "@/hooks/useToggle";
import type { PropsWithChildren } from "@/utils/types/PropsWithChildren";

interface Props extends PropsWithChildren {
  className?: string;
}

const accordion = tv({
  base: "flex flex-col gap-8",
});

const Accordion = ({ children, className }: Props) => {
  return <ul className={accordion({ className })}>{children}</ul>;
};

interface ItemProps extends PropsWithChildren {
  title: string;
}

Accordion.item = ({ title, children }: ItemProps) => {
  const [open, toggleOpen] = useToggle(false);

  return (
    <li>
      <div className="flex content-between items-start">
        <h3 className="mb-4 text-lg/none font-semibold uppercase md:text-2xl/none">{title}</h3>
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
      <hr className="m-0 mb-4 border-0 border-t-[1.5px] border-neutral-400" />
    </li>
  );
};

export default Accordion;
