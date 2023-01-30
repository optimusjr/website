import Link from "next/link";

import Page from "@/components/common/Page";
import Title from "@/components/common/Title";

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
            <h4>Manda um email</h4>
            <Link href="mailto:contato@optimusjr.com.br">contato@optimusjr.com.br</Link>
          </div>

          <div>
            <WhatsappIcon />
            <h4>Chama no zap</h4>
            <Link href="http://wa.me/5571999112217">+55 71 99911-2217</Link>
          </div>
        </section>

        <form action="https://formsubmit.co/silash35@gmail.com" method="POST">
          <h3>Como a OPTIMUS Jr. pode te ajudar?</h3>
          <div>
            <label>
              <span>Nome*</span>
              <input
                placeholder="Seu nome Completo"
                name="nome"
                aria-label="Digite o seu nome completo"
                required
              />
            </label>
            <label>
              <span>Email*</span>
              <input
                placeholder="Seu Email"
                type="email"
                name="email"
                aria-label="Digite o seu email"
                required
              />
            </label>
          </div>

          <label>
            <textarea
              placeholder="Sua mensagem"
              name="mensagem"
              aria-label="Digite a sua mensagem"
            ></textarea>
            <span>Mensagem</span>
          </label>

          <button type="submit">
            <img src="/images/icons/send.svg" alt="paper plane icon" width="0" height="0" />
            Send
          </button>
        </form>
      </div>
    </Page>
  );
};

export default Contacts;
