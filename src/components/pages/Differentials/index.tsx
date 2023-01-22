import styles from "./differentials.module.scss";
import CapIcon from "./icons/Book";
import CheckIcon from "./icons/Check";
import HandIcon from "./icons/Hand";
import TenIcon from "./icons/Ten";

const Differentials = () => {
  return (
    <article className={styles.differentials}>
      <span>Diferenciais</span>
      <h2>Por que somos a escolha certa?</h2>

      <ul className={styles.list}>
        <li className={`${styles.item} ${styles.left}`}>
          <TenIcon />
          <div>
            <h3>Mais de 10 anos de experiencia</h3>
            <p>Impactando vidas e negócios</p>
          </div>
        </li>

        <li className={`${styles.item} ${styles.left}`}>
          <HandIcon />
          <div>
            <h3>Melhor preço do mercado</h3>
            <p>Preços baixos com alta qualidade de serviço</p>
          </div>
        </li>

        <li className={`${styles.item} ${styles.left}`}>
          <CapIcon />
          <div>
            <h3>Vasto conhecimento técnico</h3>
            <p>Apoio dos melhores professores da UFBA</p>
          </div>
        </li>

        <li className={`${styles.item} ${styles.left}`}>
          <CheckIcon />
          <div>
            <h3>Selo de qualidade</h3>
            <p>Quem contrata, recomenda. A nossa média de NPS é 9,5.</p>
          </div>
        </li>
      </ul>
    </article>
  );
};

export default Differentials;
