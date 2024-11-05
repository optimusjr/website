"use client";

import Leaf from "@/components/icons/Leaf";
import ShieldHome from "@/components/icons/ShieldHome";
import SofaIcon from "@/components/icons/Sofa";
import CallToActionScreen from "@/components/others/CallToActionScreen";
import juliaPolena from "@/images/clients/juliaPolena.jpg";
import img1 from "@/images/lp/cortina/img1.jpeg";
import img2 from "@/images/lp/cortina/img2.jpg";
import img3 from "@/images/lp/cortina/img3.jpg";
import img4 from "@/images/lp/cortina/img4.jpg";
import img5 from "@/images/lp/cortina/img5.jpg";
import img6 from "@/images/lp/cortina/img6.jpeg";

import { FAQ, FAQQuestion } from "../_components/FAQ";
import { Gallery, GalleryImage } from "../_components/Gallery";
import {
  Start,
  StartFeature,
  StartFeatures,
  StartIntro,
  StartText,
  StartTitle,
} from "../_components/Start";
import { Testimonials, TestimonialsCard } from "../_components/Testimonials";

const Content = () => (
  <>
    <Start>
      <StartIntro>
        <StartTitle strap="Automação de cortinas">
          Controle suas cortinas de
          <br />
          qualquer lugar
        </StartTitle>

        <StartText>
          Altere seu ambiente em um piscar de olhos e torne sua casa mais conectada
        </StartText>
      </StartIntro>
      <StartFeatures>
        <StartFeature
          Icon={SofaIcon}
          description="Controle as cortinas da sua casa pelo aplicativo ou por comando de voz, sem precisar sair do sofá."
          title="Tenha o Conforto do controle Inteligente"
        />
        <StartFeature
          Icon={ShieldHome}
          description="Controle suas cortinas fácil e remotamente pelo celular"
          title="Mais privacidade, Menos trabalho"
        />
        <StartFeature
          Icon={Leaf}
          description="Deixe a luz natural entrar programando horários para apagar as luzes e abrir as cortinas durante o dia."
          title="Reduza a Conta de energia com a Automação"
        />
      </StartFeatures>
    </Start>

    <Testimonials>
      <TestimonialsCard
        name="Júlia Polena"
        photo={juliaPolena}
        review="Muito empenhados em resolver o problema! Gostei muito da tecnicidade e profissionalismo, além do bom papo durante a execução! A instalação tem ajudado muito nas demandas da casa!!"
        socialLink="https://www.instagram.com/juliapolena/"
        socialNickname="@juliapolena"
      />
    </Testimonials>

    <Gallery>
      <GalleryImage alt="exemplo de sala temática" src={img1} />
      <GalleryImage alt="exemplo de cortina secundária" src={img2} />
      <GalleryImage alt="Exemplo de controle pelo celular" src={img3} />
      <GalleryImage alt="Exemplo de sala mais moderna" src={img4} />
      <GalleryImage alt="Exemplo de criação de cenário na cozinha" src={img5} />
      <GalleryImage alt="Exemplo de criação de cenário sala" src={img6} />
    </Gallery>

    <FAQ>
      <FAQQuestion question="Eu posso controlar as cortinas de qualquer lugar?">
        Sim! Se o sistema de automação estiver conectado à internet, você pode controlar as cortinas
        de qualquer lugar através do aplicativo no seu smartphone, tablet ou computador. Isso
        oferece a conveniência de ajustar a iluminação e privacidade mesmo quando você não estiver
        em casa.
      </FAQQuestion>
      <FAQQuestion question="É possível programar as cortinas para abrir e fechar automaticamente?">
        Sim! Você pode programar horários específicos para que as cortinas abram ou fechem
        automaticamente todos os dias, com base na sua rotina. Alguns sistemas também permitem
        ajustes baseados na intensidade da luz solar ou temperatura ambiente, criando um ambiente
        mais confortável e eficiente em termos de energia.
      </FAQQuestion>
      <FAQQuestion question="Posso controlar as cortinas por comando de voz?">
        Se o sistema de automação for compatível com assistentes virtuais como Amazon Alexa, Google
        Assistant ou Apple HomeKit, você pode controlar suas cortinas usando comandos de voz. Por
        exemplo, você pode dizer - Alexa, abra as cortinas da sala ou Ok Google, feche as cortinas
        do quarto-.
      </FAQQuestion>
      <FAQQuestion question="Eu preciso ter uma Alexa para automatizar minhas cortinas?">
        Não, você não precisa ter uma Alexa para automatizar suas cortinas. Apesar de ser mais legal
        utilizar o comando de voz pela Alexa, também é possível utilizar apenas o aplicativo para
        controlar as cortinas, ou usar o comando de voz por meio do Google Assistant do seu celular.
      </FAQQuestion>
      <FAQQuestion question="O sistema de automação consome muita energia?">
        Não, o consumo de energia do sistema de automação de cortinas é muito baixo. O motor
        elétrico que move as cortinas consome energia apenas durante o movimento, e o controle
        remoto ou aplicativo normalmente utiliza energia de uma bateria de baixo consumo. Além
        disso, o controle automático da luz pode até ajudar a reduzir os custos com energia,
        ajustando as cortinas conforme a necessidade de luz e temperatura.
      </FAQQuestion>
      <FAQQuestion question="E se a energia acabar ou houver uma falha no sistema, as cortinas ainda funcionam?">
        A maioria dos sistemas de automação de cortinas vem com uma opção manual, permitindo que
        você abra ou feche as cortinas mesmo sem energia ou em caso de falha no sistema eletrônico.
        Além disso, alguns motores têm baterias de backup, garantindo que o sistema funcione mesmo
        durante uma queda de energia.
      </FAQQuestion>
      <FAQQuestion question="Como funciona o sistema de automação de cortinas?">
        A automação de cortinas funciona por meio de motores elétricos conectados a um controle
        remoto, aplicativo de smartphone ou até mesmo comandos de voz via assistentes virtuais como
        Alexa ou Google Assistant. Você pode programar horários para abrir e fechar as cortinas,
        ajustar a posição delas e até integrar com sensores de luz para otimizar a entrada de luz
        natural.
      </FAQQuestion>
    </FAQ>

    <CallToActionScreen />
  </>
);

export default Content;
