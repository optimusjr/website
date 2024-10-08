import { m } from "framer-motion";
import type { StaticImageData } from "next/image";

import { Screen, ScreenTitle } from "@/components/others/Screen";
import StyledImage from "@/components/others/StyledImage";
import { Card, CardTitle } from "@/components/ui/Card";
import Link from "@/components/ui/Link";
import fadeIn from "@/utils/animations/fadeIn";
import type { PropsWithChildren } from "@/utils/types/PropsWithChildren";

import FiveStars from "./FiveStars";

const Testimonials = ({ children }: PropsWithChildren) => (
  <Screen bgColor="white" gap padding>
    <ScreenTitle strap="Depoimentos">O que os nossos clientes dizem?</ScreenTitle>
    <ul className="flex gap-4 sm:gap-8 md:gap-16 lg:grid-cols-2 2xl:mx-24 2xl:gap-24">
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

const TestimonialsCard = ({ photo, name, review, socialLink, socialNickname }: Props) => (
  <Card
    as={m.li}
    {...fadeIn}
    className="flex max-w-[576px] flex-col items-center gap-8 p-8 sm:flex-row lg:flex-col xl:flex-row"
  >
    <StyledImage
      alt={`Foto de ${name}`}
      className={{ wrapper: "size-32 flex-shrink-0 rounded-full sm:size-52", image: "size-full" }}
      src={photo}
    />

    <div className="flex flex-col justify-between gap-8 text-center">
      <p>{review}</p>
      <div className="flex flex-col items-center gap-1">
        <FiveStars />
        <CardTitle>{name}</CardTitle>
        <Link href={socialLink}>{socialNickname}</Link>
      </div>
    </div>
  </Card>
);

export { Testimonials, TestimonialsCard };
export default Testimonials;
