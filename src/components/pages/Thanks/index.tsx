import { m } from "framer-motion";
import JSConfetti from "js-confetti";
import Link from "next/link";
import { useEffect } from "react";

import Button from "@/components/common/Button";
import Page from "@/components/common/Page";

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
    <Page backgroundColor="secondary" className={styles.custom404}>
      <div>
        <h1>Muito Obrigado!</h1>
        <p>Recebemos sua mensagem. Entraremos em contato com você o mais rápido possível.</p>

        <m.div className={styles.right} whileHover="hover" animate="rest">
          <Button as={Link} href="/">
            <m.img
              variants={{ hover: { x: [0, -5, 0], transition: { repeat: Infinity } } }}
              src="/images/icons/arrow-left.svg"
              alt="Seta apontando para esquerda"
              height="24"
              width="24"
            />

            <div>Voltar para página inicial</div>
          </Button>
        </m.div>
      </div>
    </Page>
  );
};

export default Thanks;
