"use client";

import Leaf from "@/components/icons/Leaf";
import ShieldHome from "@/components/icons/ShieldHome";
import SofaIcon from "@/components/icons/Sofa";
import CallToActionScreen from "@/components/others/CallToActionScreen";
import juliaPolena from "@/images/clients/juliaPolena.jpg";

import FAQ from "../_components/FAQ";
import { Showcase, ShowcaseImage } from "../_components/Showcase";
import Start from "../_components/Start";
import Testimonials from "../_components/Testimonials";

const Content = () => (
  <>
    <Start>
      <Start.intro>
        <Start.span>Automação de luzes</Start.span>
        <Start.h1>
          Controle suas luzes de
          <br />
          qualquer lugar
        </Start.h1>
        <Start.p>Economize energia e torne sua casa mais conectada</Start.p>
      </Start.intro>
      <Start.features>
        <Start.feature
          Icon={SofaIcon}
          description="Controle as luzes da sua casa pelo celular ou por comando de voz, sem precisar sair do sofá."
          title="Tenha o Conforto da Iluminação Inteligente"
        />
        <Start.feature
          Icon={ShieldHome}
          description="Controle suas lâmpadas remotamente e programe horários e timers para simular presença e afastar intrusos."
          title="Simule Presença, Afaste Intrusos"
        />
        <Start.feature
          Icon={Leaf}
          description="Evite desperdício de energia programando horários para acender e apagar as luzes apenas quando necessário."
          title="Reduza a Conta de Luz com a Automação"
        />
      </Start.features>
    </Start>

    <Testimonials>
      <Testimonials.card
        name="Júlia Polena"
        photo={juliaPolena}
        review="Muito empenhados em resolver o problema! Gostei muito da tecnicidade e profissionalismo, além do bom papo durante a execução! A instalação tem ajudado muito nas demandas da casa!!"
        socialLink="https://www.instagram.com/juliapolena/"
        socialNickname="@juliapolena"
      />
      <Testimonials.card
        name="Júlia Polena"
        photo={juliaPolena}
        review="Muito empenhados em resolver o problema! Gostei muito da tecnicidade e profissionalismo, além do bom papo durante a execução! A instalação tem ajudado muito nas demandas da casa!!"
        socialLink="https://www.instagram.com/juliapolena/"
        socialNickname="@juliapolena"
      />
    </Testimonials>

    <Showcase>
      {[6, 7, 8, 9, 10].map((i) => (
        <ShowcaseImage
          alt=""
          height={1080}
          key={i}
          src={"https://picsum.photos/seed/" + i + "/1080"}
          width={1080}
          unoptimized
        />
      ))}
    </Showcase>

    <FAQ>
      <FAQ.question question="É necessário quebrar paredes para fazer a automação de lâmpadas?">
        De maneira nenhuma. Com a OPTIMUS Jr., não é preciso quebrar paredes para realizar a
        automação de lâmpadas. Nossas soluções de automação são projetadas para serem instaladas de
        forma não invasiva, sem a necessidade de qualquer intervenção estrutural em sua casa. Assim,
        você pode desfrutar dos benefícios da automação de lâmpadas de maneira prática e rápida, sem
        se preocupar com reformas ou danos nas paredes.
      </FAQ.question>
      <FAQ.question question="A OPTIMUS Jr. faz automação de lâmpadas em ambientes externos?">
        Sim, com certeza! Nossos sistemas de automação de lâmpadas são perfeitamente adequados para
        uso em ambientes externos como jardins, quintais, varandas e áreas de lazer. Na OPTIMUS Jr.,
        entendemos a importância de proporcionar iluminação inteligente e conveniente tanto dentro
        quanto fora de sua casa.
      </FAQ.question>
      <FAQ.question question="Posso automatizar apenas algumas lâmpadas ou é necessário automatizar todas de uma vez?">
        Você escolhe! Você pode contratar a automação de apenas uma lâmpada ou fazer logo de todas
        de uma vez, tudo de acordo com suas necessidades e orçamento.
      </FAQ.question>
      <FAQ.question question="Eu preciso ter uma Alexa para automatizar minhas lâmpadas?">
        Não, você não precisa ter uma Alexa para automatizar suas lâmpadas. Apesar de ser mais legal
        utilizar o comando de voz pela Alexa, também é possível utilizar apenas o aplicativo para
        controlar as lâmpadas, ou usar o comando de voz por meio do Google Assistant do seu celular.
      </FAQ.question>
      <FAQ.question question="A automação de lâmpadas é compatível com diferentes tipos de lâmpadas, como LED, fluorescentes ou incandescentes?">
        Sim, nós automatizamos qualquer tipo de lâmpada. O sistema de automação trabalha diretamente
        no circuito elétrico da casa, permitindo que você automatize qualquer lâmpada conectada a
        esse circuito.
      </FAQ.question>
      <FAQ.question question="A automação de lâmpadas é compatível com diferentes tipos de lâmpadas, como LED, fluorescentes ou incandescentes?">
        Sim, nós automatizamos qualquer tipo de lâmpada. O sistema de automação trabalha diretamente
        no circuito elétrico da casa, permitindo que você automatize qualquer lâmpada conectada a
        esse circuito.
      </FAQ.question>
      <FAQ.question question="Quero automatizar as lâmpadas, mas manter os interruptores que já tenho em casa. É possível?">
        Sim! Apesar de termos interruptores inteligentes com design moderno e controle por touch,
        entendemos que algumas pessoas preferem manter a estética e a familiaridade de seus
        interruptores convencionais. Por isso, oferecemos soluções de automação que podem ser
        instaladas de forma discreta por trás dos interruptores existentes, permitindo que você
        controle suas lâmpadas de maneira automatizada sem afetar o funcionamento dos interruptores
        que você já possui.
      </FAQ.question>
      <FAQ.question question="Oque acontece com as automações quando a internet cai?">
        Quando a conexão com a internet estiver inativa, o controle remoto das lâmpadas através do
        aplicativo ou assistente de voz pode ser temporariamente afetado. No entanto, o controle
        manual através dos interruptores físicos continua funcionando normalmente.
      </FAQ.question>
    </FAQ>

    <CallToActionScreen />
  </>
);

export default Content;
