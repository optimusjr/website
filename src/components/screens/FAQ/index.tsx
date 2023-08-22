import { Accordion, AccordionContainer } from "@/components/common/Accordion";
import Screen from "@/components/common/Screen";
import Title from "@/components/common/Title";
import Typography from "@/components/common/Typography";

import styles from "./FAQ.module.scss";

const FAQ = () => (
  <Screen backgroundColor="white" className={styles.screen}>
    <Title className={styles.title} strap="Perguntas frequentes">
      Você tem alguma dúvida?
    </Title>

    <AccordionContainer>
      <Accordion title="É necessário quebrar paredes para fazer a automação de lâmpadas?">
        <Typography>
          De maneira nenhuma. Com a OPTIMUS Jr., não é preciso quebrar paredes para realizar a
          automação de lâmpadas. Nossas soluções de automação são projetadas para serem instaladas
          de forma não invasiva, sem a necessidade de qualquer intervenção estrutural em sua casa.
          Assim, você pode desfrutar dos benefícios da automação de lâmpadas de maneira prática e
          rápida, sem se preocupar com reformas ou danos nas paredes.
        </Typography>
      </Accordion>

      <Accordion title="A OPTIMUS Jr. faz automação de lâmpadas em ambientes externos?">
        <Typography>
          Sim, com certeza! Nossos sistemas de automação de lâmpadas são perfeitamente adequados
          para uso em ambientes externos como jardins, quintais, varandas e áreas de lazer. Na
          OPTIMUS Jr., entendemos a importância de proporcionar iluminação inteligente e conveniente
          tanto dentro quanto fora de sua casa.
        </Typography>
      </Accordion>

      <Accordion title="Posso automatizar apenas algumas lâmpadas ou é necessário automatizar todas de uma vez?">
        <Typography>
          Você escolhe! Você pode contratar a automação de apenas uma lâmpada ou fazer logo de todas
          de uma vez, tudo de acordo com suas necessidades e orçamento.
        </Typography>
      </Accordion>

      <Accordion title="Eu preciso ter uma Alexa para automatizar minhas lâmpadas?">
        <Typography>
          Não, você não precisa ter uma Alexa para automatizar suas lâmpadas. Apesar de ser mais
          legal utilizar o comando de voz pela Alexa, também é possível utilizar apenas o aplicativo
          para controlar as lâmpadas, ou usar o comando de voz por meio do Google Assistant do seu
          celular.
        </Typography>
      </Accordion>

      <Accordion title="A automação de lâmpadas é compatível com diferentes tipos de lâmpadas, como LED, fluorescentes ou incandescentes?">
        <Typography>
          Sim, nós automatizamos qualquer tipo de lâmpada. O sistema de automação trabalha
          diretamente no circuito elétrico da casa, permitindo que você automatize qualquer lâmpada
          conectada a esse circuito.
        </Typography>
      </Accordion>

      <Accordion title="Quero automatizar as lâmpadas, mas manter os interruptores que já tenho em casa. É possível?">
        <Typography>
          Sim! Apesar de termos interruptores inteligentes com design moderno e controle por touch,
          entendemos que algumas pessoas preferem manter a estética e a familiaridade de seus
          interruptores convencionais. Por isso, oferecemos soluções de automação que podem ser
          instaladas de forma discreta por trás dos interruptores existentes, permitindo que você
          controle suas lâmpadas de maneira automatizada sem afetar o funcionamento dos
          interruptores que você já possui.
        </Typography>
      </Accordion>

      <Accordion title="Oque acontece com as automações quando a internet cai?">
        <Typography>
          Quando a conexão com a internet estiver inativa, o controle remoto das lâmpadas através do
          aplicativo ou assistente de voz pode ser temporariamente afetado. No entanto, o controle
          manual através dos interruptores físicos continua funcionando normalmente.
        </Typography>
      </Accordion>
    </AccordionContainer>
  </Screen>
);

export default FAQ;
