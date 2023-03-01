import Button from "@/components/common/Button";
import Link from "@/components/common/Link";
import FacebookIcon from "@/components/icons/Facebook";
import InstagramIcon from "@/components/icons/Instagram";
import LinkedinIcon from "@/components/icons/LinkedIn";
import WhatsappIcon from "@/components/icons/Whatsapp";

import styles from "./socialLinks.module.scss";

const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
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
  );
};

export default SocialLinks;
