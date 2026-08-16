import ProductsExplorer from "@/components/ProductsExplorer";
import ScallopDivider from "@/components/ScallopDivider";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/data/site";

export const metadata = {
  title: "Shop All Gifts — Crochet Flower Pots, Sippers, Teddy Bears & Tiny Gifts",
  description:
    "Browse Basket of Memories's full collection of handmade gifts — crochet flower pots, cute tumblers & sippers, teddy bears and tiny girly gifts. Perfect for couples. Enquire instantly on WhatsApp.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-blush-light to-cream pt-14 pb-10 text-center px-6">
        <span className="text-sm font-bold text-rose uppercase tracking-widest">Full Collection</span>
        <h1 className="font-display text-4xl sm:text-5xl text-brown mt-2 mb-4">
          Shop All <span className="stitch-underline text-rose-dark">Gifts</span>
        </h1>
        <p className="text-brown-soft max-w-xl mx-auto text-[15px] leading-relaxed">
          From hand-crocheted flower pots to cuddly teddy bears and cute sippers — every gift here
          is made to turn an ordinary day into a memory. Tap any product to enquire directly on
          WhatsApp.
        </p>
      </section>
      <ScallopDivider color="var(--cream)" />

      <section className="max-w-6xl mx-auto px-6 py-14 sm:py-16">
        <ProductsExplorer />
      </section>

      <section className="bg-sage-light/50 py-14 px-6 text-center">
        <h2 className="font-display text-2xl sm:text-3xl text-brown mb-3">
          Can't decide what to gift?
        </h2>
        <p className="text-brown-soft max-w-lg mx-auto text-[15px] mb-6">
          Tell us who it's for and the occasion — we'll help you pick the perfect little gift over
          WhatsApp.
        </p>
        <a
          href={buildWhatsAppLink("Hi Basket of Memories! I need help choosing a gift 🎁 Can you help?")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp px-6 py-3 text-sm"
        >
          <MessageCircle size={17} /> Ask Us on WhatsApp
        </a>
      </section>
    </>
  );
}
