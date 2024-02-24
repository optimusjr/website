import Screen from "@/components/others/Screen";
import Image from "@/components/others/StyledImage";
import Card from "@/components/ui/Card";
import Carousel from "@/components/ui/Carousel";

const Gallery = () => (
  <Screen bgColor="secondary">
    <Screen.title
      className={{ wrapper: "p-4 pb-0 sm:p-8 sm:pb-0 md:p-16 md:pb-0" }}
      strap="Galeria"
    >
      Galeria
    </Screen.title>
    <Carousel>
      {[1, 2, 3, 4, 5].map((i) => (
        <Card as="li" className="w-64 flex-shrink-0 overflow-hidden md:w-1/4" key={i}>
          <Image
            alt=""
            height={1080}
            src={"https://picsum.photos/seed/" + i + "/1080"}
            width={1080}
            disableWrapper
            unoptimized
          />
        </Card>
      ))}
    </Carousel>
  </Screen>
);

export default Gallery;
