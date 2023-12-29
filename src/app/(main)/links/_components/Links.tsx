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

import styles from "./links.module.scss";

const Links = () => (
  <Screen backgroundColor="secondary" className={styles.container} firstFullHeight>
    <div className={styles.title}>
      <Image
        alt="OPTIMUS Jr. Controle e Automação"
        placeholder="empty"
        src={OPTIMUSIcon}
        width={128}
      />
      <Typography component="h1" variant="h2">
        Links relacionados
      </Typography>
    </div>

    <SocialLinks />

    <ul className={styles.links}>
      {config.IS_PROSEL && (
        <LinkCard href={config.PROSEL_FORM_URL}>
          <PROSELIcon />

          <Typography component="h2" variant="h3">
            Se inscreva no PROSEL
          </Typography>
        </LinkCard>
      )}

      <LinkCard href={config.QUOTE_URL}>
        <ClipboardIcon />

        <Typography component="h2" variant="h3">
          Faça um orçamento
        </Typography>
      </LinkCard>

      <LinkCard href="/">
        <WebIcon />

        <Typography component="h2" variant="h3">
          Conheça nosso Website
        </Typography>
      </LinkCard>

      <LinkCard href="/#contact">
        <MessageIcon />

        <Typography component="h2" variant="h3">
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
        cardLayout="none"
        className={styles.linkCard}
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
