"use client";

import OPTIMUSIcon from "@/app/icon.svg";
import ClipboardIcon from "@/components/icons/Clipboard";
import MessageIcon from "@/components/icons/Message";
import PROSELIcon from "@/components/icons/PROSEL";
import WebIcon from "@/components/icons/Web";
import Image from "@/components/lib/Image";
import Screen from "@/components/others/Screen";
import SocialLinks from "@/components/others/SocialLinks";
import config from "@/config";

import LinkCard from "./LinkCard";

const Links = () => (
  <Screen bgColor="secondary" className="gap-8" height="firstFull" padding>
    <div className="flex flex-col gap-4 sm:gap-8">
      <Image
        alt="OPTIMUS Jr. Controle e Automação"
        className="m-auto w-24 sm:w-32"
        src={OPTIMUSIcon}
      />
      <h1 className="text-center text-4xl font-extrabold uppercase sm:text-5xl md:text-6xl">
        Links relacionados
      </h1>
    </div>

    <SocialLinks />

    <ul className="flex w-[32rem] max-w-[90vw] flex-col gap-8">
      {config.IS_PROSEL && (
        <LinkCard Icon={PROSELIcon} href={config.PROSEL_FORM_URL}>
          Se inscreva no PROSEL
        </LinkCard>
      )}

      <LinkCard Icon={ClipboardIcon} href={config.QUOTE_URL}>
        Faça um orçamento
      </LinkCard>

      <LinkCard Icon={WebIcon} href="/">
        Conheça nosso Website
      </LinkCard>

      <LinkCard Icon={MessageIcon} href="/#contact">
        Entre em contato
      </LinkCard>
    </ul>
  </Screen>
);

export default Links;
