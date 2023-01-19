import styles from "./benefits.module.scss";
import DeviceIcon from "./icons/Devices";
import HomeAssistantIcon from "./icons/HomeAssistant";
import LeafIcon from "./icons/Leaf";
import RocketIcon from "./icons/Rocket";
import ShieldHomeIcon from "./icons/ShieldHome";
import SofaIcon from "./icons/Sofa";

const Benefits = () => {
  return (
    <article className={styles.benefits}>
      <span>Vantagens</span>
      <h2>Porque automatizar sua casa?</h2>

      <ul className={styles.list}>
        <li>
          <DeviceIcon />

          <h3>Praticidade</h3>
          <p>
            Nunca foi tão prático realizar suas atividades diárias, você poderá programar seus
            dispositivos para realizarem essas atividades por você e te auxiliar no dia a dia.
          </p>
        </li>

        <li>
          <LeafIcon />

          <h3>Economia</h3>
          <p>
            Monitore seu gasto de energia, tenha controle dos seus dispositivos à distância e
            economize na conta de energia.
          </p>
        </li>

        <li>
          <ShieldHomeIcon />

          <h3>Segurança</h3>
          <p>
            Seu ambiente poderá ser controlado e monitorado de qualquer lugar do mundo com apenas um
            toque.
          </p>
        </li>

        <li>
          <SofaIcon />

          <h3>Conforto</h3>
          <p>
            Tenha o controle da sua casa na palma da sua mão, sem precisar se levantar do seu lugar.
          </p>
        </li>

        <li>
          <RocketIcon />

          <h3>Tecnologia de Ponta</h3>
          <p>
            Integração com as tecnologias emergentes do mercado. Controle sua casa por comando de
            voz, seja esse por Alexa ou até mesmo do seu celular.
          </p>
        </li>

        <li>
          <HomeAssistantIcon />

          <h3>Design</h3>
          <p>
            Dê ao seu ambiente um toque futurístico! Além de todas as demais vantagens, seu espaço
            ficará moderno e bonito, valorizando o imóvel.
          </p>
        </li>
      </ul>
    </article>
  );
};

export default Benefits;
