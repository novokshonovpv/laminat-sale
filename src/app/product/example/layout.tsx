import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Карточка SPC-покрытия",
  description: "Характеристики, расчёт упаковок и стоимость SPC-покрытия",
};

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<div className="mx-auto max-w-[1440px] px-5 py-16 text-sm text-[#756a5f]">Загружаем товар…</div>}>{children}</Suspense>;
}
