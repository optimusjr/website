"use client";

import JSConfetti from "js-confetti";
import { useEffect } from "react";

import BackToHomeButton from "@/components/BackToHomeButton";
import Screen from "@/components/Screen";
import Typography from "@/components/Typography";

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
    <Screen backgroundColor="secondary" className="justify-center gap-4" height="firstFull" padding>
      <Typography className="text-[calc(2rem+2vw)] leading-none" color="primary" variant="h1">
        Muito Obrigado!
      </Typography>
      <Typography className="text-[calc(1rem+1vw)] leading-none">
        Recebemos sua mensagem. Entraremos em contato com você o mais rápido possível.
      </Typography>

      <BackToHomeButton />
    </Screen>
  );
};

export default Thanks;
