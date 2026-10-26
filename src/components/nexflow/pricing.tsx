"use client";

import { motion } from "framer-motion";
import { Check, Crown, Star, Infinity as InfinityIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { waLink, WA_MESSAGES } from "@/lib/contact";

const WHATSAPP_LINK = waLink(WA_MESSAGES.pricing);

const plans = [
  {
    id: "monthly",
    icon: Star,
    name: "الباقة الشهرية",
    tagline: "مثالية للبداية وتجربة النظام",
    price: "٦٠٠",
    currency: "ج.م",
    period: "/ شهرياً",
    highlight: false,
    badge: null as string | null,
    save: null as string | null,
    cta: "اشترك شهرياً",
    features: [
      "كل مميزات النظام بدون استثناء",
      "كاشير + مخزون + عملاء + تقارير",
      "مستخدمين بلا حدود",
      "نسخ احتياطي سحابي تلقائي",
      "دعم فني عبر واتساب",
      "تحديثات مجانية طوال الاشتراك",
    ],
  },
  {
    id: "yearly",
    icon: Crown,
    name: "الباقة السنوية",
    tagline: "الأذكى لصاحب المحل الشاطر",
    price: "٦٬٠٠٠",
    currency: "ج.م",
    period: "/ سنوياً",
    highlight: true,
    badge: "الأكثر شيوعاً 🔥",
    save: "وفّر ١٬٢٠٠ ج.م مقارنة بالاشتراك الشهري",
    cta: "اشترك سنوياً",
    features: [
      "كل مميزات الباقة الشهرية",
      "إدارة أكثر من فرع من مكان واحد",
      "تطبيق الموبايل للمتابعة اللحظية",
      "تقارير متقدمة للأرباح والخسائر",
      "أولوية في الدعم الفني",
      "إعداد وتركيب مجاني بالكامل",
    ],
  },
  {
    id: "lifetime",
    icon: InfinityIcon,
    name: "مدى الحياة",
    tagline: "دفعة واحدة وملك النظام للأبد",
    price: "١٢٬٠٠٠",
    currency: "ج.م",
    period: "/ مرة واحدة",
    highlight: false,
    badge: "أعلى قيمة 💎",
    save: "دفعة واحدة للأبد — بدون اشتراك",
    cta: "امتلك النظام",
    features: [
      "كل مميزات النظام مدى الحياة",
      "لا اشتراكات ولا تجديد سنوي",
      "كل التحديثات المستقبلية مجاناً",
      "دعم فني مدى الحياة",
      "نقل بياناتك من أي نظام تاني",
      "تدريب كامل لفريق العمل",
    ],
  },
];

const paymentNote = "💳 طرق دفع مرنة: فودافون كاش — إنستاباي — تحويل بنكي — كاش | باقة مدى الحياة بتتقسط على دفعتين لو حابب";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative scroll-mt-20 overflow-hidden bg-nex-navy py-20 sm:py-28"
    >
      {/* Background glows */}
      <div
        className="absolute -top-24 start-1/3 h-96 w-96 rounded-full bg-nex-blue/15 blur-[130px]"
        aria-hidden
      />
      <div
        className="absolute bottom-0 -end-20 h-96 w-96 rounded-full bg-nex-green/10 blur-[130px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <Badge
            variant="outline"
            className="mb-4 rounded-full border-nex-green/40 bg-nex-green/10 px-4 py-1.5 text-sm font-bold text-nex-green-soft"
          >
            💰 أسعار الاشتراك
          </Badge>
          <h2 className="text-3xl font-black leading-snug text-white sm:text-4xl sm:leading-snug">
            أسعار واضحة
            <span className="nex-gradient-text"> من غير مفاجآت</span>
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
            اختار الباقة اللي تناسبك وابدأ من اليوم — وكل الباقات فيها كل
            المميزات الأساسية، من غير رسوم خفية.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <motion.article
                key={plan.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className={`relative flex flex-col rounded-3xl p-px transition-transform duration-300 hover:-translate-y-2 ${
                  plan.highlight
                    ? "bg-gradient-to-b from-nex-blue via-nex-cyan to-nex-green shadow-2xl shadow-nex-blue/25 lg:scale-[1.05]"
                    : "bg-white/10"
                }`}
              >
                {plan.highlight && (
                  <div
                    className="absolute -top-4 start-1/2 z-10 -translate-x-1/2 rounded-full bg-gradient-to-l from-nex-blue to-nex-green px-5 py-1.5 text-sm font-black text-nex-navy shadow-lg"
                  >
                    {plan.badge}
                  </div>
                )}

                <div
                  className={`flex h-full flex-col rounded-3xl p-7 sm:p-8 ${
                    plan.highlight
                      ? "bg-nex-navy-2"
                      : "bg-white/[0.06] backdrop-blur"
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                        plan.highlight
                          ? "bg-gradient-to-tr from-nex-blue to-nex-green text-nex-navy"
                          : "bg-white/10 text-nex-green-soft"
                      }`}
                    >
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-xl font-black text-white">
                        {plan.name}
                      </h3>
                      <p className="text-xs font-semibold text-slate-400">
                        {plan.tagline}
                      </p>
                    </div>
                  </div>

                  {!plan.highlight && plan.badge && (
                    <span className="mt-4 w-fit rounded-full border border-nex-green/30 bg-nex-green/10 px-3 py-1 text-xs font-bold text-nex-green-soft">
                      {plan.badge}
                    </span>
                  )}

                  {/* Price */}
                  <div className="mt-6 flex items-end gap-2">
                    <span
                      className={`text-5xl font-black leading-none sm:text-6xl ${
                        plan.highlight ? "nex-gradient-text" : "text-white"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span className="pb-1.5 text-sm font-bold text-slate-300">
                      {plan.currency}
                      <span className="block text-xs font-semibold text-slate-400">
                        {plan.period}
                      </span>
                    </span>
                  </div>

                  {plan.save && (
                    <p
                      className={`mt-3 rounded-xl px-3 py-2 text-center text-xs font-bold ${
                        plan.highlight
                          ? "bg-nex-green/15 text-nex-green-soft"
                          : "bg-white/5 text-slate-300"
                      }`}
                    >
                      {plan.save}
                    </p>
                  )}

                  {/* Divider */}
                  <div className="my-6 h-px bg-gradient-to-l from-transparent via-white/15 to-transparent" />

                  {/* Features */}
                  <ul className="flex-1 space-y-3.5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm font-semibold text-slate-200"
                      >
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            plan.highlight
                              ? "bg-nex-green/20 text-nex-green"
                              : "bg-nex-blue/15 text-nex-blue"
                          }`}
                        >
                          <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    asChild
                    size="lg"
                    className={`mt-8 h-13 w-full rounded-2xl text-base font-extrabold transition-transform hover:scale-[1.02] ${
                      plan.highlight
                        ? "bg-gradient-to-l from-nex-blue to-nex-green text-nex-navy shadow-lg shadow-nex-green/30"
                        : "border border-white/20 bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      {plan.cta}
                    </a>
                  </Button>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Payment note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center text-sm font-bold text-slate-400 sm:text-base"
        >
          {paymentNote}
        </motion.p>
      </div>
    </section>
  );
}
