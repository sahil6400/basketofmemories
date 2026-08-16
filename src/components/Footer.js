import Link from "next/link";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import InstagramIcon from "./icons/InstagramIcon";
import { site, buildWhatsAppLink } from "@/data/site";
import { categories } from "@/data/products";
import ScallopDivider from "./ScallopDivider";

export default function Footer() {
  return (
    <footer className="relative bg-brown text-cream-2 pt-2">
      <ScallopDivider color="var(--brown)" />
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-display text-xl text-butter-light">{site.name}</span>
          </div>
          <p className="text-sm text-cream-2/75 leading-relaxed mb-4">
            Handmade crochet flower pots, cute sippers, teddy bears and tiny gifts — made for
            couples and loved ones to gift each other and hold on to a memory.
          </p>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blush hover:text-butter-light transition-colors"
          >
            <InstagramIcon size={16} /> @{site.instagramHandle}
          </a>
        </div>

        <div>
          <h4 className="font-display text-base text-butter-light mb-3">Shop</h4>
          <ul className="space-y-2 text-sm text-cream-2/80">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/products/${c.slug}`} className="hover:text-blush transition-colors">
                  {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/products" className="hover:text-blush transition-colors font-semibold">
                Shop All Gifts →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base text-butter-light mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-cream-2/80">
            <li><Link href="/about" className="hover:text-blush transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-blush transition-colors">Contact Us</Link></li>
            <li><Link href="/" className="hover:text-blush transition-colors">Home</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base text-butter-light mb-3">Get in touch</h4>
          <ul className="space-y-3 text-sm text-cream-2/80">
            <li>
              <a href={`tel:+91${site.phone}`} className="flex items-center gap-2 hover:text-blush transition-colors">
                <Phone size={15} /> {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={buildWhatsAppLink("Hi Basket of Memories! I'd love to know more about your gifts 🎁")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blush transition-colors"
              >
                <MessageCircle size={15} /> WhatsApp Enquiry
              </a>
            </li>
            <li className="flex items-center gap-2 text-cream-2/70">
              <MapPin size={15} /> Shipping across India
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream-2/15">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cream-2/60">
          <p>© {new Date().getFullYear()} Basket of Memories. All rights reserved.</p>
          <p>Handmade with 🧶 for couples & gift-lovers everywhere.</p>
        </div>
      </div>
    </footer>
  );
}
