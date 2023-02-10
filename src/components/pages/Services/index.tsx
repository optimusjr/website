import { m, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import Image from "@/components/common/Image";
import Page from "@/components/common/Page";
import Title from "@/components/common/Title";
import GearIcon from "@/components/icons/Gear";

import images from "./images";
import ServiceCard from "./ServiceCard";
import styles from "./services.module.scss";

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [maxScroll, setMaxScroll] = useState(-2000);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const loadMaxScroll = () => {
      const scrollWidth =
        scrollRef.current?.getBoundingClientRect().width || scrollRef.current?.offsetWidth;
      const containerWidth =
        containerRef.current?.getBoundingClientRect().width || containerRef.current?.offsetWidth;

      if (scrollWidth && containerWidth) {
        setMaxScroll(-scrollWidth + containerWidth);
      }
    };

    loadMaxScroll();
    addEventListener("resize", loadMaxScroll);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, maxScroll]);
  const springedX = useSpring(x, { damping: 15, mass: 0.27, stiffness: 55 });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, -maxScroll / 8]);
  const springedRotate = useSpring(rotate, { damping: 15, mass: 0.27, stiffness: 55 });

  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.matchMedia("(pointer: coarse)").matches) {
        setIsTouch(true);
      }
    }
  }, []);

  return (
    <div className={styles.pageContainer} ref={containerRef}>
      <div className={styles.sticky}>
        <m.div className={styles.gearTop} style={{ rotate: isTouch ? rotate : springedRotate }}>
          <GearIcon />
        </m.div>

        <m.div className={styles.gearBottom} style={{ rotate: isTouch ? rotate : springedRotate }}>
          <GearIcon />
        </m.div>

        <m.div className={styles.scroll} ref={scrollRef} style={{ x: isTouch ? x : springedX }}>
          <Page backgroundColor="none" className={styles.services} id="services" fullHeight>
            <Title>
              <span>Serviços</span>
              <h2>Conheça as&nbsp;nossas soluções</h2>
            </Title>

            <ul className={styles.list}>
              <ServiceCard
                image={<Image alt="Luzes penduradas no teto" src={images.lights} width={640} />}
              >
                <h3>Controle de Iluminação</h3>
                <p>
                  A OPTIMUS Jr. automatiza as luzes da sua casa, tornando possível o controle da
                  iluminação pelo celular ou pela sua assistente virtual.
                </p>
              </ServiceCard>

              <ServiceCard
                image={<Image alt="Foto de uma tomada" src={images.socket} width={640} />}
              >
                <h3>Automação de Tomadas</h3>
                <p>
                  Com a automatização de tomadas elétricas, você pode controlar os eletrodomésticos
                  da sua casa de qualquer lugar, economizando energia e facilitando sua vida.
                </p>
              </ServiceCard>

              <ServiceCard
                image={
                  <Image
                    alt="Foto de um quarto com televisão e ar condicionado"
                    src={images.bedroom}
                    width={640}
                  />
                }
              >
                <h3>Controle de dispositivos</h3>
                <p>
                  Ajuste a temperatura do Ar Condicionado, controle a Televisão e muito mais por
                  meio do seu celular, por comandos de voz e até mesmo agendando horários para que
                  funcionem sozinhos.
                </p>
              </ServiceCard>

              <ServiceCard
                image={
                  <Image
                    alt="Foto uma mulher controlando as cortinas por controle remoto"
                    src={images.curtains}
                    width={640}
                  />
                }
              >
                <h3>Automação de Cortinas</h3>
                <p>
                  Transformamos sua casa em uma verdadeira Smart Home! Automatize suas cortinas e
                  tenha controle total sobre o nível de luz e a privacidade da sua residência.
                </p>
              </ServiceCard>

              <ServiceCard
                image={
                  <Image
                    alt="Foto de uma fechadura digital inteligente"
                    src={images.lock}
                    width={640}
                  />
                }
              >
                <h3>Instalação de Fechadura digital</h3>
                <p>
                  Dê adeus as chaves e aumente a segurança da sua casa tendo a conveniência de abrir
                  e fechar a porta usando seu smartphone, senha, biometria ou cartão.
                </p>
              </ServiceCard>

              <ServiceCard
                image={<Image alt="Foto de portão de garagem" src={images.gate} width={640} />}
              >
                <h3>Automação de Portão Eletrônico</h3>
                <p>
                  Controle a garagem da sua casa de qualquer lugar pelo seu celular automatizando
                  seu portão.
                </p>
              </ServiceCard>

              <ServiceCard
                image={<Image alt="Foto de uma piscina" src={images.pool} width={640} />}
              >
                <h3>Controle de Piscinas</h3>
                <p>
                  Nunca mais tenha que se preocupar com a bomba da sua piscina. Nós automatizamos
                  seu funcionamento para que ela sempre circule a água sozinha no horário desejado
                  por você.
                </p>
              </ServiceCard>

              <ServiceCard
                image={
                  <Image alt="Foto de um sensor de presença" src={images.sensor} width={640} />
                }
              >
                <h3>Instalação de Sensores</h3>
                <p>
                  Acione dispositivos automaticamente com sensores de presença, umidade, temperatura
                  e muito mais, trazendo conforto, segurança e economia de energia para sua casa.
                </p>
              </ServiceCard>

              <ServiceCard
                image={
                  <Image
                    alt="Foto de um celular com uma interface para controlar a casa inteligente que está ao fundo"
                    src={images.smart}
                    width={640}
                  />
                }
              >
                <h3>Criação de Cenários</h3>
                <p>
                  Integre todas as automações anteriores e controle diferentes dispositivos ao mesmo
                  tempo com a criação de cenas de modo a criar uma experiência ainda mais
                  personalizada e conveniente em sua casa inteligente.
                </p>
              </ServiceCard>
            </ul>
          </Page>
        </m.div>
      </div>
    </div>
  );
};

export default Services;
