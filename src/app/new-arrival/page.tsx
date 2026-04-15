"use client";
import CollectionTemplate from "@/components/Layouts/CollectionTemplate";
const products = [
  { id: 1, name: "Glass-Fiber Trench", price: "$1,450", img: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=800" },
  { id: 2, name: "Brutalist Heel No. 04", price: "$820", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800" },
  { id: 3, name: "Suede Overshirt", price: "$590", img: "https://images.unsplash.com/photo-1539533397308-a61d763d4d30?q=80&w=800" },
  { id: 4, name: "Metallic Mesh Scarf", price: "$240", img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=800" },
  { id: 5, name: "Sculpted Frame Bag", price: "$1,100", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800" },
  { id: 6, name: "Wide-Leg Satin Pant", price: "$440", img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800" },
  { id: 7, name: "Raw Edge Denim", price: "$320", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800" },
  { id: 8, name: "Oversized Knit Polo", price: "$310", img: "https://images.unsplash.com/photo-1626497748470-284d81f9f356?q=80&w=800" },
  { id: 9, name: "Pewter Cuff Links", price: "$190", img: "https://images.unsplash.com/photo-1633819187110-5f3308677536?q=80&w=800" },
  { id: 10, name: "Atelier Sunglass No.1", price: "$480", img: "https://images.unsplash.com/photo-1511499767390-90342f5677a7?q=80&w=800" },
  { id: 11, name: "Deconstructed Blazer", price: "$980", img: "https://images.unsplash.com/photo-1617130863154-8250122e4f5a?q=80&w=800" },
  { id: 12, name: "Velora Logo Chain", price: "$250", img: "https://images.unsplash.com/photo-1535633302704-b02f41af2435?q=80&w=800" },
];

export default function NewArrivals() {
  return <CollectionTemplate title="New Arrivals" products={products} />;
}