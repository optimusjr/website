import { Screen, ScreenTitle } from "@/components/others/Screen";
import Image from "@/components/others/StyledImage";
import Card from "@/components/ui/Card";
import Carousel from "@/components/ui/Carousel";
const Showcase = () => (
  <Screen bgColor="secondary">
    <ScreenTitle
      className={{ wrapper: "p-4 pb-0 sm:p-8 sm:pb-0 md:p-16 md:pb-0" }}
      strap="Projetos em Destaque"
    >
      Torne seus sonhos em realidade
    </ScreenTitle>
    <Carousel>
      <ShowcaseImage alt="" height={1080} src={"/images/services/bedroom.jpg"} width={1080} />
      <ShowcaseImage alt="" height={1080} src={"/images/services/curtains.jpg"} width={1080} />
      <ShowcaseImage alt="" height={1080} src={"/images/services/lock.png"} width={1080} />
      <ShowcaseImage alt="" height={1080} src={"/images/services/pool.jpg"} width={1080} />
      <ShowcaseImage alt="" height={1080} src={"/images/services/sensor.jpg"} width={1080} />
      <ShowcaseImage alt="" height={1080} src={"/images/services/smart.png"} width={1080} />
    </Carousel>
  </Screen>
);

const ShowcaseImage = (props: React.ComponentPropsWithoutRef<typeof Image>) => (
  <Card as="li" className="w-64 flex-shrink-0 overflow-hidden md:w-1/4">
    <Image {...props} disableWrapper />
  </Card>
);

export default Showcase;
