import { m } from "framer-motion";

import Card from "@/components/common/Card";
import Image from "@/components/common/Image";
import Link from "@/components/common/Link";
import Screen from "@/components/common/Screen";
import SocialLinks from "@/components/common/SocialLinks";
import Typography from "@/components/common/Typography";
import ClipboardIcon from "@/components/icons/Clipboard";
import MessageIcon from "@/components/icons/message";
import PROSELIcon from "@/components/icons/PROSEL";
import WebIcon from "@/components/icons/Web";
import OPTIMUSIcon from "@/images/OPTIMUS/icon.svg";
import variables from "@/styles/variables.module.scss";

import styles from "./links.module.scss";

const Links = () => {
  return (
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
        {process.env.IS_PROSEL === "true" && (
          <LinkCard href={process.env.PROSEL_FORM_URL as string}>
            <PROSELIcon />

            <Typography component="h2" variant="h3">
              Se inscreva no PROSEL
            </Typography>
          </LinkCard>
        )}

        <LinkCard href="https://k4x8qpevahv.typeform.com/to/RF8uSRDA">
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
};

interface LinkCardProps {
  href: string;
  children: React.ReactNode;
}

const LinkCard = ({ href, children }: LinkCardProps) => {
  return (
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
};

export default Links;
