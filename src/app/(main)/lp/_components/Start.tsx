import { m } from "framer-motion";

import QuoteButton from "@/components/others/QuoteButton";
import Screen from "@/components/others/Screen";
import { Card, CardTitle } from "@/components/ui/Card";
import fadeIn from "@/utils/animations/fadeIn";
import type { PropsWithChildren } from "@/utils/types/PropsWithChildren";

const Start = ({ children }: PropsWithChildren) => (
  <Screen bgColor="secondary" gap padding>
    {children}
  </Screen>
);

const StartIntro = ({ children }: PropsWithChildren) => (
  <section className="flex flex-col items-center gap-4 py-8 text-center animate-fade-in lg:py-16">
    {children}

    <QuoteButton />
  </section>
);

interface TitleProps extends PropsWithChildren {
  strap: string;
}

const StartTitle = ({ children, strap }: TitleProps) => (
  <>
    <span className="text-[length:calc(1rem+1vw)] font-bold leading-none text-primary-800">
      {strap}
    </span>
    <h1 className="text-[length:calc(2rem+2vw)] font-extrabold uppercase leading-none">
      {children}
    </h1>
  </>
);

const StartText = ({ children }: PropsWithChildren) => (
  <p className="text-[length:calc(1rem+1vw)] leading-none">{children}</p>
);

const StartFeatures = ({ children }: PropsWithChildren) => (
  <ul className="grid gap-8 lg:grid-cols-3">{children}</ul>
);

interface FeatureProps {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const StartFeature = ({ Icon, title, description }: FeatureProps) => (
  <Card
    as={m.li}
    bgColor="white"
    className="flex flex-col items-center gap-4 p-8 text-center"
    {...fadeIn}
  >
    <Icon className="w-32" />

    <CardTitle as="h2">{title}</CardTitle>
    <p>{description}</p>
  </Card>
);

export { Start, StartFeature, StartFeatures, StartIntro, StartText, StartTitle };
export default Start;
