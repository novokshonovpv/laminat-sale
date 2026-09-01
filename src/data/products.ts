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
  pricePerSquareMeter?: number;
  vatPercent?: number;
  stockSquareMeters: number;
  color: ProductColor;
  image: string;
  description: string;
  badge?: string;
  compareAtPrice?: number;
  orderLeadDays?: number;
};

type ProductInput = {
  model: string;
  title: string;
  color: ProductColor;
  image?: string;
  collection?: string;
  class?: 33 | 34;
  thickness?: number;
  dimensions?: string;
  packageArea?: number;
  piecesPerPackage?: number;
  price?: number;
  badge?: string;
  compareAtPrice?: number;
  description?: string;
};

const stockedModels = new Set(["804", "805", "807", "810", "908", "910"]);

function product({
  model,
  title,
  color,
  image,
  collection = "Древесная серия",
  class: loadClass = 33,
  thickness = 4.2,
  dimensions = "183 × 1220 × 4,2 мм",
  packageArea = 2.23,
  piecesPerPackage,
  price,
  badge,
  compareAtPrice,
  description,
}: ProductInput): Product {
  const normalizedModel = model.toLowerCase();
  const stockSquareMeters = stockedModels.has(model) ? 500 : 0;
  void price;

  return {
    id: `spc-${normalizedModel}`,
    model,
    name: `SPC ${model} — ${title}`,
    brand: "SPC Floor",
    collection,
    class: loadClass,
    thickness,
    dimensions,
    packageArea,
    piecesPerPackage,
    pricePerSquareMeter: stockSquareMeters > 0 ? 1750 : undefined,
    vatPercent: stockSquareMeters > 0 ? 22 : undefined,
    stockSquareMeters,
    color,
    image: image ?? `/products/spc-${normalizedModel}.jpg`,
    description: description ?? `${title}: выразительный декор из каталога SPC Floor для жилых и коммерческих интерьеров.`,
    badge,
    compareAtPrice,
    orderLeadDays: stockSquareMeters > 0 ? undefined : 30,
  };
}

// Модели, изображения и размеры перенесены из каталога поставщика.
// Цены и классы нагрузки указаны для демонстрации; остатки соответствуют документу поставщика.
export const products: Product[] = [
  product({ model: "801", title: "Дуб северный", color: "Серый", price: 1690, badge: "Из каталога", description: "Светло-серый древесный декор с мягким рисунком волокон для спокойных современных интерьеров." }),
  product({ model: "802", title: "Дуб сливочный", color: "Светлый", price: 1750, description: "Очень светлый тёплый декор, который визуально расширяет помещение и поддерживает лёгкую палитру." }),
  product({ model: "803", title: "Дуб песочный", color: "Натуральный", price: 1790, description: "Нейтральный песочный оттенок с естественным древесным рисунком для гостиной, спальни или кабинета." }),
  product({ model: "804", title: "Дуб медовый", color: "Натуральный", packageArea: 3.35, piecesPerPackage: 15, price: 1850, badge: "Популярный", compareAtPrice: 1990, description: "Тёплый медовый декор с выразительными волокнами — универсальный вариант для жилых помещений." }),
  product({ model: "805", title: "Дуб винтажный", color: "Тёмный", packageArea: 3.35, piecesPerPackage: 15, price: 1950, description: "Состаренная древесная фактура с контрастными линиями для интерьеров в стиле лофт и кантри." }),
  product({ model: "806", title: "Дуб светлый", color: "Светлый", price: 1720, description: "Мягкий светлый оттенок с деликатным рисунком древесины для скандинавских и минималистичных пространств." }),
  product({ model: "807", title: "Дуб золотистый", color: "Натуральный", packageArea: 3.35, piecesPerPackage: 15, price: 1890, badge: "Тёплый оттенок", description: "Золотистая классическая текстура дерева, которая добавляет интерьеру тепла." }),
  product({ model: "808", title: "Ясень ванильный", color: "Светлый", price: 1760, description: "Светлый ванильный тон с плавным рисунком для воздушных домашних интерьеров." }),
  product({ model: "809", title: "Дуб графитовый", color: "Тёмный", price: 1980, description: "Глубокий графитовый оттенок с заметным рельефом для современных контрастных интерьеров." }),
  product({ model: "810", title: "Дуб дымчатый", color: "Серый", packageArea: 3.35, piecesPerPackage: 15, price: 1920, description: "Сбалансированный серо-бежевый декор для нейтральной природной палитры." }),
  product({ model: "811", title: "Дуб янтарный", color: "Натуральный" }),
  product({ model: "905", title: "Дуб угольный", color: "Тёмный" }),
  product({ model: "906", title: "Дуб серый", color: "Серый" }),
  product({ model: "907", title: "Дуб серебристый", color: "Серый" }),
  product({ model: "908", title: "Дуб белёный", color: "Светлый", packageArea: 3.35, piecesPerPackage: 15 }),
  product({ model: "909", title: "Дуб светлый", color: "Светлый" }),
  product({ model: "910", title: "Дуб дымчато-бежевый", color: "Серый", packageArea: 3.35, piecesPerPackage: 15 }),

  product({ model: "8602", title: "Ясень сливочный", color: "Светлый", class: 34, thickness: 6.2, dimensions: "183 × 1220 × 5,2+1 мм", badge: "С подложкой" }),
  product({ model: "8607", title: "Дуб золотистый", color: "Натуральный", class: 34, thickness: 6.2, dimensions: "183 × 1220 × 5,2+1 мм", badge: "С подложкой" }),
  product({ model: "8608", title: "Ясень ванильный", color: "Светлый", class: 34, thickness: 6.2, dimensions: "183 × 1220 × 5,2+1 мм", badge: "С подложкой" }),
  product({ model: "8609", title: "Дуб графитовый", color: "Тёмный", class: 34, thickness: 6.2, dimensions: "183 × 1220 × 5,2+1 мм", badge: "С подложкой" }),

  product({ model: "1081", title: "Дуб натуральный", color: "Натуральный", class: 34, thickness: 8.2, dimensions: "183 × 1220 × 6,2+2 мм", badge: "Усиленная серия" }),
  product({ model: "1082", title: "Дуб медовый", color: "Натуральный", class: 34, thickness: 8.2, dimensions: "183 × 1220 × 6,2+2 мм", badge: "Усиленная серия" }),
  product({ model: "1083", title: "Дуб рустик", color: "Натуральный", class: 34, thickness: 8.2, dimensions: "183 × 1220 × 6,2+2 мм", badge: "Усиленная серия" }),
  product({ model: "1085", title: "Дуб серо-бежевый", color: "Серый", class: 34, thickness: 8.2, dimensions: "183 × 1220 × 6,2+2 мм", badge: "Усиленная серия" }),
  product({ model: "1086", title: "Дуб песочный", color: "Светлый", class: 34, thickness: 8.2, dimensions: "183 × 1220 × 6,2+2 мм", badge: "Усиленная серия" }),
  product({ model: "1087", title: "Дуб карамельный", color: "Натуральный", class: 34, thickness: 8.2, dimensions: "183 × 1220 × 6,2+2 мм", badge: "Усиленная серия" }),
  product({ model: "1088", title: "Дуб светло-серый", color: "Серый", class: 34, thickness: 8.2, dimensions: "183 × 1220 × 6,2+2 мм", badge: "Усиленная серия" }),
  product({ model: "1089", title: "Красное дерево", color: "Тёмный", class: 34, thickness: 8.2, dimensions: "183 × 1220 × 6,2+2 мм", badge: "Усиленная серия" }),
  product({ model: "1090", title: "Дуб белый", color: "Светлый", class: 34, thickness: 8.2, dimensions: "183 × 1220 × 6,2+2 мм", badge: "Усиленная серия" }),
  product({ model: "1091", title: "Дуб графитовый", color: "Тёмный", class: 34, thickness: 8.2, dimensions: "183 × 1220 × 6,2+2 мм", badge: "Усиленная серия" }),

  product({ model: "1601", title: "Дуб бежевый", color: "Светлый", class: 34, thickness: 8.2, dimensions: "183 × 1220 × 6,2+2 мм", badge: "Усиленная серия" }),
  product({ model: "1602", title: "Дуб жемчужно-серый", color: "Серый", class: 34, thickness: 8.2, dimensions: "183 × 1220 × 6,2+2 мм", badge: "Усиленная серия" }),
  product({ model: "1603", title: "Дуб кофейный", color: "Тёмный", class: 34, thickness: 8.2, dimensions: "183 × 1220 × 6,2+2 мм", badge: "Усиленная серия" }),
  product({ model: "1604", title: "Дуб натуральный", color: "Натуральный", class: 34, thickness: 8.2, dimensions: "183 × 1220 × 6,2+2 мм", badge: "Усиленная серия" }),
  product({ model: "1605", title: "Дуб светло-серый", color: "Серый", class: 34, thickness: 8.2, dimensions: "183 × 1220 × 6,2+2 мм", badge: "Усиленная серия" }),
  product({ model: "1606", title: "Дуб мягкий беж", color: "Светлый", class: 34, thickness: 8.2, dimensions: "183 × 1220 × 6,2+2 мм", badge: "Усиленная серия" }),
  product({ model: "1681", title: "Дуб бежевый XL", color: "Светлый", class: 34, thickness: 10.2, dimensions: "228 × 1524 × 8,2+2 мм", packageArea: 2.08, badge: "Широкая доска" }),
  product({ model: "1682", title: "Дуб жемчужно-серый XL", color: "Серый", class: 34, thickness: 10.2, dimensions: "228 × 1524 × 8,2+2 мм", packageArea: 2.08, badge: "Широкая доска" }),
  product({ model: "1683", title: "Дуб кофейный XL", color: "Тёмный", class: 34, thickness: 10.2, dimensions: "228 × 1524 × 8,2+2 мм", packageArea: 2.08, badge: "Широкая доска" }),
  product({ model: "1684", title: "Дуб натуральный XL", color: "Натуральный", class: 34, thickness: 10.2, dimensions: "228 × 1524 × 8,2+2 мм", packageArea: 2.08, badge: "Широкая доска" }),
  product({ model: "1685", title: "Дуб светло-серый XL", color: "Серый", class: 34, thickness: 10.2, dimensions: "228 × 1524 × 8,2+2 мм", packageArea: 2.08, badge: "Широкая доска" }),
  product({ model: "1686", title: "Дуб мягкий беж XL", color: "Светлый", class: 34, thickness: 10.2, dimensions: "228 × 1524 × 8,2+2 мм", packageArea: 2.08, badge: "Широкая доска" }),

  product({ model: "S313", title: "Дуб жемчужный", color: "Светлый", collection: "Black Base", class: 34, badge: "Black Base", description: "Светлый дубовый декор из серии Black Base с естественной сменой полутонов." }),
  product({ model: "S317", title: "Дуб графитовый", color: "Тёмный", collection: "Black Base", class: 34, badge: "Black Base" }),
  product({ model: "S321", title: "Дуб золотистый", color: "Натуральный", collection: "Black Base", class: 34, badge: "Black Base" }),
  product({ model: "S325", title: "Орех тёмный", color: "Тёмный", collection: "Black Base", class: 34, badge: "Black Base" }),

  product({ model: "FX901", title: "Серый камень", color: "Серый", collection: "Каменная серия", class: 34, thickness: 5.2, dimensions: "305 × 610 × 5,2 мм", packageArea: 2.04, badge: "Каменная серия", description: "Минеральный серый декор с мягкими прожилками для кухни, прихожей и коммерческих помещений." }),
  product({ model: "FX902", title: "Графитовый камень", color: "Тёмный", collection: "Каменная серия", class: 34, thickness: 5.2, dimensions: "305 × 610 × 5,2 мм", packageArea: 2.04, badge: "Каменная серия" }),
  product({ model: "903", title: "Светлый оникс", color: "Светлый", collection: "Каменная серия", class: 34, thickness: 5.2, dimensions: "305 × 610 × 5,2 мм", packageArea: 2.04, badge: "Каменная серия" }),
  product({ model: "FX911", title: "Белый мрамор", color: "Светлый", collection: "Каменная серия", class: 34, thickness: 5.2, dimensions: "305 × 610 × 5,2 мм", packageArea: 2.04, badge: "Каменная серия" }),
  product({ model: "941", title: "Светлый терраццо", color: "Светлый", collection: "Каменная серия", class: 34, thickness: 5.2, dimensions: "305 × 610 × 5,2 мм", packageArea: 2.04, badge: "Каменная серия" }),
  product({ model: "960", title: "Серый мрамор", color: "Серый", collection: "Каменная серия", class: 34, thickness: 5.2, dimensions: "305 × 610 × 5,2 мм", packageArea: 2.04, badge: "Каменная серия" }),
  product({ model: "968", title: "Серый сланец", color: "Серый", collection: "Каменная серия", class: 34, thickness: 5.2, dimensions: "305 × 610 × 5,2 мм", packageArea: 2.04, badge: "Каменная серия" }),
  product({ model: "970", title: "Белый мрамор с прожилками", color: "Светлый", collection: "Каменная серия", class: 34, thickness: 5.2, dimensions: "305 × 610 × 5,2 мм", packageArea: 2.04, badge: "Каменная серия" }),
  product({ model: "SPCT-101", title: "Текстиль серый", color: "Серый", collection: "Каменная серия", class: 34, thickness: 5.2, dimensions: "305 × 610 × 5,2 мм", packageArea: 2.04, badge: "Текстильная фактура" }),
  product({ model: "SPCT-102", title: "Текстиль графитовый", color: "Тёмный", collection: "Каменная серия", class: 34, thickness: 5.2, dimensions: "305 × 610 × 5,2 мм", packageArea: 2.04, badge: "Текстильная фактура" }),
];

export const catalogOptions = {
  brands: [...new Set(products.map((item) => item.brand))].sort(),
  classes: [...new Set(products.map((item) => item.class))].sort(),
  thicknesses: [...new Set(products.map((item) => item.thickness))].sort(),
  colors: [...new Set(products.map((item) => item.color))].sort(),
};

export const formatPrice = (value: number) => new Intl.NumberFormat("ru-RU").format(value);
export const formatThickness = (value: number) => value.toLocaleString("ru-RU");

const transliteration: Record<string, string> = {
  а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "e", ж: "zh", з: "z", и: "i", й: "y",
  к: "k", л: "l", м: "m", н: "n", о: "o", п: "p", р: "r", с: "s", т: "t", у: "u", ф: "f",
  х: "h", ц: "ts", ч: "ch", ш: "sh", щ: "sch", ъ: "", ы: "y", ь: "", э: "e", ю: "yu", я: "ya",
};

function slugify(value: string) {
  return value
    .toLocaleLowerCase("ru-RU")
    .split("")
    .map((character) => transliteration[character] ?? character)
    .join("")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getProductSlug(item: Product) {
  const title = item.name.replace(/^SPC\s+[^—]+—\s*/u, "");
  return `${item.id}-${slugify(title)}`;
}

export function getProductBySlug(slug: string) {
  return products.find((item) => getProductSlug(item) === slug);
}
