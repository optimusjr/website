import Link from "next/link";
import Image from "next-image-export-optimizer";

import Button from "@/components/common/Button";
import logo_horizontal from "@/images/icons/OPTIMUS/logo_white_horizontal.svg";

import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image src={logo_horizontal} alt="Logo da OPTIMUS Jr." height={64} />

      <div className={styles.links}>
        <Button as={Link} href="https://www.instagram.com/optimusjrautomacao/">
          <Image src="/images/icons/instagram.svg" alt="Ícone do Instagram" width={32} />
        </Button>
        <Button as={Link} href="http://wa.me/5571999112217">
          <Image src="/images/icons/whatsapp.svg" alt="Ícone do Whatsapp" width={32} />
        </Button>
        <Button as={Link} href="https://br.linkedin.com/company/optimus-jr-automacao">
          <Image src="/images/icons/linkedin.svg" alt="Ícone do LinkedIn" width={32} />
        </Button>
        <Button as={Link} href="https://pt-br.facebook.com/OptimusJrAutomacao/">
          <Image src="/images/icons/facebook.svg" alt="Ícone do Facebook" width={32} />
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
