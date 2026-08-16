import CategoryPageContent from "@/components/CategoryPageContent";

export const metadata = {
  title: "Crochet Flower Pot Gifts — Handmade Everlasting Bouquets",
  description:
    "Shop handmade crochet flower pots — roses, sunflowers, tulips and daisies that never wilt. A romantic, everlasting gift for couples and loved ones. Enquire on WhatsApp.",
  alternates: { canonical: "/products/crochet-flower-pots" },
};

const seoParagraphs = [
  "A crochet flower pot is more than a bouquet — it's a keepsake. Unlike fresh flowers that wilt in a week, every stitch of yarn in these handmade flower pots is built to stay in full bloom for years, quietly holding onto the memory of the day it was gifted.",
  "At Basket of Memories, each crochet flower pot is hand-woven, petal by petal, and potted in a mini planter that's ready to sit on a study table, office desk or bedside shelf. They make a thoughtful gift for anniversaries, promise day, birthdays or simply a 'thinking of you' surprise between couples.",
  "Choose from roses, sunflowers, tulips, daisies and heart-stitched blooms — each one handmade in small batches, so your gift feels personal, not mass-produced.",
];

const faqs = [
  {
    q: "Do crochet flowers need any maintenance?",
    a: "None at all! Just keep them away from direct water and they'll stay fresh-looking for years — no watering, no wilting.",
  },
  {
    q: "Can I customise the flower colours?",
    a: "Yes, message us on WhatsApp with your preferred colours and we'll let you know what's possible for your order.",
  },
  {
    q: "Is this a good gift for an anniversary?",
    a: "It's one of our most popular anniversary and promise-day gifts — a bouquet that keeps the memory alive long after fresh flowers would fade.",
  },
];

export default function CrochetFlowerPotsPage() {
  return (
    <CategoryPageContent slug="crochet-flower-pots" seoParagraphs={seoParagraphs} faqs={faqs} />
  );
}
