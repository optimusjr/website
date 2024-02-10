import { StaticImageData } from "next/image";

import Image from "@/components/lib/Image";
import Link from "@/components/lib/Link";
import Screen from "@/components/others/Screen";
import optimusLogo from "@/images/OPTIMUS/logo_horizontal.svg";

const Partners = () => (
  <Screen bgColor="neutral" className="py-4 pb-8 sm:py-8 md:py-16">
    <Screen.title strap="Conexões de Sucesso">Clientes e Parceiros</Screen.title>

    <div className="flex w-full justify-center overflow-x-scroll p-8">
      <div className="flex w-max gap-8">
        <Partner alt="Logo da OPTIMUS Jr." href="/" image={optimusLogo} />
        <Partner alt="Logo da OPTIMUS Jr." href="/" image={optimusLogo} />
        <Partner alt="Logo da OPTIMUS Jr." href="/" image={optimusLogo} />
        <Partner alt="Logo da OPTIMUS Jr." href="/" image={optimusLogo} />
        <Partner alt="Logo da OPTIMUS Jr." href="/" image={optimusLogo} />
      </div>
    </div>
  </Screen>
);

export default Partners;

interface PartnerProps {
  image: StaticImageData;
  alt: string;
  href: string;
}

const Partner = ({ image, alt, href }: PartnerProps) => (
  <Link
    className="aspect-video w-56 rounded-xl bg-white p-4 grayscale transition-shadow hover:shadow-lg hover:grayscale-0"
    href={href}
  >
    <Image alt={alt} className="h-full w-full" src={image} />
  </Link>
);
