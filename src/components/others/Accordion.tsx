"use client";

import { AnimatePresence, m } from "framer-motion";
import { tv } from "tailwind-variants";

import ChevronIcon from "@/components/icons/Chevron";
import Button from "@/components/ui/Button";
import useToggle from "@/hooks/useToggle";
import type { PropsWithChildren } from "@/utils/types/PropsWithChildren";

const accordion = tv({
  base: "flex flex-col gap-8",
});

interface Props extends PropsWithChildren {
  className?: string;
}

const Accordion = ({ children, className }: Props) => (
  <ul className={accordion({ className })}>{children}</ul>
);

interface ItemProps extends PropsWithChildren {
  title: string;
}

Accordion.item = ({ title, children }: ItemProps) => {
  const [open, toggleOpen] = useToggle(false);

  return (
    <li>
      <div className="flex items-start justify-between">
        <h3 className="my-2 font-semibold uppercase leading-none md:text-xl/none">{title}</h3>
        <Button className="ml-2" onClick={toggleOpen} variant="text">
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
    </li>
  );
};

export default Accordion;
