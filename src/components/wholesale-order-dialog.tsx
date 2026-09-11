"use client";

import { FormEvent, useEffect, useState } from "react";

type LegalDocument = { title: string; url: string };

export function WholesaleOrderDialog() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [legalDocument, setLegalDocument] = useState<LegalDocument | null>(null);
  const inputClass = "mt-2 min-h-12 w-full rounded-xl border border-[#c9b9a5] bg-white px-4 outline-none focus:border-[#71482e]";

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (legalDocument) setLegalDocument(null);
      else closeDialog();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, legalDocument]);

  function closeDialog() {
    setLegalDocument(null);
    setSubmitted(false);
    setOpen(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return <>
    <button type="button" onClick={() => setOpen(true)} className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#71482e] bg-[#f3e9dc] px-7 py-3 text-sm font-semibold text-[#60452f] hover:bg-[#e8d8c5]">Купить оптом</button>
    {open && <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#2f261f]/70 p-4 backdrop-blur-sm" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) closeDialog(); }}>
      <section role="dialog" aria-modal="true" aria-labelledby="wholesale-order-title" className="max-h-[92vh] w-full max-w-[820px] overflow-y-auto rounded-[2rem] border border-[#d3c5b4] bg-[#fbf8f2] p-6 shadow-[0_28px_80px_rgba(31,23,17,0.28)] sm:p-8">
        <div className="flex items-start justify-between gap-5">
          <div><span className="inline-flex rounded-full bg-[#71482e] px-3 py-1 text-xs font-semibold tracking-[0.12em] text-white">ОПТ</span><h2 id="wholesale-order-title" className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Заявка на оптовую поставку</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-[#756a5f]">Расскажите о торговой точке и планируемом объёме. Менеджер подготовит условия, ассортимент и график поставок.</p></div>
          <button type="button" onClick={closeDialog} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#c9b9a5] text-xl text-[#60452f]" aria-label="Закрыть форму">×</button>
        </div>
        {submitted ? <div className="mt-8 rounded-3xl border border-[#c9b9a5] bg-[#f4ecdf] p-6">
          <span className="inline-flex rounded-full bg-[#71482e] px-3 py-1 text-xs font-semibold text-white">ОПТ</span><h3 className="mt-4 text-xl font-semibold">Оптовая заявка заполнена</h3><p className="mt-3 text-sm leading-6 text-[#756a5f]">Это демонстрационная версия: введённые данные никуда не переданы. Отправка будет подключена после настройки российского обработчика персональных данных и фиксации согласий.</p><button type="button" onClick={closeDialog} className="mt-5 rounded-full bg-[#71482e] px-6 py-3 text-sm font-semibold text-white">Понятно</button>
        </div> : <form className="mt-7 grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
          <input type="hidden" name="customer-type" value="ОПТ" />
          <label className="text-sm font-medium">Контактное лицо<input required name="contact-name" autoComplete="name" className={inputClass} placeholder="Имя и фамилия" /></label>
          <label className="text-sm font-medium">Телефон<input required name="phone" type="tel" autoComplete="tel" inputMode="tel" className={inputClass} placeholder="+7 (___) ___-__-__" /></label>
          <label className="text-sm font-medium">Компания или ИП<input required name="company" autoComplete="organization" className={inputClass} placeholder="Название организации" /></label>
          <label className="text-sm font-medium">ИНН<input required name="inn" inputMode="numeric" pattern="[0-9]{10}|[0-9]{12}" className={inputClass} placeholder="10 или 12 цифр" /></label>
          <label className="text-sm font-medium">Электронная почта<input required name="email" type="email" autoComplete="email" className={inputClass} placeholder="mail@example.ru" /></label>
          <label className="text-sm font-medium">Город / регион<input required name="region" autoComplete="address-level1" className={inputClass} placeholder="Например, Смоленск" /></label>
          <label className="text-sm font-medium sm:col-span-2">Интересующий объём в месяц, м²<input required name="monthly-volume" type="number" inputMode="decimal" min="1" max="1000000" step="1" className={inputClass} placeholder="Например, 500" /></label>
          <label className="text-sm font-medium sm:col-span-2">Адрес торговой точки<input required name="store-address" autoComplete="street-address" className={inputClass} placeholder="Город, улица, дом" /></label>
          <label className="text-sm font-medium sm:col-span-2">Сайт или страница торговой точки<input name="store-website" type="url" className={inputClass} placeholder="https://example.ru" /></label>
          <label className="text-sm font-medium">Интересующий ассортимент<input name="product-interest" className={inputClass} placeholder="Декоры, модели, толщина" /></label>
          <label className="text-sm font-medium">Желаемая частота поставок<select name="delivery-frequency" className={inputClass} defaultValue=""><option value="" disabled>Выберите вариант</option><option value="one-time">Разовая поставка</option><option value="monthly">Ежемесячно</option><option value="twice-monthly">Два раза в месяц</option><option value="other">Другой график</option></select></label>
          <label className="text-sm font-medium sm:col-span-2">Комментарий<textarea name="comment" rows={4} className="mt-2 w-full rounded-xl border border-[#c9b9a5] bg-white px-4 py-3 outline-none focus:border-[#71482e]" placeholder="Удобное время для связи, условия доставки и другие пожелания" /></label>
          <div className="flex items-start gap-3 rounded-2xl border border-[#c9b9a5] bg-white/60 p-4 text-sm leading-6 sm:col-span-2"><input required id="wholesale-privacy" name="privacy-policy-acknowledgement" type="checkbox" className="mt-1 h-4 w-4 shrink-0 accent-[#71482e]" /><label htmlFor="wholesale-privacy">Я ознакомлен(а) с <button type="button" onClick={() => setLegalDocument({ title: "Политика конфиденциальности и обработки персональных данных", url: "/privacy/" })} className="font-semibold text-[#71482e] underline underline-offset-4">Политикой конфиденциальности и обработки персональных данных</button>.</label></div>
          <div className="flex items-start gap-3 rounded-2xl border border-[#c9b9a5] bg-white/60 p-4 text-sm leading-6 sm:col-span-2"><input required id="wholesale-consent" name="personal-data-consent" type="checkbox" className="mt-1 h-4 w-4 shrink-0 accent-[#71482e]" /><label htmlFor="wholesale-consent">Я отдельно даю <button type="button" onClick={() => setLegalDocument({ title: "Согласие на обработку персональных данных", url: "/personal-data-consent/" })} className="font-semibold text-[#71482e] underline underline-offset-4">согласие на обработку персональных данных</button>.</label></div>
          <div className="sm:col-span-2"><button type="submit" className="w-full rounded-full bg-[#71482e] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#573722] sm:w-auto">Отправить оптовую заявку</button><p className="mt-3 text-xs leading-5 text-[#817469]">Сайт, ассортимент, график поставок и комментарий можно заполнить по желанию.</p></div>
        </form>}
      </section>
      {legalDocument && <div className="fixed inset-0 z-60 flex items-center justify-center bg-[#2f261f]/80 p-3 sm:p-6" role="presentation"><section role="dialog" aria-modal="true" aria-label={legalDocument.title} className="flex h-[92vh] w-full max-w-[980px] flex-col overflow-hidden rounded-[2rem] bg-[#fbf8f2] shadow-[0_28px_80px_rgba(31,23,17,0.35)]"><div className="flex items-center justify-between gap-4 border-b border-[#d9cdbd] px-5 py-4 sm:px-7"><h3 className="font-semibold">{legalDocument.title}</h3><button type="button" onClick={() => setLegalDocument(null)} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#c9b9a5] text-xl" aria-label="Закрыть документ">×</button></div><iframe src={legalDocument.url} title={legalDocument.title} className="min-h-0 flex-1 bg-white" /></section></div>}
    </div>}
  </>;
}

