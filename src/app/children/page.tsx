"use client";
import CollectionTemplate from "@/components/Layouts/CollectionTemplate";
const products = [
  { id: 1, name: "Organic Cotton Set", price: "$110", img: "https://images.unsplash.com/photo-1519702777585-07f121d74653?q=80&w=800" },
  { id: 2, name: "Mini Pewter Cardigan", price: "$145", img: "https://images.unsplash.com/photo-1522771935876-2497116a3a9e?q=80&w=800" },
  { id: 3, name: "Linen Play Suit", price: "$95", img: "https://images.unsplash.com/photo-1544126592-807daf21565c?q=80&w=800" },
  { id: 4, name: "Soft Wool Beanie", price: "$45", img: "https://images.unsplash.com/photo-1604467731651-3987a0279620?q=80&w=800" },
  { id: 5, name: "Quilted Atelier Vest", price: "$180", img: "https://images.unsplash.com/photo-1519239495447-3ac6084bc618?q=80&w=800" },
  { id: 6, name: "Classic Leather Loafer", price: "$120", img: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=800" },
  { id: 7, name: "Ribbed Leggings", price: "$40", img: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?q=80&w=800" },
  { id: 8, name: "Ceremony Dress", price: "$220", img: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=800" },
  { id: 9, name: "Sherpa Trim Coat", price: "$260", img: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?q=80&w=800" },
  { id: 10, name: "Canvas Totebag", price: "$55", img: "https://images.unsplash.com/photo-1544126592-807daf21565c?q=80&w=800" },
  { id: 11, name: "Velora Logo Tee", price: "$65", img: "https://images.unsplash.com/photo-1519239495447-3ac6084bc618?q=80&w=800" },
  { id: 12, name: "Knit Mittens", price: "$35", img: "https://images.unsplash.com/photo-1522771935876-2497116a3a9e?q=80&w=800" },
];

export default function KidsCollection() {
  return <CollectionTemplate title="Children's Atelier" products={products} />;
}