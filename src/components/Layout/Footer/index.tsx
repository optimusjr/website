import Image from "@/components/common/Image";
import SocialLinks from "@/components/common/SocialLinks";
import Typography from "@/components/common/Typography";
import logo_horizontal from "@/images/OPTIMUS/logo_white_horizontal.svg";

import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Image alt="Logo da OPTIMUS Jr." height={64} placeholder="empty" src={logo_horizontal} />

      <SocialLinks />

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
