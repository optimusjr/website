import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import Page from "@/components/common/Page";
import TextField from "@/components/common/TextField";
import Title from "@/components/common/Title";

import ContactCard from "./ContactCard";
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
          action="https://formsubmit.co/contato@optimusjr.com.br"
          method="POST"
        >
          <h3>Mande uma mensagem</h3>

          <TextField label="Nome:" name={"nome"} required />
          <TextField label="E-mail:" name={"email"} type="email" required />
          <TextField label="Sua mensagem:" name={"mensagem"} required multiline />

          <input type="hidden" name="_next" value="https://optimusjr.com.br/thanks" />

          <Button type="submit">
            <SendIcon />
            Enviar
          </Button>
        </Card>
      </div>
    </Page>
  );
};

export default Contacts;
