import Head from "next/head";

import Leaf from "@/components/icons/Leaf";
import ShieldHome from "@/components/icons/ShieldHome";
import SofaIcon from "@/components/icons/Sofa";
import CallToAction from "@/components/screens/CallToAction";
import FAQ from "@/components/screens/FAQ";
import LandingPageStart from "@/components/screens/LandingPageStart";
import Showcase from "@/components/screens/Showcase";
import Testimonials from "@/components/screens/Testimonials";
import juliaPolena from "@/images/clients/juliaPolena.jpg";
import app from "@/images/lights/app.png";
import electrician from "@/images/lights/electrician.png";
import lamps from "@/images/lights/lamps.png";
import switches from "@/images/lights/switches.png";

const Lights = () => (
  <>
    <Head>
      <title>Automação de lâmpadas: torne sua casa mais inteligente e economize energia</title>
    </Head>

    <LandingPageStart>
      <LandingPageStart.intro>
        <span>Automação de luzes</span>
        <h1>
          Controle suas luzes de
          <br />
          qualquer lugar
        </h1>
        <p>Economize energia e torne sua casa mais conectada</p>
      </LandingPageStart.intro>
      <LandingPageStart.features
        features={[
          {
            icon: SofaIcon,
            title: "Tenha o Conforto da Iluminação Inteligente",
            description:
              "Controle as luzes da sua casa pelo celular ou por comando de voz, sem precisar sair do sofá.",
          },
          {
            icon: ShieldHome,
            title: "Simule Presença, Afaste Intrusos",
            description:
              "Controle suas lâmpadas remotamente e programe horários e timers para simular presença e afastar intrusos.",
          },
          {
            icon: Leaf,
            title: "Reduza a Conta de Luz com a Automação",
            description:
              "Evite desperdício de energia programando horários para acender e apagar as luzes apenas quando necessário.",
          },
        ]}
      />
    </LandingPageStart>

    <Testimonials
      testimonials={[
        {
          photo: juliaPolena,
          name: "Júlia Polena",
          review:
            "Muito empenhados em resolver o problema! Gostei muito da tecnicidade e profissionalismo, além do bom papo durante a execução! A instalação tem ajudado muito nas demandas da casa!!",
          socialLink: "https://www.instagram.com/juliapolena/",
          socialNickname: "@juliapolena",
        },
        {
          photo: juliaPolena,
          name: "Júlia Polena",
          review:
            "Muito empenhados em resolver o problema! Gostei muito da tecnicidade e profissionalismo, além do bom papo durante a execução! A instalação tem ajudado muito nas demandas da casa!!",
          socialLink: "https://www.instagram.com/juliapolena/",
          socialNickname: "@juliapolena",
        },
      ]}
    />

    <Showcase
      images={[
        {
          image: app,
          alt: "Celular com o aplicativo para o controle de iluminação",
        },
        {
          image: electrician,
          alt: "Serviço de automação de iluminação sendo executado",
        },
        {
          image: lamps,
          alt: "Teto moderno com luzes instaladas",
        },
        {
          image: switches,
          alt: "Interruptor inteligente novo, com o plástico sendo retirado",
        },
      ]}
    />
    <FAQ
      questions={[
        {
          question: "É necessário quebrar paredes para fazer a automação de lâmpadas?",
          answer:
            "De maneira nenhuma. Com a OPTIMUS Jr., não é preciso quebrar paredes para realizar a automação de lâmpadas. Nossas soluções de automação são projetadas para serem instaladas de forma não invasiva, sem a necessidade de qualquer intervenção estrutural em sua casa. Assim, você pode desfrutar dos benefícios da automação de lâmpadas de maneira prática e rápida, sem se preocupar com reformas ou danos nas paredes.",
        },
        {
          question: "A OPTIMUS Jr. faz automação de lâmpadas em ambientes externos?",
          answer:
            "Sim, com certeza! Nossos sistemas de automação de lâmpadas são perfeitamente adequados para uso em ambientes externos como jardins, quintais, varandas e áreas de lazer. Na OPTIMUS Jr., entendemos a importância de proporcionar iluminação inteligente e conveniente tanto dentro quanto fora de sua casa.",
        },
        {
          question:
            "Posso automatizar apenas algumas lâmpadas ou é necessário automatizar todas de uma vez?",
          answer:
            "Você escolhe! Você pode contratar a automação de apenas uma lâmpada ou fazer logo de todas de uma vez, tudo de acordo com suas necessidades e orçamento.",
        },
        {
          question: "Eu preciso ter uma Alexa para automatizar minhas lâmpadas?",
          answer:
            "Não, você não precisa ter uma Alexa para automatizar suas lâmpadas. Apesar de ser mais legal utilizar o comando de voz pela Alexa, também é possível utilizar apenas o aplicativo para controlar as lâmpadas, ou usar o comando de voz por meio do Google Assistant do seu celular.",
        },
        {
          question:
            "A automação de lâmpadas é compatível com diferentes tipos de lâmpadas, como LED, fluorescentes ou incandescentes?",
          answer:
            "Sim, nós automatizamos qualquer tipo de lâmpada. O sistema de automação trabalha diretamente no circuito elétrico da casa, permitindo que você automatize qualquer lâmpada conectada a esse circuito.",
        },
        {
          question:
            "Quero automatizar as lâmpadas, mas manter os interruptores que já tenho em casa. É possível?",
          answer:
            "Sim! Apesar de termos interruptores inteligentes com design moderno e controle por touch, entendemos que algumas pessoas preferem manter a estética e a familiaridade de seus interruptores convencionais. Por isso, oferecemos soluções de automação que podem ser instaladas de forma discreta por trás dos interruptores existentes, permitindo que você controle suas lâmpadas de maneira automatizada sem afetar o funcionamento dos interruptores que você já possui.",
        },
        {
          question: "Oque acontece com as automações quando a internet cai?",
          answer:
            "Quando a conexão com a internet estiver inativa, o controle remoto das lâmpadas através do aplicativo ou assistente de voz pode ser temporariamente afetado. No entanto, o controle manual através dos interruptores físicos continua funcionando normalmente.",
        },
      ]}
    />

    <CallToAction />
  </>
);

export default Lights;
