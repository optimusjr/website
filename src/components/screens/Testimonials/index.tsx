import type { StaticImageData } from "next/image";

import FiveStars from "@/components/common/FiveStars";
import Image from "@/components/common/Image";
import Link from "@/components/common/Link";
import ListCard from "@/components/common/ListCard";
import Screen from "@/components/common/Screen";
import Title from "@/components/common/Title";
import Typography from "@/components/common/Typography";

import styles from "./testimonials.module.scss";

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
  <Screen backgroundColor="white">
    <Title strap="Depoimentos">O que os nossos clientes dizem?</Title>
    <ul className={styles.content}>
      {testimonials.map((testimonial, key) => (
        <ListCard className={styles.testimonialCard} key={key} layout="row">
          <div className={styles.imageContainer}>
            <Image
              alt={`Foto de ${testimonial.name}`}
              height={200}
              src={testimonial.photo}
              width={200}
            />
          </div>

          <div className={styles.text}>
            <Typography variant="p">{testimonial.review}</Typography>
            <div className={styles.info}>
              <FiveStars />

              <Typography variant="h3">{testimonial.name}</Typography>
              <Typography component={Link} href={testimonial.socialLink} variant="p">
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
