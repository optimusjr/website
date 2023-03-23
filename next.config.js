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
    // Basic
    SITE_URL: process.env.SITE_URL,

    // Contact Information
    EMAIL: process.env.EMAIL,
    PHONE_NUMBER: process.env.PHONE_NUMBER,
    WHATSAPP: process.env.WHATSAPP,
    BUDGET_URL: process.env.BUDGET_URL,

    // PROSEL
    IS_PROSEL: process.env.IS_PROSEL,
    PROSEL_FORM_URL: process.env.PROSEL_FORM_URL,

    // Configurations
    nextImageExportOptimizer_generateAndUseBlurImages: true,
  },

  images: {
    loader: "custom",
  },
  transpilePackages: ["next-image-export-optimizer"],
};

module.exports = nextConfig;
