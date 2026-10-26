"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    q: "هل يوجد تجربة مجانية قبل الاشتراك؟",
    a: "أكيد! بنوفّر لك عرض تجريبي كامل مع مساعدتك في الإعداد خطوة بخطوة، تجرّب النظام بحرية وتشوف الفرق بنفسك قبل ما تدفع أي جنيه.",
  },
  {
    q: "هل النظام بيشتغل لو الإنترنت قطع؟",
    a: "أيوه، NexFlow بيشتغل أوفلاين بدون أي مشكلة — كمّل بيع عادي، وأول ما الإنترنت يرجع كل البيانات بتتزامن تلقائياً على السحابة.",
  },
  {
    q: "إيه أنواع المحلات اللي النظام بيخدمها؟",
    a: "NexFlow بيتناسب مع كل الأنشطة: سوبر ماركت، مطاعم وكافيهات، صيدليات، محلات ملابس وإلكترونيات، بقالات، كوزمتكس، وأي نشاط بيع تجزئة محتاج كاشير ومخزون.",
  },
  {
    q: "هل في تكلفة إضافية للإعداد أو التركيب؟",
    a: "لأ، الإعداد والتركيب والتدريب مجاناً بالكامل في كل الباقات — وفريقنا بيساعدك تدخل أصنافك وتبدأ شغل من أول يوم.",
  },
  {
    q: "هل أقدر أنقل بياناتي من النظام القديم؟",
    a: "طبعاً، فريق الدعم بيساعدك في نقل أصنافك وعملائك وبياناتك من أي نظام آخر بشكل آمن وسريع — ومجاناً في باقة مدى الحياة.",
  },
  {
    q: "إيه طرق الدفع المتاحة؟",
    a: "بنقبل فودافون كاش، إنستاباي، التحويل البنكي، والدفع كاش — وباقة مدى الحياة متاحة بالتقسيط على دفعتين لو حابب.",
  },
  {
    q: "هل الدعم الفني متوفر بالعربي؟",
    a: "أيوه، فريق الدعم مصري وبيرد عليك بالعربي عبر الواتساب والاتصال — خدمة عملاء ٢٤/٧ حتى في الأجازات ومواسم الذروة.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="nex-dots-bg absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Badge
            variant="outline"
            className="mb-4 rounded-full border-nex-blue/40 bg-nex-blue/5 px-4 py-1.5 text-sm font-bold text-nex-blue-deep"
          >
            ❓ الأسئلة الشائعة
          </Badge>
          <h2 className="text-3xl font-black leading-snug text-nex-navy sm:text-4xl sm:leading-snug">
            عندك سؤال؟
            <span className="nex-gradient-text"> عندنا الإجابة</span>
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-500">
            جمعنا أكتر الأسئلة اللي بيسألها أصحاب المحلات — ولو محتاج أي مساعدة
            تانية كلمنا في أي وقت.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12"
        >
          <Accordion type="single" collapsible className="space-y-3.5">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-2xl border-2 border-slate-100 bg-white px-5 shadow-sm transition-colors data-[state=open]:border-nex-green/50 data-[state=open]:shadow-md sm:px-6"
              >
                <AccordionTrigger className="py-4 text-start text-base font-extrabold text-nex-navy hover:no-underline sm:text-lg [&>svg]:text-nex-blue-deep">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-8 text-slate-500 sm:text-base sm:leading-8">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
