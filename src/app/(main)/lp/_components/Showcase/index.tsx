import type { StaticImageData } from "next/image";

import Screen from "@/components/others/Screen";
import StyledImage from "@/components/others/StyledImage";
import type { PropsWithChildren } from "@/utils/types/PropsWithChildren";

import Parallax from "./Parallax";

const Showcase = ({ children }: PropsWithChildren) => (
  <Screen bgColor="secondary">
    <Screen.title
      className={{ container: "p-4 pb-0 sm:p-8 sm:pb-0 md:p-16 md:pb-0" }}
      strap="Veja o que já fizemos"
    >
      Quer saber como criamos ambientes únicos e envolventes?
    </Screen.title>

    <Parallax baseVelocity={2}>{children}</Parallax>
  </Screen>
);

interface Props {
  image: StaticImageData;
  alt: string;
}

Showcase.image = ({ image, alt }: Props) => (
  <StyledImage
    className={{
      container:
        "mx-4 size-32 rounded-3xl shadow-lg sm:mx-8 sm:size-64 md:size-72 lg:size-96 2xl:size-[40rem]",
    }}
    alt={alt}
    src={image}
    title={alt}
  />
);

export default Showcase;
