import { m } from "framer-motion";
import { tv } from "tailwind-variants";

import Button from "@/components/Button";
import Card from "@/components/Card";
import Image from "@/components/Image";
import Link from "@/components/Link";
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

const ServiceCardImage = tv({
  base: "transition-transform duration-1000 ease-in-out hover:scale-110",
});

ServiceCard.image = ({ className, ...props }: React.ComponentProps<typeof Image>) => (
  <div className="overflow-hidden rounded-xl">
    <Image className={ServiceCardImage({ className })} {...props} />
  </div>
);

ServiceCard.title = ({ children }: PropsWithChildren) => (
  <h3 className="text-center text-2xl/none font-bold uppercase text-primary-800">{children}</h3>
);

ServiceCard.description = ({ children }: PropsWithChildren) => (
  <p className="text-center text-lg/tight">{children}</p>
);

export default ServiceCard;
