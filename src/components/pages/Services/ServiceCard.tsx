import Link from "next/link";

import Button from "@/components/common/Button";
import Card from "@/components/common/Card";

import styles from "./servicesCard.module.scss";

export interface Props {
  image: React.ReactNode;
  children: React.ReactNode;
}

const ServiceCard = ({ image, children }: Props) => {
  return (
    <Card noAnime className={styles.serviceCard}>
      {image}
      <div className={styles.content}>
        {children}
        <Button as={Link} href="/budget">
          Faça um Orçamento
        </Button>
      </div>
    </Card>
  );
};

export default ServiceCard;
