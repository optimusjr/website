import { m } from "framer-motion";
import type { StaticImageData } from "next/image";

import Link from "@/components/lib/Link";
import Screen from "@/components/others/Screen";
import StyledImage from "@/components/others/StyledImage";
import Card from "@/components/ui/Card";
import fadeIn from "@/utils/animations/fadeIn";
import type { PropsWithChildren } from "@/utils/types/PropsWithChildren";

import FiveStars from "./FiveStars";

const Testimonials = ({ children }: PropsWithChildren) => (
  <Screen bgColor="white" gap padding>
    <Screen.title strap="Depoimentos">O que os nossos clientes dizem?</Screen.title>
    <ul className="grid gap-4 sm:gap-8 md:gap-16 lg:grid-cols-2 2xl:mx-24 2xl:gap-24">
      {children}
    </ul>
  </Screen>
);

interface Props {
  photo: StaticImageData;
  name: string;
  review: string;
  socialLink: string;
  socialNickname: string;
}

Testimonials.card = ({ photo, name, review, socialLink, socialNickname }: Props) => (
  <Card
    as={m.li}
    {...fadeIn}
    className="flex flex-col items-center gap-8 p-8 sm:flex-row lg:flex-col xl:flex-row"
  >
    <StyledImage
      alt={`Foto de ${name}`}
      className={{ container: "size-32 flex-shrink-0 rounded-full sm:size-52", image: "size-full" }}
      src={photo}
    />

    <div className="flex flex-col justify-between gap-8 text-center">
      <p className="text-lg/tight">{review}</p>
      <div className="flex flex-col items-center gap-1">
        <FiveStars />
        <Card.title>{name}</Card.title>
        <Link
          className="max-w-[40vw] overflow-hidden overflow-ellipsis border-b-1 text-lg/tight transition-colors hover:border-transparent"
          href={socialLink}
        >
          {socialNickname}
        </Link>
      </div>
    </div>
  </Card>
);

export default Testimonials;
