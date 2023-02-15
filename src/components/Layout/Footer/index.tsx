import Link from "next/link";

import Button from "@/components/common/Button";
import Image from "@/components/common/Image";
import Typography from "@/components/common/Typography";
import FacebookIcon from "@/components/icons/Facebook";
import InstagramIcon from "@/components/icons/Instagram";
import LinkedinIcon from "@/components/icons/LinkedIn";
import WhatsappIcon from "@/components/icons/Whatsapp";
import logo_horizontal from "@/images/OPTIMUS/logo_white_horizontal.svg";

import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Image alt="Logo da OPTIMUS Jr." height={64} placeholder="empty" src={logo_horizontal} />

      <div className={styles.links}>
        <Button as={Link} href="https://www.instagram.com/optimusjrautomacao/">
          <InstagramIcon />
        </Button>
        <Button as={Link} href="http://wa.me/5571999112217">
          <WhatsappIcon />
        </Button>
        <Button as={Link} href="https://br.linkedin.com/company/optimus-jr-automacao">
          <LinkedinIcon />
        </Button>
        <Button as={Link} href="https://pt-br.facebook.com/OptimusJrAutomacao/">
          <FacebookIcon />
        </Button>
      </div>

      <Typography>
        Rua Aristides Novis, 02, 6º andar
        <br />
        Salvador, Bahia.
      </Typography>

      <Typography>
        &copy;{new Date().getFullYear()} OPTIMUS Jr. Controle e Automação. <br />
        Todos os direitos reservados
      </Typography>
    </footer>
  );
};

export default Footer;
