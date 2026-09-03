import type { MetadataRoute } from "next";
import { getProductSlug, products } from "@/data/products";

const origin = "https://laminat-sale-smolensk.pavelnovokshonov.chatgpt.site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/catalog", "/privacy", "/personal-data-consent", "/cookies"].map((path) => ({
    url: `${origin}${path}/`.replace(`${origin}//`, `${origin}/`),
    changeFrequency: path === "/catalog" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "" ? 1 : path === "/catalog" ? 0.9 : 0.3,
  }));

  const productPages = products.map((product) => ({
    url: `${origin}/product/${getProductSlug(product)}/`,
    changeFrequency: "weekly" as const,
    priority: product.stockSquareMeters > 0 ? 0.8 : 0.6,
  }));

  return [...staticPages, ...productPages];
}

