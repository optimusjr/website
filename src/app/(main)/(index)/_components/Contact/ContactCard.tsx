"use client";

import { m } from "framer-motion";

import Card from "@/components/Card";
import Link from "@/components/Link";
import variables from "@/styles/variables.module.scss";

interface Props {
  href: string;
  Icon: React.ReactNode;
  children: React.ReactNode;
}

const ContactCard = ({ href, Icon, children }: Props) => (
  <Link href={href}>
    <Card
      as={m.div}
      className="grid h-full grid-cols-[64px_auto] [&>svg]:w-16"
      initial={{ scale: 1, boxShadow: variables.shadowMd }}
      transition={{ type: "spring", duration: 0.3 }}
      whileHover={{ scale: 1.01, boxShadow: variables.shadowLg }}
    >
      {Icon}
      <div className="flex flex-col items-start gap-2">{children}</div>
    </Card>
  </Link>
);

export default ContactCard;
