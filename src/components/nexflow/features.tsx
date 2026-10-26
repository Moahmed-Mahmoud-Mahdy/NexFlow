"use client";

import { motion } from "framer-motion";
import {
  ShoppingCart,
  Package,
  Users,
  BarChart3,
  Building2,
  ShieldCheck,
  Printer,
  WifiOff,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: ShoppingCart,
    title: "كاشير سريع وسهل",
    desc: "واجهة بيع بسيطة تقلل وقت انتظار العملاء وتشتغل بسلاسة على أي جهاز — تابلت أو كمبيوتر أو موبايل.",
    color: "blue" as const,
  },
  {
    icon: Package,
    title: "إدارة المخزون",
    desc: "تتبّع الكميات لحظة بلحظة، تنبيهات تلقائية لما الصنف يقل، وتحكم كامل في الأصناف والتصنيفات ووحدات القياس.",
    color: "green" as const,
  },
  {
    icon: Users,
    title: "إدارة العملاء والولاء",
    desc: "سجل كامل لعملائك، حسابات الآجل والديون، نقاط ولاء وعروض تخلي العميل يرجع تاني.",
    color: "blue" as const,
  },
  {
    icon: BarChart3,
    title: "تقارير وأرباح لحظية",
    desc: "تقارير مبيعات وأرباح يومية وشهرية وسنوية بأشكال بيانية واضحة تعرفك بأي منتج بتجيب أكتر فلوس.",
    color: "green" as const,
  },
  {
    icon: Building2,
    title: "إدارة أكثر من فرع",
    desc: "كل فروعك في شاشة واحدة — راقب أداء كل فرع وانتقل بينهم بضغطة زر من أي مكان في العالم.",
    color: "blue" as const,
  },
  {
    icon: ShieldCheck,
    title: "صلاحيات للموظفين",
    desc: "حدد مين يشوف إيه ويعدّل إيه — كل موظف له صلاحياته، وكل حركة مسجلة باسم صاحبها.",
    color: "green" as const,
  },
  {
    icon: Printer,
    title: "فواتير وطباعة حرارية",
    desc: "فواتير احترافية مع دعم الطابعات الحرارية وباركود الأصناف والفاتورة الإلكترونية.",
    color: "blue" as const,
  },
  {
    icon: WifiOff,
    title: "يشتغل بدون إنترنت",
    desc: "النت قاطع؟ مش مشكلة — كمّل بيع عادي، وأول ما يرجع النت كل البيانات تتزامن تلقائياً.",
    color: "green" as const,
  },
];

const colorMap = {
  blue: {
    iconBg: "bg-nex-blue/10 text-nex-blue-deep",
    hoverBorder: "group-hover:border-nex-blue/50",
    glow: "group-hover:shadow-nex-blue/20",
  },
  green: {
    iconBg: "bg-nex-green/10 text-emerald-600",
    hoverBorder: "group-hover:border-nex-green/60",
    glow: "group-hover:shadow-nex-green/20",
  },
};

export function Features() {
  return (
    <section id="features" className="relative scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="nex-dots-bg absolute inset-0 opacity-40" aria-hidden />
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
            className="mb-4 rounded-full border-nex-blue/40 bg-nex-blue/5 px-4 py-1.5 text-sm font-bold text-nex-blue-deep"
          >
            ⚡ مميزات النظام
          </Badge>
          <h2 className="text-3xl font-black leading-snug text-nex-navy sm:text-4xl sm:leading-snug">
            كل اللي محتاجه لإدارة محلك
            <span className="nex-gradient-text"> في مكان واحد</span>
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-500 sm:text-lg sm:leading-8">
            صممنا NexFlow عشان يكون شريكك في النمو — مش مجرد برنامج كاشير، ده
            نظام كامل بيشيل عنك هم إدارة الأعمال اليومية.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const c = colorMap[feature.color];
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className={`group rounded-3xl border-2 border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${c.hoverBorder} ${c.glow}`}
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${c.iconBg} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}
                >
                  <Icon className="h-7 w-7" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-extrabold text-nex-navy">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-500">
                  {feature.desc}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
