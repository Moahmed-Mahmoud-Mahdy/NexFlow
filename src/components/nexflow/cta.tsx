"use client";

import { motion } from "framer-motion";
import { MessageCircle, PhoneCall, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink, WA_MESSAGES, PHONE_TEL, PHONE_DISPLAY } from "@/lib/contact";

const WHATSAPP_LINK = waLink(WA_MESSAGES.start);

export function Cta() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden bg-gradient-to-l from-nex-blue-deep via-nex-navy to-nex-navy py-20 sm:py-24"
    >
      <div
        className="nex-pulse-glow absolute -top-20 start-1/4 h-72 w-72 rounded-full bg-nex-green/20 blur-[110px]"
        aria-hidden
      />
      <div
        className="nex-pulse-glow absolute -bottom-24 end-1/4 h-72 w-72 rounded-full bg-nex-blue/25 blur-[110px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-tr from-nex-blue to-nex-green shadow-2xl shadow-nex-green/30"
        >
          <Rocket className="h-10 w-10 text-nex-navy" aria-hidden />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 text-3xl font-black leading-snug text-white sm:text-4xl sm:leading-snug"
        >
          جاهز ترفع محلك للمستوى اللي بعده؟ 🚀
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
        >
          كلمنا دلوقتي على واتساب، وهنظبطلك عرض تجريبي كامل للنظام على بياناتك —
          من غير أي التزام. جرب الفرق بين NexFlow والنظام القديم بنفسك.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="h-14 w-full rounded-2xl bg-gradient-to-l from-nex-blue to-nex-green px-8 text-lg font-extrabold text-nex-navy shadow-xl shadow-nex-green/25 transition-transform hover:scale-[1.03] sm:w-auto"
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="me-2 h-5 w-5" aria-hidden />
              كلمنا واتساب
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-14 w-full rounded-2xl border-white/25 bg-white/5 px-8 text-lg font-bold text-white backdrop-blur transition-colors hover:bg-white/15 hover:text-white sm:w-auto"
          >
            <a href={`tel:${PHONE_TEL}`}>
              <PhoneCall className="me-2 h-5 w-5" aria-hidden />
              <span dir="ltr">{PHONE_DISPLAY}</span>
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
