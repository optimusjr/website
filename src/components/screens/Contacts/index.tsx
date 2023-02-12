import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import Screen from "@/components/common/Screen";
import TextField from "@/components/common/TextField";
import Title from "@/components/common/Title";
import Typography from "@/components/common/Typography";
import EmailIcon from "@/components/icons/Email";
import PhoneIcon from "@/components/icons/Phone";
import SendIcon from "@/components/icons/Send";
import WhatsappIcon from "@/components/icons/Whatsapp";

import ContactCard from "./ContactCard";
import styles from "./contacts.module.scss";

const Contacts = () => {
  return (
    <Screen backgroundColor="secondary" id="contact">
      <Title strap="Contato">Fale conosco</Title>

      <div className={styles.content}>
        <ContactCard href="http://wa.me/5571999112217">
          <WhatsappIcon />
          <div>
            <Typography variant="h3">Chame no WhatsApp</Typography>
            <Typography>+55 71 99911-2217</Typography>
          </div>
        </ContactCard>

        <ContactCard href="mailto:contato@optimusjr.com.br">
          <EmailIcon />
          <div>
            <Typography variant="h3">Mande um e-mail</Typography>
            <Typography>contato@optimusjr.com.br</Typography>
          </div>
        </ContactCard>

        <ContactCard href="tel:+5571999112217">
          <PhoneIcon />
          <div>
            <Typography variant="h3">Ligue pra gente</Typography>
            <Typography>(71) 99911-2217</Typography>
          </div>
        </ContactCard>

        <Card
          action="https://formsubmit.co/contato@optimusjr.com.br"
          as="form"
          className={styles.contactForm}
          method="POST"
        >
          <Typography variant="h3">Mande uma mensagem</Typography>

          <TextField label="Nome:" name="nome" required />
          <TextField label="E-mail:" name="email" type="email" required />
          <TextField label="Sua mensagem:" name="mensagem" multiline required />

          <input name="_next" type="hidden" value="https://optimusjr.com.br/thanks" />

          <Button type="submit">
            <SendIcon />
            Enviar
          </Button>
        </Card>
      </div>
    </Screen>
  );
};

export default Contacts;
