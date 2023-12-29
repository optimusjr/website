import type { StaticImageData } from "next/image";

import Card from "@/components/Card";
import Image from "@/components/Image";
import Screen from "@/components/Screen";
import Title from "@/components/Title";

import Parallax from "./Parallax";
import styles from "./showcase.module.scss";

interface Props {
  images: {
    image: StaticImageData;
    alt: string;
  }[];
}

const Showcase = ({ images }: Props) => (
  <Screen backgroundColor="secondary" className={styles.screen}>
    <Title className={styles.title} strap="Veja o que já fizemos">
      Quer saber como criamos ambientes únicos e envolventes?
    </Title>

    <Parallax baseVelocity={2}>
      {images.map((image, key) => (
        <Card className={styles.card} key={key}>
          <Image alt={image.alt} src={image.image} title={image.alt} width={600} />
        </Card>
      ))}
    </Parallax>
  </Screen>
);

export default Showcase;
