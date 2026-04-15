import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const shopLinks = [
    { name: 'New Arrivals', href: '/collections/new-arrivals' },
    { name: 'Men', href: '/collections/men' },
    { name: 'Women', href: '/collections/women' },
    { name: 'Children', href: '/collections/children' },
  ];

  return (
    /* Background matches Header exactly (glass utility) */
    <footer className="glass border-t border-[var(--color-muted)] pt-16 pb-12 transition-all duration-[var(--duration-luxury)] ease-[var(--ease-apple)]">
      <div className="mx-auto max-w-[1920px] px-6 md:px-12 lg:px-16">
        
        {/* --- 3 SECTIONS IN A ROW (CENTERED) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center mb-16">
          
          {/* Section 1: Shop Collections (New Section you asked for) */}
          <div className="flex flex-col items-center space-y-5">
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-medium text-[var(--color-foreground)]">
              Collections
            </h4>
            <ul className="space-y-3 text-[14px]">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="link-underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2: Brand & Contact */}
          <div className="flex flex-col items-center space-y-5">
            <h3 className="font-serif text-2xl tracking-[0.2em] uppercase text-[var(--color-foreground)]">
              Velora
            </h3>
            <ul className="space-y-3 text-[14px]">
              <li><Link href="/about" className="link-underline">Our Story</Link></li>
              <li><Link href="/contact" className="link-underline">Contact Us</Link></li>
              <li><Link href="/shipping" className="link-underline">Shipping & Returns</Link></li>
            </ul>
          </div>

          {/* Section 3: Legal & Information */}
          <div className="flex flex-col items-center space-y-5">
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-medium text-[var(--color-foreground)]">
              Information
            </h4>
            <ul className="space-y-3 text-[14px]">
              <li><Link href="/privacy" className="link-underline">Privacy Policy</Link></li>
              <li><Link href="/terms" className="link-underline">Terms & Conditions</Link></li>
              <li><Link href="/faq" className="link-underline">FAQs</Link></li>
            </ul>
          </div>

        </div>

        {/* --- COPYRIGHT SECTION --- */}
        <div className="pt-8 border-t border-[var(--color-muted)]/20">
          <div className="text-center">
            {/* Standard sentence case as requested */}
            <p className="text-[12px] text-[var(--color-muted-foreground)] opacity-80">
              © {currentYear} Velora. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;