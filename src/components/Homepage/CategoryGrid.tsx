"use client";
import Link from 'next/link';

const categories = [
  { title: "New Arrivals", slug: "new-arrivals", img: "https://plus.unsplash.com/premium_photo-1661483406141-0b80760a1b37?q=80&w=896" },
  { title: "Women", slug: "women", img: "https://plus.unsplash.com/premium_photo-1673758901854-0d306aa6f50d?q=80&w=387" },
  { title: "Men", slug: "men", img: "https://images.unsplash.com/photo-1764698072732-ea0230fc5d8e?w=500" },
  { title: "Children", slug: "children", img: "https://plus.unsplash.com/premium_photo-1697612943857-070975a13692?q=80&w=387" },
];

export default function CategoryGrid() {
  return (
    <section className="py-8 md:py-18 bg-[var(--color-background)]">
      <div className="mx-auto max-w-[1920px] px-6 md:px-12 lg:px-16">
        
        {/* --- Section Header --- */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif">The Collections</h2>
          <p className="mt-4 text-[var(--color-muted-foreground)] uppercase tracking-widest text-[10px]">
            Explore the 2026 Essence
          </p>
        </div>

        {/* --- Grid Layout --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((cat) => (
            <div key={cat.slug} className="group flex flex-col">
              {/* Image Card */}
              <Link 
                href={`/collections/${cat.slug}`}
                className="relative aspect-[3/4] overflow-hidden bg-[var(--color-surface)]"
              >
                <div className="w-full h-full transition-transform duration-[1.5s] ease-[var(--ease-apple)] group-hover:scale-105">
                  <img 
                    src={cat.img} 
                    alt={cat.title} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-500" />
                
                {/* Floating Title (Inside Image) */}
                <div className="absolute bottom-6 left-6 text-white">
                   <h3 className="font-serif italic text-2xl tracking-wide">{cat.title}</h3>
                </div>
              </Link>

              {/* --- INDIVIDUAL CATEGORY BUTTON (Below Image) --- */}
              <Link 
                href={`/${cat.slug}`}
                className="mt-3 w-full border border-[var(--color-foreground)] py-2 flex items-center justify-center text-[10px] uppercase tracking-[0.2em] font-medium transition-all duration-500 hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)]"
              >
                Explore {cat.title}
              </Link>
            </div>
          ))}
        </div>

        {/* --- FINAL "EXPLORE ALL" CTA --- */}
        <div className="mt-20 md:mt-32 flex flex-col items-center">
          <div className="w-20 h-[1px] bg-[var(--color-muted)] mb-12 opacity-30" />
          
          <Link 
            href="/new-arrival"
            className="group relative px-16 py-6 bg-[var(--color-foreground)] text-[var(--color-background)] overflow-hidden"
          >
            <span className="relative z-10 text-[11px] uppercase tracking-[0.4em] font-bold">
              Explore All Collections
            </span>
            {/* Subtle hover slide effect */}
            <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-[var(--color-accent)] transition-transform duration-500 ease-[var(--ease-apple)]" />
          </Link>
          
          <p className="mt-6 text-[10px] text-[var(--color-muted-foreground)] uppercase tracking-[0.2em] opacity-60">
            Velora Flagship Experience
          </p>
        </div>

      </div>
    </section>
  );
}