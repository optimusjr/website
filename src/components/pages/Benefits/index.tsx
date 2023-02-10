import ListCard from "@/components/common/ListCard";
import Page from "@/components/common/Page";
import Title from "@/components/common/Title";

import styles from "./benefits.module.scss";
import DeviceIcon from "@/components/icons/Devices";
import HomeAssistantIcon from "@/components/icons/HomeAssistant";
import LeafIcon from "@/components/icons/Leaf";
import RocketIcon from "@/components/icons/Rocket";
import ShieldHomeIcon from "@/components/icons/ShieldHome";
import SofaIcon from "@/components/icons/Sofa";

const Benefits = () => {
  return (
    <Page backgroundColor="white">
      <Title>
        <span>Vantagens</span>
        <h2>Por que automatizar sua casa?</h2>
      </Title>

      <ul className={styles.list}>
        <ListCard>
          <DeviceIcon />

          <h3>Praticidade</h3>
          <p>
            Nunca foi tão prático realizar suas atividades diárias, você poderá programar seus
            dispositivos para realizarem essas atividades por você e te auxiliar no dia a dia.
          </p>
        </ListCard>

        <ListCard>
          <LeafIcon />

          <h3>Economia</h3>
          <p>
            Monitore seu gasto de energia, tenha controle dos seus dispositivos à distância e
            economize na conta de energia.
          </p>
        </ListCard>

        <ListCard>
          <ShieldHomeIcon />

          <h3>Segurança</h3>
          <p>
            Seu ambiente poderá ser controlado e monitorado de qualquer lugar do mundo com apenas um
            toque.
          </p>
        </ListCard>

        <ListCard>
          <SofaIcon />

          <h3>Conforto</h3>
          <p>
            Tenha o controle da sua casa na palma da sua mão, sem precisar se levantar do seu lugar.
          </p>
        </ListCard>

        <ListCard>
          <RocketIcon />

          <h3>Tecnologia de Ponta</h3>
          <p>
            Integração com as tecnologias emergentes do mercado. Controle sua casa por comando de
            voz, seja esse por Alexa ou até mesmo do seu celular.
          </p>
        </ListCard>

        <ListCard>
          <HomeAssistantIcon />

          <h3>Design</h3>
          <p>
            Dê ao seu ambiente um toque futurístico! Além de todas as demais vantagens, seu espaço
            ficará moderno e bonito, valorizando o imóvel.
          </p>
        </ListCard>
      </ul>
    </Page>
  );
};

export default Benefits;
