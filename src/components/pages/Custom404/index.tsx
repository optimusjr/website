import { m } from "framer-motion";
import Link from "next/link";

import Button from "@/components/common/Button";
import Page from "@/components/common/Page";

import styles from "./custom404.module.scss";
import Illustration from "./Illustration";

const Custom404 = () => {
  return (
    <Page backgroundColor="secondary" className={styles.custom404}>
      <div>
        <h1>Oops! Algo deu errado.</h1>
        <p>A Página que você está procurando não pôde ser encontrada.</p>

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

      <Illustration />
    </Page>
  );
};

export default Custom404;
