import { m } from "framer-motion";

import styles from "./fiveStars.module.scss";
import StarIcon from "./StarIcon";

const FiveStars = () => (
  <m.div
    transition={{
      delayChildren: 0.3,
      staggerChildren: 0.2,
    }}
    className={styles.fiveStars}
    initial="hidden"
    viewport={{ once: true }}
    whileInView="visible"
  >
    <StarIcon />
    <StarIcon />
    <StarIcon />
    <StarIcon />
    <StarIcon />
  </m.div>
);

export default FiveStars;
