import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { formatPrice, formatThickness } from "@/data/products";
import { assetPath } from "@/lib/asset-path";

export function ProductCard({ product }: { product: Product }) {
  const inStock = product.stockPackages > 0;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#d3c5b4] bg-[#fbf8f2] transition-shadow hover:shadow-[0_18px_45px_rgba(74,53,36,0.10)]">
      <Link href={`/product/example?model=${product.id}`} className="flex h-full flex-col">
        <div className="relative h-48 shrink-0 overflow-hidden bg-[#e7ded2]">
          <Image src={assetPath(product.image)} alt={`Декор ${product.name}`} fill quality={90} sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
          {product.badge && <span className="absolute left-4 top-4 rounded-full bg-[#f8f3eb]/95 px-3 py-1.5 text-xs font-semibold text-[#49392e] shadow-sm">{product.badge}</span>}
          <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#60452f] shadow-sm transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="text-xs uppercase tracking-[0.14em] text-[#8f7d6c]">Модель {product.model} · {product.collection}</p>
          <h3 className="mt-2 text-xl font-semibold leading-7 tracking-[-0.03em]">{product.name}</h3>
          <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#76695d]"><span>{product.class} класс</span><span>•</span><span>{formatThickness(product.thickness)} мм</span><span>•</span><span>{product.color}</span></div>
          <p className="mt-3 text-xs text-[#8c8177]">{product.dimensions}</p>
          <div className="mt-auto pt-5"><div className="flex items-baseline gap-2"><strong className="text-lg">{formatPrice(product.pricePerSquareMeter)} ₽/м²</strong>{product.compareAtPrice && <span className="text-sm text-[#9b9086] line-through">{formatPrice(product.compareAtPrice)} ₽</span>}</div><p className={`mt-2 text-xs font-medium ${inStock ? "text-[#54704b]" : "text-[#9a654b]"}`}>{inStock ? `В наличии · ${product.stockPackages} уп.` : `Под заказ · ${product.orderLeadDays ?? 14} дней`}</p></div>
        </div>
      </Link>
    </article>
  );
}
