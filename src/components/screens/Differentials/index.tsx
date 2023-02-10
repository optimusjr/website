import ListCard from "@/components/common/ListCard";
import Screen from "@/components/common/Screen";
import Title from "@/components/common/Title";
import CapIcon from "@/components/icons/Cap";
import CheckIcon from "@/components/icons/Check";
import HandIcon from "@/components/icons/Hand";
import TenIcon from "@/components/icons/Ten";

import styles from "./differentials.module.scss";

const Differentials = () => {
  return (
    <Screen backgroundColor="white">
      <Title>
        <span>Diferenciais</span>
        <h2>Por que somos a escolha certa?</h2>
      </Title>

      <ul className={styles.list}>
        <ListCard layout="row">
          <TenIcon />
          <div>
            <h3>Mais de 10 anos de experiencia</h3>
            <p>Estamos a mais de 10 anos no mercado impactando vidas e negócios.</p>
          </div>
        </ListCard>

        <ListCard layout="row">
          <HandIcon />
          <div>
            <h3>Melhor preço do mercado</h3>
            <p>Oferecemos preços justos e alta qualidade em nossos serviços.</p>
          </div>
        </ListCard>

        <ListCard layout="row">
          <CapIcon />
          <div>
            <h3>Vasto conhecimento técnico</h3>
            <p>
              Como empresa júnior da UFBA, temos o apoio dos melhores professores da instituição.
            </p>
          </div>
        </ListCard>

        <ListCard layout="row">
          <CheckIcon />
          <div>
            <h3>Selo de qualidade</h3>
            <p>Quem contrata, recomenda! A nossa média de NPS é 9,5.</p>
          </div>
        </ListCard>
      </ul>
    </Screen>
  );
};

export default Differentials;
