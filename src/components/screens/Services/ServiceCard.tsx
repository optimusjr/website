import { m } from "framer-motion";
import Link from "next/link";

import Button from "@/components/common/Button";
import ListCard from "@/components/common/ListCard";

import styles from "./servicesCard.module.scss";

export interface Props {
  image: React.ReactNode;
  children: React.ReactNode;
}

const ServiceCard = ({ image, children }: Props) => {
  return (
    <ListCard className={styles.serviceCard}>
      <div className={styles.imageContainer}>
        <m.div transition={{ type: "spring", duration: 1 }} whileHover={{ scale: 1.1 }}>
          {image}
        </m.div>
      </div>
      <div className={styles.content}>
        {children}
        <Button as={Link} href="/budget">
          Faça um Orçamento
        </Button>
      </div>
    </ListCard>
  );
};

export default ServiceCard;
