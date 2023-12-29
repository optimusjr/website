import BackToHomeButton from "@/components/BackToHomeButton";
import Screen from "@/components/Screen";

import styles from "./custom404.module.scss";
import Illustration from "./Illustration";

const Custom404 = () => (
  <Screen backgroundColor="secondary" className={styles.custom404} firstFullHeight>
    <div className={styles.text}>
      <h1>Oops! Algo deu errado.</h1>
      <p>A Página que você está procurando não pôde ser encontrada.</p>

      <BackToHomeButton />
    </div>

    <Illustration />
  </Screen>
);

export default Custom404;
