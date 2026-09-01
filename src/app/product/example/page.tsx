import type { Metadata } from "next";
import Link from "next/link";
import { LegacyProductRedirect } from "@/components/legacy-product-redirect";
import { getProductSlug, products } from "@/data/products";

export const metadata: Metadata = {
  title: "Адрес карточки товара изменён",
  robots: { index: false, follow: true },
  alternates: { canonical: "/catalog/" },
};

export default function LegacyProductPage() {
  const routes = Object.fromEntries(products.map((product) => [product.id, `/product/${getProductSlug(product)}/`]));
  return (
    <div className="mx-auto max-w-2xl px-5 py-20 text-center sm:px-8">
      <LegacyProductRedirect routes={routes} />
      <h1 className="text-3xl font-semibold tracking-[-0.04em]">Адрес карточки товара изменён</h1>
      <p className="mt-4 text-sm leading-6 text-[#756a5f]">Сейчас перенаправим вас на новый адрес. Если переход не произошёл, откройте каталог и выберите модель.</p>
      <Link href="/catalog" className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[#71482e] px-7 py-3 text-sm font-semibold text-white">Перейти в каталог</Link>
    </div>
  );
}
