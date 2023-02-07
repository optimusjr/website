/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env node */
const path = require("node:path");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
  env: {
    SITE_URL: process.env.SITE_URL,
    nextImageExportOptimizer_generateAndUseBlurImages: false,
  },

  images: {
    loader: "custom",
  },
  transpilePackages: ["next-image-export-optimizer"],
};

module.exports = nextConfig;
