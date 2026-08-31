export type ProductColor = "Натуральный" | "Светлый" | "Серый" | "Тёмный";

export type Product = {
  id: string;
  model: string;
  name: string;
  brand: string;
  collection: string;
  class: 33 | 34;
  thickness: number;
  dimensions: string;
  packageArea: number;
  piecesPerPackage?: number;
  pricePerSquareMeter: number;
  stockPackages: number;
  color: ProductColor;
  image: string;
  description: string;
  badge?: string;
  compareAtPrice?: number;
  orderLeadDays?: number;
};

// Модели, изображения и размеры перенесены из каталога поставщика.
// Цены, класс нагрузки, площадь упаковки и остатки — демонстрационные.
export const products: Product[] = [
  { id: "spc-801", model: "801", name: "SPC 801 — Дуб северный", brand: "SPC Floor", collection: "Древесная серия", class: 33, thickness: 4.2, dimensions: "183 × 1220 × 4,2 мм", packageArea: 2.23, pricePerSquareMeter: 1690, stockPackages: 24, color: "Серый", image: "/products/spc-801.jpg", description: "Светло-серый древесный декор с мягким рисунком волокон для спокойных современных интерьеров.", badge: "Из каталога" },
  { id: "spc-802", model: "802", name: "SPC 802 — Дуб сливочный", brand: "SPC Floor", collection: "Древесная серия", class: 33, thickness: 4.2, dimensions: "183 × 1220 × 4,2 мм", packageArea: 2.23, pricePerSquareMeter: 1750, stockPackages: 18, color: "Светлый", image: "/products/spc-802.jpg", description: "Очень светлый тёплый декор, который визуально расширяет помещение и поддерживает лёгкую палитру." },
  { id: "spc-803", model: "803", name: "SPC 803 — Дуб песочный", brand: "SPC Floor", collection: "Древесная серия", class: 33, thickness: 4.2, dimensions: "183 × 1220 × 4,2 мм", packageArea: 2.23, pricePerSquareMeter: 1790, stockPackages: 0, color: "Натуральный", image: "/products/spc-803.jpg", description: "Нейтральный песочный оттенок с естественным древесным рисунком для гостиной, спальни или кабинета.", orderLeadDays: 12 },
  { id: "spc-804", model: "804", name: "SPC 804 — Дуб медовый", brand: "SPC Floor", collection: "Древесная серия", class: 33, thickness: 4.2, dimensions: "183 × 1220 × 4,2 мм", packageArea: 3.35, piecesPerPackage: 15, pricePerSquareMeter: 1850, stockPackages: 31, color: "Натуральный", image: "/products/spc-804.jpg", description: "Тёплый медовый декор с выразительными волокнами — универсальный вариант для жилых помещений.", badge: "Популярный", compareAtPrice: 1990 },
  { id: "spc-805", model: "805", name: "SPC 805 — Дуб винтажный", brand: "SPC Floor", collection: "Древесная серия", class: 33, thickness: 4.2, dimensions: "183 × 1220 × 4,2 мм", packageArea: 3.35, piecesPerPackage: 15, pricePerSquareMeter: 1950, stockPackages: 9, color: "Тёмный", image: "/products/spc-805.jpg", description: "Состаренная древесная фактура с контрастными линиями для интерьеров в стиле лофт и кантри." },
  { id: "spc-806", model: "806", name: "SPC 806 — Дуб светлый", brand: "SPC Floor", collection: "Древесная серия", class: 33, thickness: 4.2, dimensions: "183 × 1220 × 4,2 мм", packageArea: 2.23, pricePerSquareMeter: 1720, stockPackages: 27, color: "Светлый", image: "/products/spc-806.jpg", description: "Мягкий светлый оттенок с деликатным рисунком древесины для скандинавских и минималистичных пространств." },
  { id: "spc-807", model: "807", name: "SPC 807 — Дуб золотистый", brand: "SPC Floor", collection: "Древесная серия", class: 33, thickness: 4.2, dimensions: "183 × 1220 × 4,2 мм", packageArea: 3.35, piecesPerPackage: 15, pricePerSquareMeter: 1890, stockPackages: 15, color: "Натуральный", image: "/products/spc-807.jpg", description: "Золотистая классическая текстура дерева, которая добавляет интерьеру тепла.", badge: "Тёплый оттенок" },
  { id: "spc-808", model: "808", name: "SPC 808 — Ясень ванильный", brand: "SPC Floor", collection: "Древесная серия", class: 33, thickness: 4.2, dimensions: "183 × 1220 × 4,2 мм", packageArea: 2.23, pricePerSquareMeter: 1760, stockPackages: 0, color: "Светлый", image: "/products/spc-808.jpg", description: "Светлый ванильный тон с плавным рисунком для воздушных домашних интерьеров.", orderLeadDays: 10 },
  { id: "spc-809", model: "809", name: "SPC 809 — Дуб графитовый", brand: "SPC Floor", collection: "Древесная серия", class: 33, thickness: 4.2, dimensions: "183 × 1220 × 4,2 мм", packageArea: 2.23, pricePerSquareMeter: 1980, stockPackages: 11, color: "Тёмный", image: "/products/spc-809.jpg", description: "Глубокий графитовый оттенок с заметным рельефом для современных контрастных интерьеров." },
  { id: "spc-810", model: "810", name: "SPC 810 — Дуб дымчатый", brand: "SPC Floor", collection: "Древесная серия", class: 33, thickness: 4.2, dimensions: "183 × 1220 × 4,2 мм", packageArea: 3.35, piecesPerPackage: 15, pricePerSquareMeter: 1920, stockPackages: 14, color: "Серый", image: "/products/spc-810.jpg", description: "Сбалансированный серо-бежевый декор для нейтральной природной палитры." },
  { id: "spc-s313", model: "S313", name: "SPC S313 — Дуб жемчужный", brand: "SPC Floor", collection: "Black Base", class: 34, thickness: 4.2, dimensions: "183 × 1220 × 4,2 мм", packageArea: 2.23, pricePerSquareMeter: 2290, stockPackages: 8, color: "Светлый", image: "/products/spc-s313.jpg", description: "Светлый дубовый декор из серии Black Base с естественной сменой полутонов.", badge: "Black Base" },
  { id: "spc-fx901", model: "FX901", name: "SPC FX901 — Серый камень", brand: "SPC Floor", collection: "Каменная серия", class: 34, thickness: 5.2, dimensions: "305 × 610 × 5,2 мм", packageArea: 2.04, pricePerSquareMeter: 2490, stockPackages: 0, color: "Серый", image: "/products/spc-fx901.jpg", description: "Минеральный серый декор с мягкими прожилками для кухни, прихожей и коммерческих помещений.", badge: "Каменная серия", orderLeadDays: 14 },
];

export const catalogOptions = {
  brands: [...new Set(products.map((product) => product.brand))].sort(),
  classes: [...new Set(products.map((product) => product.class))].sort(),
  thicknesses: [...new Set(products.map((product) => product.thickness))].sort(),
  colors: [...new Set(products.map((product) => product.color))].sort(),
};

export const formatPrice = (value: number) => new Intl.NumberFormat("ru-RU").format(value);
export const formatThickness = (value: number) => value.toLocaleString("ru-RU");
