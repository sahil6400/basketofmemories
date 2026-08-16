import CategoryPageContent from "@/components/CategoryPageContent";

export const metadata = {
  title: "Cute Teddy Bears for Gifting — Tiny to Huggable Sizes",
  description:
    "Shop cute teddy bears — tiny palm-sized bears, bow-tie teddies, heart-hug teddies and matching couple teddy sets. The classic gift for someone you love. Enquire on WhatsApp.",
  alternates: { canonical: "/products/teddy-bears" },
};

const seoParagraphs = [
  "A teddy bear is the one gift that never goes out of style — from a tiny palm-sized bear tucked into a bouquet to a big huggable one that takes over the bed, teddy bears say 'I care about you' in the simplest way possible.",
  "Basket of Memories's teddy bear collection ranges from tiny 10cm bears perfect as bouquet add-ons, to heart-hug teddies and matching Mr. & Mrs. sets made especially for couples celebrating an anniversary or just a regular Tuesday.",
  "Every teddy is soft, huggable and safe for gifting to partners, friends or little ones — pick your favourite and message us on WhatsApp to get it shipped.",
];

const faqs = [
  {
    q: "What sizes do your teddy bears come in?",
    a: "We stock tiny palm-sized teddies (~10cm) up to medium huggable teddies (~25cm). Message us on WhatsApp for exact sizing before you order.",
  },
  {
    q: "Are the teddies safe and soft?",
    a: "Yes, all our teddies use soft, skin-friendly plush fabric and are safe for gifting to loved ones of any age.",
  },
  {
    q: "Can I gift a teddy with a flower pot together?",
    a: "Yes, a teddy bear paired with a crochet flower pot is one of our most-loved combo gifts. Ask us on WhatsApp to bundle them.",
  },
];

export default function TeddyBearsPage() {
  return <CategoryPageContent slug="teddy-bears" seoParagraphs={seoParagraphs} faqs={faqs} />;
}
