import type { Metadata } from "next";
import Link from "next/link";
import { legalDetails } from "@/data/legal";

export const metadata: Metadata = {
  title: "Согласие на обработку персональных данных",
  description: "Отдельное согласие посетителя сайта ЛАМИНАТ.СЕЙЛ на обработку персональных данных",
};

export default function PersonalDataConsentPage() {
  return (
    <article className="mx-auto max-w-[920px] [overflow-wrap:anywhere] px-5 py-12 sm:px-8 lg:px-12">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b5e3c]">Отдельный документ</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Согласие на обработку персональных данных</h1>
      <p className="mt-5 text-sm text-[#756a5f]">Редакция от {legalDetails.effectiveDate}</p>

      <div className="mt-10 space-y-7 text-[15px] leading-7 text-[#5f554c]">
        <p>Проставляя отдельную отметку в форме и нажимая кнопку отправки, я свободно, своей волей и в своём интересе даю согласие оператору <strong>{legalDetails.operatorName}</strong>, ИНН <strong>{legalDetails.inn}</strong>, ОГРНИП <strong>{legalDetails.registrationNumber}</strong>, адрес для обращений: <strong>{legalDetails.operatorAddress}</strong>, электронная почта: <strong>{legalDetails.privacyEmail}</strong>, на обработку моих персональных данных на следующих условиях.</p>

        <section><h2 className="text-2xl font-semibold text-[#3c3025]">1. Персональные данные</h2><p className="mt-3">Имя, номер телефона, желаемый цвет покрытия, площадь объекта, содержание комментария, состав корзины и сведения о выбранных товарах, которые я самостоятельно указываю или формирую на сайте.</p></section>

        <section><h2 className="text-2xl font-semibold text-[#3c3025]">2. Цели обработки</h2><ul className="mt-3 list-disc space-y-2 pl-5"><li>рассмотрение обращения и обратная связь;</li><li>подбор товара по указанным параметрам;</li><li>уточнение состава, количества, стоимости и условий доставки заказа;</li><li>подготовка к заключению и исполнение договора купли-продажи.</li></ul></section>

        <section><h2 className="text-2xl font-semibold text-[#3c3025]">3. Действия и способы обработки</h2><p className="mt-3">Разрешаются сбор, запись, систематизация, накопление, хранение, уточнение, извлечение, использование, передача лицам, обрабатывающим данные по поручению оператора исключительно для указанных целей, блокирование, удаление и уничтожение с использованием средств автоматизации или без них.</p></section>

        <section><h2 className="text-2xl font-semibold text-[#3c3025]">4. Лица, которым может быть поручена обработка</h2><p className="mt-3">Оператор вправе поручить обработку российским поставщикам хостинга, CRM, телефонии, доставки и технической поддержки при условии заключения необходимого договора, ограничения целей и состава данных, соблюдения конфиденциальности и требований безопасности. Актуальные фактические обработчики указываются в Политике до начала передачи им данных.</p></section>

        <section><h2 className="text-2xl font-semibold text-[#3c3025]">5. Срок действия и отзыв</h2><p className="mt-3">Согласие действует до достижения соответствующей цели или его отзыва, но не более 3 лет с даты последнего взаимодействия со мной, если более длительный срок не требуется договором или законом. Отзыв направляется на <a className="font-semibold text-[#71482e] underline underline-offset-4" href={`mailto:${legalDetails.privacyEmail}`}>{legalDetails.privacyEmail}</a> или по адресу: <strong>{legalDetails.operatorAddress}</strong>. В отзыве необходимо указать сведения, позволяющие идентифицировать заявителя и соответствующее обращение.</p></section>

        <section><h2 className="text-2xl font-semibold text-[#3c3025]">6. Последствия отзыва</h2><p className="mt-3">После получения отзыва оператор прекращает обработку и уничтожает данные в предусмотренный законом срок, если отсутствует иное законное основание продолжать обработку. Отзыв не влияет на законность действий, совершённых до его получения.</p></section>

        <section><h2 className="text-2xl font-semibold text-[#3c3025]">7. Фиксация согласия</h2><p className="mt-3">При подключении реальной отправки оператор фиксирует дату и время, источник, содержание и редакцию согласия, а также технические сведения, позволяющие подтвердить факт его получения. Согласие оформляется отдельно от иных документов и отметок.</p></section>

        <div className="rounded-3xl border border-[#d5b98f] bg-[#fff5df] p-5 text-sm leading-6 text-[#6e4c25]"><strong className="block">Текущий режим сайта</strong>Сейчас формы показывают подтверждение на устройстве пользователя и не передают введённые данные оператору. Настоящее согласие начнёт применяться к отправке через сайт после подключения обработчика и российской базы данных.</div>
      </div>

      <div className="mt-12 flex flex-wrap gap-3"><Link href="/privacy" className="rounded-full bg-[#71482e] px-6 py-3 text-sm font-semibold text-white">Политика конфиденциальности</Link><Link href="/cookies" className="rounded-full border border-[#b9a792] px-6 py-3 text-sm font-semibold text-[#60452f]">Положение о cookie</Link><Link href="/cart" className="rounded-full border border-[#b9a792] px-6 py-3 text-sm font-semibold text-[#60452f]">Вернуться в корзину</Link></div>
    </article>
  );
}

