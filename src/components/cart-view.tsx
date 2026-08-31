"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatPrice, formatThickness, products } from "@/data/products";
import { useCart } from "@/lib/cart-store";

export function CartView() {
  const { items, removeItem, updateItem } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const lines = items.flatMap((cartItem) => {
    const product = products.find((item) => item.id === cartItem.productId);
    return product ? [{ ...cartItem, product }] : [];
  });
  const totalArea = lines.reduce((total, line) => total + line.packages * line.product.packageArea, 0);
  const totalPrice = Math.round(lines.reduce((total, line) => total + line.packages * line.product.packageArea * line.product.pricePerSquareMeter, 0));

  function handleDemoSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-8 lg:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b5e3c]">Ваш заказ</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Корзина</h1>
        <section className="mt-10 rounded-3xl border border-[#d3c5b4] bg-[#fbf8f2] px-6 py-14 text-center">
          <p className="text-2xl font-semibold">Корзина пока пуста</p>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#756a5f]">Выберите покрытие в каталоге, рассчитайте нужное количество упаковок и добавьте его сюда.</p>
          <Link href="/catalog" className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[#71482e] px-7 py-3 text-sm font-semibold text-white">Перейти в каталог</Link>
        </section>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-8 lg:px-12">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b5e3c]">Ваш заказ</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Корзина</h1>
      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
        <section className="space-y-4" aria-label="Товары в корзине">
          {lines.map(({ product, packages }) => {
            const area = packages * product.packageArea;
            const subtotal = Math.round(product.pricePerSquareMeter * area);

            return (
              <article key={product.id} className="grid gap-5 rounded-3xl border border-[#d3c5b4] bg-[#fbf8f2] p-5 sm:grid-cols-[150px_1fr]">
                <div className="relative min-h-36 overflow-hidden rounded-2xl bg-[#e7ded2]"><Image src={product.image} alt={`Декор ${product.name}`} fill sizes="150px" className="object-cover" /></div>
                <div className="flex flex-col justify-between gap-5">
                  <div className="flex justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.15em] text-[#8f7d6c]">Модель {product.model} · {product.collection}</p>
                      <Link href={`/product/example?model=${product.id}`} className="mt-2 block text-xl font-semibold">{product.name}</Link>
                      <p className="mt-2 text-sm text-[#756a5f]">{product.class} класс · {formatThickness(product.thickness)} мм · упаковка {product.packageArea.toLocaleString("ru-RU")} м²</p>
                    </div>
                    <button type="button" onClick={() => removeItem(product.id)} aria-label={`Удалить ${product.name}`} className="h-9 w-9 shrink-0 rounded-full border border-[#d3c5b4] text-[#8b7767] hover:border-[#9a654b] hover:text-[#9a654b]">×</button>
                  </div>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <label htmlFor={`quantity-${product.id}`} className="mb-2 block text-xs text-[#8b7f74]">Количество упаковок</label>
                      <div className="inline-flex items-center rounded-full border border-[#d3c5b4] bg-white">
                        <button type="button" onClick={() => updateItem(product.id, packages - 1)} disabled={packages <= 1} className="h-10 w-10 disabled:opacity-35" aria-label="Уменьшить количество">−</button>
                        <input id={`quantity-${product.id}`} type="number" min="1" step="1" value={packages} onChange={(event) => updateItem(product.id, Number(event.target.value) || 1)} className="h-10 w-14 border-x border-[#e3d8ca] bg-transparent text-center text-sm font-semibold outline-none" />
                        <button type="button" onClick={() => updateItem(product.id, packages + 1)} className="h-10 w-10" aria-label="Увеличить количество">+</button>
                      </div>
                      <p className="mt-2 text-xs text-[#8b7f74]">Площадь: {area.toLocaleString("ru-RU", { maximumFractionDigits: 2 })} м²</p>
                    </div>
                    <strong className="text-xl">{formatPrice(subtotal)} ₽</strong>
                  </div>
                </div>
              </article>
            );
          })}
          <div className="rounded-3xl border border-[#d3c5b4] p-6"><h2 className="font-semibold">Нужна помощь с расчётом?</h2><p className="mt-2 text-sm leading-6 text-[#756a5f]">Проверим площадь, запас и количество упаковок перед оформлением.</p><button type="button" className="mt-4 text-sm font-semibold text-[#71482e]">Попросить проверить заказ →</button></div>
        </section>

        <aside className="h-fit rounded-3xl bg-[#3e3228] p-6 text-[#f7efe5]">
          <h2 className="text-xl font-semibold">Итого</h2>
          <dl className="mt-6 space-y-4 text-sm">
            <div className="flex justify-between text-[#cfc0b2]"><dt>Позиций</dt><dd>{lines.length}</dd></div>
            <div className="flex justify-between text-[#cfc0b2]"><dt>Упаковок</dt><dd>{lines.reduce((total, line) => total + line.packages, 0)}</dd></div>
            <div className="flex justify-between text-[#cfc0b2]"><dt>Общая площадь</dt><dd>{totalArea.toLocaleString("ru-RU", { maximumFractionDigits: 2 })} м²</dd></div>
            <div className="flex justify-between text-[#cfc0b2]"><dt>Доставка</dt><dd>Рассчитаем отдельно</dd></div>
            <div className="flex justify-between border-t border-white/15 pt-5 text-lg font-semibold"><dt>К оплате</dt><dd>{formatPrice(totalPrice)} ₽</dd></div>
          </dl>
          <button type="button" onClick={() => { setCheckoutOpen(true); setSubmitted(false); }} className="mt-7 w-full rounded-full bg-[#d9c19f] px-6 py-3.5 text-sm font-semibold text-[#3b2e24]">Оформить заказ</button>
          <p className="mt-4 text-center text-xs leading-5 text-[#bcaea1]">Демонстрационный режим · данные не отправляются</p>
        </aside>
      </div>

      {checkoutOpen && (
        <section className="mt-8 rounded-3xl border border-[#d3c5b4] bg-[#f4ecdf] p-6 sm:p-8" aria-labelledby="checkout-title">
          <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b5e3c]">Демонстрационный этап</p><h2 id="checkout-title" className="mt-2 text-2xl font-semibold">Контактные данные</h2></div><button type="button" onClick={() => setCheckoutOpen(false)} className="h-9 w-9 rounded-full border border-[#c9b9a5]" aria-label="Закрыть форму">×</button></div>
          {submitted ? (
            <div className="mt-6 rounded-2xl bg-[#e4ecde] p-5 text-[#47603f]" role="status"><p className="font-semibold">Форма заполнена</p><p className="mt-1 text-sm">Это демонстрация: заказ не отправлен и введённые данные нигде не сохраняются.</p></div>
          ) : (
            <form className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={handleDemoSubmit}>
              <label className="text-sm font-medium">Имя<input required name="name" autoComplete="name" className="mt-2 min-h-12 w-full rounded-xl border border-[#c9b9a5] bg-white px-4 outline-none focus:border-[#71482e]" /></label>
              <label className="text-sm font-medium">Телефон<input required name="phone" type="tel" autoComplete="tel" className="mt-2 min-h-12 w-full rounded-xl border border-[#c9b9a5] bg-white px-4 outline-none focus:border-[#71482e]" /></label>
              <label className="text-sm font-medium sm:col-span-2">Комментарий<textarea name="comment" rows={3} className="mt-2 w-full rounded-xl border border-[#c9b9a5] bg-white px-4 py-3 outline-none focus:border-[#71482e]" placeholder="Например, удобное время для звонка" /></label>
              <label className="flex items-start gap-3 rounded-2xl border border-[#c9b9a5] bg-white/60 p-4 text-sm leading-6 sm:col-span-2"><input required name="personal-data-consent" type="checkbox" className="mt-1 h-4 w-4 shrink-0 accent-[#71482e]" /><span>Я даю отдельное <Link href="/personal-data-consent" target="_blank" className="font-semibold text-[#71482e] underline underline-offset-4">согласие на обработку персональных данных</Link> и ознакомлен(а) с <Link href="/privacy" target="_blank" className="font-semibold text-[#71482e] underline underline-offset-4">Политикой конфиденциальности</Link>.</span></label>
              <div className="sm:col-span-2"><button type="submit" className="rounded-full bg-[#71482e] px-7 py-3 text-sm font-semibold text-white">Показать подтверждение</button><p className="mt-3 text-xs text-[#817469]">Нажатие только показывает демонстрационное подтверждение. Данные не отправляются и не сохраняются.</p></div>
            </form>
          )}
        </section>
      )}

      <Link href="/catalog" className="mt-8 inline-flex text-sm font-semibold text-[#71482e]">← Продолжить покупки</Link>
    </div>
  );
}
