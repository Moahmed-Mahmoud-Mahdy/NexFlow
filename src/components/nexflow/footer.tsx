"use client";

import Image from "next/image";
import { MapPin, MessageCircle, TrendingUp } from "lucide-react";
import { waLink, WA_MESSAGES, PHONE_INTL_DISPLAY } from "@/lib/contact";

const quickLinks = [
  { href: "#features", label: "المميزات" },
  { href: "#pricing", label: "الأسعار" },
  { href: "#faq", label: "الأسئلة الشائعة" },
  { href: "#home", label: "الرئيسية" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-nex-navy text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <Image
                src="/nexflow-logo.png"
                alt="شعار NexFlow"
                width={48}
                height={48}
                className="h-12 w-12 rounded-xl"
              />
              <span className="text-2xl font-extrabold text-white">
                NEX<span className="nex-gradient-text">FLOW</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-7 text-slate-400">
              نظام إدارة نقاط البيع والكاشير الأذكى في مصر — إدارة أعمالك
              بنموذج ذكي: مبيعات، مخزون، عملاء وتقارير في مكان واحد.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="روابط سريعة">
            <h3 className="text-base font-extrabold text-white">روابط سريعة</h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-semibold text-slate-400 transition-colors hover:text-nex-green-soft"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-base font-extrabold text-white">تواصل معنا</h3>
            <ul className="mt-4 space-y-3 text-sm font-semibold">
              <li>
                <a
                  href={waLink(WA_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-slate-400 transition-colors hover:text-nex-green-soft"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-nex-green/10 text-nex-green">
                    <MessageCircle className="h-4 w-4" aria-hidden />
                  </span>
                  <span dir="ltr">+20 {PHONE_INTL_DISPLAY}</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-300">
                  <MapPin className="h-4 w-4" aria-hidden />
                </span>
                القاهرة، مصر 🇪🇬
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-start">
          <p className="text-xs font-semibold text-slate-500 sm:text-sm">
            © {new Date().getFullYear()} NexFlow — جميع الحقوق محفوظة.
          </p>
          <p className="flex items-center gap-1.5 text-xs font-bold text-slate-400 sm:text-sm">
            <TrendingUp className="h-4 w-4 text-nex-green" aria-hidden />
            <span>
              ذكاء مصري ١٠٠٪… بيخلي
              <span className="nex-gradient-text"> أرباحك تتكلم</span> 📈
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
