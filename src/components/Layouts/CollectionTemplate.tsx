"use client";

import React from 'react';
// ADD THESE IMPORTS TO FIX THE ERRORS:
import { ChevronDown, Search, ShoppingBag } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  img: string;
}

interface CollectionTemplateProps {
  title: string;
  products: Product[];
}

export default function CollectionTemplate({ title, products }: CollectionTemplateProps) {
  return (
    <div className="min-h-screen bg-[var(--color-background)] pt-10">
      {/* --- HEADER --- */}
      <header className="px-6 md:px-8 lg:px-10 text-center mb-12">
        <span className="text-[10px] uppercase tracking-[0.5em] text-[var(--color-muted-foreground)] block mb-4">
          Velora Series
        </span>
        <h1 className="text-4xl md:text-6xl font-serif italic leading-tight">
          {title}
        </h1>
      </header>

      {/* --- FILTER BAR --- */}
      <div className="sticky top-[80px] z-40 bg-[var(--color-background)]/80 backdrop-blur-xl border-y border-[var(--color-muted)]/10 px-6 md:px-12 lg:px-16 py-4">
        <div className="max-w-[1920px] mx-auto flex justify-between items-center">
          
          {/* Internal Categories */}
          <div className="flex items-center space-x-6">
            {["All", "Featured", "Latest"].map((cat) => (
              <button 
                key={cat} 
                className="text-[10px] uppercase tracking-[0.2em] hover:text-[var(--color-accent)] transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search and Sort */}
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] font-medium">
              <span>Price</span> 
              <ChevronDown size={12} strokeWidth={1.5} />
            </button>
            <button className="hover:text-[var(--color-accent)] transition-colors">
              <Search size={16} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* --- PRODUCT GRID --- */}
      <main className="px-6 md:px-12 lg:px-16 py-12 md:py-20">
        <div className="max-w-[1920px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 md:gap-x-10 md:gap-y-24">
          {products.map((item) => (
            <div key={item.id} className="group flex flex-col h-full">
              
              {/* Image Box */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[var(--color-surface)] mb-6">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-[var(--ease-apple)] group-hover:scale-105" 
                  loading="lazy" 
                />
              </div>

              {/* Info & Button */}
              <div className="flex flex-col flex-grow text-center md:text-left px-1">
                <h3 className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-foreground)] mb-2">
                  {item.name}
                </h3>
                <p className="text-[11px] text-[var(--color-muted-foreground)] mb-6 tracking-widest">
                  {item.price}
                </p>
                <button className="mt-auto w-full border border-[var(--color-foreground)] py-3 text-[9px] uppercase tracking-[0.3em] font-bold hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-all flex items-center justify-center space-x-2">
                  <ShoppingBag size={12} strokeWidth={1.5} /> 
                  <span>Add to Cart</span>
                </button>
              </div>

            </div>
          ))}
        </div>
      </main>
    </div>
  );
}