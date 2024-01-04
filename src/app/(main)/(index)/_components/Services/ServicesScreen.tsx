import Image from "@/components/Image";
import Screen from "@/components/Screen";
import Title from "@/components/Title";
import Typography from "@/components/Typography";

import images from "./images";
import ServiceCard from "./ServiceCard";

const ServicesScreen = () => (
  <Screen className="relative w-min flex-row" height="full" id="services">
    <Title
      className={{
        container: "text-left",
        strap:
          "text-[length:calc(1rem+3vw)] leading-none sm:text-[length:calc(1rem+3vw)] md:text-[length:calc(1rem+3vw)] lg:text-[length:calc(1rem+3vw)]",
        title:
          "text-[length:calc(2rem+6vw)] leading-none sm:text-[length:calc(2rem+6vw)] md:text-[length:calc(2rem+6vw)] lg:text-[length:calc(2rem+6vw)]",
      }}
      strap="Serviços"
    >
      Conheça as&nbsp;nossas soluções
    </Title>

    <ul className="flex gap-4 sm:gap-8 md:gap-16">
      <ServiceCard
        image={
          <Image
            alt="Luzes penduradas no teto"
            className="transition-transform duration-1000 ease-in-out hover:scale-110"
            src={images.lights}
            width={640}
          />
        }
        aboutPage="/lp/lights"
      >
        <Typography className="text-center text-2xl" color="primary" variant="h3">
          Controle de Iluminação
        </Typography>
        <Typography className="text-center">
          A OPTIMUS Jr. automatiza as luzes da sua casa, tornando possível o controle da iluminação
          pelo celular ou pela sua assistente virtual.
        </Typography>
      </ServiceCard>

      <ServiceCard
        image={
          <Image
            alt="Foto de uma tomada"
            className="transition-transform duration-1000 ease-in-out hover:scale-110"
            src={images.socket}
            width={640}
          />
        }
      >
        <Typography className="text-center text-2xl" color="primary" variant="h3">
          Automação de Tomadas
        </Typography>
        <Typography className="text-center">
          Com a automatização de tomadas elétricas, você pode controlar os eletrodomésticos da sua
          casa de qualquer lugar, economizando energia e facilitando sua vida.
        </Typography>
      </ServiceCard>

      <ServiceCard
        image={
          <Image
            alt="Foto de um quarto com televisão e ar condicionado"
            className="transition-transform duration-1000 ease-in-out hover:scale-110"
            src={images.bedroom}
            width={640}
          />
        }
      >
        <Typography className="text-center text-2xl" color="primary" variant="h3">
          Controle de dispositivos
        </Typography>
        <Typography className="text-center">
          Ajuste a temperatura do Ar Condicionado, controle a Televisão e muito mais por meio do seu
          celular, por comandos de voz e até mesmo agendando horários para que funcionem sozinhos.
        </Typography>
      </ServiceCard>

      <ServiceCard
        image={
          <Image
            alt="Foto uma mulher controlando as cortinas por controle remoto"
            className="transition-transform duration-1000 ease-in-out hover:scale-110"
            src={images.curtains}
            width={640}
          />
        }
      >
        <Typography className="text-center text-2xl" color="primary" variant="h3">
          Automação de Cortinas
        </Typography>
        <Typography className="text-center">
          Transformamos sua casa em uma verdadeira Smart Home! Automatize suas cortinas e tenha
          controle total sobre o nível de luz e a privacidade da sua residência.
        </Typography>
      </ServiceCard>

      <ServiceCard
        image={
          <Image
            alt="Foto de uma fechadura digital inteligente"
            className="transition-transform duration-1000 ease-in-out hover:scale-110"
            src={images.lock}
            width={640}
          />
        }
      >
        <Typography className="text-center text-2xl" color="primary" variant="h3">
          Instalação de Fechadura digital
        </Typography>
        <Typography className="text-center">
          Dê adeus as chaves e aumente a segurança da sua casa tendo a conveniência de abrir e
          fechar a porta usando seu smartphone, senha, biometria ou cartão.
        </Typography>
      </ServiceCard>

      <ServiceCard
        image={
          <Image
            alt="Foto de portão de garagem"
            className="transition-transform duration-1000 ease-in-out hover:scale-110"
            src={images.gate}
            width={640}
          />
        }
      >
        <Typography className="text-center text-2xl" color="primary" variant="h3">
          Automação de Portão Eletrônico
        </Typography>
        <Typography className="text-center">
          Controle a garagem da sua casa de qualquer lugar pelo seu celular automatizando seu
          portão.
        </Typography>
      </ServiceCard>

      <ServiceCard
        image={
          <Image
            alt="Foto de uma piscina"
            className="transition-transform duration-1000 ease-in-out hover:scale-110"
            src={images.pool}
            width={640}
          />
        }
      >
        <Typography className="text-center text-2xl" color="primary" variant="h3">
          Controle de Piscinas
        </Typography>
        <Typography className="text-center">
          Nunca mais tenha que se preocupar com a bomba da sua piscina. Nós automatizamos seu
          funcionamento para que ela sempre circule a água sozinha no horário desejado por você.
        </Typography>
      </ServiceCard>

      <ServiceCard
        image={
          <Image
            alt="Foto de um sensor de presença"
            className="transition-transform duration-1000 ease-in-out hover:scale-110"
            src={images.sensor}
            width={640}
          />
        }
      >
        <Typography className="text-center text-2xl" color="primary" variant="h3">
          Instalação de Sensores
        </Typography>
        <Typography className="text-center">
          Acione dispositivos automaticamente com sensores de presença, umidade, temperatura e muito
          mais. Traga mais conforto, segurança e economia de energia para sua casa.
        </Typography>
      </ServiceCard>

      <ServiceCard
        image={
          <Image
            alt="Foto de um celular com uma interface para controlar a casa inteligente que está ao fundo"
            className="transition-transform duration-1000 ease-in-out hover:scale-110"
            src={images.smart}
            width={640}
          />
        }
      >
        <Typography className="text-center text-2xl" color="primary" variant="h3">
          Criação de Cenários
        </Typography>
        <Typography className="text-center">
          Integre e controle diferentes dispositivos ao mesmo tempo com a criação de cenas e crie
          uma experiência ainda mais personalizada e conveniente para sua casa inteligente.
        </Typography>
      </ServiceCard>
    </ul>
  </Screen>
);

export default ServicesScreen;
