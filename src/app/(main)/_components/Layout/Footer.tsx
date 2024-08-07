import Image from "@/components/lib/Image";
import Screen from "@/components/others/Screen";
import SocialLinks from "@/components/others/SocialLinks";
import logo_horizontal from "@/images/OPTIMUS/logo_white_horizontal.svg";

const Footer = () => (
  <Screen
    as="footer"
    bgColor="black"
    className="relative z-10 grid items-center justify-items-center gap-4 text-center drop-shadow-md md:grid-cols-2"
    padding
    shadow
  >
    <Image alt="Logo da OPTIMUS Jr." height={64} src={logo_horizontal} />

    <SocialLinks />

    <p className="text-white">
      Rua Aristides Novis, 02, 6º andar
      <br />
      Salvador, Bahia.
    </p>

    <p className="text-white">
      &copy; {new Date().getFullYear()} OPTIMUS Jr. Controle e Automação. <br />
      Todos os direitos reservados
    </p>
  </Screen>
);

export default Footer;
