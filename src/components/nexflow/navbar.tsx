"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#features", label: "المميزات" },
  { href: "#pricing", label: "الأسعار" },
  { href: "#faq", label: "الأسئلة الشائعة" },
  { href: "#contact", label: "تواصل معنا" },
];

function scrollToSection(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  window.history.pushState(null, "", href);
  if (href === "#home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    scrollToSection(href);
  }
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-nex-navy/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8"
        aria-label="التنقل الرئيسي"
      >
        {/* Logo */}
        <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center gap-2.5">
          <Image
            src="/nexflow-logo.png"
            alt="شعار NexFlow"
            width={44}
            height={44}
            className="h-10 w-10 rounded-xl sm:h-11 sm:w-11"
            priority
          />
          <span className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
            NEX<span className="nex-gradient-text">FLOW</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button
            asChild
            size="lg"
            className="rounded-xl bg-gradient-to-l from-nex-blue to-nex-green px-6 font-bold text-nex-navy shadow-lg shadow-nex-green/25 transition-transform hover:scale-[1.03]"
          >
            <a href="#pricing" onClick={(e) => handleNavClick(e, "#pricing")}>
              <Sparkles className="me-1.5 h-4 w-4" aria-hidden />
              ابدأ دلوقتي
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white lg:hidden"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-white/10 bg-nex-navy/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="space-y-1 px-4 py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(false);
                      window.setTimeout(() => scrollToSection(link.href), 120);
                      window.history.pushState(null, "", link.href);
                    }}
                    className="block rounded-xl px-4 py-3 text-base font-semibold text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Button
                  asChild
                  className="w-full rounded-xl bg-gradient-to-l from-nex-blue to-nex-green font-bold text-nex-navy"
                >
                  <a
                    href="#pricing"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(false);
                      window.setTimeout(() => scrollToSection("#pricing"), 120);
                      window.history.pushState(null, "", "#pricing");
                    }}
                  >
                    ابدأ دلوقتي
                  </a>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
