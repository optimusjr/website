import BudgetButton from "@/components/common/BudgetButton";
import ListCard from "@/components/common/ListCard";
import Screen from "@/components/common/Screen";
import Typography from "@/components/common/Typography";
import Leaf from "@/components/icons/Leaf";
import ShieldHome from "@/components/icons/ShieldHome";
import SofaIcon from "@/components/icons/Sofa";

import styles from "./lights.module.scss";

const LightsStart = () => (
  <Screen backgroundColor="secondary">
    <section className={styles.intro}>
      <span>Automação de luzes</span>
      <h1>
        Controle suas luzes de
        <br />
        qualquer lugar
      </h1>
      <p>Economize energia e torne sua casa mais conectada</p>

      <BudgetButton />
    </section>

    <ul className={styles.list}>
      <ListCard>
        <SofaIcon />

        <Typography variant="h3">Tenha o Conforto da Iluminação Inteligente</Typography>
        <Typography>
          Controle as luzes da sua casa pelo celular ou por comando de voz, sem precisar sair do
          sofá.
        </Typography>
      </ListCard>

      <ListCard>
        <ShieldHome />

        <Typography variant="h3">Simule Presença, Afaste Intrusos</Typography>
        <Typography>
          Controle suas lâmpadas remotamente e programe horários e timers para simular presença e
          afastar intrusos.
        </Typography>
      </ListCard>

      <ListCard>
        <Leaf />

        <Typography variant="h3">Reduza a Conta de Luz com a Automação</Typography>
        <Typography>
          Evite desperdício de energia programando horários para acender e apagar as luzes apenas
          quando necessário.
        </Typography>
      </ListCard>
    </ul>
  </Screen>
);

export default LightsStart;
