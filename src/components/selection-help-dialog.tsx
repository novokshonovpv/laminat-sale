"use client";

import { FormEvent, useEffect, useState } from "react";

type LegalDocument = { title: string; url: string };

export function SelectionHelpDialog() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [legalDocument, setLegalDocument] = useState<LegalDocument | null>(null);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (legalDocument) setLegalDocument(null);
      else setOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
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

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#b9a792] px-7 py-3 text-sm font-semibold text-[#60452f] hover:bg-[#eee5d7]">Помочь с выбором</button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#2f261f]/70 p-4 backdrop-blur-sm" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) closeDialog(); }}>
          <section role="dialog" aria-modal="true" aria-labelledby="selection-help-title" className="max-h-[92vh] w-full max-w-[760px] overflow-y-auto rounded-[2rem] border border-[#d3c5b4] bg-[#fbf8f2] p-6 shadow-[0_28px_80px_rgba(31,23,17,0.28)] sm:p-8">
            <div className="flex items-start justify-between gap-5">
              <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8b5e3c]">Персональный подбор</p><h2 id="selection-help-title" className="mt-2 text-3xl font-semibold tracking-[-0.04em]">Поможем выбрать SPC-ламинат</h2><p className="mt-3 max-w-xl text-sm leading-6 text-[#756a5f]">Расскажите о помещении и желаемом оттенке — менеджер подготовит подходящие варианты.</p></div>
              <button type="button" onClick={closeDialog} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#c9b9a5] text-xl text-[#60452f]" aria-label="Закрыть форму">×</button>
            </div>

            {submitted ? (
              <div className="mt-8 rounded-3xl border border-[#c9b9a5] bg-[#f4ecdf] p-6">
                <h3 className="text-xl font-semibold">Форма заполнена</h3>
                <p className="mt-3 text-sm leading-6 text-[#756a5f]">Это демонстрационная версия: введённые данные никуда не переданы. Отправка будет подключена после настройки российского обработчика персональных данных и фиксации согласий.</p>
                <button type="button" onClick={closeDialog} className="mt-5 rounded-full bg-[#71482e] px-6 py-3 text-sm font-semibold text-white">Понятно</button>
              </div>
            ) : (
              <form className="mt-7 grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
                <label className="text-sm font-medium sm:col-span-2">Имя клиента<input required name="name" autoComplete="name" className="mt-2 min-h-12 w-full rounded-xl border border-[#c9b9a5] bg-white px-4 outline-none focus:border-[#71482e]" placeholder="Как к вам обращаться" /></label>
                <label className="text-sm font-medium">Телефон<input required name="phone" type="tel" autoComplete="tel" inputMode="tel" className="mt-2 min-h-12 w-full rounded-xl border border-[#c9b9a5] bg-white px-4 outline-none focus:border-[#71482e]" placeholder="+7 (___) ___-__-__" /></label>
                <label className="text-sm font-medium">Желаемый цвет<input required name="preferred-color" className="mt-2 min-h-12 w-full rounded-xl border border-[#c9b9a5] bg-white px-4 outline-none focus:border-[#71482e]" placeholder="Например, светлый дуб" /></label>
                <label className="text-sm font-medium sm:col-span-2">Площадь объекта, м²<input required name="object-area" type="number" inputMode="decimal" min="1" max="100000" step="0.1" className="mt-2 min-h-12 w-full rounded-xl border border-[#c9b9a5] bg-white px-4 outline-none focus:border-[#71482e]" placeholder="Например, 42" /></label>
                <label className="text-sm font-medium sm:col-span-2">Прочее<textarea name="other" rows={4} className="mt-2 w-full rounded-xl border border-[#c9b9a5] bg-white px-4 py-3 outline-none focus:border-[#71482e]" placeholder="Особенности помещения, сроки, пожелания по фактуре или бюджету" /></label>

                <div className="flex items-start gap-3 rounded-2xl border border-[#c9b9a5] bg-white/60 p-4 text-sm leading-6 sm:col-span-2">
                  <input required id="privacy-policy-acknowledgement" name="privacy-policy-acknowledgement" type="checkbox" className="mt-1 h-4 w-4 shrink-0 accent-[#71482e]" />
                  <label htmlFor="privacy-policy-acknowledgement">Я ознакомлен(а) с <button type="button" onClick={() => setLegalDocument({ title: "Политика конфиденциальности и обработки персональных данных", url: "/privacy/" })} className="font-semibold text-[#71482e] underline underline-offset-4">Политикой конфиденциальности и обработки персональных данных</button>.</label>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-[#c9b9a5] bg-white/60 p-4 text-sm leading-6 sm:col-span-2">
                  <input required id="personal-data-consent" name="personal-data-consent" type="checkbox" className="mt-1 h-4 w-4 shrink-0 accent-[#71482e]" />
                  <label htmlFor="personal-data-consent">Я отдельно даю <button type="button" onClick={() => setLegalDocument({ title: "Согласие на обработку персональных данных", url: "/personal-data-consent/" })} className="font-semibold text-[#71482e] underline underline-offset-4">согласие на обработку персональных данных</button>.</label>
                </div>

                <div className="sm:col-span-2"><button type="submit" className="w-full rounded-full bg-[#71482e] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#573722] sm:w-auto">Отправить запрос</button><p className="mt-3 text-xs leading-5 text-[#817469]">Все поля, кроме «Прочее», обязательны. Сейчас форма работает в демонстрационном режиме.</p></div>
              </form>
            )}
          </section>

          {legalDocument && (
            <div className="fixed inset-0 z-60 flex items-center justify-center bg-[#2f261f]/80 p-3 sm:p-6" role="presentation">
              <section role="dialog" aria-modal="true" aria-label={legalDocument.title} className="flex h-[92vh] w-full max-w-[980px] flex-col overflow-hidden rounded-[2rem] bg-[#fbf8f2] shadow-[0_28px_80px_rgba(31,23,17,0.35)]">
                <div className="flex items-center justify-between gap-4 border-b border-[#d9cdbd] px-5 py-4 sm:px-7"><h3 className="font-semibold">{legalDocument.title}</h3><button type="button" onClick={() => setLegalDocument(null)} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#c9b9a5] text-xl" aria-label="Закрыть документ">×</button></div>
                <iframe src={legalDocument.url} title={legalDocument.title} className="min-h-0 flex-1 bg-white" />
              </section>
            </div>
          )}
        </div>
      )}
    </>
  );
}

