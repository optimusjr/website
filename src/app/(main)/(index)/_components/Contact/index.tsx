"use client";

import EmailIcon from "@/components/icons/Email";
import PhoneIcon from "@/components/icons/Phone";
import WhatsappIcon from "@/components/icons/Whatsapp";
import Screen from "@/components/others/Screen";
import config from "@/config";

import ContactCard from "./ContactCard";
import FormCard from "./FormCard";

const Contacts = () => (
  <Screen bgColor="secondary" id="contact" gap padding>
    <Screen.title strap="Contato">Fale conosco</Screen.title>

    <div className="grid w-full gap-8 lg:w-auto lg:grid-cols-[1fr_2fr] lg:grid-rows-3">
      <ContactCard Icon={WhatsappIcon} href={config.WHATSAPP_LINK}>
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

      <FormCard />
    </div>
  </Screen>
);

export default Contacts;
