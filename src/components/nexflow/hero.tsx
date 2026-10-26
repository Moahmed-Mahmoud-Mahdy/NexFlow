"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  PlayCircle,
  TrendingUp,
  Receipt,
  ShieldCheck,
  Headset,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const stats = [
  { value: "+٥٠٠", label: "عميل سعيد" },
  { value: "سريع وسهل", label: "للتعلم والاستخدام" },
  { value: "يعمل أوفلاين", label: "دون انقطاع" },
  { value: "٢٤/٧", label: "دعم فني متواصل" },
];

const businessTypes = [
  "سوبر ماركت",
  "مطاعم وكافيهات",
  "صيدليات",
  "محلات ملابس",
  "إلكترونيات وموبايلات",
  "بقالات وجروسيري",
  "محلات أحذية وشنط",
  "أدوات منزلية",
  "محلات حلويات",
  "كوزمتكس وعطور",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.6, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-nex-navy pt-28 pb-16 sm:pt-36 sm:pb-20"
    >
      {/* Background decorations */}
      <div className="nex-grid-bg absolute inset-0" aria-hidden />
      <div
        className="nex-pulse-glow absolute -top-32 start-1/4 h-96 w-96 rounded-full bg-nex-blue/20 blur-[120px]"
        aria-hidden
      />
      <div
        className="nex-pulse-glow absolute top-1/3 -end-24 h-[28rem] w-[28rem] rounded-full bg-nex-green/15 blur-[130px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Text content */}
          <div className="text-center lg:text-start">
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              <Badge
                variant="outline"
                className="mb-5 gap-1.5 rounded-full border-nex-green/40 bg-nex-green/10 px-4 py-1.5 text-sm font-bold text-nex-green-soft"
              >
                <TrendingUp className="h-4 w-4" aria-hidden />
                نظام نقاط البيع الأذكى في مصر 🇪🇬
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-4xl font-black leading-[1.25] text-white sm:text-5xl xl:text-6xl xl:leading-[1.2]"
            >
              نظام نقاط البيع والكاشير
              <span className="nex-shine-text"> لإدارة محلك </span>
              مع <span className="nex-gradient-text">NexFlow</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-300 sm:text-lg sm:leading-9 lg:mx-0"
            >
              نظام متكامل لإدارة المبيعات والمخزون والعملاء والتقارير يخدم المحلات والسوبر ماركت
              والمطاعم والصيدليات — راقب مبيعاتك ومخزونك وعملائك وأرباحك من مكان واحد ومن أي جهاز.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="h-14 w-full rounded-2xl bg-gradient-to-l from-nex-blue to-nex-green px-8 text-lg font-extrabold text-nex-navy shadow-xl shadow-nex-green/25 transition-transform hover:scale-[1.03] sm:w-auto"
              >
                <a href="#pricing">احجز عرض تجريبي مجانًا</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 w-full rounded-2xl border-white/25 bg-white/5 px-8 text-lg font-bold text-white backdrop-blur transition-colors hover:bg-white/15 hover:text-white sm:w-auto"
              >
                <a href="#features">
                  <PlayCircle className="me-2 h-5 w-5" aria-hidden />
                  اكتشف المميزات
                </a>
              </Button>
            </motion.div>

            {/* Trust row */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-semibold text-slate-300 lg:justify-start"
            >
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-nex-green" aria-hidden />
                بدون التزام
              </span>
              <span className="flex items-center gap-1.5">
                <Receipt className="h-4 w-4 text-nex-blue" aria-hidden />
                إعداد مجاني وسريع
              </span>
              <span className="flex items-center gap-1.5">
                <Headset className="h-4 w-4 text-nex-green" aria-hidden />
                دعم عربي ٢٤/٧
              </span>
            </motion.div>
          </div>

          {/* Logo visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-md lg:max-w-lg"
          >
            <div
              className="absolute inset-0 -z-10 scale-125 rounded-full bg-gradient-to-tr from-nex-blue/30 via-transparent to-nex-green/30 blur-3xl"
              aria-hidden
            />
            <div className="nex-float relative">
              <Image
                src="/nexflow-logo-clean.png"
                alt="NexFlow — نظام إدارة نقاط البيع"
                width={520}
                height={600}
                priority
                className="mx-auto w-full max-w-[300px] drop-shadow-[0_25px_60px_rgba(46,155,240,0.35)] sm:max-w-[380px] lg:max-w-[430px]"
              />
            </div>

            {/* Floating mini cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute top-6 -start-2 hidden rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-xl sm:block"
            >
              <p className="flex items-center gap-2 text-xs font-bold text-slate-200">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-nex-green/20">
                  <TrendingUp className="h-4 w-4 text-nex-green" aria-hidden />
                </span>
                مبيعات النهارده
              </p>
              <p className="mt-1 ps-10 text-lg font-black text-white">
                ٤٨,٢٥٠ <span className="text-xs font-bold text-nex-green">ج.م</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="absolute -bottom-2 -end-2 hidden rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-xl sm:block"
            >
              <p className="flex items-center gap-2 text-xs font-bold text-slate-200">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-nex-blue/20">
                  <Receipt className="h-4 w-4 text-nex-blue" aria-hidden />
                </span>
                فاتورة جديدة
              </p>
              <p className="mt-1 ps-10 text-sm font-black text-white">
                طاولة ٧ — ٣٥٠ ج.م ✅
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.dl
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 grid grid-cols-2 gap-4 sm:mt-20 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center backdrop-blur"
            >
              <dd className="text-3xl font-black text-white sm:text-4xl">
                <span className="nex-gradient-text">{stat.value}</span>
              </dd>
              <dt className="mt-1.5 text-sm font-semibold text-slate-300">
                {stat.label}
              </dt>
            </div>
          ))}
        </motion.dl>

        {/* Scroll hint */}
        <div className="mt-12 flex justify-center">
          <a
            href="#features"
            aria-label="انتقل للمميزات"
            className="flex h-11 w-11 animate-bounce items-center justify-center rounded-full border border-white/20 text-slate-300 transition-colors hover:text-white"
          >
            <ChevronDown className="h-5 w-5" aria-hidden />
          </a>
        </div>
      </div>

      {/* Business types marquee */}
      <div className="relative mt-14 border-y border-white/10 bg-white/[0.03] py-4 sm:mt-16">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_left,transparent,black_10%,black_90%,transparent)]">
          <div className="nex-marquee-track flex w-max shrink-0 items-center">
            {[...businessTypes, ...businessTypes].map((type, i) => (
              <span
                key={`${type}-${i}`}
                className="mx-5 flex items-center gap-5 whitespace-nowrap text-sm font-bold text-slate-400 sm:text-base"
              >
                {type}
                <span className="h-1.5 w-1.5 rounded-full bg-nex-green/60" aria-hidden />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
