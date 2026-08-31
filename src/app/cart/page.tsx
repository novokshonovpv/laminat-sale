import type { Metadata } from "next";
import { CartView } from "@/components/cart-view";

export const metadata: Metadata = { title: "Корзина", description: "Товары, выбранные в ЛАМИНАТ.СЕЙЛ" };

export default function CartPage() {
  return <CartView />;
}
