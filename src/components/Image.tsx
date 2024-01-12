import ExportedImage, { ExportedImageProps } from "next-image-export-optimizer";

const Image = (props: ExportedImageProps) => (
  <ExportedImage draggable={false} sizes="100vw" {...props} />
);

export default Image;
