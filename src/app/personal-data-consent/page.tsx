import type { Metadata } from "next";
import Link from "next/link";
import { legalDetails } from "@/data/legal";

export const metadata: Metadata = {
  title: "Проект согласия на обработку персональных данных",
  description: "Отдельное согласие посетителя сайта ЛАМИНАТ.СЕЙЛ на обработку персональных данных",
};

export default function PersonalDataConsentPage() {
  return (
    <article className="mx-auto max-w-[920px] [overflow-wrap:anywhere] px-5 py-12 sm:px-8 lg:px-12">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b5e3c]">Проект отдельного документа</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Проект согласия на обработку персональных данных</h1>
      <p className="mt-5 text-sm text-[#756a5f]">Редакция от {legalDetails.effectiveDate}</p>

      <div className="mt-8 rounded-3xl border border-[#d5b98f] bg-[#fff5df] p-5 text-sm leading-6 text-[#6e4c25]"><strong className="block">Это проект для демонстрационной версии</strong>Неизвестные сведения обозначены как «ХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХ». Перед запуском замените их реальными реквизитами оператора.</div>

      <div className="mt-10 space-y-6 text-[15px] leading-7 text-[#5f554c]">
        <p>Проставляя отдельную отметку под формой заказа и нажимая кнопку подтверждения, я свободно, своей волей и в своём интересе даю оператору <strong>{legalDetails.operatorName}</strong>, ИНН <strong>{legalDetails.inn}</strong>, ОГРН/ОГРНИП <strong>{legalDetails.registrationNumber}</strong>, адрес: <strong>{legalDetails.operatorAddress}</strong>, согласие на обработку моих персональных данных на следующих условиях.</p>
        <section><h2 className="text-2xl font-semibold text-[#3c3025]">1. Перечень данных</h2><p className="mt-3">Имя, номер телефона и содержание комментария, которые я самостоятельно указываю в форме.</p></section>
        <section><h2 className="text-2xl font-semibold text-[#3c3025]">2. Цель обработки</h2><p className="mt-3">Рассмотрение заявки, связь со мной, уточнение состава заказа, количества упаковок, стоимости и условий доставки, подготовка к заключению и исполнение договора купли-продажи.</p></section>
        <section><h2 className="text-2xl font-semibold text-[#3c3025]">3. Разрешённые действия</h2><p className="mt-3">Сбор, запись, систематизация, накопление, хранение, уточнение, извлечение, использование, предоставление лицам, обрабатывающим данные по поручению оператора исключительно для указанной цели, блокирование, удаление и уничтожение с использованием средств автоматизации или без них.</p></section>
        <section><h2 className="text-2xl font-semibold text-[#3c3025]">4. Срок и отзыв</h2><p className="mt-3">Согласие действует до достижения цели обработки или его отзыва, если у оператора отсутствует иное законное основание продолжать обработку. Отозвать согласие можно обращением по адресу <strong>{legalDetails.privacyEmail}</strong>. Отзыв должен позволять идентифицировать заявителя и соответствующую заявку.</p></section>
        <section><h2 className="text-2xl font-semibold text-[#3c3025]">5. Демонстрационный режим</h2><p className="mt-3">На текущем этапе форма не отправляет и не сохраняет введённые сведения. До подключения реальной отправки оператор обязан заменить «ХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХХ» фактическими сведениями, обеспечить фиксацию факта и версии согласия, определить российских обработчиков и выполнить иные обязанности, предусмотренные законодательством.</p></section>
      </div>

      <div className="mt-12 flex flex-wrap gap-3"><Link href="/privacy" className="rounded-full bg-[#71482e] px-6 py-3 text-sm font-semibold text-white">Политика конфиденциальности</Link><Link href="/cart" className="rounded-full border border-[#b9a792] px-6 py-3 text-sm font-semibold text-[#60452f]">Вернуться в корзину</Link></div>
    </article>
  );
}
