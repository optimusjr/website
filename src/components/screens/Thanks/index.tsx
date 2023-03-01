import { m } from "framer-motion";
import JSConfetti from "js-confetti";
import { useEffect } from "react";

import Button from "@/components/common/Button";
import Link from "@/components/common/Link";
import Screen from "@/components/common/Screen";
import ArrowLeftIcon from "@/components/icons/ArrowLeft";

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

        <m.div animate="rest" whileHover="hover">
          <Button as={Link} href="/">
            <ArrowLeftIcon
              as={m.svg}
              variants={{ hover: { x: [0, -5, 0], transition: { repeat: Infinity } } }}
            />
            Voltar para página inicial
          </Button>
        </m.div>
      </div>
    </Screen>
  );
};

export default Thanks;
