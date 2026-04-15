"use client";

import React from 'react';
import { ChevronDown, Search, ShoppingBag } from 'lucide-react';

// --- CURATED WORKING IMAGES FOR MEN'S COLLECTION ---
const products = [
  { id: 1, name: "Atelier Wool Overcoat", price: "$890.00", img: "https://images.unsplash.com/photo-1539533397308-a61d763d4d30?q=80&w=800" },
  { id: 2, name: "Structured Pewter Blazer", price: "$550.00", img: "https://images.unsplash.com/photo-1617130863154-8250122e4f5a?q=80&w=800" },
  { id: 3, name: "Silk Blend Knit", price: "$280.00", img: "https://images.unsplash.com/photo-1626497748470-284d81f9f356?q=80&w=800" },
  { id: 4, name: "Brutalist Leather Boot", price: "$420.00", img: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=800" },
  { id: 5, name: "Onyx Tailored Trouser", price: "$310.00", img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800" },
  { id: 6, name: "Essential Linen Shirt", price: "$180.00", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800" },
  { id: 7, name: "Minimalist Trench", price: "$720.00", img: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=800" },
  { id: 8, name: "Silver Signet Ring", price: "$150.00", img: "https://images.unsplash.com/photo-1633819187110-5f3308677536?q=80&w=800" },
];

export default function MenCollection() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] pt-10">
      
      {/* --- MINIMALIST HEADER --- */}
      <header className="px-6 md:px-8 lg:px-10 text-center mb-12">
        <span className="text-[10px] uppercase tracking-[0.5em] text-[var(--color-muted-foreground)] block mb-4">
          Atelier Series
        </span>
        <h1 className="text-4xl md:text-6xl font-serif italic leading-tight">
          Men&apos;s Essentials
        </h1>
      </header>

      {/* --- SMART FILTER & SORT BAR --- */}
      <div className="sticky top-[80px] z-40 bg-[var(--color-background)]/80 backdrop-blur-xl border-y border-[var(--color-muted)]/10 px-6 md:px-12 lg:px-16 py-4">
        <div className="max-w-[1920px] mx-auto flex flex-wrap justify-between items-center gap-4">
          
          <div className="flex items-center space-x-6 overflow-x-auto no-scrollbar pb-1 md:pb-0">
            {["All", "Coats", "Tailoring", "Knitwear", "Accessories"].map((cat) => (
              <button key={cat} className="text-[10px] uppercase tracking-[0.2em] whitespace-nowrap hover:text-[var(--color-accent)] transition-colors">
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-6 ml-auto">
            <div className="relative group">
              <button className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] font-medium">
                <span>Price</span>
                <ChevronDown size={12} strokeWidth={1.5} />
              </button>
              <div className="absolute top-full right-0 mt-2 w-40 bg-[var(--color-surface)] border border-[var(--color-muted)]/20 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <ul className="space-y-3">
                  <li className="text-[9px] uppercase tracking-widest cursor-pointer hover:text-[var(--color-accent)]">Under $200</li>
                  <li className="text-[9px] uppercase tracking-widest cursor-pointer hover:text-[var(--color-accent)]">$200 - $500</li>
                  <li className="text-[9px] uppercase tracking-widest cursor-pointer hover:text-[var(--color-accent)]">$500+</li>
                </ul>
              </div>
            </div>

            <button className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] font-medium">
              <span>Sort</span>
              <ChevronDown size={12} strokeWidth={1.5} />
            </button>

            <button className="p-1 hover:text-[var(--color-accent)] transition-colors">
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
              <div className="relative aspect-[3/4] overflow-hidden bg-[var(--color-surface)] mb-6">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-[var(--ease-apple)] group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col flex-grow text-center md:text-left px-1">
                <h3 className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-foreground)] mb-2">
                  {item.name}
                </h3>
                <p className="text-[11px] text-[var(--color-muted-foreground)] mb-6 tracking-widest">
                  {item.price}
                </p>
                <button className="mt-auto w-full border border-[var(--color-foreground)] py-3 text-[9px] uppercase tracking-[0.3em] font-bold transition-all duration-500 hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] flex items-center justify-center space-x-2">
                  <ShoppingBag size={12} />
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