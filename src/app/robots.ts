import { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: "*",
    allow: "/",
    // Escreva aqui os caminhos que você não quer que sejam indexados pelo Google
    disallow: ["/thanks", "/404", "/links"],
  },
  sitemap: `${process.env.SITE_URL}/sitemap.xml`,
  host: process.env.SITE_URL,
});

export default robots;
