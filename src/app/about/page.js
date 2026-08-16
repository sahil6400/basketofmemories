import { MessageCircle, Heart, Scissors, Truck } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { buildWhatsAppLink, site } from "@/data/site";
import ScallopDivider from "@/components/ScallopDivider";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About Us — Our Handmade Gifting Story",
  description:
    "Learn the story behind Basket of Memories — a small, handmade gift shop crafting crochet flower pots, sippers, teddy bears and tiny gifts for couples and loved ones.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-butter-light to-cream pt-14 pb-12 px-6 text-center">
        <span className="text-6xl inline-block mb-3 animate-bob-slow select-none" aria-hidden>🧺</span>
        <h1 className="font-display text-4xl sm:text-5xl text-brown mb-4">
          The story behind <span className="stitch-underline text-rose-dark">Basket of Memories</span>
        </h1>
        <p className="text-brown-soft max-w-xl mx-auto text-[15px] leading-relaxed">
          A tiny basket of handmade things, made to hold big feelings.
        </p>
      </section>
      <ScallopDivider color="var(--cream)" />

      <section className="max-w-3xl mx-auto px-6 py-14 sm:py-16">
        <Reveal>
          <p className="text-brown-soft text-[15px] leading-relaxed mb-5">
            Basket of Memories started with a simple idea — that the smallest gifts often carry the
            biggest memories. A crochet flower that never wilts. A sipper you reach for every
            morning. A tiny teddy tucked into a bag. These aren't just products; they're little
            markers of a moment shared between two people.
          </p>
          <p className="text-brown-soft text-[15px] leading-relaxed mb-5">
            Every item in our basket is handmade — crocheted, stitched, and packed with care in
            small batches. We believe gifting shouldn't be complicated, so we kept it simple: no
            crowded checkout pages, no confusing carts. Just message us on WhatsApp, tell us what
            you love, and we'll take care of the rest.
          </p>
          <p className="text-brown-soft text-[15px] leading-relaxed">
            Today, Basket of Memories is loved by couples, friends and family across India who want to
            gift something that feels personal, cute, and made with actual hands — not a factory
            line. Thank you for letting us be a small part of your big memories. 💛
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          <Reveal delay={0}>
            <div className="bg-paper rounded-[24px] p-6 text-center h-full border-2 border-dashed border-brown/15">
              <Scissors className="mx-auto mb-3 text-rose-dark" size={26} />
              <h3 className="font-display text-lg text-brown mb-1.5">Handmade, always</h3>
              <p className="text-sm text-brown-soft leading-relaxed">
                Every crochet piece and plush is crafted by hand, in small, careful batches.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="bg-paper rounded-[24px] p-6 text-center h-full border-2 border-dashed border-brown/15">
              <Heart className="mx-auto mb-3 text-rose-dark" size={26} />
              <h3 className="font-display text-lg text-brown mb-1.5">Made for memories</h3>
              <p className="text-sm text-brown-soft leading-relaxed">
                We design every gift with couples and loved ones in mind — made to be kept, not
                thrown away.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="bg-paper rounded-[24px] p-6 text-center h-full border-2 border-dashed border-brown/15">
              <Truck className="mx-auto mb-3 text-rose-dark" size={26} />
              <h3 className="font-display text-lg text-brown mb-1.5">Shipped with care</h3>
              <p className="text-sm text-brown-soft leading-relaxed">
                Safely packed and shipped across India, so your gift arrives just as cute as it
                left us.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-sage-light/50 py-14 px-6 text-center">
        <h2 className="font-display text-2xl sm:text-3xl text-brown mb-3">
          Say hi to us anytime
        </h2>
        <p className="text-brown-soft max-w-lg mx-auto text-[15px] mb-6">
          We're just a message away — reach out with questions, custom requests or just to say
          hello.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={buildWhatsAppLink("Hi Basket of Memories! I'd love to know more about you 🧺")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp px-6 py-3 text-sm justify-center"
          >
            <MessageCircle size={17} /> Message on WhatsApp
          </a>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-6 py-3 text-sm justify-center"
          >
            <InstagramIcon size={17} /> Follow @{site.instagramHandle}
          </a>
        </div>
      </section>
    </>
  );
}
