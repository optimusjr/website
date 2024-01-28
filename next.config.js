/**
 * @type {import('next').NextConfig}
 */
export default {
  output: "export",
  reactStrictMode: true,
  env: {
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
  },

  images: {
    loader: "custom",
  },
  transpilePackages: ["next-image-export-optimizer"],
};
