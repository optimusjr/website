import Button from "@/components/Button";
import Link from "@/components/Link";
import ListCard from "@/components/ListCard";
import config from "@/config";

export interface Props {
  aboutPage?: string;
  image: React.ReactNode;
  children: React.ReactNode;
}

const ServiceCard = ({ aboutPage, image, children }: Props) => (
  <ListCard className="flex w-[30vw] min-w-80 max-w-lg flex-col p-4 sm:p-8">
    <div className="overflow-hidden rounded-xl">{image}</div>
    <div className="flex flex-col gap-4">{children}</div>

    {aboutPage ? (
      <Button as={Link} className="m-auto mb-0" href={aboutPage}>
        Confira mais Detalhes
      </Button>
    ) : (
      <Button as={Link} className="m-auto mb-0" href={config.QUOTE_URL}>
        Faça um Orçamento
      </Button>
    )}
  </ListCard>
);

export default ServiceCard;
