import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/products";
import Reveal from "./Reveal";

export default function CategoryGrid() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
      <Reveal className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-sm font-bold text-rose uppercase tracking-widest">What we weave</span>
        <h2 className="font-display text-3xl sm:text-4xl text-brown mt-2 mb-3">
          Shop by <span className="stitch-underline text-rose-dark">category</span>
        </h2>
        <p className="text-brown-soft text-[15px]">
          Every piece is handmade in small batches — pick a basket and find your perfect gift.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-6">
        {categories.map((cat, i) => (
          <Reveal key={cat.slug} delay={i * 90}>
            <Link
              href={`/products/${cat.slug}`}
              className={`group relative flex items-center gap-5 rounded-[28px] p-3 overflow-hidden bg-gradient-to-br ${cat.gradient} border-2 border-white/60 transition-transform duration-400 hover:-translate-y-1.5 hover:shadow-[0_20px_38px_-16px_rgba(92,68,51,0.35)]`}
            >
              <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-[22px] border border-white/70 shadow-sm">
                <img
                  src={typeof cat.image === "string" ? cat.image : cat.image?.src}
                  alt={cat.name}
                  className="h-full w-full object-cover transition-transform duration-400 group-hover:scale-105"
                />
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-xl sm:text-2xl text-brown mb-1">{cat.name}</h3>
                <p className="text-brown-soft text-sm mb-2 leading-snug">{cat.tagline}</p>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-rose-dark">
                  Explore <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
