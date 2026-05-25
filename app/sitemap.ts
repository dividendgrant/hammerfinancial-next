import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://hammerfinancial.com";
  const routes = ["/", "/about-us/", "/funds/", "/news/", "/contact-us/", "/work-with-us/"];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
