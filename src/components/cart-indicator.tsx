"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-store";

export function CartIndicator() {
  const { items } = useCart();
  const packageCount = items.reduce((total, item) => total + item.packages, 0);

  return (
    <Link
      href="/cart"
      className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#8b5e3c] px-4 py-2.5 text-sm font-semibold text-[#70492f] hover:bg-[#8b5e3c] hover:text-white"
      aria-label={`Корзина, упаковок: ${packageCount}`}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4h2l2.1 10.1a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 1.9-1.4L21 7H6"/><circle cx="10" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg>
      <span className="hidden sm:inline">Корзина</span>
      <span className="min-w-5 rounded-full bg-[#8b5e3c] px-1.5 py-0.5 text-center text-[10px] leading-none text-white">{packageCount}</span>
    </Link>
  );
}
