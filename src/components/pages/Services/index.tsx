import Card from "@/components/common/Card";

import styles from "./services.module.scss";

const Services = () => {
  return (
    <article className={styles.services}>
      <span>Serviços</span>
      <h2>Conheça nossas soluções</h2>

      <ul className={styles.list}>
        <Card>
          <h3>Controle de Iluminação</h3>
          <p>
            A OPTIMUS Jr. automatiza as luzes da sua casa, tornando possível o controle da
            iluminação pelo celular ou pela sua assistente virtual.
          </p>
        </Card>

        <Card>
          <h3>Automação de Tomadas</h3>
          <p>
            Com a automatização de tomadas elétricas, você pode controlar os eletrodomésticos da sua
            casa de qualquer lugar, economizando energia e facilitando sua vida.
          </p>
        </Card>

        <Card>
          <h3>Controle de dispositivos</h3>
          <p>
            Ajuste a temperatura do Ar Condicionado, controle a Televisão e muito mais por meio do
            seu celular, por comandos de voz e até mesmo agendando horários para que funcionem
            sozinhos.
          </p>
        </Card>

        <Card>
          <h3>Automação de Cortinas</h3>
          <p>
            Transformamos sua casa em uma verdadeira Smart Home! Automatize suas cortinas e tenha
            controle total sobre o nível de luz e a privacidade da sua residência.{" "}
          </p>
        </Card>

        <Card>
          <h3>Instalação de Fechadura digital</h3>
          <p>
            Dê adeus as chaves e aumente a segurança da sua casa tendo a conveniência de abrir e
            fechar a porta usando seu smartphone, senha, biometria ou cartão.
          </p>
        </Card>

        <Card>
          <h3>Automação de Portão Eletrônico</h3>
          <p>
            Controle a garagem da sua casa de qualquer lugar pelo seu celular automatizando seu
            portão.
          </p>
        </Card>

        <Card>
          <h3>Controle de Piscinas</h3>
          <p>
            Nunca mais tenha que se preocupar com a bomba da sua piscina. Nós automatizamos seu
            funcionamento para que ela sempre circule a água sozinha no horário desejado por você.
          </p>
        </Card>

        <Card>
          <h3>Instalação de Sensores</h3>
          <p>
            Acione dispositivos automaticamente com sensores de presença, umidade, temperatura e
            muito mais, trazendo conforto, segurança e economia de energia para sua casa.
          </p>
        </Card>

        <Card>
          <h3>Criação de Cenários</h3>
          <p>
            Integre todas as automações anteriores e controle diferentes dispositivos ao mesmo tempo
            com a criação de cenas de modo a criar uma experiência ainda mais personalizada e
            conveniente em sua casa inteligente.
          </p>
        </Card>
      </ul>
    </article>
  );
};

export default Services;
