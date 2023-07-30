import { m } from "framer-motion";

import Button from "@/components/common/Button";
import Link from "@/components/common/Link";
import Screen from "@/components/common/Screen";
import ArrowLeftIcon from "@/components/icons/ArrowLeft";

import styles from "./custom404.module.scss";
import Illustration from "./Illustration";

const Custom404 = () => (
  <Screen backgroundColor="secondary" className={styles.custom404} firstFullHeight>
    <div className={styles.text}>
      <h1>Oops! Algo deu errado.</h1>
      <p>A Página que você está procurando não pôde ser encontrada.</p>

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

    <Illustration />
  </Screen>
);

export default Custom404;
