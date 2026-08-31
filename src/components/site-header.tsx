import Link from "next/link";
import { CartIndicator } from "@/components/cart-indicator";
import { SearchBar } from "@/components/search-bar";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#d9cdbd] bg-[#f6f1e8]/95 backdrop-blur-md">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between gap-5">
          <Link href="/" className="shrink-0 text-xl font-semibold tracking-[-0.03em] text-[#3c3025]" aria-label="ЛАМИНАТ.СЕЙЛ — главная">
            ЛАМИНАТ<span className="text-[#8b5e3c]">.СЕЙЛ</span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-medium lg:flex" aria-label="Основная навигация">
            <Link className="hover:text-[#8b5e3c]" href="/catalog">Каталог</Link>
            <Link className="hover:text-[#8b5e3c]" href="/#delivery">Доставка</Link>
            <Link className="hover:text-[#8b5e3c]" href="/#contacts">Контакты</Link>
          </nav>
          <div className="hidden min-w-0 max-w-md flex-1 md:block"><SearchBar compact /></div>
          <CartIndicator />
        </div>
        <div className="pb-4 md:hidden"><SearchBar compact /></div>
      </div>
    </header>
  );
}
