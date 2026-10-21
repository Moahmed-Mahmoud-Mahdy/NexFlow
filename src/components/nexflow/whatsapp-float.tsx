"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/201000000000?text=" +
  encodeURIComponent("أهلاً NexFlow 👋 محتاج مساعدة");

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 end-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-500 to-emerald-400 text-white shadow-2xl shadow-emerald-500/40 transition-transform hover:scale-110 sm:bottom-8 sm:end-8"
          aria-label="تواصل معنا على واتساب"
        >
          <MessageCircle className="h-7 w-7" aria-hidden />
          <span
            className="absolute inset-0 -z-10 animate-ping rounded-full bg-emerald-400/40"
            aria-hidden
          />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
