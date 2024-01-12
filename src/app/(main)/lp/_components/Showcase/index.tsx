import type { StaticImageData } from "next/image";

import Screen from "@/components/Screen";
import StyledImage from "@/components/StyledImage";

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
        <StyledImage
          className={{
            container:
              "mx-4 size-32 rounded-3xl shadow-lg sm:mx-8 sm:size-64 md:size-72 lg:size-96 2xl:size-[40rem]",
          }}
          alt={image.alt}
          key={key}
          src={image.image}
          title={image.alt}
        />
      ))}
    </Parallax>
  </Screen>
);

export default Showcase;
