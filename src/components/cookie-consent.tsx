"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "laminat-sale-cookie-preferences";
const POLICY_VERSION = "2026-09-03";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    let hasCurrentChoice = false;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      hasCurrentChoice = Boolean(stored && JSON.parse(stored).version === POLICY_VERSION);
    } catch {}

    const timer = window.setTimeout(() => {
      setSaved(hasCurrentChoice);
      setVisible(!hasCurrentChoice);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  function saveChoice() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: POLICY_VERSION, essential: true, optional: false, savedAt: new Date().toISOString() }));
    } catch {
      // The user's choice applies to the current page even if storage is unavailable.
    }
    setSaved(true);
    setVisible(false);
  }

  if (!visible) {
    return saved ? <button type="button" onClick={() => setVisible(true)} className="fixed bottom-3 left-3 z-40 rounded-full border border-[#c9b9a5] bg-[#fbf8f2]/95 px-4 py-2 text-xs font-semibold text-[#60452f] shadow-md backdrop-blur-sm">Настройки cookie</button> : null;
  }

  return (
    <aside role="dialog" aria-label="Настройки cookie" className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-3xl rounded-3xl border border-[#c9b9a5] bg-[#fbf8f2] p-5 text-[#3c3025] shadow-[0_22px_70px_rgba(31,23,17,0.28)] sm:bottom-5 sm:p-6">
      <h2 className="text-xl font-semibold">Cookie и локальное хранилище</h2>
      <p className="mt-2 text-sm leading-6 text-[#756a5f]">Мы используем необходимое локальное хранилище для корзины и сохранения вашего выбора. Аналитические и рекламные cookie сейчас не подключены. Подробнее — в <Link href="/cookies" className="font-semibold text-[#71482e] underline underline-offset-4">Положении о cookie</Link>.</p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center"><button type="button" onClick={saveChoice} className="rounded-full bg-[#71482e] px-5 py-3 text-sm font-semibold text-white">Продолжить с необходимыми</button><Link href="/cookies" className="px-2 py-2 text-sm font-semibold text-[#71482e] underline underline-offset-4">Посмотреть подробности</Link></div>
    </aside>
  );
}

