import Hero from "@/components/Homepage/Hero";
import CategoryGrid from "@/components/Homepage/CategoryGrid";
import EditorialSpotlight  from "@/components/Homepage/EditorialSpotlight";
import FeaturedProducts from "@/components/Homepage/FeaturedProducts";
import TrustBar from "@/components/Homepage/TrustBar";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <FeaturedProducts/>
      {/* Visual Break / Quote */}
      <section className="bg-[var(--color-surface)] py-32 text-center">
        <h3 className="font-serif italic text-3xl md:text-4xl text-[var(--color-foreground)] opacity-90">
          "Elegance is the only beauty that never fades."
        </h3>
      </section>

      <EditorialSpotlight />
      <TrustBar/>
      {/* We can add a "Trending" Product carousel next */}
    </>
  );
}