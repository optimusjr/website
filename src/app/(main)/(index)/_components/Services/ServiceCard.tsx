import { m } from "framer-motion";

import Link from "@/components/lib/Link";
import StyledImage from "@/components/others/StyledImage";
import Button from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import config from "@/config";
import fadeIn from "@/utils/animations/fadeIn";
import type { PropsWithChildren } from "@/utils/types/PropsWithChildren";

export interface Props extends PropsWithChildren {
  aboutPage?: string;
}

const ServiceCard = ({ aboutPage, children }: Props) => (
  <Card
    as={m.li}
    {...fadeIn}
    bgColor="white"
    className="flex w-[30vw] min-w-72 max-w-lg flex-col gap-4 p-4 sm:min-w-80 sm:p-8"
  >
    {children}

    {aboutPage ? (
      <Button as={Link} className="m-auto mb-0" href={aboutPage}>
        Confira mais Detalhes
      </Button>
    ) : (
      <Button as={Link} className="m-auto mb-0" href={config.QUOTE_URL}>
        Faça um Orçamento
      </Button>
    )}
  </Card>
);

const ServiceCardImage = StyledImage;

const ServiceCardTitle = ({ children }: PropsWithChildren) => (
  <CardTitle className="text-center">{children}</CardTitle>
);

const ServiceCardDescription = ({ children }: PropsWithChildren) => (
  <p className="text-center">{children}</p>
);

export { ServiceCard, ServiceCardDescription, ServiceCardImage, ServiceCardTitle };
export default ServiceCard;
