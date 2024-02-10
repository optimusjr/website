"use client";

import { AnimatePresence, m } from "framer-motion";

import SendButton from "@/components/others/SendButton";
import Button from "@/components/ui/Button";
import Link from "@/components/ui/Link";
import config from "@/config";
import fadeSwap from "@/utils/animations/fadeSwap";

import { PAGE_POSITION } from "./FormContext/helpers";
import useFormContext from "./FormContext/useFormContext";

const buttonClasses = "w-full justify-center sm:w-auto";
const anime = { ...fadeSwap, transition: { duration: 0.05 } };
const buttonProps = { as: m.button, className: buttonClasses, ...anime };

const PaginationControls = () => {
  const { currentPage, isLoading, goToPreviousPage } = useFormContext();

  return (
    <div className="flex flex-row-reverse flex-wrap-reverse items-end justify-between gap-4 sm:flex-nowrap">
      <AnimatePresence initial={false} mode="wait">
        {currentPage.position === PAGE_POSITION.FIRST && (
          <Button {...buttonProps} key="first">
            Vamos lá!
          </Button>
        )}
        {currentPage.position === PAGE_POSITION.MIDDLE && (
          <Button {...buttonProps} key="middle">
            Próxima página
          </Button>
        )}
        {currentPage.position === PAGE_POSITION.LAST && (
          <SendButton {...buttonProps} key="end" loading={isLoading} />
        )}

        {currentPage.position === PAGE_POSITION.FIRST ? (
          <m.div {...anime} className="mr-auto">
            <p>Prefere falar diretamente com um ser humano?</p>
            <p>
              <Link href={config.WHATSAPP_LINK}>Clique&nbsp;aqui</Link>
              &nbsp;e converse com um dos nossos vendedores.
            </p>
          </m.div>
        ) : (
          <Button onClick={goToPreviousPage} type="button" variant="outlined" {...buttonProps}>
            Página anterior
          </Button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PaginationControls;
