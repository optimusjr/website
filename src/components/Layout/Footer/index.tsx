import Link from "next/link";
import Image from "next-image-export-optimizer";

import Button from "@/components/common/Button";
import facebookIcon from "@/images/icons/facebook.svg";
import instagramIcon from "@/images/icons/instagram.svg";
import linkedinIcon from "@/images/icons/linkedin.svg";
import logo_horizontal from "@/images/icons/OPTIMUS/logo_white_horizontal.svg";
import whatsappIcon from "@/images/icons/whatsapp.svg";

import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Image alt="Logo da OPTIMUS Jr." height={64} placeholder="empty" src={logo_horizontal} />

      <div className={styles.links}>
        <Button as={Link} href="https://www.instagram.com/optimusjrautomacao/">
          <Image alt="Ícone do Instagram" placeholder="empty" src={instagramIcon} width={32} />
        </Button>
        <Button as={Link} href="http://wa.me/5571999112217">
          <Image alt="Ícone do Whatsapp" placeholder="empty" src={whatsappIcon} width={32} />
        </Button>
        <Button as={Link} href="https://br.linkedin.com/company/optimus-jr-automacao">
          <Image alt="Ícone do LinkedIn" placeholder="empty" src={linkedinIcon} width={32} />
        </Button>
        <Button as={Link} href="https://pt-br.facebook.com/OptimusJrAutomacao/">
          <Image alt="Ícone do Facebook" placeholder="empty" src={facebookIcon} width={32} />
        </Button>
      </div>

      <p>
        Rua Aristides Novis, 02, 6º andar
        <br />
        Salvador, Bahia.
      </p>

      <p>
        &copy;{new Date().getFullYear()} OPTIMUS Jr. Controle e Automação. <br />
        Todos os direitos reservados
      </p>
    </footer>
  );
};

export default Footer;
