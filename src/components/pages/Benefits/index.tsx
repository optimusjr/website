import Card from "@/components/common/Card";
import Page from "@/components/common/Page";
import Title from "@/components/common/Title";

import styles from "./benefits.module.scss";
import DeviceIcon from "./icons/Devices";
import HomeAssistantIcon from "./icons/HomeAssistant";
import LeafIcon from "./icons/Leaf";
import RocketIcon from "./icons/Rocket";
import ShieldHomeIcon from "./icons/ShieldHome";
import SofaIcon from "./icons/Sofa";

const Benefits = () => {
  return (
    <Page backgroundColor="white">
      <Title>
        <span>Vantagens</span>
        <h2>Por que automatizar sua casa?</h2>
      </Title>

      <ul className={styles.list}>
        <Card>
          <DeviceIcon />

          <h3>Praticidade</h3>
          <p>
            Nunca foi tão prático realizar suas atividades diárias, você poderá programar seus
            dispositivos para realizarem essas atividades por você e te auxiliar no dia a dia.
          </p>
        </Card>

        <Card>
          <LeafIcon />

          <h3>Economia</h3>
          <p>
            Monitore seu gasto de energia, tenha controle dos seus dispositivos à distância e
            economize na conta de energia.
          </p>
        </Card>

        <Card>
          <ShieldHomeIcon />

          <h3>Segurança</h3>
          <p>
            Seu ambiente poderá ser controlado e monitorado de qualquer lugar do mundo com apenas um
            toque.
          </p>
        </Card>

        <Card>
          <SofaIcon />

          <h3>Conforto</h3>
          <p>
            Tenha o controle da sua casa na palma da sua mão, sem precisar se levantar do seu lugar.
          </p>
        </Card>

        <Card>
          <RocketIcon />

          <h3>Tecnologia de Ponta</h3>
          <p>
            Integração com as tecnologias emergentes do mercado. Controle sua casa por comando de
            voz, seja esse por Alexa ou até mesmo do seu celular.
          </p>
        </Card>

        <Card>
          <HomeAssistantIcon />

          <h3>Design</h3>
          <p>
            Dê ao seu ambiente um toque futurístico! Além de todas as demais vantagens, seu espaço
            ficará moderno e bonito, valorizando o imóvel.
          </p>
        </Card>
      </ul>
    </Page>
  );
};

export default Benefits;
