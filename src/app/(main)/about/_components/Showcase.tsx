import { Screen, ScreenTitle } from "@/components/others/Screen";
import Image from "@/components/others/StyledImage";
import Card from "@/components/ui/Card";
import Carousel from "@/components/ui/Carousel";
import img1 from "@/images/services/bedroom.jpg";
import img2 from "@/images/services/curtains.jpg";
import img3 from "@/images/services/lock.png";
import img4 from "@/images/services/pool.jpg";
import img5 from "@/images/services/sensor.jpg";
import img6 from "@/images/services/smart.png";

const Showcase = () => (
  <Screen bgColor="secondary">
    <ScreenTitle
      className={{ wrapper: "p-4 pb-0 sm:p-8 sm:pb-0 md:p-16 md:pb-0" }}
      strap="Projetos em Destaque"
    >
      Torne seus sonhos em realidade
    </ScreenTitle>
    <Carousel>
      <ShowcaseImage alt="Exemplo de criação de cenário no quarto" src={img1} />
      <ShowcaseImage alt="Exemplo de automação de cortinas" src={img2} />
      <ShowcaseImage alt="Exemplo de fechadura inteligente" src={img3} />
      <ShowcaseImage alt="Exemplo de automação de piscina" src={img4} />
      <ShowcaseImage alt="Exemplo de câmera de segurança" src={img5} />
      <ShowcaseImage alt="Exemplo de controle por celular" src={img6} />
    </Carousel>
  </Screen>
);

const ShowcaseImage = (props: React.ComponentPropsWithoutRef<typeof Image>) => (
  <Card as="li" className="w-64 flex-shrink-0 overflow-hidden md:w-1/4">
    <Image {...props} disableWrapper />
  </Card>
);

export default Showcase;
