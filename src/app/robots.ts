import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/cart/"] },
    sitemap: "https://laminat-sale-smolensk.pavelnovokshonov.chatgpt.site/sitemap.xml",
  };
}
