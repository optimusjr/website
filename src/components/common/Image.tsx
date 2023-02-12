import ExportedImage, { ExportedImageProps } from "next-image-export-optimizer";

const Image = (props: ExportedImageProps) => {
  return <ExportedImage placeholder="empty" {...props} />;
};

export default Image;
