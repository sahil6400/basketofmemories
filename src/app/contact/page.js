import { MessageCircle, Phone, Clock } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { buildWhatsAppLink, site } from "@/data/site";
import ScallopDivider from "@/components/ScallopDivider";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Contact Us — WhatsApp, Phone & Instagram",
  description:
    "Get in touch with Basket of Memories for gift enquiries and orders. Message us on WhatsApp, call us, or find us on Instagram @basket.of.memories.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-blush-light to-cream pt-14 pb-12 px-6 text-center">
        <span className="text-6xl inline-block mb-3 animate-bob select-none" aria-hidden>💌</span>
        <h1 className="font-display text-4xl sm:text-5xl text-brown mb-4">
          Let's <span className="stitch-underline text-rose-dark">talk gifts</span>
        </h1>
        <p className="text-brown-soft max-w-xl mx-auto text-[15px] leading-relaxed">
          Questions, custom orders or just want to say hi? We're all ears — and always just one
          message away.
        </p>
      </section>
      <ScallopDivider color="var(--cream)" />

      <section className="max-w-4xl mx-auto px-6 py-14 sm:py-16">
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          <Reveal>
            <a
              href={buildWhatsAppLink("Hi Basket of Memories! I'd love to get in touch 🎁")}
              target="_blank"
              rel="noopener noreferrer"
              className="yarn-card bg-paper p-7 flex flex-col items-center text-center h-full block"
            >
              <div className="w-14 h-14 rounded-full bg-[#25d366]/15 flex items-center justify-center mb-4 text-[#1fbd5a]">
                <MessageCircle size={26} />
              </div>
              <h2 className="font-display text-xl text-brown mb-1.5">WhatsApp Us</h2>
              <p className="text-sm text-brown-soft mb-4">
                Fastest way to reach us — for orders, enquiries and custom requests.
              </p>
              <span className="btn-whatsapp px-5 py-2.5 text-sm">Chat Now</span>
            </a>
          </Reveal>

          <Reveal delay={100}>
            <a
              href={`tel:+91${site.phone}`}
              className="yarn-card bg-paper p-7 flex flex-col items-center text-center h-full block"
            >
              <div className="w-14 h-14 rounded-full bg-blush-light flex items-center justify-center mb-4 text-rose-dark">
                <Phone size={26} />
              </div>
              <h2 className="font-display text-xl text-brown mb-1.5">Call Us</h2>
              <p className="text-sm text-brown-soft mb-4">{site.phoneDisplay}</p>
              <span className="btn-primary px-5 py-2.5 text-sm">Call Now</span>
            </a>
          </Reveal>
        </div>

        <Reveal>
          <div className="yarn-card bg-paper p-7 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="w-14 h-14 rounded-full bg-butter-light flex items-center justify-center text-brown shrink-0">
              <InstagramIcon size={26} />
            </div>
            <div className="grow">
              <h2 className="font-display text-xl text-brown mb-1">Follow along on Instagram</h2>
              <p className="text-sm text-brown-soft">
                See new arrivals, behind-the-scenes crochet reels and happy customers.
              </p>
            </div>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-5 py-2.5 text-sm shrink-0"
            >
              @{site.instagramHandle}
            </a>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex items-center justify-center gap-2 text-sm text-brown-soft mt-8">
            <Clock size={16} />
            We usually reply on WhatsApp within a few hours, every day.
          </div>
        </Reveal>
      </section>
    </>
  );
}
