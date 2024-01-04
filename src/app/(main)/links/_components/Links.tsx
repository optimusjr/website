"use client";

import { m } from "framer-motion";

import OPTIMUSIcon from "@/app/icon.svg";
import Card from "@/components/Card";
import ClipboardIcon from "@/components/icons/Clipboard";
import MessageIcon from "@/components/icons/Message";
import PROSELIcon from "@/components/icons/PROSEL";
import WebIcon from "@/components/icons/Web";
import Image from "@/components/Image";
import Link from "@/components/Link";
import Screen from "@/components/Screen";
import SocialLinks from "@/components/SocialLinks";
import Typography from "@/components/Typography";
import config from "@/config";
import variables from "@/styles/variables.module.scss";

const Links = () => (
  <Screen backgroundColor="secondary" className="gap-8" height="firstFull" padding>
    <div className="flex flex-col gap-4 sm:gap-8">
      <Image
        alt="OPTIMUS Jr. Controle e Automação"
        className="m-auto w-24 sm:w-32"
        placeholder="empty"
        src={OPTIMUSIcon}
      />
      <Typography className="text-center text-5xl sm:text-6xl" variant="h1">
        Links relacionados
      </Typography>
    </div>

    <SocialLinks />

    <ul className="flex w-[32rem] max-w-[90vw] flex-col gap-8">
      {config.IS_PROSEL && (
        <LinkCard href={config.PROSEL_FORM_URL}>
          <PROSELIcon />

          <Typography className="text-2xl" color="primary" component="h2" variant="h3">
            Se inscreva no PROSEL
          </Typography>
        </LinkCard>
      )}

      <LinkCard href={config.QUOTE_URL}>
        <ClipboardIcon />

        <Typography className="text-2xl" color="primary" component="h2" variant="h3">
          Faça um orçamento
        </Typography>
      </LinkCard>

      <LinkCard href="/">
        <WebIcon />

        <Typography className="text-2xl" color="primary" component="h2" variant="h3">
          Conheça nosso Website
        </Typography>
      </LinkCard>

      <LinkCard href="/#contact">
        <MessageIcon />

        <Typography className="text-2xl" color="primary" component="h2" variant="h3">
          Entre em contato
        </Typography>
      </LinkCard>
    </ul>
  </Screen>
);

interface LinkCardProps {
  href: string;
  children: React.ReactNode;
}

const LinkCard = ({ href, children }: LinkCardProps) => (
  <li>
    <Link href={href}>
      <Card
        as={m.div}
        className="grid grid-cols-[48px_auto] items-center p-4 [&>svg]:w-12"
        initial={{ scale: 1, boxShadow: variables.shadowMd }}
        transition={{ type: "spring", duration: 0.3 }}
        whileHover={{ scale: 1.01, boxShadow: variables.shadowLg }}
      >
        {children}
      </Card>
    </Link>
  </li>
);

export default Links;
