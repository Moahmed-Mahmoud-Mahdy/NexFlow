/**
 * NexFlow contact constants — رقم التواصل الرسمي مركزي هنا
 * لو الرقم اتغير، غيّره من الملف ده بس
 */

/** الرقم بصيغة دولية بدون + (لروابط واتساب واتصال) */
export const PHONE_INTL = "201101891846";

/** الرقم اللي بيظهر للمستخدم */
export const PHONE_DISPLAY = "0110 189 1846";

/** الرقم بصيغة دولية للعرض (بدون الصفر الأول) */
export const PHONE_INTL_DISPLAY = "110 189 1846";

/** الرقم بصيغة tel: */
export const PHONE_TEL = `+${PHONE_INTL}`;

/** رابط واتساب مع رسالة جاهزة */
export const waLink = (message: string) =>
  `https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(message)}`;

/** رسائل واتساب الجاهزة حسب المكان */
export const WA_MESSAGES = {
  general: "أهلاً NexFlow 👋 محتاج مساعدة",
  pricing:
    "أهلاً NexFlow 👋 عايز أعرف تفاصيل الاشتراك وأبدأ تجربة النظام",
  start: "أهلاً NexFlow 👋 عايز أبدأ تجربة النظام",
};
