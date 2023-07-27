import Card from "@/components/common/Card";
import Screen from "@/components/common/Screen";

import Parallax from "./Parallax";
import styles from "./showcase.module.scss";

const Showcase = () => {
  return (
    <Screen backgroundColor="secondary" className={styles.page} id="showcase">
      <Parallax baseVelocity={2}>
        <Card className={styles.card}>
          <img alt="Imagem do serviço" src="https://random.imagecdn.app/1080/1080" />
        </Card>
        <Card className={styles.card}>
          <img alt="Imagem do serviço" src="https://random.imagecdn.app/1081/1081" />
        </Card>
        <Card className={styles.card}>
          <img alt="Imagem do serviço" src="https://random.imagecdn.app/1082/1082" />
        </Card>
        <Card className={styles.card}>
          <img alt="Imagem do serviço" src="https://random.imagecdn.app/1083/1083" />
        </Card>
      </Parallax>
    </Screen>
  );
};

export default Showcase;
