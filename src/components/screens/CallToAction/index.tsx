import Pattern from "@/components/common/Pattern";
import QuoteButton from "@/components/common/QuoteButton";
import Screen from "@/components/common/Screen";
import CogsPattern from "@/components/patterns/Cogs";

import styles from "./callToAction.module.scss";

const CallToAction = () => (
  <Screen backgroundColor="none" className={styles.screen}>
    <Pattern SVGPattern={CogsPattern} backgroundColor="green" gradient="radial" />

    <h2>O que você está esperando?</h2>
    <p>Descubra como a automação pode tornar sua vida mais confortável e eficiente.</p>

    <QuoteButton />
  </Screen>
);

export default CallToAction;