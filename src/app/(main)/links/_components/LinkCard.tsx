"use client";

import { m } from "framer-motion";

import Link from "@/components/lib/Link";
import { Card, CardTitle } from "@/components/ui/Card";
import scaleOnHover from "@/utils/animations/scaleOnHover";
import type { PropsWithChildren } from "@/utils/types/PropsWithChildren";

interface Props extends PropsWithChildren {
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const LinkCard = ({ href, Icon, children }: Props) => (
  <m.li {...scaleOnHover}>
    <Card
      as={Link}
      bgColor="white"
      className="grid grid-cols-[48px_auto] items-center gap-4 p-4 shadow-md transition-shadow hover:shadow-lg"
      href={href}
    >
      <Icon className="w-12" />
      <CardTitle as="h2">{children}</CardTitle>
    </Card>
  </m.li>
);

export default LinkCard;
