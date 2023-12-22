import * as path from "path";
import { fileURLToPath } from "url";

/**
 * @type {import('next').NextConfig}
 */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  output: "export",
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
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
