"use client";

import { useState } from "react";
import Link from "next/link";
import { formatPrice } from "@/data/products";
import { useCart } from "@/lib/cart-store";

type LaminateCalculatorProps = {
  productId: string;
  packageArea: number;
  pricePerSquareMeter: number;
};

function parseNumber(value: string) {
  const parsed = Number(value.replace(",", "."));
  return Number.isFinite(parsed) ? Math.max(parsed, 0) : 0;
}

export function LaminateCalculator({
  productId,
  packageArea,
  pricePerSquareMeter,
}: LaminateCalculatorProps) {
  const [roomArea, setRoomArea] = useState("18");
  const [reservePercent, setReservePercent] = useState("10");
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const area = parseNumber(roomArea);
  const reserve = parseNumber(reservePercent);
  const packages = area > 0 ? Math.ceil((area * (1 + reserve / 100)) / packageArea) : 0;
  const actualArea = packages * packageArea;
  const totalPrice = Math.round(actualArea * pricePerSquareMeter);

  return (
    <section className="mt-8 rounded-3xl border border-[#d8ccbd] bg-[#f4ecdf] p-5 sm:p-6" aria-labelledby="laminate-calculator-title">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b5e3c]">Расчёт материала</p>
          <h2 id="laminate-calculator-title" className="mt-1 text-2xl font-semibold tracking-[-0.03em]">Калькулятор ламината</h2>
        </div>
        <p className="text-sm text-[#756a5f]">Упаковка: {packageArea.toLocaleString("ru-RU")} м²</p>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-[#493b30]">
          Площадь помещения, м²
          <input
            className="mt-2 min-h-12 w-full rounded-xl border border-[#c9b9a5] bg-white px-4 text-base outline-none transition focus:border-[#71482e] focus:ring-2 focus:ring-[#71482e]/15"
            type="text"
            inputMode="decimal"
            value={roomArea}
            onChange={(event) => setRoomArea(event.target.value)}
            aria-describedby="calculator-note"
          />
        </label>
        <label className="text-sm font-medium text-[#493b30]">
          Запас, %
          <input
            className="mt-2 min-h-12 w-full rounded-xl border border-[#c9b9a5] bg-white px-4 text-base outline-none transition focus:border-[#71482e] focus:ring-2 focus:ring-[#71482e]/15"
            type="text"
            inputMode="decimal"
            value={reservePercent}
            onChange={(event) => setReservePercent(event.target.value)}
            aria-describedby="calculator-note"
          />
        </label>
      </div>

      <p id="calculator-note" className="mt-3 text-xs leading-5 text-[#817469]">
        Количество упаковок округляется вверх, чтобы материала хватило на всю площадь с учётом запаса.
      </p>

      <dl className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-[#d8ccbd] bg-[#d8ccbd] sm:grid-cols-3" aria-live="polite">
        <div className="bg-[#fffaf2] p-4">
          <dt className="text-xs text-[#8c8177]">Нужно</dt>
          <dd className="mt-1 text-xl font-semibold">{packages} {packages === 1 ? "упаковка" : packages >= 2 && packages <= 4 ? "упаковки" : "упаковок"}</dd>
        </div>
        <div className="bg-[#fffaf2] p-4">
          <dt className="text-xs text-[#8c8177]">Фактическая площадь</dt>
          <dd className="mt-1 text-xl font-semibold">{actualArea.toLocaleString("ru-RU", { maximumFractionDigits: 2 })} м²</dd>
        </div>
        <div className="bg-[#fffaf2] p-4">
          <dt className="text-xs text-[#8c8177]">Стоимость</dt>
          <dd className="mt-1 text-xl font-semibold">{formatPrice(totalPrice)} ₽</dd>
        </div>
      </dl>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          disabled={packages === 0}
          onClick={() => {
            addItem(productId, packages);
            setAdded(true);
          }}
          className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-[#71482e] px-7 py-3 text-sm font-semibold text-white hover:bg-[#573722] disabled:cursor-not-allowed disabled:opacity-50"
        >
          Добавить {packages > 0 ? `${packages} уп. ` : ""}в корзину
        </button>
        <button type="button" className="min-h-12 rounded-full border border-[#b9a792] px-7 py-3 text-sm font-semibold text-[#60452f]">Помощь с расчётом</button>
      </div>
      {added && <p className="mt-3 text-sm font-medium text-[#54704b]" role="status">✓ Добавлено в корзину · <Link href="/cart" className="underline underline-offset-4">перейти</Link></p>}
    </section>
  );
}
