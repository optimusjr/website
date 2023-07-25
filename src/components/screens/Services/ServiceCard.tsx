import Button from "@/components/common/Button";
import Link from "@/components/common/Link";
import ListCard from "@/components/common/ListCard";
import config from "@/config";

import styles from "./servicesCard.module.scss";

export interface Props {
  image: React.ReactNode;
  children: React.ReactNode;
}

const ServiceCard = ({ image, children }: Props) => {
  return (
    <ListCard className={styles.serviceCard}>
      <div className={styles.imageContainer}>
        <div className={styles.zoomOnHover}>{image}</div>
      </div>
      <div className={styles.content}>
        {children}
        <Button as={Link} href={config.BUDGET_URL}>
          Faça um Orçamento
        </Button>
      </div>
    </ListCard>
  );
};

export default ServiceCard;
