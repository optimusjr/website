import ListCard from "@/components/common/ListCard";
import Screen from "@/components/common/Screen";
import Title from "@/components/common/Title";
import Typography from "@/components/common/Typography";
import DeviceIcon from "@/components/icons/Devices";
import HomeAssistantIcon from "@/components/icons/HomeAssistant";
import LeafIcon from "@/components/icons/Leaf";
import RocketIcon from "@/components/icons/Rocket";
import ShieldHomeIcon from "@/components/icons/ShieldHome";
import SofaIcon from "@/components/icons/Sofa";

import styles from "./benefits.module.scss";

const Benefits = () => (
  <Screen backgroundColor="white">
    <Title strap="Vantagens">Por que automatizar sua casa?</Title>

    <ul className={styles.list}>
      <ListCard>
        <DeviceIcon />

        <Typography variant="h3">Praticidade</Typography>
        <Typography>
          Nunca foi tão prático realizar suas atividades diárias, você poderá programar seus
          dispositivos para realizarem essas atividades por você e te auxiliar no dia a dia.
        </Typography>
      </ListCard>

      <ListCard>
        <LeafIcon />

        <Typography variant="h3">Economia</Typography>
        <Typography>
          Monitore seu gasto de energia, tenha controle dos seus dispositivos à distância e
          economize na conta de energia.
        </Typography>
      </ListCard>

      <ListCard>
        <ShieldHomeIcon />

        <Typography variant="h3">Segurança</Typography>
        <Typography>
          Seu ambiente poderá ser controlado e monitorado de qualquer lugar do mundo com apenas um
          toque.
        </Typography>
      </ListCard>

      <ListCard>
        <SofaIcon />

        <Typography variant="h3">Conforto</Typography>
        <Typography>
          Tenha o controle da sua casa na palma da sua mão, sem precisar se levantar do seu lugar.
        </Typography>
      </ListCard>

      <ListCard>
        <RocketIcon />

        <Typography variant="h3">Tecnologia de Ponta</Typography>
        <Typography>
          Integração com as tecnologias emergentes do mercado. Controle sua casa por comando de voz,
          seja esse por Alexa ou até mesmo do seu celular.
        </Typography>
      </ListCard>

      <ListCard>
        <HomeAssistantIcon />

        <Typography variant="h3">Design</Typography>
        <Typography>
          Dê ao seu ambiente um toque futurístico! Além de todas as demais vantagens, seu espaço
          ficará moderno e bonito, valorizando o imóvel.
        </Typography>
      </ListCard>
    </ul>
  </Screen>
);

export default Benefits;
