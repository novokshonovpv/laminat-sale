"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { LaminateCalculator } from "@/components/laminate-calculator";
import { ProductCard } from "@/components/product-card";
import { ProductImageShowcase } from "@/components/product-image-showcase";
import { formatPrice, formatThickness, products } from "@/data/products";

function getProduct(model?: string) {
  return products.find((item) => item.id === model) ?? products[0];
}

export default function ProductPage() {
  const searchParams = useSearchParams();
  const product = getProduct(searchParams.get("model") ?? undefined);
  const related = products.filter((item) => item.id !== product.id).slice(0, 3);
  const inStock = product.stockPackages > 0;

  return (
    <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 lg:px-12">
      <nav className="mb-8 flex flex-wrap gap-2 text-xs text-[#85776a]" aria-label="Хлебные крошки"><Link href="/">Главная</Link><span>/</span><Link href="/catalog">Каталог</Link><span>/</span><span className="text-[#493b30]">Модель {product.model}</span></nav>
      <section className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-14">
        <div>
          <ProductImageShowcase image={product.image} alt={`Декор ${product.name}`} badge={product.badge} stone={product.collection === "Каменная серия"} />
          <p className="mt-3 text-center text-xs text-[#8b7e72]">Фактический оттенок может незначительно отличаться из-за настроек экрана</p>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8b5e3c]">Модель {product.model} · {product.collection}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{product.name}</h1>
          <p className="mt-5 text-base leading-7 text-[#756a5f]">{product.description}</p>
          <div className="mt-7 flex items-baseline gap-3"><strong className="text-3xl">{formatPrice(product.pricePerSquareMeter)} ₽/м²</strong>{product.compareAtPrice && <span className="text-lg text-[#9b9086] line-through">{formatPrice(product.compareAtPrice)} ₽</span>}</div>
          <p className="mt-2 text-xs text-[#8c8177]">Демонстрационная цена · в упаковке {product.packageArea.toLocaleString("ru-RU")} м²</p>
          <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#d8ccbd] bg-[#d8ccbd] sm:grid-cols-3"><div className="bg-[#fbf8f2] p-4"><dt className="text-xs text-[#8c8177]">Модель</dt><dd className="mt-1 font-semibold">{product.model}</dd></div><div className="bg-[#fbf8f2] p-4"><dt className="text-xs text-[#8c8177]">Размер</dt><dd className="mt-1 font-semibold">{product.dimensions}</dd></div><div className="bg-[#fbf8f2] p-4"><dt className="text-xs text-[#8c8177]">Класс</dt><dd className="mt-1 font-semibold">{product.class} класс</dd></div><div className="bg-[#fbf8f2] p-4"><dt className="text-xs text-[#8c8177]">Толщина</dt><dd className="mt-1 font-semibold">{formatThickness(product.thickness)} мм</dd></div><div className="bg-[#fbf8f2] p-4"><dt className="text-xs text-[#8c8177]">В упаковке</dt><dd className="mt-1 font-semibold">{product.piecesPerPackage ? `${product.piecesPerPackage} шт. · ` : ""}{product.packageArea.toLocaleString("ru-RU")} м²</dd></div><div className="bg-[#fbf8f2] p-4"><dt className="text-xs text-[#8c8177]">Монтаж</dt><dd className="mt-1 font-semibold">Click-lock, без клея</dd></div></dl>
          <LaminateCalculator productId={product.id} packageArea={product.packageArea} pricePerSquareMeter={product.pricePerSquareMeter} />
          <p className={`mt-5 text-sm ${inStock ? "text-[#54704b]" : "text-[#9a654b]"}`}>{inStock ? `✓ В наличии: ${product.stockPackages} упаковок · доставка от 1 дня` : `Под заказ · срок поставки около ${product.orderLeadDays ?? 14} дней`}</p>
        </div>
      </section>
      <section className="mt-16 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[2rem] bg-[#3e3228] p-7 text-[#f7efe5] sm:p-9"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9aa8c]">Где использовать</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Для дома и коммерческих пространств</h2><p className="mt-4 text-sm leading-6 text-[#cfc0b2]">SPC-панели предназначены для внутренней отделки жилых, административных и торговых помещений с сухим или нормальным уровнем влажности.</p></div>
        <div className="rounded-[2rem] border border-[#d9cdbd] bg-[#fbf8f2] p-7 sm:p-9"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b5e3c]">Перед укладкой</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Основание решает всё</h2><div className="mt-6 grid gap-4 sm:grid-cols-3"><div><strong className="text-lg">≤ 2 мм</strong><p className="mt-2 text-sm leading-6 text-[#756a5f]">допустимый перепад основания на участке длиной 2 метра</p></div><div><strong className="text-lg">Без клея</strong><p className="mt-2 text-sm leading-6 text-[#756a5f]">панели соединяются профилированным замком click-lock</p></div><div><strong className="text-lg">Ровно и чисто</strong><p className="mt-2 text-sm leading-6 text-[#756a5f]">основание должно быть подготовленным перед началом монтажа</p></div></div></div>
      </section>
      <section className="mt-20 border-t border-[#d9cdbd] pt-14"><div className="mb-8 flex items-end justify-between"><h2 className="text-3xl font-semibold tracking-[-0.04em]">Похожие декоры</h2><Link href="/catalog" className="text-sm font-semibold text-[#71482e]">В каталог →</Link></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{related.map((item) => <ProductCard key={item.id} product={item} />)}</div></section>
    </div>
  );
}
