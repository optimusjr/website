import { MetadataRoute } from "next";

import config from "@/config";

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: "*",
    allow: "/",
    // Escreva aqui os caminhos que você não quer que sejam indexados pelo Google
    disallow: ["/thanks", "/404", "/links"],
  },
  sitemap: `${config.SITE_URL}/sitemap.xml`,
  host: config.SITE_URL,
});

export default robots;
