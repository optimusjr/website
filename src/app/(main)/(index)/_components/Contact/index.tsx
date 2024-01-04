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

import ContactCard from "./ContactCard";

const Contacts = () => (
  <Screen backgroundColor="secondary" id="contact">
    <Title strap="Contato">Fale conosco</Title>

    <div className="grid w-full gap-4 md:w-auto md:grid-cols-[1fr_2fr] md:grid-rows-3">
      <ContactCard
        Icon={<WhatsappIcon />}
        href={`https://wa.me/${config.WHATSAPP.replace(/[^0-9]/g, "")}`}
      >
        <Typography className="text-2xl" color="primary" variant="h3">
          Chame no WhatsApp
        </Typography>
        <Typography component="p" variant="a">
          {config.WHATSAPP}
        </Typography>
      </ContactCard>

      <ContactCard Icon={<EmailIcon />} href={`mailto:${config.EMAIL}`}>
        <Typography className="text-2xl" color="primary" variant="h3">
          Mande um e-mail
        </Typography>
        <Typography component="p" variant="a">
          {config.EMAIL}
        </Typography>
      </ContactCard>

      <ContactCard Icon={<PhoneIcon />} href={`tel:${config.PHONE_NUMBER.replace(/[^0-9]/g, "")}`}>
        <Typography className="text-2xl" color="primary" variant="h3">
          Ligue pra gente
        </Typography>
        <Typography component="p" variant="a">
          {config.PHONE_NUMBER}
        </Typography>
      </ContactCard>

      <Card
        action={`https://formsubmit.co/${config.EMAIL}`}
        as="form"
        className="flex flex-col md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-4"
        method="POST"
      >
        <Typography color="primary" variant="h3">
          Mande uma mensagem
        </Typography>

        <TextField autoComplete="name" label="Nome:" name="nome" required />
        <TextField autoComplete="email" label="E-mail:" name="email" type="email" required />
        <TextArea label="Sua mensagem:" name="mensagem" required />

        <input name="_next" type="hidden" value={`${process.env.SITE_URL}/thanks`} />

        <Button className="ml-auto" type="submit">
          <SendIcon />
          Enviar
        </Button>
      </Card>
    </div>
  </Screen>
);

export default Contacts;
