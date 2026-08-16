import CategoryPageContent from "@/components/CategoryPageContent";

export const metadata = {
  title: "Cute Tumblers & Sippers — Gift Bottles for Couples",
  description:
    "Shop cute tumblers and sippers with charms, straws and matching couple designs — a fun everyday gift. Handmade touches, ships across India. Enquire on WhatsApp.",
  alternates: { canonical: "/products/tumblers-sippers" },
};

const seoParagraphs = [
  "Some gifts are for special occasions, and some become part of everyday life — cute sippers and tumblers are the second kind. A little bottle that shows up at every coffee run, every gym bag, every desk, quietly reminding them of who gave it.",
  "Basket of Memories's tumbler and sipper collection is designed for exactly that — pastel colours, charm straws, bear toppers and even matching his-and-hers sets, so couples can carry a little piece of each other through the day.",
  "Great as a solo gift or paired with a teddy bear or crochet flower pot for a complete gifting hamper — just ask us on WhatsApp and we'll help you build the perfect combo.",
];

const faqs = [
  {
    q: "Are these sippers leak-proof?",
    a: "Yes, our tumblers and sippers come with secure, leak-proof lids so they're safe to toss in a bag.",
  },
  {
    q: "Do you have matching sets for couples?",
    a: "Yes! Our Couple Matching Sippers set includes two bottles with customisable name tags — a favourite for anniversaries.",
  },
  {
    q: "Can I combine a sipper with another gift?",
    a: "Absolutely — message us on WhatsApp and we can bundle a sipper with a teddy bear or crochet flower pot for a gift hamper.",
  },
];

export default function TumblersSippersPage() {
  return <CategoryPageContent slug="tumblers-sippers" seoParagraphs={seoParagraphs} faqs={faqs} />;
}
