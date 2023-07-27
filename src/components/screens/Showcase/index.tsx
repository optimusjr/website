import Card from "@/components/common/Card";
import Image from "@/components/common/Image";
import Screen from "@/components/common/Screen";

import Parallax from "./Parallax";
import styles from "./showcase.module.scss";

const Showcase = () => {
  return (
    <Screen backgroundColor="secondary" className={styles.screen} id="showcase">
      <Parallax baseVelocity={2}>
        <Card className={styles.card}>
          <Image
            alt="Imagem do serviço"
            height={600}
            src="https://random.imagecdn.app/1080/1080"
            width={600}
          />
        </Card>
        <Card className={styles.card}>
          <Image
            alt="Imagem do serviço"
            height={600}
            src="https://random.imagecdn.app/1081/1081"
            width={600}
          />
        </Card>
        <Card className={styles.card}>
          <Image
            alt="Imagem do serviço"
            height={600}
            src="https://random.imagecdn.app/1082/1082"
            width={600}
          />
        </Card>
        <Card className={styles.card}>
          <Image
            alt="Imagem do serviço"
            height={600}
            src="https://random.imagecdn.app/1083/1083"
            width={600}
          />
        </Card>
      </Parallax>
    </Screen>
  );
};

export default Showcase;
