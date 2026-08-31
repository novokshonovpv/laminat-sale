import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { products } from "@/data/products";

const categories = [
  ["01", "Древесная серия", "Дубовые и ясеневые декоры", "/products/spc-804.jpg"],
  ["02", "Светлые декоры", "Для воздушных спокойных интерьеров", "/products/spc-802.jpg"],
  ["03", "Каменная серия", "Минеральная фактура для современных пространств", "/products/spc-fx901.jpg"],
];

const heroTextureRows = ["", "-scale-x-100", "", "-scale-x-100", ""];

const spcBenefits = [
  ["01", "Не боится бытовой влаги", "Жёсткая минерально-полимерная основа не разбухает от пролитой воды, поэтому покрытие подходит для кухни и прихожей."],
  ["02", "Прочный защитный слой", "Поверхность рассчитана на ежедневную нагрузку и помогает покрытию дольше сохранять аккуратный внешний вид."],
  ["03", "Стабильная геометрия", "Плотная SPC-плита хорошо держит форму и меньше реагирует на изменения влажности и температуры в помещении."],
  ["04", "Совместим с тёплым полом", "Небольшая толщина и плотная структура хорошо передают тепло при соблюдении температурных требований производителя."],
  ["05", "Быстрый монтаж", "Замковое соединение позволяет собирать покрытие без клея и при необходимости заменить отдельную планку."],
  ["06", "Простой уход", "Для регулярной уборки достаточно пылесоса и слегка влажной салфетки — сложная обработка поверхности не требуется."],
];

const spcLayers = [
  ["01", "UV-защита + рабочий слой", "Защищают рисунок от мелких царапин, загрязнений и истирания."],
  ["02", "Декоративная плёнка", "Передаёт оттенок и естественный рисунок древесины."],
  ["03", "Жёсткая SPC-основа", "Плотный несущий слой из минерального наполнителя и полимера."],
  ["04", "Замок click-lock", "Соединяет панели без клея в единое покрытие."],
];

export default function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-[1440px] gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-12 lg:py-24">
        <div className="flex flex-col justify-center"><p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#8b5e3c]">Прямые поставки · склад в Смоленске</p><h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#33291f] sm:text-6xl lg:text-[4.6rem]">SPC-ламинат напрямую с завода — в наличии в Смоленске</h1><p className="mt-7 max-w-2xl text-base leading-7 text-[#6c6258] sm:text-lg">Поставляем напольные покрытия напрямую с одного из ведущих заводов Китая. Без посредников — поэтому предлагаем выгодную цену и держим популярные декоры на складе в Смоленске.</p><div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-[#60452f]"><span className="rounded-full bg-[#eadbc7] px-4 py-2">Прямой контракт с заводом</span><span className="rounded-full bg-[#eadbc7] px-4 py-2">Цена без посредников</span><span className="rounded-full bg-[#eadbc7] px-4 py-2">В наличии в Смоленске</span></div><div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href="/catalog" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#71482e] px-7 py-3 text-sm font-semibold text-white hover:bg-[#573722]">Выбрать из наличия <span className="ml-3">→</span></Link><Link href="/product/example?model=spc-804" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#b9a792] px-7 py-3 text-sm font-semibold text-[#60452f]">Модель SPC 804</Link></div></div>
        <div className="relative overflow-hidden rounded-[2rem] border border-[#cdbb9f] bg-[#d9c19f] shadow-[0_18px_45px_rgba(74,53,36,0.10)]"><div role="img" aria-label="Образец покрытия SPC 804 — Дуб медовый">{heroTextureRows.map((transform, index) => <div key={index} className="relative aspect-[714/109] overflow-hidden border-b border-black/10 last:border-b-0"><Image src="/products/spc-804.jpg" alt="" fill priority={index === 0} quality={95} sizes="(max-width: 1024px) 100vw, 42vw" className={`object-cover ${transform}`} /></div>)}</div><span className="absolute right-5 top-5 rounded-full bg-[#54704b] px-4 py-2 text-xs font-semibold text-white shadow-sm sm:right-6 sm:top-6">В наличии в Смоленске</span><div className="absolute inset-x-5 bottom-5 rounded-3xl border border-white/50 bg-[#f6f1e8]/92 p-5 shadow-sm backdrop-blur-sm sm:inset-x-6 sm:bottom-6 sm:p-6"><p className="text-sm text-[#775f4c]">Прямая поставка · модель 804</p><h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em]">SPC 804 — Дуб медовый</h2><p className="mt-2 text-sm leading-6 text-[#706357]">На складе в Смоленске · 183 × 1220 × 4,2 мм</p></div></div>
      </section>

      <section className="border-y border-[#d9cdbd] bg-[#eee5d7]"><div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12"><div className="mb-9 flex items-end justify-between gap-5"><div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#8b5e3c]">Начните выбор</p><h2 className="text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">Популярные категории</h2></div><Link className="hidden text-sm font-semibold text-[#71482e] sm:block" href="/catalog">Весь каталог →</Link></div><div className="grid gap-5 md:grid-cols-3">{categories.map(([number,title,description,image]) => <Link href="/catalog" key={title} className="overflow-hidden rounded-3xl border border-[#cfc0ad] bg-[#f8f4ed]"><div className="relative h-32 overflow-hidden"><Image src={image} alt="" fill quality={90} sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" /><span className="absolute right-5 top-5 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold">{number}</span></div><div className="p-6"><h3 className="text-xl font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#756a5f]">{description}</p></div></Link>)}</div></div></section>

      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b5e3c]">Практичное покрытие для дома</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">Преимущества SPC кварц-винилового ламината</h2>
            <p className="mt-5 max-w-lg text-sm leading-6 text-[#756a5f]">SPC — это жёсткая минерально-полимерная плита с декоративным и защитным слоями. Она сочетает внешний вид натурального дерева с практичностью современного напольного покрытия.</p>
            <Link href="/catalog" className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full border border-[#b9a792] px-6 py-2 text-sm font-semibold text-[#60452f] hover:bg-[#eee5d7]">Выбрать SPC-ламинат <span className="ml-3">→</span></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {spcBenefits.map(([number, title, description]) => (
              <article key={number} className="rounded-3xl border border-[#d9cdbd] bg-[#fbf8f2] p-6 sm:p-7">
                <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-[#eadbc7] px-3 text-xs font-semibold text-[#71482e]">{number}</span>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.025em] text-[#3c3025]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#756a5f]">{description}</p>
              </article>
            ))}
          </div>
        </div>
        <p className="mt-6 text-xs leading-5 text-[#887b70]">Точные характеристики, класс износостойкости и допустимая температура тёплого пола зависят от выбранной модели.</p>
        <div className="mt-10 overflow-hidden rounded-[2rem] bg-[#3e3228] text-[#f7efe5]">
          <div className="grid gap-8 p-7 sm:p-9 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:p-10">
            <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9aa8c]">Конструкция панели</p><h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Что находится внутри SPC</h3><p className="mt-4 max-w-md text-sm leading-6 text-[#cfc0b2]">Несколько функциональных слоёв работают вместе: поверхность сохраняет внешний вид, а жёсткая основа и замок отвечают за стабильность покрытия.</p></div>
            <ol className="grid gap-px overflow-hidden rounded-3xl bg-white/15 sm:grid-cols-2">
              {spcLayers.map(([number, title, description]) => <li key={number} className="bg-[#493b30] p-5 sm:p-6"><span className="text-xs text-[#c9aa8c]">{number}</span><h4 className="mt-3 font-semibold">{title}</h4><p className="mt-2 text-sm leading-6 text-[#cfc0b2]">{description}</p></li>)}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d9cdbd] bg-[#eee5d7]"><div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12"><div className="mb-9 flex items-end justify-between gap-5"><div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#8b5e3c]">Выбор покупателей</p><h2 className="text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">Популярные товары</h2></div><Link className="hidden text-sm font-semibold text-[#71482e] sm:block" href="/catalog">Смотреть все →</Link></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{products.slice(0,3).map(product => <ProductCard key={product.id} product={product} />)}</div></div></section>

      <section className="bg-[#3e3228] text-[#f7efe5]"><div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9aa8c]">Без лишних посредников</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">Почему у нас выгодно</h2><p className="mt-4 max-w-sm text-sm leading-6 text-[#cfc0b2]">Работаем напрямую с производством и поддерживаем складской запас в Смоленске.</p></div><div className="grid gap-px overflow-hidden rounded-3xl bg-white/15 sm:grid-cols-2">{[["01","Прямой контракт с заводом"],["02","Цена без посреднической наценки"],["03","Ламинат в наличии в Смоленске"],["04","Помощь с расчётом и подбором"]].map(([n,t])=><div key={n} className="bg-[#493b30] p-6"><span className="text-xs text-[#c9aa8c]">{n}</span><h3 className="mt-4 text-lg font-semibold">{t}</h3></div>)}</div></div></section>

      <section id="delivery" className="mx-auto grid max-w-[1440px] gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:px-12"><div className="rounded-[2rem] bg-[#d8c09e] p-7 sm:p-10"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#75543c]">Склад в Смоленске</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">Заберите сегодня или закажите доставку</h2><p className="mt-4 max-w-md text-sm leading-6 text-[#6c5a4b]">Популярные модели уже в наличии. Согласуем удобный день доставки по Смоленску и области.</p></div><div className="rounded-[2rem] border border-[#d9cdbd] bg-[#fbf8f2] p-7 sm:p-10"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b5e3c]">Есть вопросы?</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">Поможем с выбором</h2><a href="tel:+74950000000" className="mt-6 block text-2xl font-semibold text-[#71482e]">+7 (495) 000-00-00</a><p className="mt-2 text-sm text-[#756a5f]">Ежедневно с 9:00 до 20:00</p></div></section>
    </>
  );
}
