import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap() {
  const routes = ["", "/about", "/services", "/machinery", "/contact"];
  return routes.map((route) => ({
    url: `${site.url}${route || "/"}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/services" || route === "/machinery"
          ? 0.9
          : 0.8,
  }));
}
