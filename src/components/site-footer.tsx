import Link from "next/link";
import { legalDetails } from "@/data/legal";

export function SiteFooter() {
  return (
    <footer id="contacts" className="bg-[#34291f] text-[#f5ede3]">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-12">
        <div><p className="text-xl font-semibold">ЛАМИНАТ.СЕЙЛ</p><p className="mt-3 max-w-xs text-sm leading-6 text-[#c8b9aa]">SPC-покрытия с древесными и каменными декорами для дома и бизнеса.</p></div>
        <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#bfa48c]">Навигация</p><div className="mt-4 flex flex-col gap-2 text-sm"><Link href="/catalog">Каталог</Link><Link href="/product/spc-804-dub-medovyy">Популярная модель</Link><Link href="/cart">Корзина</Link></div></div>
        <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#bfa48c]">Правовая информация</p><div className="mt-4 flex flex-col gap-2 text-sm"><Link href="/privacy">Политика конфиденциальности</Link><Link href="/personal-data-consent">Согласие на обработку данных</Link><Link href="/cookies">Положение о cookie-файлах</Link></div></div>
        <div className="md:text-right"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#bfa48c]">Связаться</p><a className="mt-4 block text-2xl font-semibold" href={legalDetails.contactPhoneHref}>{legalDetails.contactPhone}</a><p className="mt-2 text-sm leading-6 text-[#c8b9aa]">Ежедневно с 9:00 до 20:00</p></div>
      </div>
      <div className="border-t border-white/10"><div className="mx-auto max-w-[1440px] px-5 py-5 text-xs leading-5 text-[#a9998b] sm:px-8 lg:px-12">© 2026 ЛАМИНАТ.СЕЙЛ · {legalDetails.operatorShortName} · ИНН {legalDetails.inn} · ОГРНИП {legalDetails.registrationNumber}</div></div>
    </footer>
  );
}

