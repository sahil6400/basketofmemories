import CategoryPageContent from "@/components/CategoryPageContent";

export const metadata = {
  title: "Tiny Cute Gifts for Girls — Keychains, Charms & Little Surprises",
  description:
    "Shop tiny, adorable gifts for girls — crochet keychains, mini treasure boxes, hair clips and love note jars. Small gifts, big memories. Enquire on WhatsApp.",
  alternates: { canonical: "/products/tiny-gifts" },
};

const seoParagraphs = [
  "Not every gift needs to be big to mean a lot. Our tiny gifts collection is made for the little moments — a keychain that reminds them of you on their way to work, a hair clip that makes their day a little cuter, a jar of notes to open one at a time.",
  "These small, budget-friendly gifts are especially loved by couples and friends for surprising each other often — no occasion needed. They're light, easy to carry, and pack a whole lot of cute into a tiny package.",
  "Perfect as standalone gifts or as sweet add-ons to a bigger hamper with a teddy bear, sipper or crochet flower pot — message us on WhatsApp to build your own gift combo.",
];

const faqs = [
  {
    q: "Are these good for small budget gifts?",
    a: "Yes, our tiny gifts collection starts under ₹200 — perfect for sweet, thoughtful surprises without overspending.",
  },
  {
    q: "Can these be personalised?",
    a: "Some items like the Love Note Jar can be customised with your own notes — message us on WhatsApp with details.",
  },
  {
    q: "Are these gifts suitable for girls of all ages?",
    a: "Yes, our tiny gifts are designed to be sweet and adorable for young girls, teens and adults alike.",
  },
];

export default function TinyGiftsPage() {
  return <CategoryPageContent slug="tiny-gifts" seoParagraphs={seoParagraphs} faqs={faqs} />;
}
