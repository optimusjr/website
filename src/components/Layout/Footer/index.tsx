import Link from "next/link";
import Image from "next-image-export-optimizer";

import Button from "@/components/common/Button";
import facebookIcon from "@/images/icons/facebook.svg";
import instagramIcon from "@/images/icons/instagram.svg";
import linkedinIcon from "@/images/icons/linkedin.svg";
import logo_horizontal from "@/images/icons/OPTIMUS/logo_white_horizontal.svg";
import whatsappIcon from "@/images/icons/whatsapp.svg";

import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image placeholder="empty" src={logo_horizontal} alt="Logo da OPTIMUS Jr." height={64} />

      <div className={styles.links}>
        <Button as={Link} href="https://www.instagram.com/optimusjrautomacao/">
          <Image placeholder="empty" src={instagramIcon} alt="Ícone do Instagram" width={32} />
        </Button>
        <Button as={Link} href="http://wa.me/5571999112217">
          <Image placeholder="empty" src={whatsappIcon} alt="Ícone do Whatsapp" width={32} />
        </Button>
        <Button as={Link} href="https://br.linkedin.com/company/optimus-jr-automacao">
          <Image placeholder="empty" src={linkedinIcon} alt="Ícone do LinkedIn" width={32} />
        </Button>
        <Button as={Link} href="https://pt-br.facebook.com/OptimusJrAutomacao/">
          <Image placeholder="empty" src={facebookIcon} alt="Ícone do Facebook" width={32} />
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
}
