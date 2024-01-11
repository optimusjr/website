"use client";

import { m } from "framer-motion";

import Card from "@/components/Card";
import Link from "@/components/Link";
import type { PropsWithChildren } from "@/utils/types/PropsWithChildren";

interface Props extends PropsWithChildren {
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const LinkCard = ({ href, Icon, children }: Props) => (
  <m.li
    initial={{ scale: 1 }}
    transition={{ type: "spring", duration: 0.3 }}
    whileHover={{ scale: 1.01 }}
  >
    <Card
      as={Link}
      bgColor="white"
      className="grid grid-cols-[48px_auto] items-center gap-4 p-4 shadow-md transition-shadow hover:shadow-lg"
      href={href}
    >
      <Icon className="w-12" />
      <Card.title as="h2">{children}</Card.title>
    </Card>
  </m.li>
);

export default LinkCard;
