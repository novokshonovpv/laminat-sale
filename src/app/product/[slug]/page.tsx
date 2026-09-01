import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/product-detail";
import { getProductBySlug, getProductSlug, products } from "@/data/products";

type ProductPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ slug: getProductSlug(product) }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  const description = `${product.name}: ${product.description} ${product.class} класс, толщина ${product.thickness.toLocaleString("ru-RU")} мм.`;
  return {
    title: product.name,
    description,
    alternates: { canonical: `/product/${slug}/` },
    openGraph: {
      type: "website",
      title: `${product.name} — ЛАМИНАТ.СЕЙЛ`,
      description,
      images: [{ url: product.image, alt: `Декор ${product.name}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} — ЛАМИНАТ.СЕЙЛ`,
      description,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `https://laminat-sale-smolensk.pavelnovokshonov.chatgpt.site${product.image}`,
    sku: product.model,
    brand: { "@type": "Brand", name: product.brand },
    offers: product.pricePerSquareMeter
      ? {
          "@type": "Offer",
          priceCurrency: "RUB",
          price: product.pricePerSquareMeter,
          availability: product.stockSquareMeters > 0 ? "https://schema.org/InStock" : "https://schema.org/PreOrder",
          url: `https://laminat-sale-smolensk.pavelnovokshonov.chatgpt.site/product/${slug}/`,
        }
      : undefined,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema).replace(/</g, "\\u003c") }} />
      <ProductDetail product={product} />
    </>
  );
}
