import Image from "next/image";

import bedroomOn from "../../../../public/images/bedroom-zoom-on.png";
import styles from "./start.module.scss";

const Start = () => {
  return (
    <article className={styles.start}>
      <div className={styles.text}>
        <h1>Leve o futuro para o seu lar.</h1>
        <p>Controle tudo em sua casa com as nossas soluções de automação residencial.</p>
      </div>

      <div className={styles.image}>
        <Image src={bedroomOn} alt="Quarto com as luzes acessas" />
      </div>
    </article>
  );
};

export default Start;
