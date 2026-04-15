"use client";

import React from 'react';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

const products = [
  { id: 1, name: "Atelier Silk Shirt", price: "$290", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800" },
  { id: 2, name: "Pewter Wool Trousers", price: "$450", img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800" },
  { id: 3, name: "Canvas Trench Coat", price: "$890", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800" },
  { id: 4, name: "Minimalist Linen Tee", price: "$120", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800" },
  { id: 5, name: "Evening Silk Gown", price: "$1,200", img: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800" },
  { id: 6, name: "Cashmere Overcoat", price: "$950", img: "https://images.unsplash.com/photo-1539533397308-a61d763d4d30?w=800" },
  { id: 7, name: "Tailored Blazer", price: "$580", img: "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?w=800" },
  { id: 8, name: "Classic Chelsea Boot", price: "$420", img: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=800" },
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-[var(--color-surface)]">
      <div className="mx-auto max-w-[1920px] px-6 md:px-12 lg:px-16">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-20 space-y-3">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.5em] text-[var(--color-muted-foreground)] block">
            Selected Pieces
          </span>
          <h2 className="text-2xl md:text-5xl font-serif uppercase tracking-tight leading-tight max-w-2xl mx-auto">
            The 2026 Atelier Collection
          </h2>
        </div>

        {/* --- PRODUCT GRID --- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 md:gap-x-10 md:gap-y-24">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col h-full">
              
              {/* IMAGE CONTAINER */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[var(--color-surface)] mb-6">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[var(--ease-apple)] group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* PRODUCT INFO */}
              <div className="text-center md:text-left flex flex-col items-center md:items-start flex-grow">
                <h3 className="text-[12px] uppercase tracking-wider text-[var(--color-foreground)] mb-1">
                  {product.name}
                </h3>
                <p className="text-[12px] text-[var(--color-muted-foreground)] font-medium mb-6">
                  {product.price}
                </p>

                {/* --- RESPONSIVE ADD TO CART BUTTON --- */}
                <button className="mt-auto w-full border border-[var(--color-foreground)] py-3 px-4 flex items-center justify-center space-x-2 text-[10px] uppercase tracking-[0.2em] font-medium transition-all duration-[var(--duration-luxury)] ease-[var(--ease-apple)] hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] active:scale-[0.98]">
                  <ShoppingBag size={14} strokeWidth={1.5} />
                  <span>Add to Cart</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* --- CENTERED "EXPLORE ALL" BUTTON --- */}
        <div className="mt-24 md:mt-32 text-center">
          <Link 
            href="/new-arrivals"
            className="inline-block px-12 py-5 bg-[var(--color-accent)] text-[var(--color-accent-foreground)] uppercase text-[11px] tracking-[0.3em] font-medium transition-all duration-[var(--duration-luxury)] ease-[var(--ease-apple)] hover:bg-transparent hover:text-[var(--color-foreground)] border border-transparent hover:border-[var(--color-foreground)]"
          >
            Explore All New Arrivals
          </Link>
        </div>

      </div>
    </section>
  );
}