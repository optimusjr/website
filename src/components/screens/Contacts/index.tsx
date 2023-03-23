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
        <ContactCard href={`https://wa.me/${process.env.WHATSAPP?.replace(/[^0-9]/g, "")}`}>
          <WhatsappIcon />
          <div>
            <Typography variant="h3">Chame no WhatsApp</Typography>
            <Typography>{process.env.WHATSAPP}</Typography>
          </div>
        </ContactCard>

        <ContactCard href={`mailto:${process.env.EMAIL}`}>
          <EmailIcon />
          <div>
            <Typography variant="h3">Mande um e-mail</Typography>
            <Typography>{process.env.EMAIL}</Typography>
          </div>
        </ContactCard>

        <ContactCard href={`tel:${process.env.PHONE_NUMBER?.replace(/[^0-9]/g, "")}`}>
          <PhoneIcon />
          <div>
            <Typography variant="h3">Ligue pra gente</Typography>
            <Typography>{process.env.PHONE_NUMBER}</Typography>
          </div>
        </ContactCard>

        <Card
          action={`https://formsubmit.co/${process.env.EMAIL}`}
          as="form"
          className={styles.contactForm}
          method="POST"
        >
          <Typography variant="h3">Mande uma mensagem</Typography>

          <TextField label="Nome:" name="nome" required />
          <TextField label="E-mail:" name="email" type="email" required />
          <TextField label="Sua mensagem:" name="mensagem" multiline required />

          <input name="_next" type="hidden" value={`${process.env.SITE_URL}/thanks`} />

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
