import { useState } from "react";

import styles from "./differentials.module.scss";
import CapIcon from "./icons/Book";
import CheckIcon from "./icons/Check";
import HandIcon from "./icons/Hand";
// import LightbulbIcon from "./icons/Lightbulb";
// import TargetIcon from "./icons/Target";
import TenIcon from "./icons/Ten";

const differentialsArray = [
  {
    title: "Mais de 10 anos no mercado",
    subtitle: "Impactando vidas e negócios",
    Icon: <TenIcon />,
    text: "A OPTIMUS Jr. foi fundada em bla bla bla bla bla",
  },
  {
    title: "Melhor preço do mercado",
    subtitle: "Preços baixos com alta qualidade de serviço",
    Icon: <HandIcon />,
    text: "A OPTIMUS Jr. é uma empresa junior, e portanto é sem fins lucrativos. O que faz dos nossos serviços bla bla bla bla",
  },
  {
    title: "Vasto conhecimento técnico",
    subtitle: "Apoio dos melhores professores da UFBA",
    Icon: <CapIcon />,
    text: "A OPTIMUS Jr. é a empresa junior do curso de Engenharia de Controle e Automação da UFBA e bla bla bla",
  },
  {
    title: "Selo de qualidade",
    subtitle: "Quem contrata, recomenda. A nossa média de NPS é 9,5.",
    Icon: <CheckIcon />,
    text: "NPS é bla bla bla bla bla",
  },
];

const Differentials = () => {
  const [selectedDifferential, setSelectedDifferential] = useState(1);

  return (
    <article className={styles.differentials}>
      <div className={styles.title}>
        <span>Diferenciais</span>
        <h2>Por que somos a escolha certa?</h2>
      </div>

      <div className={styles.content}>
        <section className={styles.info}>
          <div className={styles.iconContainer}>
            {differentialsArray[selectedDifferential].Icon}
          </div>
          <p>{differentialsArray[selectedDifferential].text}</p>
        </section>
        <ul className={styles.list}>
          {differentialsArray.map((differential, index) => (
            <li
              key={index}
              onClick={() => {
                setSelectedDifferential(index);
              }}
            >
              <h3>{differential.title}</h3>
              <p>{differential.subtitle}</p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Differentials;
