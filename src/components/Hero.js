import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { buildWhatsAppLink } from "@/data/site";
import homeImage from "@/components/icons/home.jpg";
import ScallopDivider from "./ScallopDivider";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f3e8df] via-[#f7f2ee] to-[#f9f5f1] pt-14 pb-8 sm:pt-20 sm:pb-14">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute -left-12 top-10 h-56 w-56 rounded-full bg-[#f0d9c6]/60 blur-3xl" />
        <div className="absolute right-0 top-16 h-72 w-72 rounded-full bg-[#dfe7d8]/60 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col items-start text-left gap-6">
            <span className="fade-up inline-flex items-center gap-1.5 bg-white/75 backdrop-blur px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-rose-dark border border-[#c8a18a]/30 shadow-sm">
              <Sparkles size={14} /> Handmade gifts, made for two
            </span>

            <h1
              className="fade-up font-display text-4xl sm:text-6xl leading-[1.08] text-brown max-w-xl"
              style={{ animationDelay: "0.08s" }}
            >
              Little gifts that hold <span className="stitch-underline text-rose-dark">big memories</span>
            </h1>

            <p
              className="fade-up text-brown-soft text-base sm:text-lg max-w-xl leading-relaxed"
              style={{ animationDelay: "0.16s" }}
            >
              Basket of Memories creates thoughtful, handcrafted keepsakes for couples, birthdays, and meaningful moments — from crochet flower pots to premium gifting essentials with a warm, refined look.
            </p>

            <div className="fade-up flex flex-col sm:flex-row items-center gap-3 mt-1" style={{ animationDelay: "0.24s" }}>
              <Link href="/products" className="btn-primary px-7 py-3.5 text-[15px]">
                Shop All Gifts <ArrowRight size={17} />
              </Link>
              <a
                href={buildWhatsAppLink("Hi Basket of Memories! I'd love to know more about your gifts 🎁")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp px-7 py-3.5 text-[15px]"
              >
                <MessageCircle size={18} /> Enquire on WhatsApp
              </a>
            </div>

            <p className="fade-up text-xs text-brown-soft/70" style={{ animationDelay: "0.3s" }}>
              📦 Ships across India &nbsp;•&nbsp; 🧵 100% handmade &nbsp;•&nbsp; 💬 Order directly on WhatsApp
            </p>
          </div>

          <div className="fade-up relative" style={{ animationDelay: "0.2s" }}>
            <div className="overflow-hidden rounded-[32px] border border-[#d5cbc3] bg-white/60 p-3 shadow-[0_24px_50px_-30px_rgba(47,38,35,0.45)]">
              <div className="rounded-[24px] overflow-hidden bg-gradient-to-br from-[#f4e8de] via-[#f9f3ef] to-[#e9efe5]">
                <Image
                  src={homeImage}
                  alt="Handmade gift arrangement"
                  className="h-[430px] w-full object-cover"
                  priority
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-white/70 bg-white/80 p-3 shadow-lg backdrop-blur-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-rose-dark">Curated gifting</p>
              <p className="mt-1 font-display text-xl text-brown">Thoughtful & memorable</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 sm:mt-14 -mb-1">
        <ScallopDivider color="var(--cream)" />
      </div>
    </section>
  );
}
