import Screen from "@/components/Screen";

import images from "./images";
import ServiceCard from "./ServiceCard";

const ServicesScreen = () => (
  <Screen className="relative w-min flex-row" height="full" id="services" gap padding shadow>
    <div>
      <span className="text-3xl font-medium text-primary-800 sm:text-4xl md:text-6xl">
        Serviços
      </span>
      <h2 className="text-5xl font-semibold uppercase sm:text-6xl md:text-8xl">
        Conheça as&nbsp;nossas soluções
      </h2>
    </div>

    <ul className="flex gap-4 sm:gap-8 md:gap-16">
      <ServiceCard aboutPage="/lp/lights">
        <ServiceCard.image alt="Luzes penduradas no teto" src={images.lights} />
        <ServiceCard.title>Controle de Iluminação</ServiceCard.title>
        <ServiceCard.description>
          A OPTIMUS Jr. automatiza as luzes da sua casa, tornando possível o controle da iluminação
          pelo celular ou pela sua assistente virtual.
        </ServiceCard.description>
      </ServiceCard>

      <ServiceCard>
        <ServiceCard.image alt="Tomada" src={images.socket} />
        <ServiceCard.title>Automação de Tomadas</ServiceCard.title>
        <ServiceCard.description>
          Com a automatização de tomadas elétricas, você pode controlar os eletrodomésticos da sua
          casa de qualquer lugar, economizando energia e facilitando sua vida.
        </ServiceCard.description>
      </ServiceCard>

      <ServiceCard>
        <ServiceCard.image alt="Quarto com televisão e ar condicionado" src={images.bedroom} />
        <ServiceCard.title>Controle de dispositivos</ServiceCard.title>
        <ServiceCard.description>
          Ajuste a temperatura do Ar Condicionado, controle a Televisão e muito mais por meio do seu
          celular, por comandos de voz e até mesmo agendando horários para que funcionem sozinhos.
        </ServiceCard.description>
      </ServiceCard>

      <ServiceCard>
        <ServiceCard.image
          alt="Mulher controlando as cortinas por controle remoto"
          src={images.curtains}
        />
        <ServiceCard.title>Automação de Cortinas</ServiceCard.title>
        <ServiceCard.description>
          Transformamos sua casa em uma verdadeira Smart Home! Automatize suas cortinas e tenha
          controle total sobre o nível de luz e a privacidade da sua residência.
        </ServiceCard.description>
      </ServiceCard>

      <ServiceCard>
        <ServiceCard.image alt="Fechadura digital inteligente" src={images.lock} />
        <ServiceCard.title>Instalação de Fechadura digital</ServiceCard.title>
        <ServiceCard.description>
          Dê adeus as chaves e aumente a segurança da sua casa tendo a conveniência de abrir e
          fechar a porta usando seu smartphone, senha, biometria ou cartão.
        </ServiceCard.description>
      </ServiceCard>

      <ServiceCard>
        <ServiceCard.image alt="Portão de garagem de uma casa moderna" src={images.gate} />
        <ServiceCard.title>Automação de Portão Eletrônico</ServiceCard.title>
        <ServiceCard.description>
          Controle a garagem da sua casa de qualquer lugar pelo seu celular automatizando seu
          portão.
        </ServiceCard.description>
      </ServiceCard>

      <ServiceCard>
        <ServiceCard.image alt="Piscina limpa e com plantas em volta" src={images.pool} />
        <ServiceCard.title>Controle de Piscinas</ServiceCard.title>
        <ServiceCard.description>
          Nunca mais tenha que se preocupar com a bomba da sua piscina. Nós automatizamos seu
          funcionamento para que ela sempre circule a água sozinha no horário desejado por você.
        </ServiceCard.description>
      </ServiceCard>

      <ServiceCard>
        <ServiceCard.image alt="Sensor de presença instalado em uma parede" src={images.sensor} />
        <ServiceCard.title>Instalação de Sensores</ServiceCard.title>
        <ServiceCard.description>
          Acione dispositivos automaticamente com sensores de presença, umidade, temperatura e muito
          mais. Traga mais conforto, segurança e economia de energia para sua casa.
        </ServiceCard.description>
      </ServiceCard>

      <ServiceCard>
        <ServiceCard.image
          alt="Celular com uma interface para controlar a casa inteligente que está ao fundo"
          src={images.smart}
        />
        <ServiceCard.title>Criação de Cenários</ServiceCard.title>
        <ServiceCard.description>
          Integre e controle diferentes dispositivos ao mesmo tempo com a criação de cenas e crie
          uma experiência ainda mais personalizada e conveniente para sua casa inteligente.
        </ServiceCard.description>
      </ServiceCard>
    </ul>
  </Screen>
);

export default ServicesScreen;
