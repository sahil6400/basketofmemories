"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import InstagramIcon from "./icons/InstagramIcon";
import { site, buildWhatsAppLink } from "@/data/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Shop All" },
  { href: "/products/crochet-flower-pots", label: "Flower Pots" },
  { href: "/products/tumblers-sippers", label: "Sippers" },
  { href: "/products/teddy-bears", label: "Teddy Bears" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-cream-2/90 backdrop-blur-md shadow-[0_4px_18px_-8px_rgba(92,68,51,0.25)]" : "bg-cream-2/70 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-18 py-3">
        <Link href="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <span className="font-display text-xl sm:text-2xl text-rose-dark leading-none">
            Basket of Memories
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-semibold text-brown-soft hover:text-rose transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-rose transition-all duration-300 group-hover:w-full rounded-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Basket of Memories on Instagram"
            className="w-9 h-9 rounded-full bg-blush-light flex items-center justify-center text-rose-dark hover:bg-blush hover:scale-110 transition-all"
          >
            <InstagramIcon size={17} />
          </a>
          <a
            href={buildWhatsAppLink("Hi Basket of Memories! I'd love to know more about your gifts 🎁")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp px-4 py-2 text-sm"
          >
            <MessageCircle size={16} />
            Chat on WhatsApp
          </a>
        </div>

        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center text-brown"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 pb-5 pt-1 bg-cream-2/95">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-[15px] font-semibold text-brown-soft border-b border-brown/10 last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-4">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-blush-light flex items-center justify-center text-rose-dark"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href={buildWhatsAppLink("Hi Basket of Memories! I'd love to know more about your gifts 🎁")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp px-4 py-2.5 text-sm flex-1 justify-center"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
