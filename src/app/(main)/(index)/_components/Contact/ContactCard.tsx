"use client";

import { m } from "framer-motion";

import Card from "@/components/Card";
import Link from "@/components/Link";
import type { PropsWithChildren } from "@/utils/types/PropsWithChildren";

interface Props extends PropsWithChildren {
  href: string;
  Icon: React.ReactNode;
}

const ContactCard = ({ href, Icon, children }: Props) => (
  <Link href={href}>
    <Card
      as={m.div}
      className="grid h-full grid-cols-[64px_auto] shadow-md transition-shadow hover:shadow-lg [&>svg]:w-16"
      initial={{ scale: 1 }}
      transition={{ type: "spring", duration: 0.3 }}
      whileHover={{ scale: 1.01 }}
    >
      {Icon}
      <div className="flex flex-col items-start gap-2">{children}</div>
    </Card>
  </Link>
);

export default ContactCard;
