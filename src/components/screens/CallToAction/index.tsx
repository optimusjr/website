import { m } from "framer-motion";

import Button from "@/components/common/Button";
import Link from "@/components/common/Link";
import Screen from "@/components/common/Screen";
import ArrowRightIcon from "@/components/icons/ArrowRight";
import config from "@/config";

import styles from "./callToAction.module.scss";

const CallToAction = () => {
  return (
    <Screen backgroundColor="secondary" className={styles.screen}>
      <h2>O que você está esperando?</h2>
      <p>Descubra como a automação pode tornar sua vida mais confortável e eficiente.</p>

      <m.div animate="rest" whileHover="hover">
        <Button as={Link} href={config.BUDGET_URL}>
          Faça um Orçamento
          <ArrowRightIcon
            as={m.svg}
            variants={{ hover: { x: [0, 5, 0], transition: { repeat: Infinity } } }}
          />
        </Button>
      </m.div>
    </Screen>
  );
};

export default CallToAction;
