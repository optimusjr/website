import Screen from "@/components/others/Screen";
import Image from "@/components/others/StyledImage";
import Card from "@/components/ui/Card";
import Carousel from "@/components/ui/Carousel";
import type { PropsWithChildren } from "@/utils/types/PropsWithChildren";

const Gallery = ({ children }: PropsWithChildren) => (
  <Screen bgColor="secondary">
    <Carousel>{children}</Carousel>
  </Screen>
);

const GalleryImage = (props: React.ComponentPropsWithoutRef<typeof Image>) => (
  <Card as="li" className="w-64 flex-shrink-0 overflow-hidden md:w-1/4">
    <Image {...props} disableWrapper />
  </Card>
);

export { Gallery, GalleryImage };
export default Gallery;
