"use client";

import Leaf from "@/components/icons/Leaf";
import ShieldHome from "@/components/icons/ShieldHome";
import SofaIcon from "@/components/icons/Sofa";
import CallToActionScreen from "@/components/others/CallToActionScreen";
import juliaPolena from "@/images/clients/juliaPolena.jpg";
import img1 from "@/images/lp/luz/luz2.png";
import img2 from "@/images/lp/luz/luz3.jpg";
import img3 from "@/images/lp/luz/luz4.jpg";
import img4 from "@/images/lp/luz/luz6.jpg";
import img5 from "@/images/lp/luz/luz7.png";
import img6 from "@/images/lp/luz/luz8.jpg";

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
        <StartTitle strap="Automação de luzes">
          Controle suas luzes de
          <br />
          qualquer lugar
        </StartTitle>

        <StartText>Economize energia e torne sua casa mais conectada</StartText>
      </StartIntro>
      <StartFeatures>
        <StartFeature
          Icon={SofaIcon}
          description="Controle as luzes da sua casa pelo celular ou por comando de voz, sem precisar sair do sofá."
          title="Tenha o Conforto da Iluminação Inteligente"
        />
        <StartFeature
          Icon={ShieldHome}
          description="Controle suas lâmpadas remotamente e programe horários e timers para simular presença e afastar intrusos."
          title="Simule Presença, Afaste Intrusos"
        />
        <StartFeature
          Icon={Leaf}
          description="Evite desperdício de energia programando horários para acender e apagar as luzes apenas quando necessário."
          title="Reduza a Conta de Luz com a Automação"
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
      <GalleryImage alt="exemplo de luz secundária" src={img2} />
      <GalleryImage alt="Exemplo de controle pelo celular" src={img3} />
      <GalleryImage alt="Exemplo de sala mais moderna" src={img4} />
      <GalleryImage alt="Exemplo de criação de cenário na cozinha" src={img5} />
      <GalleryImage alt="Exemplo de criação de cenário sala" src={img6} />
    </Gallery>

    <FAQ>
      <FAQQuestion question="É necessário quebrar paredes para fazer a automação de lâmpadas?">
        De maneira nenhuma. Com a OPTIMUS Jr., não é preciso quebrar paredes para realizar a
        automação de lâmpadas. Nossas soluções de automação são projetadas para serem instaladas de
        forma não invasiva, sem a necessidade de qualquer intervenção estrutural em sua casa. Assim,
        você pode desfrutar dos benefícios da automação de lâmpadas de maneira prática e rápida, sem
        se preocupar com reformas ou danos nas paredes.
      </FAQQuestion>
      <FAQQuestion question="A OPTIMUS Jr. faz automação de lâmpadas em ambientes externos?">
        Sim, com certeza! Nossos sistemas de automação de lâmpadas são perfeitamente adequados para
        uso em ambientes externos como jardins, quintais, varandas e áreas de lazer. Na OPTIMUS Jr.,
        entendemos a importância de proporcionar iluminação inteligente e conveniente tanto dentro
        quanto fora de sua casa.
      </FAQQuestion>
      <FAQQuestion question="Posso automatizar apenas algumas lâmpadas ou é necessário automatizar todas de uma vez?">
        Você escolhe! Você pode contratar a automação de apenas uma lâmpada ou fazer logo de todas
        de uma vez, tudo de acordo com suas necessidades e orçamento.
      </FAQQuestion>
      <FAQQuestion question="Eu preciso ter uma Alexa para automatizar minhas lâmpadas?">
        Não, você não precisa ter uma Alexa para automatizar suas lâmpadas. Apesar de ser mais legal
        utilizar o comando de voz pela Alexa, também é possível utilizar apenas o aplicativo para
        controlar as lâmpadas, ou usar o comando de voz por meio do Google Assistant do seu celular.
      </FAQQuestion>
      <FAQQuestion question="A automação de lâmpadas é compatível com diferentes tipos de lâmpadas, como LED, fluorescentes ou incandescentes?">
        Sim, nós automatizamos qualquer tipo de lâmpada. O sistema de automação trabalha diretamente
        no circuito elétrico da casa, permitindo que você automatize qualquer lâmpada conectada a
        esse circuito.
      </FAQQuestion>
      <FAQQuestion question="Quero automatizar as lâmpadas, mas manter os interruptores que já tenho em casa. É possível?">
        Sim! Apesar de termos interruptores inteligentes com design moderno e controle por touch,
        entendemos que algumas pessoas preferem manter a estética e a familiaridade de seus
        interruptores convencionais. Por isso, oferecemos soluções de automação que podem ser
        instaladas de forma discreta por trás dos interruptores existentes, permitindo que você
        controle suas lâmpadas de maneira automatizada sem afetar o funcionamento dos interruptores
        que você já possui.
      </FAQQuestion>
      <FAQQuestion question="Oque acontece com as automações quando a internet cai?">
        Quando a conexão com a internet estiver inativa, o controle remoto das lâmpadas através do
        aplicativo ou assistente de voz pode ser temporariamente afetado. No entanto, o controle
        manual através dos interruptores físicos continua funcionando normalmente.
      </FAQQuestion>
    </FAQ>

    <CallToActionScreen />
  </>
);

export default Content;
