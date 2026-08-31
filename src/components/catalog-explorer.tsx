"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import type { Product, ProductColor } from "@/data/products";
import { catalogOptions, formatThickness } from "@/data/products";

type SortMode = "popular" | "price-asc" | "price-desc";

function toggleValue<T>(values: T[], value: T) {
  return values.includes(value) ? values.filter((item) => item !== value) : [...values, value];
}

export function CatalogExplorer({ items, initialQuery = "" }: { items: Product[]; initialQuery?: string }) {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(initialQuery || searchParams.get("q") || "");
  const [brands, setBrands] = useState<string[]>([]);
  const [classes, setClasses] = useState<number[]>([]);
  const [thicknesses, setThicknesses] = useState<number[]>([]);
  const [colors, setColors] = useState<ProductColor[]>([]);
  const [availability, setAvailability] = useState<"all" | "stock" | "order">("all");
  const [sort, setSort] = useState<SortMode>("popular");

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("ru-RU");
    return items
      .filter((product) => !normalizedQuery || [product.name, product.model, product.brand, product.collection, product.color].some((value) => value.toLocaleLowerCase("ru-RU").includes(normalizedQuery)))
      .filter((product) => brands.length === 0 || brands.includes(product.brand))
      .filter((product) => classes.length === 0 || classes.includes(product.class))
      .filter((product) => thicknesses.length === 0 || thicknesses.includes(product.thickness))
      .filter((product) => colors.length === 0 || colors.includes(product.color))
      .filter((product) => availability === "all" || (availability === "stock" ? product.stockPackages > 0 : product.stockPackages === 0))
      .sort((a, b) => sort === "price-asc" ? a.pricePerSquareMeter - b.pricePerSquareMeter : sort === "price-desc" ? b.pricePerSquareMeter - a.pricePerSquareMeter : b.stockPackages - a.stockPackages);
  }, [availability, brands, classes, colors, items, query, sort, thicknesses]);

  const activeFilters = brands.length + classes.length + thicknesses.length + colors.length + (availability === "all" ? 0 : 1) + (query ? 1 : 0);
  const reset = () => { setQuery(""); setBrands([]); setClasses([]); setThicknesses([]); setColors([]); setAvailability("all"); setSort("popular"); };

  return (
    <>
      <div className="mt-8 flex h-12 max-w-2xl items-center rounded-full border border-[#cfc0ad] bg-white/70">
        <label className="sr-only" htmlFor="live-catalog-search">Поиск по каталогу</label><span className="pl-4 text-[#8b7767]" aria-hidden="true">⌕</span><input id="live-catalog-search" value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Название, бренд, коллекция или цвет" className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-[#9a8e83]" />{query && <button onClick={() => setQuery("")} className="mr-4 text-xs font-semibold text-[#8b5e3c]" type="button">Очистить</button>}
      </div>
      <div className="mt-10 grid gap-8 lg:grid-cols-[280px_1fr]">
        <aside className="h-fit rounded-3xl border border-[#d3c5b4] bg-[#fbf8f2] p-6 lg:sticky lg:top-28" aria-label="Фильтры каталога">
          <div className="flex items-center justify-between"><h2 className="text-lg font-semibold">Фильтры</h2><button onClick={reset} className="text-xs font-semibold text-[#8b5e3c]" type="button">Сбросить</button></div>
          <FilterGroup title="Бренд" options={catalogOptions.brands} selected={brands} render={(value) => value} onToggle={(value) => setBrands(toggleValue(brands, value))} />
          <FilterGroup title="Класс нагрузки" options={catalogOptions.classes} selected={classes} render={(value) => `${value} класс`} onToggle={(value) => setClasses(toggleValue(classes, value))} />
          <FilterGroup title="Толщина" options={catalogOptions.thicknesses} selected={thicknesses} render={(value) => `${formatThickness(value)} мм`} onToggle={(value) => setThicknesses(toggleValue(thicknesses, value))} />
          <FilterGroup title="Цвет" options={catalogOptions.colors} selected={colors} render={(value) => value} onToggle={(value) => setColors(toggleValue(colors, value))} />
          <fieldset className="mt-6 border-t border-[#ded3c5] pt-6"><legend className="text-sm font-semibold">Доступность</legend><div className="mt-3 space-y-3">{[["all","Все товары"],["stock","В наличии"],["order","Под заказ"]].map(([value,label]) => <label key={value} className="flex cursor-pointer items-center gap-3 text-sm text-[#62584f]"><input checked={availability === value} onChange={() => setAvailability(value as typeof availability)} type="radio" name="availability" className="h-4 w-4 accent-[#71482e]" />{label}</label>)}</div></fieldset>
          <div className="mt-7 rounded-2xl bg-[#eee5d7] p-4 text-xs leading-5 text-[#6e6257]">Фильтры применяются сразу. Найдено товаров: <strong className="text-[#3d3127]">{filteredProducts.length}</strong></div>
        </aside>

        <section aria-live="polite">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm text-[#756a5f]">Найдено: <strong className="text-[#33291f]">{filteredProducts.length} из {items.length}</strong>{activeFilters > 0 && <span> · фильтров: {activeFilters}</span>}</p><select value={sort} onChange={(event) => setSort(event.target.value as SortMode)} aria-label="Сортировка" className="rounded-full border border-[#cfc0ad] bg-[#fbf8f2] px-4 py-2.5 text-sm outline-none"><option value="popular">Сначала популярные</option><option value="price-asc">Сначала дешевле</option><option value="price-desc">Сначала дороже</option></select></div>
          {filteredProducts.length > 0 ? <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="rounded-3xl border border-dashed border-[#cfc0ad] bg-[#fbf8f2] px-6 py-16 text-center"><p className="text-xl font-semibold">Таких товаров пока нет</p><p className="mt-2 text-sm text-[#756a5f]">Попробуйте убрать часть фильтров или изменить запрос.</p><button onClick={reset} className="mt-5 rounded-full bg-[#71482e] px-6 py-3 text-sm font-semibold text-white" type="button">Сбросить фильтры</button></div>}
        </section>
      </div>
    </>
  );
}

function FilterGroup<T extends string | number>({ title, options, selected, render, onToggle }: { title: string; options: T[]; selected: T[]; render: (value: T) => string; onToggle: (value: T) => void }) {
  return <fieldset className="mt-6 border-t border-[#ded3c5] pt-6"><legend className="text-sm font-semibold">{title}</legend><div className="mt-3 space-y-3">{options.map((option) => <label key={String(option)} className="flex cursor-pointer items-center gap-3 text-sm text-[#62584f]"><input checked={selected.includes(option)} onChange={() => onToggle(option)} type="checkbox" className="h-4 w-4 accent-[#71482e]" />{render(option)}</label>)}</div></fieldset>;
}
