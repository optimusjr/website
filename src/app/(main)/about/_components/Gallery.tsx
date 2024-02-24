import Screen from "@/components/others/Screen";
import Image from "@/components/others/StyledImage";
import Card from "@/components/ui/Card";
import Carousel from "@/components/ui/Carousel";

const Gallery = () => (
  <Screen bgColor="secondary">
    <Screen.title
      className={{ wrapper: "p-4 pb-0 sm:p-8 sm:pb-0 md:p-16 md:pb-0" }}
      strap="Projetos em Destaque"
    >
      Veja o que já fizemos
    </Screen.title>
    <Carousel>
      {[1, 2, 3, 4, 5].map((i) => (
        <GalleryImage
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

const GalleryImage = (props: React.ComponentPropsWithoutRef<typeof Image>) => (
  <Card as="li" className="w-64 flex-shrink-0 overflow-hidden md:w-1/4">
    <Image {...props} disableWrapper />
  </Card>
);

export default Gallery;
