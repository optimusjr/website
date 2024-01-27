"use client";

import EmailIcon from "@/components/icons/Email";
import PhoneIcon from "@/components/icons/Phone";
import SendIcon from "@/components/icons/Send";
import WhatsappIcon from "@/components/icons/Whatsapp";
import Screen from "@/components/Screen";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { TextArea, TextField } from "@/components/ui/TextField";
import config from "@/config";

import ContactCard from "./ContactCard";

const Contacts = () => (
  <Screen bgColor="secondary" id="contact" gap padding>
    <Screen.title strap="Contato">Fale conosco</Screen.title>

    <div className="grid w-full gap-8 lg:w-auto lg:grid-cols-[1fr_2fr] lg:grid-rows-3">
      <ContactCard
        Icon={WhatsappIcon}
        href={`https://wa.me/${config.WHATSAPP.replace(/[^0-9]/g, "")}`}
      >
        <ContactCard.title>Chame no WhatsApp</ContactCard.title>
        <ContactCard.link>{config.WHATSAPP}</ContactCard.link>
      </ContactCard>
      <ContactCard Icon={EmailIcon} href={`mailto:${config.EMAIL}`}>
        <ContactCard.title>Mande um e-mail</ContactCard.title>
        <ContactCard.link>{config.EMAIL}</ContactCard.link>
      </ContactCard>
      <ContactCard Icon={PhoneIcon} href={`tel:${config.PHONE_NUMBER.replace(/[^0-9]/g, "")}`}>
        <ContactCard.title>Ligue pra gente</ContactCard.title>
        <ContactCard.link>{config.PHONE_NUMBER}</ContactCard.link>
      </ContactCard>

      <Card
        action={`https://formsubmit.co/${config.EMAIL}`}
        as="form"
        bgColor="white"
        className="flex flex-col gap-8 p-8 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-4"
        method="POST"
      >
        <Card.title className="text-center">Mande uma mensagem</Card.title>

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
