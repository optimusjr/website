import styles from "./start.module.scss";

const Start = () => {
  return (
    <article className={styles.start}>
      <div className={styles.text}>
        <h1>Leve o futuro para o seu lar.</h1>
        <p>Controle tudo em sua casa com as nossas soluções de automação residencial.</p>
      </div>

      <div className={styles.animation}>
        <svg
          width="612"
          height="508"
          version="1.1"
          viewBox="0 0 612 508"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <image className={styles.bottomImage} xlinkHref="/images/bedroom-off.png" />
          <image className={styles.topImage} xlinkHref="/images/bedroom-on.png" />
        </svg>
      </div>
    </article>
  );
};

export default Start;
