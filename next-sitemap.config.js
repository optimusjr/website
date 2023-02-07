/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true,

  changefreq: "monthly",
  priority: 0.8, // Por padrão as páginas terão prioridade de indexação 0.8

  transform: async (config, path) => {
    let priority = config.priority;

    // Se a página for a raiz, então a prioridade de indexação será 1.0 (maxima)
    if (path === "/") {
      priority = 1.0;
    }

    // Usar o padrão para todos os outros casos
    return {
      loc: path, // Exportar o arquivo sitemap em http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
