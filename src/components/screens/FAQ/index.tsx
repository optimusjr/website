import { Accordion, AccordionContainer } from "@/components/common/Accordion";
import Screen from "@/components/common/Screen";
import Title from "@/components/common/Title";
import Typography from "@/components/common/Typography";

import styles from "./FAQ.module.scss";

const FAQ = () => {
  return (
    <Screen backgroundColor="white" className={styles.screen}>
      <Title className={styles.title} strap="Perguntas frequentes">
        Você tem alguma dúvida?
      </Title>

      <AccordionContainer>
        <Accordion title="É necessário instalar equipamentos adicionais?">
          <Typography>
            Geralmente, a automação de lâmpadas requer lâmpadas inteligentes compatíveis com a
            tecnologia de controle remoto ou assistente virtual. É possível também utilizar
            dispositivos como hubs ou bridges para gerenciar várias lâmpadas em conjunto.
          </Typography>
        </Accordion>

        <Accordion title="Como programar horários para as lâmpadas?">
          <Typography>
            Através do aplicativo dedicado, você pode facilmente configurar horários para que as
            lâmpadas liguem e desliguem automaticamente. Isso permite criar cenários personalizados
            para diferentes momentos do dia.
          </Typography>
        </Accordion>

        <Accordion title="Posso usar a automação de lâmpadas em ambientes externos?">
          <Typography>
            Isso depende das especificações do produto. Algumas lâmpadas inteligentes são projetadas
            para uso interno, enquanto outras são resistentes a intempéries e podem ser usadas em
            ambientes externos.
          </Typography>
        </Accordion>

        <Accordion title="A automação de lâmpadas é segura?">
          <Typography>
            Sim, a automação de lâmpadas é segura. Os dispositivos utilizados seguem padrões de
            segurança e criptografia para proteger seus dados e garantir a privacidade.
          </Typography>
        </Accordion>

        <Accordion title="As lâmpadas inteligentes funcionam com assistentes virtuais?">
          <Typography>
            Sim, as lâmpadas inteligentes são compatíveis com assistentes virtuais populares, como
            Amazon Alexa e Google Assistant. Basta sincronizar as lâmpadas com o assistente virtual
            e usar comandos de voz para controlá-las.
          </Typography>
        </Accordion>

        <Accordion title="Quantas lâmpadas posso controlar com a automação?">
          <Typography>
            Você pode controlar quantas lâmpadas forem compatíveis com a tecnologia de automação que
            você escolher. É possível gerenciar várias lâmpadas em um único aplicativo ou hub.
          </Typography>
        </Accordion>

        <Accordion title="É necessário ter conhecimento técnico para configurar a automação?">
          <Typography>
            Não é necessário ter conhecimento técnico avançado. A maioria das lâmpadas inteligentes
            é fácil de configurar e utilizar, e a instalação é simples, bastando seguir as
            instruções do fabricante.
          </Typography>
        </Accordion>

        <Accordion title="As lâmpadas inteligentes são compatíveis com diferentes tipos de soquetes?">
          <Typography>
            Sim, existem lâmpadas inteligentes com diferentes tipos de soquetes, como E27, E14,
            GU10, entre outros. Certifique-se de escolher lâmpadas que se encaixem nos soquetes de
            suas luminárias.
          </Typography>
        </Accordion>
      </AccordionContainer>
    </Screen>
  );
};

export default FAQ;
