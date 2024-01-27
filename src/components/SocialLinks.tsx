import FacebookIcon from "@/components/icons/Facebook";
import InstagramIcon from "@/components/icons/Instagram";
import LinkedInIcon from "@/components/icons/LinkedIn";
import WhatsappIcon from "@/components/icons/Whatsapp";
import Link from "@/components/lib/Link";
import Button from "@/components/ui/Button";
import config from "@/config";

const { INSTAGRAM, WHATSAPP, LINKEDIN, FACEBOOK } = config;

const SocialLinks = () => (
  <div className="flex gap-4">
    <Button as={Link} className="p-2" href={INSTAGRAM}>
      <InstagramIcon className="w-8" />
    </Button>
    <Button as={Link} className="p-2" href={`https://wa.me/${WHATSAPP.replace(/[^0-9]/g, "")}`}>
      <WhatsappIcon className="w-8" />
    </Button>
    <Button as={Link} className="p-2" href={LINKEDIN}>
      <LinkedInIcon className="w-8" />
    </Button>
    <Button as={Link} className="p-2" href={FACEBOOK}>
      <FacebookIcon className="w-8" />
    </Button>
  </div>
);

export default SocialLinks;
