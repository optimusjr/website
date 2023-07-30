import { m } from "framer-motion";

import Card from "@/components/common/Card";
import Link from "@/components/common/Link";
import variables from "@/styles/variables.module.scss";

import styles from "./contactCard.module.scss";

interface Props {
  href: string;
  children: React.ReactNode;
}

const ContactCard = ({ href, children }: Props) => (
  <Link href={href}>
    <Card
      as={m.div}
      cardLayout="none"
      className={styles.contactCard}
      initial={{ scale: 1, boxShadow: variables.shadowMd }}
      transition={{ type: "spring", duration: 0.3 }}
      whileHover={{ scale: 1.01, boxShadow: variables.shadowLg }}
    >
      {children}
    </Card>
  </Link>
);

export default ContactCard;
