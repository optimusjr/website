import { m } from "framer-motion";
import Link from "next/link";

import Card from "@/components/common/Card";
import variables from "@/styles/variables.module.scss";

import styles from "./contactCard.module.scss";

interface Props {
  href: string;
  children: React.ReactNode;
}

const ContactCard = ({ href, children }: Props) => {
  return (
    <Link href={href}>
      <Card
        as={m.div}
        cardLayout="none"
        className={styles.contactCard}
        initial={{ scale: 1, boxShadow: variables.shadowMd }}
        whileHover={{ scale: 1.01, boxShadow: variables.shadowLg }}
        transition={{ type: "spring", duration: 0.3 }}
      >
        {children}
      </Card>
    </Link>
  );
};

export default ContactCard;
