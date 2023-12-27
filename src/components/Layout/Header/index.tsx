"use client";

import OPTIMUSIcon from "@/app/icon.svg";
import Image from "@/components/common/Image";
import Link from "@/components/common/Link";
import QuoteButton from "@/components/common/QuoteButton";
import useToggle from "@/hooks/useToggle";
import wordmark from "@/images/OPTIMUS/wordmark.svg";

import styles from "./header.module.scss";
import Links from "./Links";
import Mobile from "./Mobile";

const Header = () => {
  const [showMobile, toggleShowMobile, setShowMobile] = useToggle(false);

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

        <div className={styles.right}>
          <QuoteButton />
        </div>

        <Mobile hideShow={hideMobile} show={showMobile} toggleShow={toggleShowMobile} />
      </header>
    </div>
  );
};

export default Header;
