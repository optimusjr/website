"use client";

import JSConfetti from "js-confetti";
import { useEffect } from "react";

import BackToHomeButton from "@/components/BackToHomeButton";
import Screen from "@/components/Screen";

import styles from "./thanks.module.scss";

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
    <Screen backgroundColor="secondary" className={styles.thanks} firstFullHeight>
      <div>
        <h1>Muito Obrigado!</h1>
        <p>Recebemos sua mensagem. Entraremos em contato com você o mais rápido possível.</p>

        <BackToHomeButton />
      </div>
    </Screen>
  );
};

export default Thanks;
