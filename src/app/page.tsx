import { Navbar } from "@/components/nexflow/navbar";
import { Hero } from "@/components/nexflow/hero";
import { Features } from "@/components/nexflow/features";
import { Pricing } from "@/components/nexflow/pricing";
import { Faq } from "@/components/nexflow/faq";
import { Cta } from "@/components/nexflow/cta";
import { Footer } from "@/components/nexflow/footer";
import { WhatsAppFloat } from "@/components/nexflow/whatsapp-float";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-nex-navy">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
