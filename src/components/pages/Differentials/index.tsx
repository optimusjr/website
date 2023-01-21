import Card from "./Card";
import styles from "./differentials.module.scss";
import BookIcon from "./icons/Book";
import CheckIcon from "./icons/Check";
import HandIcon from "./icons/Hand";
import LightbulbIcon from "./icons/Lightbulb";
import TargetIcon from "./icons/Target";
import TenIcon from "./icons/Ten";

const Differentials = () => {
  return (
    <article className={styles.differentials}>
      <span>Diferenciais</span>
      <h2>Por que somos a escolha certa?</h2>

      <div className={styles.scroll}>
        <ul className={styles.list}>
          <Card>
            <TenIcon />

            <h3>Mais de 10 anos no mercado</h3>
            <p>Impactando vidas e negócios</p>
          </Card>

          <Card>
            <HandIcon />

            <h3>melhor preço do mercado</h3>
            <p>Preços baixos com alta qualidade de serviço</p>
          </Card>

          <Card>
            <BookIcon />

            <h3>vasto conhecimento técnico</h3>
            <p>Apoio dos melhores professores da UFBA para validação de projetos</p>
          </Card>

          <Card>
            <TargetIcon />

            <h3>projetos personalizados</h3>
            <p>Atendemos a necessidade do cliente, solucionando seus problemas </p>
          </Card>

          <Card>
            <CheckIcon />

            <h3>selo de qualidade</h3>
            <p>Quem contrata, recomenda. A nossa média de NPS é 9,5.</p>
          </Card>

          <Card>
            <LightbulbIcon />

            <h3>soluções completas</h3>
            <p>
              Somos parte do Movimento que possui diversos serviços a serem somados com os nossos
            </p>
          </Card>
        </ul>
      </div>
    </article>
  );
};

export default Differentials;
