"use client";

import Pattern from "@/components/Pattern";
import CogsPattern from "@/components/patterns/Cogs";
import QuoteButton from "@/components/QuoteButton";
import Screen from "@/components/Screen";
import Typography from "@/components/Typography";

const CallToAction = () => (
  <Screen className="relative px-2 py-16 sm:px-8 md:px-16" padding>
    <Pattern SVGPattern={CogsPattern} bgColor="secondary" gradient="radial" />

    <Typography className="text-[length:calc(1.8rem+2vw)]" variant="h2">
      O que você está esperando?
    </Typography>
    <Typography className="text-[length:calc(1rem+1vw)]">
      Descubra como a automação pode tornar sua vida mais confortável e eficiente.
    </Typography>

    <QuoteButton />
  </Screen>
);

export default CallToAction;
