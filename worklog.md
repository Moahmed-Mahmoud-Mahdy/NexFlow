---
Task ID: 1
Agent: Z.ai Code (main)
Task: Build Arabic RTL landing page for NexFlow POS (logo colors: light green / blue / white on navy) with subscription pricing (600 EGP monthly, 6000 EGP yearly, 12000 EGP lifetime)

Work Log:
- Copied uploaded logo files to public/ as nexflow-logo.png and nexflow-icon.png
- Updated src/app/layout.tsx: lang="ar" dir="rtl", Cairo Arabic font via next/font, NexFlow metadata + logo favicon
- Updated src/app/globals.css: added brand theme colors (nex-navy #0a1930, nex-blue #2e9bf0, nex-green #4ade80, cyan variants), custom animations (float, pulse-glow, shine, marquee), grid/dots backgrounds, custom scrollbar
- Created src/components/nexflow/navbar.tsx: fixed navbar (transparent → navy blur on scroll), desktop links + mobile hamburger menu with manual smooth-scroll handlers (fix for scroll cancel caused by menu collapse animation)
- Created src/components/nexflow/hero.tsx: dark navy hero with grid pattern, glowing orbs, floating logo with mini-cards (مبيعات اليوم / فاتورة جديدة), stats row, business-types marquee
- Created src/components/nexflow/features.tsx: 8 feature cards (كاشير، مخزون، عملاء، تقارير، فروع، صلاحيات، طباعة، أوفلاين) + mobile app strip
- Created src/components/nexflow/pricing.tsx: 3 pricing cards — شهري 600ج، سنوي 6000ج (highlighted "الأكثر شيوعاً", saves 1200ج), مدى الحياة 12000ج — with WhatsApp CTA links + payment methods note
- Created src/components/nexflow/faq.tsx: 7-question shadcn accordion
- Created src/components/nexflow/cta.tsx: final CTA with WhatsApp + phone buttons
- Created src/components/nexflow/footer.tsx: brand, quick links, contact info, copyright (mt-auto sticky footer)
- Created src/components/nexflow/whatsapp-float.tsx: floating WhatsApp button (appears after 300px scroll)
- Assembled all sections in src/app/page.tsx (min-h-screen flex-col for sticky footer)
- Added scroll-mt-20 to sections to prevent fixed navbar overlap
- Verified with ESLint (clean), dev.log (no errors), and Agent Browser end-to-end: desktop 1280px + mobile 375px renders, navbar/mobile-menu navigation to #pricing & #faq works (scroll verified), FAQ accordion expands, 6 WhatsApp links present, footer sticks to bottom, zero console/page errors

Stage Summary:
- Complete Arabic RTL landing page at src/app/page.tsx using 8 components in src/components/nexflow/
- Brand colors from logo implemented as Tailwind theme tokens (bg-nex-navy, nex-gradient-text etc.)
- Pricing: 600 شهري / 6000 سنوي / 12000 مدى الحياة (all verified rendering in browser)
- Placeholder contact: phone/WhatsApp 201000000000 & info@nexflow.app — user should replace with real numbers
