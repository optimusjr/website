import { StaticImageData } from "next/image";

import Section from "@/app/(main)/about/_components/Information/Section";
import Image from "@/components/lib/Image";
import Link from "@/components/lib/Link";
import Screen from "@/components/others/Screen";
import Button from "@/components/ui/Button";
import optimusLogo from "@/images/OPTIMUS/logo_horizontal.svg";

const Partners = () => (
  <Screen bgColor="neutral" padding>
    <Section>
      <Section.illustration>
        <div className="grid grid-cols-2 gap-8">
          <Partner alt="Logo da OPTIMUS Jr." href="/" image={optimusLogo} />
          <Partner alt="Logo da OPTIMUS Jr." href="/" image={optimusLogo} />
          <Partner alt="Logo da OPTIMUS Jr." href="/" image={optimusLogo} />
          <Partner alt="Logo da OPTIMUS Jr." href="/" image={optimusLogo} />
          <div className="hidden">
            <Partner alt="Logo da OPTIMUS Jr." href="/" image={optimusLogo} />
            <Partner alt="Logo da OPTIMUS Jr." href="/" image={optimusLogo} />
            <Partner alt="Logo da OPTIMUS Jr." href="/" image={optimusLogo} />
            <Partner alt="Logo da OPTIMUS Jr." href="/" image={optimusLogo} />
            <Partner alt="Logo da OPTIMUS Jr." href="/" image={optimusLogo} />
          </div>
        </div>
      </Section.illustration>

      <Section.content>
        <Section.title strap="Conexões de Sucesso">Clientes e Parceiros</Section.title>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis placeat illo alias
          deleniti nihil aspernatur dolore nostrum totam minima earum culpa, rem ab dolor officiis
          blanditiis adipisci, recusandae atque consectetur!
        </p>
        <p>
          Aspernatur, quos nihil fugit cumque expedita accusantium. Lorem ipsum dolor sit amet
          consectetur adipisicing. Rem ab dolor officiis blanditiis adipisci, recusandae atque
          consectetur!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis placeat illo alias
          deleniti nihil aspernatur dolore nostrum totam minima earum culpa, rem ab dolor officiis
          blanditiis adipisci, recusandae atque consectetur!
        </p>
        <Button className="mr-auto">Entre em Contato e seja um parceiro</Button>
      </Section.content>
    </Section>
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
    className="aspect-video rounded-xl bg-white p-4 grayscale transition-shadow hover:shadow-lg hover:grayscale-0"
    href={href}
  >
    <Image alt={alt} className="h-full w-full" src={image} />
  </Link>
);
