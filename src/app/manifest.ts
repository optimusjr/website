import { MetadataRoute } from "next";

type IconObject = Required<MetadataRoute.Manifest>["icons"][number];

const manifest = (): MetadataRoute.Manifest => {
  const createIconEntry = (size: string): IconObject => ({
    src: `${process.env.SITE_URL}/icons/android-chrome-${size}.png`,
    sizes: size,
    type: "image/png",
  });

  const icons = ["192x192", "512x512"];

  return {
    name: "OPTIMUS Jr.",
    short_name: "OPTIMUS Jr.",
    description:
      "Empresa júnior de automação residencial, oferecemos soluções inovadoras e personalizadas para tornar sua casa mais inteligente.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#136041",
    icons: [...icons.map((size) => createIconEntry(size))],
  };
};

export default manifest;
