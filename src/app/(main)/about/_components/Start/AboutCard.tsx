"use client";

import { m } from "framer-motion";

import { Card, CardTitle } from "@/components/ui/Card";
import fadeIn from "@/utils/animations/fadeIn";
import type { PropsWithChildren } from "@/utils/types/PropsWithChildren";

interface Props extends PropsWithChildren {
  Icon: React.ComponentType<{ className?: string }>;
}

const AboutCard = ({ Icon, children }: Props) => (
  <Card
    as={m.li}
    bgColor="white"
    className="flex flex-col items-center gap-4 p-8 text-center"
    {...fadeIn}
  >
    <Icon className="w-32" />
    {children}
  </Card>
);

const AboutCardTitle = ({ children }: PropsWithChildren) => (
  <CardTitle as="h2">{children}</CardTitle>
);

const AboutCardDescription = ({ children }: PropsWithChildren) => <p>{children}</p>;

export { AboutCard, AboutCardDescription, AboutCardTitle };
export default AboutCard;
