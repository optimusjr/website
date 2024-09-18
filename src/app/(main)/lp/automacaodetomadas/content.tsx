"use client";

import Leaf from "@/components/icons/Leaf";
import ShieldHome from "@/components/icons/ShieldHome";
import SofaIcon from "@/components/icons/Sofa";
import CallToActionScreen from "@/components/others/CallToActionScreen";
import juliaPolena from "@/images/clients/juliaPolena.jpg";
import img1 from "@/images/lp/tomada/img1.png";
import img2 from "@/images/lp/tomada/img2.jpg";
import img3 from "@/images/lp/tomada/img3.jpg";
import img4 from "@/images/lp/tomada/img4.jpg";
import img5 from "@/images/lp/tomada/img5.png";
import img6 from "@/images/lp/tomada/img6.jpg";

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
        <StartTitle strap="Automação de tomadas">
          Controle suas tomadas de
          <br />
          qualquer lugar
        </StartTitle>

        <StartText>praticidade e economia com tomadas inteligentes</StartText>
      </StartIntro>
      <StartFeatures>
        <StartFeature
          Icon={SofaIcon}
          description="Controle as tomadas da sua casa pelo celular ou por comando de voz, sem precisar sair do sofá."
          title="Tenha o Conforto de tomadas inteligentes"
        />
        <StartFeature
          Icon={ShieldHome}
          description="Reduza o risco de incêndios causados por aparelhos elétricos deixados ligados por acidente."
          title="Desligue aparelhos, proteja sua casa"
        />
        <StartFeature
          Icon={Leaf}
          description="Evite desperdício de energia programando dispositivos para serem desligados automaticamente quando não estão em uso."
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
      <FAQQuestion question="O que exatamente é uma automação de tomada? Como funciona isso?">
        A automação de tomada permite que você controle dispositivos eletrônicos, ligando ou
        desligando-os remotamente, geralmente por meio de um aplicativo no smartphone. É bem
        prático!
      </FAQQuestion>

      <FAQQuestion question="É necessário quebrar paredes para fazer a automação de toamada?">
        De maneira nenhuma. Com a OPTIMUS Jr., não é preciso quebrar paredes para realizar a
        automação de tomadas. Nossas soluções de automação são projetadas para serem instaladas de
        forma não invasiva, sem a necessidade de qualquer intervenção estrutural em sua casa. Assim,
        você pode desfrutar dos benefícios da automação de tomadas de maneira prática e rápida, sem
        se preocupar com reformas ou danos nas paredes.
      </FAQQuestion>

      <FAQQuestion question="Quais são as vantagens de usar uma tomada automatizada? Vale a pena?">
        Com certeza! Você ganha em conveniência, consegue economizar energia e até aumentar a
        segurança da sua casa, desligando aparelhos que ficam esquecidos. Isso tudo ajuda a otimizar
        seu dia a dia.
      </FAQQuestion>

      <FAQQuestion question="Quais dispositivos posso conectar? Tem limite?">
        Você pode conectar uma variedade de aparelhos, como lâmpadas, ventiladores e até
        eletrodomésticos. Contanto que seja conferido a capacidade de carga da tomada para garantir
        que está tudo certo.
      </FAQQuestion>

      <FAQQuestion question="Posso programar horários para ligar ou desligar?">
        Sim, a maioria das tomadas automáticas permite que você programe horários específicos. Isso
        é bem fácil de configurar pelo aplicativo.
      </FAQQuestion>
      <FAQQuestion question="A automação é compatível com assistentes de voz?">
        Sim, muitas das soluções que oferecemos são compatíveis com assistentes de voz como Alexa e
        Google Assistant, permitindo que você controle os dispositivos com comandos de voz.
      </FAQQuestion>
      <FAQQuestion question="É possível usar as tomadas que eu ja tenho em vez de trocar elas?">
        Com certeza! Nos possuímos diversas soluções que se conectam às tomadas existentes,
        permitindo o controle remoto dos aparelhos que já estão plugados. Dessa forma, você pode
        integrar a automação na sua casa sem a necessidade de substituir as tomadas. Nossa equipe
        pode ajudar a escolher as melhores opções para suas necessidades!
      </FAQQuestion>
    </FAQ>

    <CallToActionScreen />
  </>
);

export default Content;
