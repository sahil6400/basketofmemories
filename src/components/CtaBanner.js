import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/data/site";
import ScallopDivider from "./ScallopDivider";
import Reveal from "./Reveal";

export default function CtaBanner() {
  return (
    <section className="relative">
      <ScallopDivider color="var(--rose)" flip />
      <div className="bg-rose relative overflow-hidden py-14 sm:py-16 text-center px-6">
        <span className="hidden sm:inline-block absolute top-8 left-[8%] text-3xl animate-bob select-none opacity-90" aria-hidden>🎁</span>
        <span className="hidden sm:inline-block absolute bottom-8 right-[10%] text-3xl animate-bob-slow select-none opacity-90" aria-hidden>💐</span>
        <Reveal className="max-w-xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl text-white mb-3">
            Ready to gift a memory? 🧺
          </h2>
          <p className="text-white/90 text-[15px] mb-6">
            Message us on WhatsApp right now — we'll help you pick the cutest gift for the moment.
          </p>
          <a
            href={buildWhatsAppLink("Hi Basket of Memories! I'd love to know more about your gifts 🎁")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp px-7 py-3.5 text-[15px] !shadow-[0_10px_24px_-8px_rgba(0,0,0,0.35)]"
          >
            <MessageCircle size={18} /> Chat With Us Now
          </a>
        </Reveal>
      </div>
      <ScallopDivider color="var(--rose)" />
    </section>
  );
}
