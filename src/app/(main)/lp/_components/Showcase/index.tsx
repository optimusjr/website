import type { StaticImageData } from "next/image";

import Card from "@/components/Card";
import Image from "@/components/Image";
import Screen from "@/components/Screen";
import Title from "@/components/Title";

import Parallax from "./Parallax";

interface Props {
  images: {
    image: StaticImageData;
    alt: string;
  }[];
}

const Showcase = ({ images }: Props) => (
  <Screen bgColor="secondary">
    <Title
      className={{ container: "px-4 pt-4 sm:px-8 sm:pt-8 md:px-16 md:pt-16" }}
      strap="Veja o que já fizemos"
    >
      Quer saber como criamos ambientes únicos e envolventes?
    </Title>

    <Parallax baseVelocity={2}>
      {images.map((image, key) => (
        <Card
          className="mx-4 size-32 overflow-hidden p-0 sm:mx-8 sm:size-64 md:size-72 lg:size-80 2xl:size-[40rem]"
          key={key}
        >
          <Image
            alt={image.alt}
            className="transition-transform duration-1000 ease-in-out hover:scale-110"
            src={image.image}
            title={image.alt}
          />
        </Card>
      ))}
    </Parallax>
  </Screen>
);

export default Showcase;
