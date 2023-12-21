import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import Screen from "@/components/common/Screen";
import { TextArea, TextField } from "@/components/common/TextField";
import Title from "@/components/common/Title";
import Typography from "@/components/common/Typography";
import EmailIcon from "@/components/icons/Email";
import PhoneIcon from "@/components/icons/Phone";
import SendIcon from "@/components/icons/Send";
import WhatsappIcon from "@/components/icons/Whatsapp";
import config from "@/config";

import ContactCard from "./ContactCard";
import styles from "./contacts.module.scss";

const Contacts = () => (
  <Screen backgroundColor="secondary" id="contact">
    <Title strap="Contato">Fale conosco</Title>

    <div className={styles.content}>
      <ContactCard href={`https://wa.me/${config.WHATSAPP.replace(/[^0-9]/g, "")}`}>
        <WhatsappIcon />
        <div>
          <Typography variant="h3">Chame no WhatsApp</Typography>
          <Typography component="p" variant="a">
            {config.WHATSAPP}
          </Typography>
        </div>
      </ContactCard>

      <ContactCard href={`mailto:${config.EMAIL}`}>
        <EmailIcon />
        <div>
          <Typography variant="h3">Mande um e-mail</Typography>
          <Typography component="p" variant="a">
            {config.EMAIL}
          </Typography>
        </div>
      </ContactCard>

      <ContactCard href={`tel:${config.PHONE_NUMBER.replace(/[^0-9]/g, "")}`}>
        <PhoneIcon />
        <div>
          <Typography variant="h3">Ligue pra gente</Typography>
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
        <Typography variant="h3">Mande uma mensagem</Typography>

        <TextField label="Nome:" name="nome" required />
        <TextField label="E-mail:" name="email" type="email" required />
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
