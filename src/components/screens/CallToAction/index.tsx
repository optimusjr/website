import BudgetButton from "@/components/common/BudgetButton";
import Screen from "@/components/common/Screen";

import styles from "./callToAction.module.scss";

const CallToAction = () => (
  <Screen backgroundColor="secondary" className={styles.screen}>
    <h2>O que você está esperando?</h2>
    <p>Descubra como a automação pode tornar sua vida mais confortável e eficiente.</p>

    <BudgetButton />
  </Screen>
);

export default CallToAction;
