"use client";

import React from 'react';
/* THIS WAS THE MISSING PIECE */
import Link from 'next/link'; 

export default function EditorialSpotlight() {
  return (
    <section className="py-24 md:py-40 border-t border-[var(--color-muted)]/20 bg-[var(--color-background)]">
      <div className="mx-auto max-w-[1920px] px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          
          {/* --- LEFT: IMAGE --- */}
          <div className="flex-1 w-full group overflow-hidden bg-[var(--color-surface)] aspect-[4/5]">
            <img 
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070" 
              alt="Velora Editorial" 
              className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-[1.5s] ease-[var(--ease-apple)] group-hover:scale-105"
            />
          </div>

          {/* --- RIGHT: CONTENT --- */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.5em] text-[var(--color-muted-foreground)] mb-8 block">
              The 2026 Atelier Series
            </span>
            
            <h2 className="mb-10 text-[var(--color-foreground)] leading-[1.1]">
              Where Modern <br className="hidden lg:block" /> 
              Geometry Meets <br className="hidden lg:block" /> 
              Silk & Pewter.
            </h2>
            
            <p className="text-[14px] md:text-[15px] text-[var(--color-muted-foreground)] max-w-md mb-12 leading-relaxed">
              Every piece in the Atelier collection is a study in texture. 
              We have combined the architectural weight of our brand heritage 
              with the effortless lightness of summer linen.
            </p>

            {/* The Link component that was causing the error */}
            <Link 
              href="/collections/women"
              className="link-underline text-[12px] uppercase tracking-[0.2em] font-medium text-[var(--color-foreground)]"
            >
              Explore the Editorial
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}