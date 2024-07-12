"use client";

import EmailIcon from "@/components/icons/Email";
import PhoneIcon from "@/components/icons/Phone";
import WhatsappIcon from "@/components/icons/Whatsapp";
import { Screen, ScreenTitle } from "@/components/others/Screen";
import config from "@/config";

import { ContactCard, ContactCardLink, ContactCardTitle } from "./ContactCard";
import FormCard from "./FormCard";

const Contacts = () => (
  <Screen bgColor="secondary" id="contact" gap padding>
    <ScreenTitle strap="Contato">Fale conosco</ScreenTitle>

    <div className="grid w-full gap-8 lg:w-auto lg:grid-cols-[1fr_2fr] lg:grid-rows-3">
      <ContactCard Icon={WhatsappIcon} href={config.WHATSAPP_LINK}>
        <ContactCardTitle>Chame no WhatsApp</ContactCardTitle>
        <ContactCardLink>{config.WHATSAPP}</ContactCardLink>
      </ContactCard>
      <ContactCard Icon={EmailIcon} href={`mailto:${config.EMAIL}`}>
        <ContactCardTitle>Mande um e-mail</ContactCardTitle>
        <ContactCardLink>{config.EMAIL}</ContactCardLink>
      </ContactCard>
      <ContactCard Icon={PhoneIcon} href={`tel:${config.PHONE_NUMBER.replace(/[^0-9]/g, "")}`}>
        <ContactCardTitle>Ligue pra gente</ContactCardTitle>
        <ContactCardLink>{config.PHONE_NUMBER}</ContactCardLink>
      </ContactCard>

      <FormCard />
    </div>
  </Screen>
);

export default Contacts;
