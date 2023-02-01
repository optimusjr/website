import Link from "next/link";

import Button from "@/components/common/Button";
import Page from "@/components/common/Page";
import Title from "@/components/common/Title";
import SendIcon from "@/components/pages/Contacts/icons/Send";

import styles from "./contacts.module.scss";
import EmailIcon from "./icons/Email";
import PhoneIcon from "./icons/Phone";
import WhatsappIcon from "./icons/Whatsapp";

const Contacts = () => {
  return (
    <Page id="contact" backgroundColor="secondary">
      <Title>
        <span>Contato</span>
        <h2>Fale conosco</h2>
      </Title>

      <div className={styles.content}>
        <section>
          <h3>Informações de Contato</h3>

          <div>
            <PhoneIcon />
            <h4>Liga pra gente</h4>
            <Link href="tel:+5571999112217">(71) 99911-2217</Link>
          </div>

          <div>
            <EmailIcon />
            <h4>Manda um e-mail</h4>
            <Link href="mailto:contato@optimusjr.com.br">contato@optimusjr.com.br</Link>
          </div>

          <div>
            <WhatsappIcon />
            <h4>Nos chame pelo WhatsApp</h4>
            <Link href="http://wa.me/5571999112217">+55 71 99911-2217</Link>
          </div>
        </section>

        <form action="https://formsubmit.co/silash35@gmail.com" method="POST">
          <h3>Como a OPTIMUS Jr. pode te ajudar?</h3>

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
        </form>
      </div>
    </Page>
  );
};

export default Contacts;
