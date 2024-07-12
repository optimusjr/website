"use client";

import { m } from "framer-motion";

import Link from "@/components/lib/Link";
import { Card, CardTitle } from "@/components/ui/Card";
import { linkStyle } from "@/components/ui/Link";
import scaleOnHover from "@/utils/animations/scaleOnHover";
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
      className="flex h-full gap-4 p-8 shadow-md transition-shadow hover:shadow-lg"
      {...scaleOnHover}
    >
      <Icon className="w-16" />
      <div className="flex flex-col items-start gap-2">{children}</div>
    </Card>
  </Link>
);

const ContactCardTitle = ({ children }: PropsWithChildren) => <CardTitle>{children}</CardTitle>;

const ContactCardLink = ({ children }: PropsWithChildren) => (
  <p className={linkStyle()}>{children}</p>
);

export { ContactCard, ContactCardLink, ContactCardTitle };
export default ContactCard;
