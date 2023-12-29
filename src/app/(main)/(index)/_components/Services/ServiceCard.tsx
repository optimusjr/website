import Button from "@/components/Button";
import Link from "@/components/Link";
import ListCard from "@/components/ListCard";
import config from "@/config";

import styles from "./serviceCard.module.scss";

export interface Props {
  aboutPage?: string;
  image: React.ReactNode;
  children: React.ReactNode;
}

const ServiceCard = ({ aboutPage, image, children }: Props) => (
  <ListCard className={styles.serviceCard}>
    <div className={styles.image}> {image} </div>
    <div className={styles.content}>{children}</div>

    {aboutPage ? (
      <Button as={Link} href={aboutPage}>
        Confira mais Detalhes
      </Button>
    ) : (
      <Button as={Link} href={config.QUOTE_URL}>
        Faça um Orçamento
      </Button>
    )}
  </ListCard>
);

export default ServiceCard;
