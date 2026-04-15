"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'New Arrivals', href: '/new-arrival' },
    { name: 'Women', href: '/women' },
    { name: 'Men', href: '/men' },
    { name: 'Children', href: '/children' },
  ];

  return (
    <header className="glass sticky top-0 z-50 w-full transition-all duration-[var(--duration-luxury)] ease-[var(--ease-apple)]">
      <div className="mx-auto max-w-[1920px] px-6 md:px-12 lg:px-16 py-5 md:py-8">
        
        {/* --- TOP ROW --- */}
        <div className="flex justify-between items-center relative">
          
          {/* MOBILE TOGGLE (LEFT) */}
          <div className="flex-1 md:hidden flex justify-start">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[var(--color-foreground)] p-1 active:scale-95 transition-transform"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={22} strokeWidth={1.2} /> : <Menu size={22} strokeWidth={1.2} />}
            </button>
          </div>

          {/* DESKTOP SPACER */}
          <div className="hidden md:flex flex-1" />

          {/* BRAND LOGO */}
          <Link href="/" className="flex-1 text-center group">
            <h1 className="m-0 font-serif text-2xl md:text-4xl lg:text-5xl tracking-[0.25em] uppercase leading-none text-[var(--color-foreground)]">
              Velora
            </h1>
          </Link>

          {/* UTILITIES */}
          <div className="flex-1 flex justify-end items-center space-x-6 md:space-x-10">
            <button className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors">
              <Search size={22} strokeWidth={1.2} />
            </button>
            
            <Link href="/cart" className="relative text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors">
              <ShoppingBag size={22} strokeWidth={1.2} />
              <span className="absolute -top-1.5 -right-2 text-[9px] flex items-center justify-center min-w-[16px] h-[16px] bg-[var(--color-accent)] text-white rounded-full border-2 border-[var(--color-background)]">
                0
              </span>
            </Link>
          </div>
        </div>

        {/* --- DESKTOP NAV --- */}
        <nav className="hidden md:flex justify-center items-center space-x-14 mt-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`
                  link-underline text-[11px] lg:text-[12px] uppercase tracking-[0.3em] font-medium transition-colors
                  ${isActive ? 'text-[var(--color-foreground)] after:scale-x-100' : 'text-[var(--color-muted-foreground)]'}
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* --- MOBILE DRAWER (REFINED) --- */}
      <div className={`
        md:hidden absolute top-full left-0 w-full bg-[var(--color-background)] border-b border-[var(--color-muted)] transition-all duration-500 ease-[var(--ease-apple)] overflow-hidden
        ${isMenuOpen ? 'max-h-[50vh] opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <nav className="flex flex-col items-center space-y-8 py-12 px-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              /* Refined size: 'text-base' for elegance, 'tracking-[0.4em]' for jeweler look */
              className="text-base uppercase tracking-[0.4em] font-serif text-[var(--color-foreground)] hover:opacity-50 transition-opacity"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Subtle separator in mobile menu */}
          <div className="w-8 h-[1px] bg-[var(--color-muted)] opacity-30 mt-4" />
        </nav>
      </div>
    </header>
  );
};

export default Header;