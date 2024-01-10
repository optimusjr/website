import { m } from "framer-motion";
import type { StaticImageData } from "next/image";

import Card from "@/components/Card";
import Image from "@/components/Image";
import Link from "@/components/Link";
import Screen from "@/components/Screen";
import Title from "@/components/Title";
import fadeIn from "@/utils/animations/fadeIn";

import FiveStars from "./FiveStars";

type Testimonial = {
  photo: StaticImageData;
  name: string;
  review: string;
  socialLink: string;
  socialNickname: string;
};

const Testimonials = ({ testimonials }: { testimonials: Testimonial[] }) => (
  <Screen bgColor="white" gap padding>
    <Title strap="Depoimentos">O que os nossos clientes dizem?</Title>
    <ul className="grid gap-4 sm:gap-8 md:gap-16 lg:grid-cols-2 2xl:mx-24 2xl:gap-24">
      {testimonials.map((testimonial, key) => (
        <TestimonialCard key={key} testimonial={testimonial} />
      ))}
    </ul>
  </Screen>
);

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <Card
    as={m.li}
    {...fadeIn}
    className="flex flex-col items-center gap-8 p-8 sm:flex-row lg:flex-col xl:flex-row"
  >
    <div className="size-32 flex-shrink-0 overflow-hidden rounded-full sm:size-52">
      <Image
        alt={`Foto de ${testimonial.name}`}
        className="size-full transition-transform duration-1000 ease-in-out hover:scale-110"
        src={testimonial.photo}
      />
    </div>

    <div className="flex flex-col justify-between gap-8 text-center">
      <p className="text-lg/tight">{testimonial.review}</p>
      <div className="flex flex-col items-center gap-1">
        <FiveStars />
        <h3 className="text-2xl/none font-bold uppercase text-primary-800">{testimonial.name}</h3>
        <Link
          className="max-w-[40vw] overflow-hidden overflow-ellipsis border-b-1 text-lg/tight transition-colors hover:border-transparent"
          href={testimonial.socialLink}
        >
          {testimonial.socialNickname}
        </Link>
      </div>
    </div>
  </Card>
);

export default Testimonials;
