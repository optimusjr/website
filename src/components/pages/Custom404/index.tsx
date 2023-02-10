import { m } from "framer-motion";
import Link from "next/link";

import Button from "@/components/common/Button";
import Page from "@/components/common/Page";
import ArrowLeftIcon from "@/components/icons/ArrowLeft";

import styles from "./custom404.module.scss";
import Illustration from "./Illustration";

const Custom404 = () => {
  return (
    <Page backgroundColor="secondary" className={styles.custom404} firstFullHeight>
      <div className={styles.text}>
        <h1>Oops! Algo deu errado.</h1>
        <p>A Página que você está procurando não pôde ser encontrada.</p>

        <m.div animate="rest" whileHover="hover">
          <Button as={Link} href="/">
            <ArrowLeftIcon
              as={m.svg}
              variants={{ hover: { x: [0, -5, 0], transition: { repeat: Infinity } } }}
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
