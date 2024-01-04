"use client";

import Pattern from "@/components/Pattern";
import CogsPattern from "@/components/patterns/Cogs";
import QuoteButton from "@/components/QuoteButton";
import Screen from "@/components/Screen";
import Typography from "@/components/Typography";

const CallToAction = () => (
  <Screen className="relative px-2 py-16 shadow-inner shadow-black drop-shadow-md sm:px-8 md:px-16">
    <Pattern SVGPattern={CogsPattern} backgroundColor="green" gradient="radial" />

    <Typography className="text-[length:calc(1.8rem+2vw)] text-white" variant="h2">
      O que você está esperando?
    </Typography>
    <Typography className="text-[length:calc(1rem+1vw)] text-white">
      Descubra como a automação pode tornar sua vida mais confortável e eficiente.
    </Typography>

    <QuoteButton />
  </Screen>
);

export default CallToAction;
