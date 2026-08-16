import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyUs from "@/components/WhyUs";
import HowToOrder from "@/components/HowToOrder";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";

export const metadata = {
  title: "Cute Handmade Gifts for Couples — Crochet Flower Pots, Sippers & Teddy Bears",
  description:
    "Basket of Memories sells handmade crochet flower pots, cute tumblers & sippers, teddy bears and tiny gifts — perfect for couples to gift each other. Order easily on WhatsApp.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <WhyUs />
      <FeaturedProducts />
      <HowToOrder />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
