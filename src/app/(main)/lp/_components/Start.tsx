import { m } from "framer-motion";

import QuoteButton from "@/components/others/QuoteButton";
import Screen from "@/components/others/Screen";
import Card from "@/components/ui/Card";
import fadeIn from "@/utils/animations/fadeIn";
import type { PropsWithChildren } from "@/utils/types/PropsWithChildren";

const Start = ({ children }: PropsWithChildren) => (
  <Screen bgColor="secondary" gap padding>
    {children}
  </Screen>
);

Start.intro = ({ children }: PropsWithChildren) => (
  <section className="flex flex-col items-center gap-4 py-8 text-center animate-fade-in lg:py-16">
    {children}

    <QuoteButton />
  </section>
);

Start.span = ({ children }: PropsWithChildren) => (
  <span className="text-[length:calc(1rem+1vw)] font-bold leading-none text-primary-800">
    {children}
  </span>
);

Start.h1 = ({ children }: PropsWithChildren) => (
  <h1 className="text-[length:calc(2rem+2vw)] font-extrabold uppercase leading-none">{children}</h1>
);

Start.p = ({ children }: PropsWithChildren) => (
  <p className="text-[length:calc(1rem+1vw)] leading-none">{children}</p>
);

Start.features = ({ children }: PropsWithChildren) => (
  <ul className="grid gap-8 lg:grid-cols-3">{children}</ul>
);

interface FeatureProps {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

Start.feature = ({ Icon, title, description }: FeatureProps) => (
  <Card
    as={m.li}
    bgColor="white"
    className="flex flex-col items-center gap-4 p-8 text-center"
    {...fadeIn}
  >
    <Icon className="w-32" />

    <Card.title as="h2">{title}</Card.title>
    <p>{description}</p>
  </Card>
);

export default Start;
