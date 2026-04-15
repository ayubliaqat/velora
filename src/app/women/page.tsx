"use client";
import React from 'react';
import CollectionTemplate from '@/components/Layouts/CollectionTemplate';
const products = [
  { id: 1, name: "Silk Wrap Gown", price: "$1,200", img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800" },
  { id: 2, name: "Pewter Satin Blouse", price: "$340", img: "https://images.unsplash.com/photo-1550639524-a6f58345a2ca?q=80&w=800" },
  { id: 3, name: "Sculptural Silver Cuff", price: "$210", img: "https://images.unsplash.com/photo-1535633302704-b02f41af2435?q=80&w=800" },
  { id: 4, name: "Tailored Linen Blazer", price: "$680", img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=800" },
  { id: 5, name: "Minimalist Slip Dress", price: "$450", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800" },
  { id: 6, name: "Cashmere Turtleneck", price: "$520", img: "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?q=80&w=800" },
  { id: 7, name: "Onyx Evening Clutch", price: "$380", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800" },
  { id: 8, name: "High-Waist Trousers", price: "$410", img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800" },
  { id: 9, name: "Atelier Sun Hat", price: "$160", img: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?q=80&w=800" },
  { id: 10, name: "Plated Mesh Heel", price: "$590", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800" },
  { id: 11, name: "Ribbed Midi Skirt", price: "$290", img: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800" },
  { id: 12, name: "Geometric Earrings", price: "$120", img: "https://images.unsplash.com/photo-1535633302704-b02f41af2435?q=80&w=800" },
];

export default function WomenCollection() {
  return <CollectionTemplate title="Women's Series" products={products} />;
}