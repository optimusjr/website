import ListCard from "@/components/common/ListCard";
import Page from "@/components/common/Page";
import Title from "@/components/common/Title";

import styles from "./differentials.module.scss";
import CapIcon from "./icons/Book";
import CheckIcon from "./icons/Check";
import HandIcon from "./icons/Hand";
import TenIcon from "./icons/Ten";

const Differentials = () => {
  return (
    <Page backgroundColor="white">
      <Title>
        <span>Diferenciais</span>
        <h2>Por que somos a escolha certa?</h2>
      </Title>

      <ul className={styles.list}>
        <ListCard layout="row">
          <TenIcon />
          <div>
            <h3>Mais de 10 anos de experiencia</h3>
            <p>Impactando vidas e negócios</p>
          </div>
        </ListCard>

        <ListCard layout="row">
          <HandIcon />
          <div>
            <h3>Melhor preço do mercado</h3>
            <p>Preços baixos com alta qualidade de serviço</p>
          </div>
        </ListCard>

        <ListCard layout="row">
          <CapIcon />
          <div>
            <h3>Vasto conhecimento técnico</h3>
            <p>Apoio dos melhores professores da UFBA</p>
          </div>
        </ListCard>

        <ListCard layout="row">
          <CheckIcon />
          <div>
            <h3>Selo de qualidade</h3>
            <p>Quem contrata, recomenda. A nossa média de NPS é 9,5.</p>
          </div>
        </ListCard>
      </ul>
    </Page>
  );
};

export default Differentials;
