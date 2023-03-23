import { m } from "framer-motion";
import { useState } from "react";

import Button from "@/components/common/Button";
import Image from "@/components/common/Image";
import Link from "@/components/common/Link";
import ArrowRightIcon from "@/components/icons/ArrowRight";
import config from "@/config";
import OPTIMUSIcon from "@/images/OPTIMUS/icon.svg";
import wordmark from "@/images/OPTIMUS/wordmark.svg";

import styles from "./header.module.scss";
import Links from "./Links";
import Mobile from "./Mobile";

const Header = () => {
  const [showMobile, setShowMobile] = useState(false);

  const toggleShowMobile = () => {
    setShowMobile(!showMobile);
  };

  const hideMobile = () => {
    if (showMobile) {
      setShowMobile(false);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/" onClick={hideMobile}>
            <div className={styles.iconWrapper}>
              <Image alt="Ícone da OPTIMUS Jr." placeholder="empty" src={OPTIMUSIcon} width="40" />
            </div>
            <Image
              alt="'OPTIMUS Jr.' escrito em letras estilizadas"
              height="18"
              placeholder="empty"
              src={wordmark}
            />
          </Link>
        </div>

        <ul className={styles.center}>
          <Links hideMobile={hideMobile} />
        </ul>

        <m.div animate="rest" className={styles.right} whileHover="hover">
          <Button as={Link} href={config.BUDGET_URL}>
            Faça um Orçamento
            <ArrowRightIcon
              as={m.svg}
              variants={{ hover: { x: [0, 5, 0], transition: { repeat: Infinity } } }}
            />
          </Button>
        </m.div>

        <Mobile hideShow={hideMobile} show={showMobile} toggleShow={toggleShowMobile} />
      </header>
    </div>
  );
};

export default Header;
