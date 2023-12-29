import ExportedImage, { ExportedImageProps } from "next-image-export-optimizer";

const Image = (props: ExportedImageProps) => {
  return <ExportedImage draggable={false} {...props} />;
};

export default Image;
