import "@fontsource/fredoka/400.css";
import "@fontsource/fredoka/500.css";
import "@fontsource/fredoka/600.css";
import "@fontsource/fredoka/700.css";
import "@fontsource/quicksand/400.css";
import "@fontsource/quicksand/500.css";
import "@fontsource/quicksand/600.css";
import "@fontsource/quicksand/700.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppButton";
import { site } from "@/data/site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Cute Handmade Gifts for Couples — Crochet, Sippers & Teddy Bears`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Cute Handmade Gifts for Couples`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Cute Handmade Gifts for Couples`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GiftShop",
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: `+91${site.phone}`,
    sameAs: [site.instagramUrl],
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    priceRange: "₹149 - ₹649",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloatingButton message="Hi Basket of Memories! I'd love to know more about your gifts 🎁" />
      </body>
    </html>
  );
}
