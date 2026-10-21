import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "NexFlow | نظام إدارة نقاط البيع والكاشير الأذكى في مصر",
  description:
    "NexFlow نظام POS متكامل لإدارة المبيعات والمخزون والعملاء والتقارير للمحلات والسوبر ماركت والمطاعم والصيدليات. إدارة أعمالك بنموذج ذكي — اشترك شهرياً بـ600ج أو سنوياً بـ6000ج أو امتلك النظام مدى الحياة بـ12000ج.",
  keywords: [
    "NexFlow",
    "نظام كاشير",
    "نقاط بيع",
    "POS",
    "برنامج محاسبة",
    "إدارة مخزون",
    "سوبر ماركت",
    "مطاعم",
  ],
  authors: [{ name: "NexFlow" }],
  icons: {
    icon: "/nexflow-icon.png",
    apple: "/nexflow-icon.png",
  },
  openGraph: {
    title: "NexFlow | إدارة أعمالك بنموذج ذكي",
    description:
      "نظام نقاط بيع متكامل: كاشير، مخزون، عملاء، تقارير وفروع — كل ده في مكان واحد.",
    siteName: "NexFlow",
    type: "website",
    locale: "ar_EG",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A1930",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${cairo.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
