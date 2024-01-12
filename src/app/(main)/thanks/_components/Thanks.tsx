"use client";

import JSConfetti from "js-confetti";
import { useEffect } from "react";

import BackToHomeButton from "@/components/BackToHomeButton";
import Pattern from "@/components/Pattern";
import RainPattern from "@/components/patterns/Rain";
import Screen from "@/components/Screen";

declare global {
  interface Window {
    jsConfetti?: JSConfetti;
  }
}

const Thanks = () => {
  useEffect(() => {
    if (!window.jsConfetti) {
      window.jsConfetti = new JSConfetti();
    }
    window.jsConfetti.addConfetti({
      confettiColors: ["#1a5fb4", "#26a269", "#c64600", "#a51d2d", "#613583", "#f5c211"],
    });
  }, []);

  return (
    <Screen className="relative justify-center gap-4 text-center" height="firstFull" padding>
      <Pattern SVGPattern={RainPattern} bgColor="secondary" gradient="linear" />

      <h1 className="text-5xl/none font-extrabold uppercase text-primary-800 sm:text-6xl">
        Muito Obrigado!
      </h1>
      <p className="max-w-4xl text-xl/none sm:text-3xl">
        Recebemos sua mensagem. Entraremos em contato com você o mais rápido possível.
      </p>

      <BackToHomeButton />
    </Screen>
  );
};

export default Thanks;
