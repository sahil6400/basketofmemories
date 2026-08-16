import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";

export default function FeaturedProducts() {
  const featured = products.filter((p) => p.badge === "Bestseller" || p.badge === "Couple's Pick").slice(0, 8);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
      <Reveal className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-sm font-bold text-rose uppercase tracking-widest">Fan favourites</span>
        <h2 className="font-display text-3xl sm:text-4xl text-brown mt-2 mb-3">
          Our most <span className="stitch-underline text-rose-dark">gifted</span> picks
        </h2>
        <p className="text-brown-soft text-[15px]">The pieces couples keep coming back to reorder.</p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featured.map((product, i) => (
          <Reveal key={product.id} delay={(i % 4) * 80}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>

      <Reveal className="flex justify-center mt-10">
        <Link href="/products" className="btn-primary px-7 py-3.5 text-[15px]">
          View All Gifts <ArrowRight size={17} />
        </Link>
      </Reveal>
    </section>
  );
}
