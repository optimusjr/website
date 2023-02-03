import { m } from "framer-motion";
import Link from "next/link";

import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import Page from "@/components/common/Page";
import Title from "@/components/common/Title";
import variables from "@/styles/variables.module.scss";

import styles from "./contacts.module.scss";
import EmailIcon from "./icons/Email";
import PhoneIcon from "./icons/Phone";
import SendIcon from "./icons/Send";
import WhatsappIcon from "./icons/Whatsapp";

const Contacts = () => {
  return (
    <Page id="contact" backgroundColor="secondary">
      <Title>
        <span>Contato</span>
        <h2>Fale conosco</h2>
      </Title>

      <div className={styles.content}>
        <ContactCard href="http://wa.me/5571999112217">
          <WhatsappIcon />
          <div>
            <h3>Chame no WhatsApp</h3>
            <p>+55 71 99911-2217</p>
          </div>
        </ContactCard>

        <ContactCard href="mailto:contato@optimusjr.com.br">
          <EmailIcon />
          <div>
            <h3>Mande um e-mail</h3>
            <p>contato@optimusjr.com.br</p>
          </div>
        </ContactCard>

        <ContactCard href="tel:+5571999112217">
          <PhoneIcon />
          <div>
            <h3>Ligue pra gente</h3>
            <p>(71) 99911-2217</p>
          </div>
        </ContactCard>

        <Card
          as="form"
          className={styles.contactForm}
          action="https://formsubmit.co/silash35@gmail.com"
          method="POST"
        >
          <h3>Mande uma mensagem</h3>

          <label>
            <span>Nome:</span>
            <input name="nome" aria-label="Digite o seu nome completo" required />
          </label>
          <label>
            <span>E-mail:</span>
            <input type="email" name="email" aria-label="Digite o seu e-mail" required />
          </label>

          <label className={styles.textarea}>
            <span>Sua mensagem:</span>
            <textarea name="mensagem" aria-label="Digite a sua mensagem"></textarea>
          </label>

          <Button type="submit">
            <SendIcon />
            Enviar
          </Button>
        </Card>
      </div>
    </Page>
  );
};

interface Props {
  href: string;
  children: React.ReactNode;
}

const ContactCard = ({ href, children }: Props) => {
  return (
    <Link href={href}>
      <Card
        as={m.div}
        cardLayout="none"
        className={styles.contactCard}
        initial={{ scale: 1, boxShadow: variables.shadow2 }}
        whileHover={{ scale: 1.01, boxShadow: variables.shadow4 }}
        transition={{ type: "spring", duration: 0.3 }}
      >
        {children}
      </Card>
    </Link>
  );
};

export default Contacts;
