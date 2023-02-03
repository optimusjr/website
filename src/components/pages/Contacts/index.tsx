import Link from "next/link";

import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import Page from "@/components/common/Page";
import Title from "@/components/common/Title";

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
        <Link href="http://wa.me/5571999112217">
          <Card cardLayout="none" className={styles.contactCard}>
            <WhatsappIcon />
            <div>
              <h3>Chame no WhatsApp</h3>
              <p>+55 71 99911-2217</p>
            </div>
          </Card>
        </Link>

        <Link href="mailto:contato@optimusjr.com.br">
          <Card cardLayout="none" className={styles.contactCard}>
            <EmailIcon />
            <div>
              <h3>Mande um e-mail</h3>
              <p>contato@optimusjr.com.br</p>
            </div>
          </Card>
        </Link>

        <Link href="tel:+5571999112217">
          <Card cardLayout="none" className={styles.contactCard}>
            <PhoneIcon />
            <div>
              <h3>Ligue pra gente</h3>
              <p>(71) 99911-2217</p>
            </div>
          </Card>
        </Link>

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

export default Contacts;
