import { SitemapStream, streamToPromise } from "sitemap";
import { writeFileSync } from "fs";

(async () => {
  const sitemap = new SitemapStream({
    hostname: "https://www.chakreiros.com.br",
  });

  const staticRoutes = ["/", "/landing-page", "/espacos", "/register"];

  const dynamicSpaceIds = ["1", "2", "3"]; // ideal: buscar de uma API

  const dynamicRoutes = dynamicSpaceIds.map((id) => `/espacos/${id}`);
  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  for (const route of allRoutes) {
    sitemap.write({ url: route, changefreq: "weekly", priority: 0.8 });
  }

  sitemap.end();

  // Gere o XML final como buffer
  const sitemapOutput = await streamToPromise(sitemap);

  // Escreva o arquivo em public/sitemap.xml
  writeFileSync("./public/sitemap.xml", sitemapOutput.toString());

  console.log("✅ Sitemap gerado com sucesso!");
})();
