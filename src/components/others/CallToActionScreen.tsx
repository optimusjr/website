"use client";

import Pattern from "@/components/others/Pattern";
import QuoteButton from "@/components/others/QuoteButton";
import Screen from "@/components/others/Screen";
import CogsPattern from "@/components/patterns/Cogs";

const CallToActionScreen = () => (
  <Screen className="relative px-2 py-16 sm:px-8 md:px-16" padding>
    <Pattern SVGPattern={CogsPattern} bgColor="tintSecondary" gradient="radial" />

    <h2 className="mb-2 text-center text-[length:calc(1.8rem+2vw)] font-bold uppercase leading-none text-white">
      O que você está esperando?
    </h2>
    <p className="text-center text-[length:calc(1rem+1vw)] leading-none text-white">
      Descubra como a automação pode tornar sua vida mais confortável e eficiente.
    </p>

    <div className="mt-4">
      <QuoteButton />
    </div>
  </Screen>
);

export default CallToActionScreen;
