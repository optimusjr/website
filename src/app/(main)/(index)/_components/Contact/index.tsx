import Button from "@/components/Button";
import Card from "@/components/Card";
import EmailIcon from "@/components/icons/Email";
import PhoneIcon from "@/components/icons/Phone";
import SendIcon from "@/components/icons/Send";
import WhatsappIcon from "@/components/icons/Whatsapp";
import Screen from "@/components/Screen";
import { TextArea, TextField } from "@/components/TextField";
import Title from "@/components/Title";
import Typography from "@/components/Typography";
import config from "@/config";

import styles from "./contact.module.scss";
import ContactCard from "./ContactCard";

const Contacts = () => (
  <Screen backgroundColor="secondary" id="contact">
    <Title strap="Contato">Fale conosco</Title>

    <div className={styles.content}>
      <ContactCard href={`https://wa.me/${config.WHATSAPP.replace(/[^0-9]/g, "")}`}>
        <WhatsappIcon />
        <div>
          <Typography color="primary" variant="h3">
            Chame no WhatsApp
          </Typography>
          <Typography component="p" variant="a">
            {config.WHATSAPP}
          </Typography>
        </div>
      </ContactCard>

      <ContactCard href={`mailto:${config.EMAIL}`}>
        <EmailIcon />
        <div>
          <Typography color="primary" variant="h3">
            Mande um e-mail
          </Typography>
          <Typography component="p" variant="a">
            {config.EMAIL}
          </Typography>
        </div>
      </ContactCard>

      <ContactCard href={`tel:${config.PHONE_NUMBER.replace(/[^0-9]/g, "")}`}>
        <PhoneIcon />
        <div>
          <Typography color="primary" variant="h3">
            Ligue pra gente
          </Typography>
          <Typography component="p" variant="a">
            {config.PHONE_NUMBER}
          </Typography>
        </div>
      </ContactCard>

      <Card
        action={`https://formsubmit.co/${config.EMAIL}`}
        as="form"
        className={styles.contactForm}
        method="POST"
      >
        <Typography color="primary" variant="h3">
          Mande uma mensagem
        </Typography>

        <TextField autoComplete="name" label="Nome:" name="nome" required />
        <TextField autoComplete="email" label="E-mail:" name="email" type="email" required />
        <TextArea label="Sua mensagem:" name="mensagem" required />

        <input name="_next" type="hidden" value={`${process.env.SITE_URL}/thanks`} />

        <Button type="submit">
          <SendIcon />
          Enviar
        </Button>
      </Card>
    </div>
  </Screen>
);

export default Contacts;
