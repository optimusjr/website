import Card from "@/components/common/Card";
import Link from "@/components/common/Link";
import Screen from "@/components/common/Screen";
import Title from "@/components/common/Title";
import Typography from "@/components/common/Typography";

import styles from "./testimonials.module.scss";

const Testimonials = () => {
  return (
    <Screen backgroundColor="white" id="testimonials">
      <Title strap="Depoimentos">O que os nossos clientes dizem?</Title>

      <div className={styles.content}>
        <Card cardLayout="row" className={styles.testimonialCard}>
          <img alt="Foto de Julia Polena" src="https://picsum.photos/1080" />

          <div className={styles.text}>
            <Typography variant="p">
              Muito empenhados em resolver o problema! Gostei muito da tecnicidade e
              profissionalismo, além do bom papo durante a execução! A instalação tem ajudado muito
              nas demandas da casa!!
            </Typography>
            <div>
              <Typography variant="h3">Júlia Polena</Typography>
              <Typography
                component={Link}
                href="https://www.instagram.com/juliapolena/"
                variant="p"
              >
                @juliapolena
              </Typography>
            </div>
          </div>
        </Card>

        <Card cardLayout="row" className={styles.testimonialCard}>
          <img alt="Foto de Pedro Gustavo" src="https://picsum.photos/1080" />

          <div className={styles.text}>
            <Typography variant="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt euismod lacus.
              Integer ac quam vitae urna ultricies pellentesque vitae et felis. Nam quis arcu vel
              lorem scelerisque ornare vitae eget tortor.
            </Typography>
            <div>
              <Typography variant="h3">Pedro Gustavo</Typography>
              <Typography
                component={Link}
                href="https://www.instagram.com/pedrogustavo/"
                variant="p"
              >
                @pedrogustavo
              </Typography>
            </div>
          </div>
        </Card>
      </div>
    </Screen>
  );
};

export default Testimonials;
