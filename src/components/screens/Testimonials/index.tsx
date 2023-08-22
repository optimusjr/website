import FiveStars from "@/components/common/FiveStars";
import Image from "@/components/common/Image";
import Link from "@/components/common/Link";
import ListCard from "@/components/common/ListCard";
import Screen from "@/components/common/Screen";
import Title from "@/components/common/Title";
import Typography from "@/components/common/Typography";
import juliaPolena from "@/images/clients/juliaPolena.jpg";

import styles from "./testimonials.module.scss";

const Testimonials = () => (
  <Screen backgroundColor="white" id="testimonials">
    <Title strap="Depoimentos">O que os nossos clientes dizem?</Title>

    <ul className={styles.content}>
      <ListCard className={styles.testimonialCard} layout="row">
        <div className={styles.imageContainer}>
          <Image alt="Foto de Júlia Polena" height={200} src={juliaPolena} width={200} />
        </div>

        <div className={styles.text}>
          <Typography variant="p">
            Muito empenhados em resolver o problema! Gostei muito da tecnicidade e profissionalismo,
            além do bom papo durante a execução! A instalação tem ajudado muito nas demandas da
            casa!!
          </Typography>
          <div className={styles.info}>
            <FiveStars />

            <Typography variant="h3">Júlia Polena</Typography>
            <Typography component={Link} href="https://www.instagram.com/juliapolena/" variant="p">
              @juliapolena
            </Typography>
          </div>
        </div>
      </ListCard>

      <ListCard className={styles.testimonialCard} layout="row">
        <div className={styles.imageContainer}>
          <Image
            alt="Foto de Pedro Gustavo"
            height={200}
            src="https://picsum.photos/1081"
            width={200}
          />
        </div>

        <div className={styles.text}>
          <Typography variant="p">
            Muito empenhados em resolver o problema! Gostei muito da tecnicidade e profissionalismo,
            além do bom papo durante a execução! A instalação tem ajudado muito nas demandas da
            casa!!
          </Typography>
          <div className={styles.info}>
            <FiveStars />

            <Typography variant="h3">Pedro Enrique</Typography>
            <Typography component={Link} href="https://www.instagram.com/pedrogustavo/" variant="p">
              @pedro_enrique
            </Typography>
          </div>
        </div>
      </ListCard>
    </ul>
  </Screen>
);

export default Testimonials;
