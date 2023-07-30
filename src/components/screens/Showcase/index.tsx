import Card from "@/components/common/Card";
import Image from "@/components/common/Image";
import Screen from "@/components/common/Screen";
import Title from "@/components/common/Title";
import app from "@/images/lights/app.png";
import electrician from "@/images/lights/electrician.png";
import lamps from "@/images/lights/lamps.png";
import switches from "@/images/lights/switches.png";

import Parallax from "./Parallax";
import styles from "./showcase.module.scss";

const Showcase = () => (
  <Screen backgroundColor="secondary" className={styles.screen} id="showcase">
    <Title className={styles.title} strap="Veja o que já fizemos">
      Quer saber como criamos ambientes únicos e envolventes?
    </Title>

    <Parallax baseVelocity={2}>
      <Card className={styles.card}>
        <Image alt="Imagem do serviço" src={app} width={600} />
      </Card>
      <Card className={styles.card}>
        <Image alt="Imagem do serviço" src={electrician} width={600} />
      </Card>
      <Card className={styles.card}>
        <Image alt="Imagem do serviço" src={lamps} width={600} />
      </Card>
      <Card className={styles.card}>
        <Image alt="Imagem do serviço" src={switches} width={600} />
      </Card>
    </Parallax>
  </Screen>
);

export default Showcase;
