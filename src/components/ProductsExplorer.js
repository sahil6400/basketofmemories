"use client";

import { useState, useMemo } from "react";
import { products, categories } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductsExplorer({ initialCategory = "all" }) {
  const [active, setActive] = useState(initialCategory);

  const filtered = useMemo(() => {
    if (active === "all") return products;
    return products.filter((p) => p.category === active);
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2.5 mb-10">
        <button
          onClick={() => setActive("all")}
          className={`px-4 py-2 rounded-full text-sm font-bold transition-all border-2 ${
            active === "all"
              ? "bg-rose text-white border-rose shadow-md"
              : "bg-paper text-brown-soft border-brown/15 hover:border-rose/50"
          }`}
        >
          🧺 All Gifts
        </button>
        {categories.map((c) => (
          <button
            key={c.slug}
            onClick={() => setActive(c.slug)}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all border-2 ${
              active === c.slug
                ? "bg-rose text-white border-rose shadow-md"
                : "bg-paper text-brown-soft border-brown/15 hover:border-rose/50"
            }`}
          >
            {c.emoji} {c.shortName}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-brown-soft">No products found in this category yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
