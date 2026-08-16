import { MessageCircle } from "lucide-react";
import { getCategory, getProductsByCategory } from "@/data/products";
import { buildWhatsAppLink } from "@/data/site";
import ProductCard from "./ProductCard";
import ScallopDivider from "./ScallopDivider";
import Reveal from "./Reveal";

export default function CategoryPageContent({ slug, seoParagraphs, faqs }) {
  const category = getCategory(slug);
  const items = getProductsByCategory(slug);

  return (
    <>
      <section className={`bg-gradient-to-b ${category.gradient} pt-14 pb-10 text-center px-6 relative overflow-hidden`}>
        <span className="text-7xl mb-3 inline-block animate-bob-slow select-none" aria-hidden>
          {category.emoji}
        </span>
        <h1 className="font-display text-4xl sm:text-5xl text-brown mb-3">{category.name}</h1>
        <p className="text-brown-soft max-w-xl mx-auto text-[15px] leading-relaxed">
          {category.description}
        </p>
      </section>
      <ScallopDivider color="var(--cream)" />

      <section className="max-w-6xl mx-auto px-6 py-14 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-paper py-14 sm:py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="font-display text-2xl sm:text-3xl text-brown mb-4">
              {category.name} for gifting, made to be remembered
            </h2>
            {seoParagraphs.map((p, i) => (
              <p key={i} className="text-brown-soft text-[15px] leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </Reveal>

          {faqs && faqs.length > 0 && (
            <Reveal className="mt-8">
              <h3 className="font-display text-xl text-brown mb-4">Frequently asked questions</h3>
              <div className="space-y-4">
                {faqs.map((f) => (
                  <div key={f.q} className="bg-cream-2 rounded-2xl p-5 border-2 border-dashed border-brown/15">
                    <p className="font-bold text-brown mb-1.5">{f.q}</p>
                    <p className="text-sm text-brown-soft leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <section className="bg-blush-light/60 py-14 px-6 text-center">
        <h2 className="font-display text-2xl sm:text-3xl text-brown mb-3">
          Found something you love?
        </h2>
        <p className="text-brown-soft max-w-lg mx-auto text-[15px] mb-6">
          Tap enquire on any product above, or message us directly to ask about {category.name.toLowerCase()}.
        </p>
        <a
          href={buildWhatsAppLink(`Hi Basket of Memories! I'd love to know more about your ${category.name} 🎁`)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp px-6 py-3 text-sm"
        >
          <MessageCircle size={17} /> Enquire on WhatsApp
        </a>
      </section>
    </>
  );
}
