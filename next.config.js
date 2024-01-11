/**
 * @type {import('next').NextConfig}
 */
export default {
  output: "export",
  reactStrictMode: true,
  env: {
    // Basic
    SITE_URL: process.env.SITE_URL,
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
  },

  images: {
    loader: "custom",
  },
  transpilePackages: ["next-image-export-optimizer"],
};
