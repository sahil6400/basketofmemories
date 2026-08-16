import { Heart, Package, Sparkle, Gift } from "lucide-react";
import Reveal from "./Reveal";

const points = [
  {
    icon: Heart,
    title: "Made with love, by hand",
    desc: "Every crochet flower, teddy and charm is handmade in small batches — no two are exactly the same.",
  },
  {
    icon: Gift,
    title: "Gifting made simple",
    desc: "Just message us the product on WhatsApp with your name & address — we'll pack it up and ship it out.",
  },
  {
    icon: Sparkle,
    title: "Cute meets affordable",
    desc: "Adorable gifts starting under ₹200 — perfect for surprises, anniversaries, or just because.",
  },
  {
    icon: Package,
    title: "Ships across India",
    desc: "Safely packed hampers that travel well, so your gift reaches them looking just as cute as in the pictures.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-sage-light/50 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-bold text-sage-dark uppercase tracking-widest" style={{ color: "#5f7a4a" }}>
            Why Basket of Memories
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-brown mt-2">
            Gifting, the <span className="stitch-underline text-rose-dark">cozy</span> way
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="bg-paper rounded-[24px] p-6 h-full text-center border-2 border-dashed border-brown/15 hover:border-rose/50 transition-colors">
                <div className="w-14 h-14 mx-auto rounded-full bg-blush-light flex items-center justify-center mb-4 text-rose-dark">
                  <p.icon size={24} strokeWidth={2.1} />
                </div>
                <h3 className="font-display text-lg text-brown mb-1.5">{p.title}</h3>
                <p className="text-sm text-brown-soft leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
