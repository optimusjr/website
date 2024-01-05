import Image from "@/components/Image";
import SocialLinks from "@/components/SocialLinks";
import Typography from "@/components/Typography";
import logo_horizontal from "@/images/OPTIMUS/logo_white_horizontal.svg";

const Footer = () => (
  <footer className="grid items-center justify-items-center gap-4 bg-black p-4 sm:p-8 md:grid-cols-2 md:p-16">
    <Image alt="Logo da OPTIMUS Jr." height={64} placeholder="empty" src={logo_horizontal} />

    <SocialLinks />

    <Typography className="text-center" color="white">
      Rua Aristides Novis, 02, 6º andar
      <br />
      Salvador, Bahia.
    </Typography>

    <Typography className="text-center" color="white">
      &copy; {new Date().getFullYear()} OPTIMUS Jr. Controle e Automação. <br />
      Todos os direitos reservados
    </Typography>
  </footer>
);

export default Footer;
