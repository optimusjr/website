import type { StaticImageData } from "next/image";

import FiveStars from "@/components/FiveStars";
import Image from "@/components/Image";
import Link from "@/components/Link";
import ListCard from "@/components/ListCard";
import Screen from "@/components/Screen";
import Title from "@/components/Title";
import Typography from "@/components/Typography";

interface Props {
  testimonials: {
    photo: StaticImageData;
    name: string;
    review: string;
    socialLink: string;
    socialNickname: string;
  }[];
}

const Testimonials = ({ testimonials }: Props) => (
  <Screen backgroundColor="white" gap padding>
    <Title strap="Depoimentos">O que os nossos clientes dizem?</Title>
    <ul className="grid gap-4 sm:gap-8 md:grid-cols-2 md:gap-16">
      {testimonials.map((testimonial, key) => (
        <ListCard
          cardLayout="column"
          className="items-center gap-8 sm:grid sm:grid-cols-[1fr_2fr] sm:text-left"
          key={key}
        >
          <div className="size-32 overflow-hidden rounded-full sm:size-52">
            <Image
              alt={`Foto de ${testimonial.name}`}
              className="size-full transition-transform duration-1000 ease-in-out hover:scale-110"
              src={testimonial.photo}
            />
          </div>

          <div className="flex flex-col justify-between gap-8">
            <Typography variant="p">{testimonial.review}</Typography>

            <div className="flex flex-col items-center sm:items-start">
              <FiveStars />

              <Typography variant="h3">{testimonial.name}</Typography>
              <Typography component={Link} href={testimonial.socialLink} variant="a">
                {testimonial.socialNickname}
              </Typography>
            </div>
          </div>
        </ListCard>
      ))}
    </ul>
  </Screen>
);

export default Testimonials;
