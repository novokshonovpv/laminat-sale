import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "ЛАМИНАТ.СЕЙЛ — интернет-магазин ламината", template: "%s — ЛАМИНАТ.СЕЙЛ" },
  description: "SPC-ламинат напрямую с завода. Выгодные цены и наличие на складе в Смоленске",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru" data-scroll-behavior="smooth"><body><SiteHeader /><main>{children}</main><SiteFooter /></body></html>;
}
