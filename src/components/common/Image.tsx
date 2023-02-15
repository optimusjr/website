import ExportedImage, { ExportedImageProps } from "next-image-export-optimizer";

const Image = (props: ExportedImageProps) => {
  return <ExportedImage {...props} />;
};

export default Image;
