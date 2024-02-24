import Screen from "@/components/others/Screen";

import images from "./images";
import {
  ServiceCard,
  ServiceCardDescription,
  ServiceCardImage,
  ServiceCardTitle,
} from "./ServiceCard";

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
        <ServiceCardImage alt="Luzes penduradas no teto" src={images.lights} />
        <ServiceCardTitle>Controle de Iluminação</ServiceCardTitle>
        <ServiceCardDescription>
          A OPTIMUS Jr. automatiza as luzes da sua casa, tornando possível o controle da iluminação
          pelo celular ou pela sua assistente virtual.
        </ServiceCardDescription>
      </ServiceCard>

      <ServiceCard>
        <ServiceCardImage alt="Tomada" src={images.socket} />
        <ServiceCardTitle>Automação de Tomadas</ServiceCardTitle>
        <ServiceCardDescription>
          Com a automatização de tomadas elétricas, você pode controlar os eletrodomésticos da sua
          casa de qualquer lugar, economizando energia e facilitando sua vida.
        </ServiceCardDescription>
      </ServiceCard>

      <ServiceCard>
        <ServiceCardImage alt="Quarto com televisão e ar condicionado" src={images.bedroom} />
        <ServiceCardTitle>Controle de dispositivos</ServiceCardTitle>
        <ServiceCardDescription>
          Ajuste a temperatura do Ar Condicionado, controle a Televisão e muito mais por meio do seu
          celular, por comandos de voz e até mesmo agendando horários para que funcionem sozinhos.
        </ServiceCardDescription>
      </ServiceCard>

      <ServiceCard>
        <ServiceCardImage
          alt="Mulher controlando as cortinas por controle remoto"
          src={images.curtains}
        />
        <ServiceCardTitle>Automação de Cortinas</ServiceCardTitle>
        <ServiceCardDescription>
          Transformamos sua casa em uma verdadeira Smart Home! Automatize suas cortinas e tenha
          controle total sobre o nível de luz e a privacidade da sua residência.
        </ServiceCardDescription>
      </ServiceCard>

      <ServiceCard>
        <ServiceCardImage alt="Fechadura digital inteligente" src={images.lock} />
        <ServiceCardTitle>Instalação de Fechadura digital</ServiceCardTitle>
        <ServiceCardDescription>
          Dê adeus as chaves e aumente a segurança da sua casa tendo a conveniência de abrir e
          fechar a porta usando seu smartphone, senha, biometria ou cartão.
        </ServiceCardDescription>
      </ServiceCard>

      <ServiceCard>
        <ServiceCardImage alt="Portão de garagem de uma casa moderna" src={images.gate} />
        <ServiceCardTitle>Automação de Portão Eletrônico</ServiceCardTitle>
        <ServiceCardDescription>
          Controle a garagem da sua casa de qualquer lugar pelo seu celular automatizando seu
          portão.
        </ServiceCardDescription>
      </ServiceCard>

      <ServiceCard>
        <ServiceCardImage alt="Piscina limpa e com plantas em volta" src={images.pool} />
        <ServiceCardTitle>Controle de Piscinas</ServiceCardTitle>
        <ServiceCardDescription>
          Nunca mais tenha que se preocupar com a bomba da sua piscina. Nós automatizamos seu
          funcionamento para que ela sempre circule a água sozinha no horário desejado por você.
        </ServiceCardDescription>
      </ServiceCard>

      <ServiceCard>
        <ServiceCardImage alt="Sensor de presença instalado em uma parede" src={images.sensor} />
        <ServiceCardTitle>Instalação de Sensores</ServiceCardTitle>
        <ServiceCardDescription>
          Acione dispositivos automaticamente com sensores de presença, umidade, temperatura e muito
          mais. Traga mais conforto, segurança e economia de energia para sua casa.
        </ServiceCardDescription>
      </ServiceCard>

      <ServiceCard>
        <ServiceCardImage
          alt="Celular com uma interface para controlar a casa inteligente que está ao fundo"
          src={images.smart}
        />
        <ServiceCardTitle>Criação de Cenários</ServiceCardTitle>
        <ServiceCardDescription>
          Integre e controle diferentes dispositivos ao mesmo tempo com a criação de cenas e crie
          uma experiência ainda mais personalizada e conveniente para sua casa inteligente.
        </ServiceCardDescription>
      </ServiceCard>
    </ul>
  </Screen>
);

export default ServicesScreen;
