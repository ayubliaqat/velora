import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden bg-[var(--color-surface)]">
      
      {/* --- BACKGROUND IMAGE WITH LUXURY ZOOM --- */}
      <div className="absolute inset-0 img-luxury-zoom">
        <img 
          src="https://plus.unsplash.com/premium_photo-1703615958889-2a87a467ce70?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wx2aH8c3VyZWNvZGlvbHx8fHx8fHx8fHw%3D" 
          alt="Velora Family Collection" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[var(--color-background)]/20 mix-blend-multiply" />
      </div>

      {/* --- CONTENT AREA --- */}
      <div className="relative h-full mx-auto max-w-[1920px] px-6 md:px-12 lg:px-16 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        
        <div className="max-w-3xl space-y-5 md:space-y-8 lg:space-y-10">

          {/* Subheading */}
          <span className="block text-[10px] md:text-[12px] uppercase tracking-[0.4em] text-[var(--color-foreground)] opacity-80 animate-fade-in">
            Spring / Summer 2026
          </span>

          {/* H1 */}
          <h1 className="leading-[1.1] md:leading-[1.05] mt-2 md:mt-3">
            The New Standard <br /> of Family Elegance
          </h1>

          {/* Paragraph */}
          <p className="text-[14px] md:text-[16px] text-[var(--color-muted-foreground)] max-w-md md:max-w-lg">
            Discover a curated collection where modern silhouettes meet 
            timeless pewter-toned aesthetics. Crafted for every generation.
          </p>

          {/* CTA */}
          <div className="pt-6 md:pt-8">
            <Link 
              href="/collections/new-arrivals"
              className="inline-block px-10 py-4 bg-[var(--color-accent)] text-[var(--color-accent-foreground)] uppercase text-[11px] tracking-[0.25em] font-medium transition-all duration-[var(--duration-luxury)] ease-[var(--ease-apple)] hover:bg-transparent hover:text-[var(--color-foreground)] border border-transparent hover:border-[var(--color-foreground)]"
            >
              Explore Collection
            </Link>
          </div>

        </div>

      </div>

      {/* --- SCROLL INDICATOR --- */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--color-muted)] to-transparent opacity-50" />
      </div>

    </section>
  );
};

export default Hero;