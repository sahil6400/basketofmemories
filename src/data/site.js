export const site = {
  name: "Basket of Memories",
  tagline: "Tiny gifts, big memories",
  description:
    "Basket of Memories is a handmade gift shop selling crochet flower pots, cute tumblers & sippers, teddy bears and tiny gifts — perfect for couples to gift each other and celebrate their memories.",
  phone: "9053616400",
  phoneDisplay: "+91 90536 16400",
  whatsappNumber: "919053616400",
  instagramHandle: "basket.of.memories",
  instagramUrl: "https://www.instagram.com/basket.of.memories",
  email: "hello@myminibasket.in",
  url: "https://www.myminibasket.in",
  city: "India",
  keywords: [
    "crochet flower pot gift",
    "cute tumbler sipper gift",
    "teddy bear gift for girlfriend",
    "tiny gifts for girls",
    "couple gifts online",
    "handmade gift shop India",
    "cute gift shop for couples",
    "Basket of Memories",
  ],
};

export function buildWhatsAppLink(message) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}

export function productWhatsAppMessage(productName) {
  return `Hi Basket of Memories! 🎁 I'd like to enquire about "${productName}". Is it available?`;
}
