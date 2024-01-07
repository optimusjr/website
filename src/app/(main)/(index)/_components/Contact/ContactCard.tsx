"use client";

import { m } from "framer-motion";

import Card from "@/components/Card";
import Link from "@/components/Link";
import type { PropsWithChildren } from "@/utils/types/PropsWithChildren";

interface Props extends PropsWithChildren {
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const ContactCard = ({ href, Icon, children }: Props) => (
  <Link href={href}>
    <Card
      as={m.div}
      bgColor="white"
      className="flex h-full gap-4 shadow-md transition-shadow hover:shadow-lg"
      initial={{ scale: 1 }}
      transition={{ type: "spring", duration: 0.3 }}
      whileHover={{ scale: 1.01 }}
      padding
    >
      <Icon className="w-16 flex-shrink-0" />
      <div className="flex flex-col items-start gap-2">{children}</div>
    </Card>
  </Link>
);

ContactCard.title = ({ children }: PropsWithChildren) => (
  <h3 className="text-2xl/none font-bold uppercase text-primary-800">{children}</h3>
);

ContactCard.link = ({ children }: PropsWithChildren) => (
  <p className="max-w-[40vw] overflow-hidden overflow-ellipsis whitespace-nowrap border-b-1 text-lg/tight transition-colors hover:border-transparent">
    {children}
  </p>
);

export default ContactCard;
