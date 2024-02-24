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
      Veja o que já fizemos
    </ScreenTitle>
    <Carousel>
      {[1, 2, 3, 4, 5].map((i) => (
        <ShowcaseImage
          alt=""
          height={1080}
          key={i}
          src={"https://picsum.photos/seed/" + i + "/1080"}
          width={1080}
          unoptimized
        />
      ))}
    </Carousel>
  </Screen>
);

const ShowcaseImage = (props: React.ComponentPropsWithoutRef<typeof Image>) => (
  <Card as="li" className="w-64 flex-shrink-0 overflow-hidden md:w-1/4">
    <Image {...props} disableWrapper />
  </Card>
);

export default Showcase;
