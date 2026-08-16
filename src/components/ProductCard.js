import { WhatsAppInlineButton } from "./WhatsAppButton";
import { productWhatsAppMessage } from "@/data/site";
import { getCategory } from "@/data/products";

export default function ProductCard({ product, className = "" }) {
  const category = getCategory(product.category);
  const productImage = typeof product.image === "string" ? product.image : product.image?.src;
  const fallbackImage = typeof category?.image === "string" ? category.image : category?.image?.src;

  return (
    <div
      className={`yarn-card bg-paper/90 p-4 flex flex-col h-full min-h-[520px] ${className}`}
      itemScope
      itemType="https://schema.org/Product"
    >
      <meta itemProp="name" content={product.name} />
      <div className={`relative rounded-[20px] aspect-square mb-4 overflow-hidden bg-gradient-to-br ${category?.gradient || "from-blush-light to-cream"}`}>
        <img
          src={productImage || fallbackImage || "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80"}
          alt={product.name}
          className="h-full w-full object-cover"
        />
        {product.badge && (
          <span className="absolute top-2.5 left-2.5 bg-[#7b5140] text-white text-[11px] font-bold tracking-wide px-2.5 py-1 rounded-full shadow-sm">
            {product.badge}
          </span>
        )}
      </div>

      <h3 className="font-display text-lg text-brown leading-snug mb-1">{product.name}</h3>
      <p className="text-[13px] text-brown-soft/85 leading-relaxed mb-3 grow min-h-[72px]">{product.description}</p>

      {product.highlights && (
        <ul className="flex flex-wrap gap-1.5 mb-3 min-h-[32px]">
          {product.highlights.slice(0, 2).map((h) => (
            <li
              key={h}
              className="text-[11px] bg-sage-light text-brown-soft px-2 py-0.5 rounded-full font-semibold"
            >
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="flex items-center justify-between mb-3">
        <span
          className="font-display text-xl text-rose-dark"
          itemProp="offers"
          itemScope
          itemType="https://schema.org/Offer"
        >
          <meta itemProp="priceCurrency" content="INR" />
          <span itemProp="price" content={product.price}>
            ₹{product.price}
          </span>
        </span>
        <span className="text-[11px] text-brown-soft/70">Reply on WhatsApp for offers</span>
      </div>

      <WhatsAppInlineButton message={productWhatsAppMessage(product.name)} />
    </div>
  );
}
