import Card from "@/components/Card";
import CheckOutlineIcon from "@/components/icons/CheckOutline";
import DiamondIcon from "@/components/icons/Diamond";
import EyeIcon from "@/components/icons/Eye";
import TargetIcon from "@/components/icons/Target";
import Image from "@/components/Image";
import ListCard from "@/components/ListCard";
import QuoteButton from "@/components/QuoteButton";
import Screen from "@/components/Screen";
import Typography from "@/components/Typography";
import logo from "@/images/OPTIMUS/logo.svg";

const AboutStart = () => (
  <Screen bgColor="secondary" height="firstFull" gap padding>
    <section className="my-8 grid gap-4 animate-fade-in sm:grid-cols-2 lg:my-16">
      <div className="flex flex-col items-start gap-4">
        <Typography
          className="text-[length:calc(1rem+1vw)] font-bold"
          color="primary"
          component="p"
        >
          OPTIMUS Jr.
        </Typography>
        <Typography className="text-[length:calc(2rem+2vw)] leading-none" variant="h1">
          A Empresa Junior de Controle e Automação.
        </Typography>
        <Typography className="text-[length:calc(1rem+1vw)] leading-none">
          Trazemos conforto, segurança e economia para os seus ambientes.
        </Typography>

        <QuoteButton />
      </div>

      <Card className="ml-auto hidden p-16 md:flex">
        <Image alt="Logotipo da OPTIMUS Jr." placeholder="empty" src={logo} width={350} priority />
      </Card>
    </section>

    <ul className="grid items-center gap-8 lg:grid-cols-3">
      <ListCard cardLayout="column" className="items-center [&>svg]:w-32">
        <TargetIcon />
        <Typography className="text-2xl" color="primary" variant="h3">
          Missão
        </Typography>
        <Typography>
          Desenvolver nossos membros na área de automação, através da vivência empresarial, com foco
          em trazer a melhor experiência para os nossos clientes.
        </Typography>
      </ListCard>

      <ListCard cardLayout="column" className="items-center [&>svg]:w-32">
        <DiamondIcon />

        <Typography className="text-2xl" color="primary" variant="h3">
          Valores
        </Typography>
        <ul className="w-full">
          <Typography
            className="my-2 flex flex-nowrap items-center gap-2 [&>svg]:fill-primary-800"
            component="li"
            variant="p"
          >
            <CheckOutlineIcon /> Autonomia
          </Typography>
          <Typography
            className="my-2 flex flex-nowrap items-center gap-2 [&>svg]:fill-primary-800"
            component="li"
            variant="p"
          >
            <CheckOutlineIcon /> Resiliência
          </Typography>
          <Typography
            className="my-2 flex flex-nowrap items-center gap-2 [&>svg]:fill-primary-800"
            component="li"
            variant="p"
          >
            <CheckOutlineIcon /> Comprometimento com resultados
          </Typography>
          <Typography
            className="my-2 flex flex-nowrap items-center gap-2 [&>svg]:fill-primary-800"
            component="li"
            variant="p"
          >
            <CheckOutlineIcon /> Sentimento de Ser Dono
          </Typography>
          <Typography
            className="my-2 flex flex-nowrap items-center gap-2 [&>svg]:fill-primary-800"
            component="li"
            variant="p"
          >
            <CheckOutlineIcon /> Orgulho de ser OPTIMUS
          </Typography>
        </ul>
      </ListCard>

      <ListCard cardLayout="column" className="items-center [&>svg]:w-32">
        <EyeIcon />

        <Typography className="text-2xl" color="primary" variant="h3">
          Visão
        </Typography>
        <Typography>
          Entrar e atuar com constância no mercado de automação residencial, com preços justos e
          qualidade de excelência, gerando conforto, praticidade e economia para os clientes.
        </Typography>
      </ListCard>
    </ul>
  </Screen>
);

export default AboutStart;
