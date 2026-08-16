import { Star } from "lucide-react";
import Reveal from "./Reveal";

const reviews = [
  {
    name: "Ananya & Rohan",
    text: "Got the Rose Crochet Flower Pot for our anniversary — it still sits on his study table. Ordering on WhatsApp was so quick and personal!",
    rot: "-rotate-2",
  },
  {
    name: "Priya S.",
    text: "The Cutie Bear Sipper is the most adorable thing I own now. My sister loved it as a birthday surprise. Packaging was so cute too!",
    rot: "rotate-1",
  },
  {
    name: "Karan M.",
    text: "Ordered the Mr. & Mrs. Teddy Set for my girlfriend — she cried happy tears. Quality felt premium for the price, highly recommend!",
    rot: "-rotate-1",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-blush-light/60 py-16 sm:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-bold text-rose uppercase tracking-widest">Loved by gifters</span>
          <h2 className="font-display text-3xl sm:text-4xl text-brown mt-2">
            Notes from our <span className="stitch-underline text-rose-dark">basket family</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 100}>
              <div className={`bg-paper rounded-2xl p-6 shadow-[0_10px_28px_-14px_rgba(92,68,51,0.35)] ${r.rot} hover:rotate-0 transition-transform duration-300`}>
                <div className="flex gap-0.5 text-butter mb-3" aria-hidden>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={15} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-sm text-brown-soft leading-relaxed mb-4">“{r.text}”</p>
                <p className="font-display text-brown">{r.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
