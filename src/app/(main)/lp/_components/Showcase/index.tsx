import type { StaticImageData } from "next/image";

import Card from "@/components/Card";
import Image from "@/components/Image";
import Screen from "@/components/Screen";

import Parallax from "./Parallax";

interface Props {
  images: {
    image: StaticImageData;
    alt: string;
  }[];
}

const Showcase = ({ images }: Props) => (
  <Screen bgColor="secondary">
    <Screen.title
      className={{ container: "p-4 pb-0 sm:p-8 sm:pb-0 md:p-16 md:pb-0" }}
      strap="Veja o que já fizemos"
    >
      Quer saber como criamos ambientes únicos e envolventes?
    </Screen.title>

    <Parallax baseVelocity={2}>
      {images.map((image, key) => (
        <Card
          className="mx-4 size-32 overflow-hidden p-0 sm:mx-8 sm:size-64 md:size-72 lg:size-96 2xl:size-[40rem]"
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
