"use client";

import { AnimatePresence, m } from "framer-motion";

import Button from "@/components/Button";
import LoadingIcon from "@/components/icons/Loading";
import SendIcon from "@/components/icons/Send";
import StyledLink from "@/components/StyledLink";
import config from "@/config";
import fadeSwap from "@/utils/animations/fadeSwap";

import { PAGE_POSITION } from "./FormContext/helpers";
import useFormContext from "./FormContext/useFormContext";

const PaginationControls = () => (
  <div className="flex flex-row-reverse flex-wrap-reverse justify-between gap-4 sm:flex-nowrap">
    <AnimatePresence initial={false} mode="popLayout">
      <Button className="w-full justify-center sm:w-auto">
        <RightButtonContent />
      </Button>

      <LeftButton />
    </AnimatePresence>
  </div>
);

const RightButtonContent = () => {
  const { currentPage, isLoading } = useFormContext();

  if (currentPage.position === PAGE_POSITION.FIRST) {
    return <m.div {...fadeSwap}>Vamos lá!</m.div>;
  }

  if (currentPage.position === PAGE_POSITION.LAST) {
    if (isLoading) {
      return (
        <>
          <m.div {...fadeSwap} className="leading-0">
            <LoadingIcon
              animate={{ rotate: 360 }}
              as={m.svg}
              transition={{ ease: "linear", duration: 1, repeat: Infinity }}
            />
          </m.div>
          <m.div {...fadeSwap}>Enviando</m.div>
        </>
      );
    }

    return (
      <>
        <SendIcon as={m.svg} {...fadeSwap} /> <m.div {...fadeSwap}>Enviar</m.div>
      </>
    );
  }

  return <m.div {...fadeSwap}>Próxima página</m.div>;
};

const LeftButton = () => {
  const { currentPage, goToPreviousPage } = useFormContext();

  if (currentPage.position !== PAGE_POSITION.FIRST) {
    return (
      <Button
        className="w-full justify-center sm:w-auto"
        onClick={goToPreviousPage}
        type="button"
        variant="outlined"
      >
        Página anterior
      </Button>
    );
  }

  return (
    <div>
      <p className="text-lg/tight">Prefere falar diretamente com um ser humano?</p>
      <p className="text-lg/tight">
        <StyledLink href={`https://wa.me/${config.WHATSAPP.replace(/[^0-9]/g, "")}`}>
          Clique&nbsp;aqui
        </StyledLink>
        &nbsp;e converse com um dos nossos vendedores.
      </p>
    </div>
  );
};

export default PaginationControls;
