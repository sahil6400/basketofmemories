import Rose_Crochet_Flower_Pot from "@/components/icons/Rose-Crochet-Flower-Pot.webp";
import Couple_Matching_Sippers from "@/components/icons/Couple-Matching-Sippers.webp";
import Tiny_Palm_Teddy from "@/components/icons/Tiny-Palm-Teddy.webp";  
import Heart_Hug_Teddy from "@/components/icons/Heart-Hug-Teddy.webp"; 
import Tiny_Teddy_Bag_Charm from "@/components/icons/Tiny-Teddy-Bag-Charm.webp";
import Mini_Bouquet_Bookmark from "@/components/icons/Mini-Bouquet-Bookmark.webp";
import Bow_Tie_Teddy_Bear from "@/components/icons/Bow-Tie-Teddy-Bear.webp";

import Tulip_Bouquet_Basket from "@/components/icons/Tulip-Bouquet-Basket.jpg";
import flowerPotImage from "@/components/icons/Flower-in-a-Pot.jpg";
import homeImage from "@/components/icons/home.jpg";
import Cutie_Bear_Sipper from "@/components/icons/Cutie-Bear-Sipper.jpg";
import Mini_Crochet_Keychain from "@/components/icons/Mini-Crochet-Keychain.jpg";
import Little_Love_Note_Jar from "@/components/icons/Little-Love-Note-Jar.jpg";
import Sunflower_Crochet_Pot from "@/components/icons/Sunflower-Crochet-Pot.jpg";
import Cutie_Hair_Clip_Set from "@/components/icons/Cutie-Hair-Clip-Set.jpg";
import Tiny_Treasure_Box from "@/components/icons/Tiny-Treasure-Box.jpg";
import Mr_Mrs_Teddy_Set from "@/components/icons/Mr-Mrs-Teddy-Set.jpg";
import Sleepy_Bunny_Plush from "@/components/icons/Sleepy-Bunny-Plush.jpg";
import Mini_Milkshake_Sipper_Cup from "@/components/icons/Mini-Milkshake-Sipper-Cup.jpg";
import Flower_Topper_Water_Bottle from "@/components/icons/Flower-Topper-Water-Bottle.jpg";
import Star_Charm_Tumbler from "@/components/icons/Star-Charm-Tumbler.jpg";

export const categories = [
  {
    slug: "crochet-flower-pots",
    name: "Crochet Flower Pots",
    shortName: "Flower Pots",
    tagline: "Bouquets that never wilt",
    description:
      "Handmade crochet flower pots, woven stitch by stitch and potted in mini planters — a bouquet your partner can keep on their desk forever.",
    emoji: "🌷",
    image: flowerPotImage,
    gradient: "from-[#f6e4d3] via-[#f0dfcf] to-[#f8f3ee]",
  },
  {
    slug: "tumblers-sippers",
    name: "Tumblers & Sippers",
    shortName: "Tumblers & Sippers",
    tagline: "Cute sippers for your everyday sips",
    description:
      "Cute tumblers and sippers dressed up with charms, straws and personalised name tags — perfect for their morning coffee or iced tea dates.",
    emoji: "🥤",
    image: homeImage,
    gradient: "from-[#dfe9f2] via-[#e9f0f5] to-[#f7f4ee]",
  },
  {
    slug: "teddy-bears",
    name: "Teddy Bears",
    shortName: "Teddy Bears",
    tagline: "Small, squishy, huggable love",
    description:
      "Cute teddy bears in every size, from palm-sized tiny bears to big huggable ones — the classic 'I'm thinking of you' gift.",
    emoji: "🧸",
    image: homeImage,
    gradient: "from-[#f7ebd8] via-[#f2e2c7] to-[#f8f2ea]",
  },
  {
    slug: "tiny-gifts",
    name: "Tiny Girly Gifts",
    shortName: "Tiny Gifts",
    tagline: "Small things, big memories",
    description:
      "Tiny, adorable gifts made for girls who love cute things — keychains, mini bouquets, little trinkets that fit in a pocket but stay in the heart.",
    emoji: "🎀",
    image: homeImage,
    gradient: "from-[#e3ebdc] via-[#eef2e8] to-[#f8f4ee]",
  },
];

export const products = [
  // ---------------- Crochet Flower Pots ----------------
  {
    id: "cfp-01",
    slug: "rose-crochet-flower-pot",
    name: "Rose Crochet Flower Pot",
    category: "crochet-flower-pots",
    price: 449,
    emoji: "🌹",
    image: Rose_Crochet_Flower_Pot,
    badge: "Bestseller",
    description:
      "A hand-crocheted rose bunch potted in a mini terracotta-style pot. Soft yarn petals that stay in bloom forever — no watering needed.",
    highlights: ["100% handmade crochet", "Mini pot included", "Never wilts", "Perfect anniversary gift"],
  },
  {
    id: "cfp-02",
    slug: "sunflower-crochet-pot",
    name: "Sunflower Crochet Pot",
    category: "crochet-flower-pots",
    price: 399,
    emoji: "🌻",
    image: Sunflower_Crochet_Pot,
    badge: "New",
    description:
      "A cheerful crochet sunflower bunch that brings sunshine to any desk or shelf. A sweet 'you make me smile' gift.",
    highlights: ["Handmade with love", "Bright everlasting bloom", "Cute pot base", "Great desk decor"],
  },
  {
    id: "cfp-03",
    slug: "tulip-bouquet-basket",
    name: "Tulip Bouquet Basket",
    category: "crochet-flower-pots",
    price: 549,
    emoji: "🌷",
    image: Tulip_Bouquet_Basket,
    badge: "Couple's Pick",
    description:
      "A full mini basket of crochet tulips in mixed pastel shades — a soft, romantic bouquet to gift on your special memory day.",
    highlights: ["Mixed pastel tulips", "Woven basket base", "Great for anniversaries", "Long-lasting keepsake"],
  },
  {
    id: "cfp-04",
    slug: "daisy-pot-duo",
    name: "Daisy Pot Duo",
    category: "crochet-flower-pots",
    price: 379,
    emoji: "🌼",
    image:
      "https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=900&q=80",
    description:
      "Two tiny daisy pots — one for you, one for them. A matching set that says you're thinking of each other, always.",
    highlights: ["Set of 2 mini pots", "Matching couple gift", "Handmade daisies", "Compact & giftable"],
  },
  {
    id: "cfp-05",
    slug: "heart-bloom-pot",
    name: "Heart Bloom Pot",
    category: "crochet-flower-pots",
    price: 499,
    emoji: "💐",
    image:
      "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=900&q=80",
    badge: "Limited",
    description:
      "A crochet flower pot styled with tiny heart accents woven between the petals — made for the couple that loves the little details.",
    highlights: ["Heart-stitch detailing", "Romantic gifting theme", "Handmade in India", "Keepsake pot"],
  },

  // ---------------- Tumblers & Sippers ----------------
  {
    id: "ts-01",
    slug: "cutie-bear-sipper",
    name: "Cutie Bear Sipper",
    category: "tumblers-sippers",
    price: 349,
    emoji: "🐻",
    image: Cutie_Bear_Sipper,
    badge: "Bestseller",
    description:
      "A pastel sipper bottle with an adorable bear topper and matching straw — for their daily hydration with a hug built in.",
    highlights: ["600ml capacity", "Leak-proof lid", "Reusable straw included", "BPA-free"],
  },
  {
    id: "ts-02",
    slug: "star-charm-tumbler",
    name: "Star Charm Tumbler",
    category: "tumblers-sippers",
    price: 379,
    emoji: "⭐",
    image: Star_Charm_Tumbler,
    badge: "New",
    description:
      "A frosted tumbler with dangling star charms and a glittery straw — perfect for iced coffees, boba and cute cafe pictures together.",
    highlights: ["Glitter-charm straw", "Double-wall insulated", "Fits car cup holders", "Instagram-worthy"],
  },
  {
    id: "ts-03",
    slug: "couple-matching-sippers",
    name: "Couple Matching Sippers (Set of 2)",
    category: "tumblers-sippers",
    price: 649,
    emoji: "🥂",
    image: Couple_Matching_Sippers,
    badge: "Couple's Pick",
    description:
      "His & hers matching sippers with little name tags — sip your morning chai or coffee together, even when you're apart.",
    highlights: ["Set of 2 sippers", "Customisable name tags", "Matching couple design", "Great memory gift"],
  },
  {
    id: "ts-04",
    slug: "flower-topper-water-bottle",
    name: "Flower Topper Water Bottle",
    category: "tumblers-sippers",
    price: 399,
    emoji: "🌸",
    image: Flower_Topper_Water_Bottle,
    description:
      "A soft pastel bottle topped with a crochet flower — because even a water bottle deserves to look this cute.",
    highlights: ["750ml bottle", "Crochet flower topper", "Leak-proof", "Easy-grip design"],
  },
  {
    id: "ts-05",
    slug: "mini-milkshake-sipper",
    name: "Mini Milkshake Sipper Cup",
    category: "tumblers-sippers",
    price: 299,
    emoji: "🍓",
    image: Mini_Milkshake_Sipper_Cup,
    description:
      "A tiny milkshake-style sipper cup with a dome lid and fat straw — nostalgic, cute, and perfect for a mini treat-yourself moment.",
    highlights: ["Dome lid with straw", "Compact & cute", "Dishwasher friendly", "Great add-on gift"],
  },

  // ---------------- Teddy Bears ----------------
  {
    id: "tb-01",
    slug: "tiny-palm-teddy",
    name: "Tiny Palm Teddy",
    category: "teddy-bears",
    price: 199,
    emoji: "🧸",
    image: Tiny_Palm_Teddy,
    badge: "Bestseller",
    description:
      "A palm-sized teddy that fits perfectly in a gift box, bouquet, or your partner's pocket. Small but full of love.",
    highlights: ["Palm-sized (~10cm)", "Super soft plush", "Great bouquet add-on", "Budget-friendly gift"],
  },
  {
    id: "tb-02",
    slug: "bow-tie-teddy",
    name: "Bow-Tie Teddy Bear",
    category: "teddy-bears",
    price: 349,
    emoji: "🎀",
    image: Bow_Tie_Teddy_Bear,
    badge: "New",
    description:
      "A charming teddy in a little bow tie — dressed up and ready to be the centerpiece of your gift hamper.",
    highlights: ["Adorable bow-tie detail", "Soft huggable plush", "Great for hampers", "Unisex gifting"],
  },
  {
    id: "tb-03",
    slug: "heart-hug-teddy",
    name: "Heart-Hug Teddy",
    category: "teddy-bears",
    price: 449,
    emoji: "❤️",
    image: Heart_Hug_Teddy,
    badge: "Couple's Pick",
    description:
      "A teddy holding a soft embroidered heart, made to say 'I love you' without saying a word. A timeless couple's gift.",
    highlights: ["Holds a plush heart", "Extra soft filling", "Perfect anniversary gift", "Medium size (~25cm)"],
  },
  {
    id: "tb-04",
    slug: "sleepy-bunny-plush",
    name: "Sleepy Bunny Plush",
    category: "teddy-bears",
    price: 379,
    emoji: "🐰",
    image: Sleepy_Bunny_Plush,
    description:
      "A dozy little bunny plush with floppy ears — an equally cute alternative to a classic teddy, great for bunny lovers.",
    highlights: ["Floppy ear detailing", "Ultra-soft fabric", "Cuddle-sized", "Great desk buddy"],
  },
  {
    id: "tb-05",
    slug: "couple-teddy-set",
    name: "Mr. & Mrs. Teddy Set",
    category: "teddy-bears",
    price: 599,
    emoji: "👫",
    image: Mr_Mrs_Teddy_Set,
    badge: "Limited",
    description:
      "A matching pair of teddies — one for each of you — so you always have a little version of each other close by.",
    highlights: ["Set of 2 matching teddies", "His & hers styling", "Great anniversary keepsake", "Gift-box ready"],
  },

  // ---------------- Tiny Gifts ----------------
  {
    id: "tg-01",
    slug: "mini-crochet-keychain",
    name: "Mini Crochet Keychain",
    category: "tiny-gifts",
    price: 149,
    emoji: "🔑",
    image: Mini_Crochet_Keychain,
    badge: "Bestseller",
    description:
      "A tiny crochet charm keychain — carry a little piece of them wherever you go. Available in flowers, hearts and fruits.",
    highlights: ["Handmade crochet charm", "Attaches to keys/bags", "Multiple mini designs", "Great pocket-money gift"],
  },
  {
    id: "tg-02",
    slug: "tiny-treasure-box",
    name: "Tiny Treasure Box",
    category: "tiny-gifts",
    price: 249,
    emoji: "🎁",
    image: Tiny_Treasure_Box,
    description:
      "A little decorated box to hold notes, rings or small surprises — perfect for a cute proposal or promise-day gift.",
    highlights: ["Compact keepsake box", "Great for notes/rings", "Cute pastel design", "Surprise-gift ready"],
  },
  {
    id: "tg-03",
    slug: "mini-bouquet-bookmark",
    name: "Mini Bouquet Bookmark",
    category: "tiny-gifts",
    price: 179,
    emoji: "📖",
    image: Mini_Bouquet_Bookmark,
    badge: "New",
    description:
      "A crochet flower bookmark for the girl who loves books and cute things equally. Slips in perfectly between pages.",
    highlights: ["Handmade crochet flower", "Functional + cute", "Great for readers", "Light & giftable"],
  },
  {
    id: "tg-04",
    slug: "cutie-hair-clip-set",
    name: "Cutie Hair Clip Set",
    category: "tiny-gifts",
    price: 229,
    emoji: "🎀",
    image: Cutie_Hair_Clip_Set,
    description:
      "A set of tiny pastel hair clips with bows and flowers — small accessories that make a big cute statement.",
    highlights: ["Set of 4 clips", "Pastel bow & flower designs", "Gentle grip", "Great for tiny girls"],
  },
  {
    id: "tg-05",
    slug: "love-note-jar",
    name: "Little Love Note Jar",
    category: "tiny-gifts",
    price: 299,
    emoji: "💌",
    image: Little_Love_Note_Jar,
    badge: "Couple's Pick",
    description:
      "A mini jar filled with tiny folded love notes — open one a day and relive a memory every single time.",
    highlights: ["Mini glass jar", "Filled with cute notes", "Fully customisable", "A memory in every note"],
  },
  {
    id: "tg-06",
    slug: "tiny-teddy-charm",
    name: "Tiny Teddy Bag Charm",
    category: "tiny-gifts",
    price: 169,
    emoji: "🧸",
    image: Tiny_Teddy_Bag_Charm,
    description:
      "A miniature teddy charm that clips onto bags and pouches — the smallest hug you can carry around all day.",
    highlights: ["Clip-on bag charm", "Mini plush teddy", "Super light & cute", "Great add-on gift"],
  },
];

export function getProductsByCategory(slug) {
  return products.filter((p) => p.category === slug);
}

export function getCategory(slug) {
  return categories.find((c) => c.slug === slug);
}

export function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}
