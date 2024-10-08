"use client";

import { AnimatePresence, m } from "framer-motion";

import MenuIcon from "@/components/icons/Menu";
import Link from "@/components/lib/Link";
import Button from "@/components/ui/Button";
import config from "@/config";

import Links from "./Links";

interface Props {
  show: boolean;
  toggleShow: () => void;
  hideShow: () => void;
}

const Mobile = ({ show, toggleShow, hideShow }: Props) => (
  <>
    <div className="flex items-center justify-end p-3 lg:hidden">
      <Button aria-label="menu" onClick={toggleShow}>
        <MenuIcon open={show} />
      </Button>
    </div>

    <AnimatePresence initial={false}>
      {show && (
        <m.div
          variants={{
            open: {
              opacity: 1,
              height: "auto",
              transition: {
                type: "spring",
                stiffness: 550,
                damping: 30,
                restSpeed: 10,
              },
            },
            collapsed: { opacity: 0, height: 0 },
          }}
          animate="open"
          className="col-span-full"
          exit="collapsed"
          initial="collapsed"
        >
          <ul className="my-4 flex flex-col gap-4">
            <Links hideMobile={hideShow} />

            <li className="contents">
              <Button as={Link} className="m-auto" href={config.QUOTE_URL}>
                Faça um Orçamento
              </Button>
            </li>
          </ul>
        </m.div>
      )}
    </AnimatePresence>
  </>
);

export default Mobile;
