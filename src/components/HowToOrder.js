import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/data/site";
import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Pick your favourite gift",
    desc: "Browse crochet flower pots, sippers, teddy bears and tiny gifts, and find the one that fits your memory.",
  },
  {
    n: "02",
    title: "Tap “Enquire on WhatsApp”",
    desc: "Every product has a WhatsApp button — tap it and your message is ready to send, pre-filled with the product name.",
  },
  {
    n: "03",
    title: "Confirm details with us",
    desc: "Share your name, address and any customisation (like names or colours) directly in the chat.",
  },
  {
    n: "04",
    title: "We pack & ship your gift",
    desc: "Sit back while we handmake, pack and ship your gift safely — payment is simple, all handled over WhatsApp.",
  },
];

export default function HowToOrder() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
      <Reveal className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-sm font-bold text-rose uppercase tracking-widest">Ordering is simple</span>
        <h2 className="font-display text-3xl sm:text-4xl text-brown mt-2 mb-3">
          How to <span className="stitch-underline text-rose-dark">order</span> on WhatsApp
        </h2>
        <p className="text-brown-soft text-[15px]">
          No carts, no checkouts — just a friendly chat. Here's how easy it is.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 100}>
            <div className="relative bg-paper rounded-[24px] p-6 h-full border-2 border-brown/10">
              <span className="font-display text-4xl text-blush select-none">{s.n}</span>
              <h3 className="font-display text-lg text-brown mt-2 mb-1.5">{s.title}</h3>
              <p className="text-sm text-brown-soft leading-relaxed">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="flex justify-center">
        <a
          href={buildWhatsAppLink("Hi Basket of Memories! I'd love to place an order 🎁")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp px-7 py-3.5 text-[15px]"
        >
          <MessageCircle size={18} /> Start Your Order on WhatsApp
        </a>
      </Reveal>
    </section>
  );
}
