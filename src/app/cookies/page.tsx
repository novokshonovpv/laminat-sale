import type { Metadata } from "next";
import Link from "next/link";
import { legalDetails } from "@/data/legal";

export const metadata: Metadata = {
  title: "Положение о cookie-файлах",
  description: "Положение об использовании cookie и локального хранилища на сайте ЛАМИНАТ.СЕЙЛ",
};

const storageItems = [
  ["laminat-dom-cart", "localStorage", "Сохранение выбранных товаров и количества упаковок в корзине", "До очистки корзины или данных сайта пользователем", "Необходимое хранилище"],
  ["laminat-sale-cookie-preferences", "localStorage", "Сохранение выбранного режима использования cookie и локального хранилища", "До удаления данных сайта или изменения версии настроек", "Выбор пользователя"],
];

export default function CookiesPage() {
  return (
    <article className="mx-auto max-w-[1040px] [overflow-wrap:anywhere] px-5 py-12 sm:px-8 lg:px-12">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b5e3c]">Правовая информация</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Положение об использовании cookie-файлов</h1>
      <p className="mt-5 text-sm text-[#756a5f]">Редакция от {legalDetails.effectiveDate}</p>

      <div className="mt-10 space-y-10 text-[15px] leading-7 text-[#5f554c]">
        <section><h2 className="text-2xl font-semibold text-[#3c3025]">1. Общие положения</h2><div className="mt-4 space-y-3"><p>Настоящее Положение описывает использование файлов cookie и сходных технологий на сайте <strong>{legalDetails.siteAddress}</strong>. Оператор: <strong>{legalDetails.operatorName}</strong>, ИНН <strong>{legalDetails.inn}</strong>, ОГРНИП <strong>{legalDetails.registrationNumber}</strong>.</p><p>Под cookie понимаются небольшие фрагменты данных, которые сайт или его инфраструктура могут сохранять в браузере. К сходным технологиям относится локальное хранилище браузера <span lang="en">localStorage</span>.</p></div></section>

        <section><h2 className="text-2xl font-semibold text-[#3c3025]">2. Что используется на сайте</h2><div className="mt-5 overflow-x-auto rounded-2xl border border-[#d9cdbd]"><table className="min-w-[820px] border-collapse text-left text-sm"><thead className="bg-[#f0e6d8] text-[#3c3025]"><tr><th className="p-4">Название</th><th className="p-4">Технология</th><th className="p-4">Назначение</th><th className="p-4">Срок</th><th className="p-4">Категория</th></tr></thead><tbody>{storageItems.map(([name, technology, purpose, term, category]) => <tr key={name} className="border-t border-[#e5dbcd] align-top"><td className="p-4 font-mono text-xs">{name}</td><td className="p-4">{technology}</td><td className="p-4">{purpose}</td><td className="p-4">{term}</td><td className="p-4">{category}</td></tr>)}</tbody></table></div><p className="mt-4">На дату этой редакции оператор не подключал рекламные, аналитические и профилирующие cookie. Если перечень изменится, Положение и интерфейс выбора будут обновлены до начала использования новых технологий.</p></section>

        <section><h2 className="text-2xl font-semibold text-[#3c3025]">3. Необходимое и необязательное хранилище</h2><div className="mt-4 space-y-3"><p>Необходимое хранилище обеспечивает работу корзины, безопасность и сохранение сделанного пользователем выбора. Отключение или очистка может привести к удалению корзины и повторному показу уведомления.</p><p>Необязательные технологии могут использоваться только после отдельного информированного выбора пользователя. Отказ от них не ограничивает доступ к каталогу и основным функциям сайта.</p></div></section>

        <section><h2 className="text-2xl font-semibold text-[#3c3025]">4. Технические журналы</h2><p className="mt-4">При обращении к сайту хостинг-провайдер и сетевая инфраструктура могут автоматически получать IP-адрес, дату и время запроса, адрес страницы, сведения о браузере и устройстве. Эти сведения используются для доставки содержимого, защиты от злоупотреблений и диагностики ошибок и регулируются также <Link href="/privacy" className="font-semibold text-[#71482e] underline underline-offset-4">Политикой конфиденциальности</Link>.</p></section>

        <section><h2 className="text-2xl font-semibold text-[#3c3025]">5. Управление хранилищем</h2><div className="mt-4 space-y-3"><p>При первом посещении сайт сообщает об используемом необходимом хранилище. На дату этой редакции выбора необязательных технологий нет, поскольку они не используются. Если такие технологии появятся, сайт запросит отдельное предварительное согласие с указанием конкретных целей.</p><p>Cookie и данные сайта можно удалить или заблокировать в настройках браузера. После очистки локального хранилища корзина и сохранённое подтверждение ознакомления будут удалены. Уведомление можно открыть повторно кнопкой «Настройки cookie» в нижней части экрана.</p></div></section>

        <section><h2 className="text-2xl font-semibold text-[#3c3025]">6. Передача третьим лицам</h2><p className="mt-4">Оператор не передаёт содержимое локальной корзины третьим лицам в текущей демонстрационной версии. Технические данные могут обрабатываться поставщиками хостинга и сетевой инфраструктуры в объёме, необходимом для работы сайта. До подключения аналитических сервисов оператор укажет их наименование, назначение, срок хранения и применимое основание.</p></section>

        <section><h2 className="text-2xl font-semibold text-[#3c3025]">7. Контакты и изменения</h2><p className="mt-4">Вопросы направляются по адресу <a className="font-semibold text-[#71482e] underline underline-offset-4" href={`mailto:${legalDetails.privacyEmail}`}>{legalDetails.privacyEmail}</a> или по адресу: <strong>{legalDetails.operatorAddress}</strong>. Новая редакция Положения действует с даты публикации. При существенном изменении перечня необязательных технологий сайт запросит новый выбор.</p></section>
      </div>

      <div className="mt-12 flex flex-wrap gap-3"><Link href="/privacy" className="rounded-full bg-[#71482e] px-6 py-3 text-sm font-semibold text-white">Политика конфиденциальности</Link><Link href="/personal-data-consent" className="rounded-full border border-[#b9a792] px-6 py-3 text-sm font-semibold text-[#60452f]">Согласие на обработку данных</Link><Link href="/" className="rounded-full border border-[#b9a792] px-6 py-3 text-sm font-semibold text-[#60452f]">На главную</Link></div>
    </article>
  );
}

