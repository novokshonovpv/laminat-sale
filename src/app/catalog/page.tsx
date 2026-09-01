import type { Metadata } from "next";
import { CatalogExplorer } from "@/components/catalog-explorer";
import { products } from "@/data/products";

export const metadata: Metadata = { title: "Каталог SPC-покрытий", description: "Модели SPC-покрытий из каталога поставщика с фильтрами по классу, толщине и цвету" };

export default function CatalogPage() {
  return <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12"><div className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b5e3c]">Каталог поставщика · {products.length} моделей</p><h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">SPC-покрытия для любого интерьера</h1><p className="mt-4 text-base leading-7 text-[#756a5f]">Выберите декор из древесной или каменной серии. Изображения, модели и размеры перенесены из каталога поставщика; остатки актуализированы по документу поставщика.</p></div><CatalogExplorer items={products} /></div>;
}
