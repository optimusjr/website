import CapIcon from "@/components/icons/Cap";
import CheckIcon from "@/components/icons/Check";
import HandIcon from "@/components/icons/Hand";
import TenIcon from "@/components/icons/Ten";
import ListCard from "@/components/ListCard";
import Screen from "@/components/Screen";
import Title from "@/components/Title";
import Typography from "@/components/Typography";

const Differentials = () => (
  <Screen backgroundColor="white" gap padding>
    <Title strap="Diferenciais">Por que somos a escolha certa?</Title>

    <ul className="grid auto-rows-fr gap-4 sm:gap-8 md:grid-cols-2 md:gap-16">
      <ListCard cardLayout="row" className="[&>svg]:w-32">
        <TenIcon />
        <div>
          <Typography className="text-2xl" color="primary" variant="h3">
            Mais de 10 anos de experiência
          </Typography>
          <Typography>Estamos a mais de 10 anos no mercado impactando vidas e negócios.</Typography>
        </div>
      </ListCard>

      <ListCard cardLayout="row" className="[&>svg]:w-32">
        <HandIcon />
        <div>
          <Typography className="text-2xl" color="primary" variant="h3">
            Melhor preço do mercado
          </Typography>
          <Typography>Oferecemos preços justos e alta qualidade em nossos serviços.</Typography>
        </div>
      </ListCard>

      <ListCard cardLayout="row" className="[&>svg]:w-32">
        <CapIcon />
        <div>
          <Typography className="text-2xl" color="primary" variant="h3">
            Vasto conhecimento técnico
          </Typography>
          <Typography>
            Como empresa júnior da UFBA, temos o apoio dos melhores professores da instituição.
          </Typography>
        </div>
      </ListCard>

      <ListCard cardLayout="row" className="[&>svg]:w-32">
        <CheckIcon />
        <div>
          <Typography color="primary" variant="h3">
            Selo de qualidade
          </Typography>
          <Typography>Quem contrata, recomenda! A nossa média de NPS é 9,5.</Typography>
        </div>
      </ListCard>
    </ul>
  </Screen>
);

export default Differentials;
