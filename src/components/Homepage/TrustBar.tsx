"use client";

import React from 'react';
import { Truck, ShieldCheck, Headphones } from 'lucide-react';

export default function TrustBar() {
  const perks = [
    {
      title: "Global Shipping",
      desc: "Complimentary express delivery on all orders over $500.",
      icon: <Truck size={24} strokeWidth={1} />,
    },
    {
      title: "Secure Atelier",
      desc: "Encrypted transactions and authentic pewter-certified quality.",
      icon: <ShieldCheck size={24} strokeWidth={1} />,
    },
    {
      title: "24/7 Concierge",
      desc: "Direct access to our style consultants and support team.",
      icon: <Headphones size={24} strokeWidth={1} />,
    },
  ];

  return (
    <section className="py-20 bg-[var(--color-surface)] border-y border-[var(--color-muted)]/20">
      <div className="mx-auto max-w-[1920px] px-6 md:px-12 lg:px-16">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {perks.map((perk, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center md:items-start text-center md:text-left p-8 rounded-sm transition-all duration-700 hover:bg-[var(--color-background)] group"
            >
              {/* Icon Container with subtle animation */}
              <div className="mb-6 text-[var(--color-foreground)] opacity-70 group-hover:opacity-100 transition-opacity">
                {perk.icon}
              </div>

              {/* Text Content */}
              <h4 className="text-[11px] uppercase tracking-[0.4em] font-semibold text-[var(--color-foreground)] mb-4">
                {perk.title}
              </h4>
              
              <p className="text-[13px] leading-relaxed text-[var(--color-muted-foreground)] max-w-[280px]">
                {perk.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}