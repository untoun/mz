import React, { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";

const PRODUCTS = [
  {
    id: 1,
    name: "Горошек зелёный",
    variant: "Лоток 12×18 см / срез 100 г",
    price: 235,
    image: "https://media.base44.com/images/public/6a5316ed0f20d00f5bb090e0/9cfe7c30f_generated_173516c3.png",
    vitamins: ["Вит. C", "Белок", "Клетчатка"],
    category: "popular",
  },
  {
    id: 2,
    name: "Подсолнечник",
    variant: "Лоток 12×18 см / срез 100 г",
    price: 235,
    image: "https://media.base44.com/images/public/6a5316ed0f20d00f5bb090e0/142a04596_generated_3a2e4251.png",
    vitamins: ["Вит. E", "Цинк", "Железо"],
    category: "popular",
  },
  {
    id: 3,
    name: "Редис фиолетовый",
    variant: "Лоток 12×18 см / срез 40 г",
    price: 245,
    image: "https://media.base44.com/images/public/6a5316ed0f20d00f5bb090e0/fd004dabf_generated_f03b8efd.png",
    vitamins: ["Вит. C", "Калий", "Фолат"],
    category: "spicy",
  },
  {
    id: 4,
    name: "Брокколи",
    variant: "Лоток 12×18 см / срез 30 г",
    price: 265,
    image: "https://media.base44.com/images/public/6a5316ed0f20d00f5bb090e0/5f80f28d4_generated_728dc452.png",
    vitamins: ["Сульфорафан", "Вит. K", "Вит. C"],
    category: "health",
  },
  {
    id: 5,
    name: "Амарант",
    variant: "Лоток 12×18 см / срез 20 г",
    price: 285,
    image: "https://media.base44.com/images/public/6a5316ed0f20d00f5bb090e0/79bf2e319_generated_a1102f52.png",
    vitamins: ["Кальций", "Железо", "Вит. A"],
    category: "exotic",
  },
  {
    id: 6,
    name: "Базилик зелёный",
    variant: "Лоток 12×18 см / срез 20 г",
    price: 285,
    image: "https://media.base44.com/images/public/6a5316ed0f20d00f5bb090e0/4e1d8e299_generated_5442b366.png",
    vitamins: ["Вит. K", "Магний", "Антиокс."],
    category: "aromatic",
  },
  {
    id: 7,
    name: "Горчица",
    variant: "Лоток 12×18 см / срез 40 г",
    price: 245,
    image: "https://media.base44.com/images/public/6a5316ed0f20d00f5bb090e0/f25a8dee1_generated_c30a4bf4.png",
    vitamins: ["Вит. A", "Вит. C", "Калий"],
    category: "spicy",
  },
  {
    id: 8,
    name: "Руккола",
    variant: "Лоток 12×18 см / срез 40 г",
    price: 245,
    image: "https://media.base44.com/images/public/6a5316ed0f20d00f5bb090e0/fd004dabf_generated_f03b8efd.png",
    vitamins: ["Вит. K", "Фолат", "Кальций"],
    category: "popular",
  },
  {
    id: 9,
    name: "Мангольд",
    variant: "Лоток 12×18 см / срез 40 г",
    price: 265,
    image: "https://media.base44.com/images/public/6a5316ed0f20d00f5bb090e0/79bf2e319_generated_a1102f52.png",
    vitamins: ["Вит. A", "Вит. C", "Магний"],
    category: "health",
  },
];

const CATEGORIES = [
  { key: "all", label: "Все" },
  { key: "popular", label: "Популярные" },
  { key: "spicy", label: "Острые" },
  { key: "aromatic", label: "Ароматные" },
  { key: "health", label: "Суперфуды" },
  { key: "exotic", label: "Экзотика" },
];

export default function CatalogSection({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="catalog" className="py-24 md:py-32 relative">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-lime-electric/3 rounded-full blur-[180px]" />

      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-lime-electric font-heading text-sm uppercase tracking-[0.25em] mb-4">Каталог</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold">
            Свежая <span className="text-lime-electric">микрозелень</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.key
                  ? "bg-lime-electric text-forest-deep"
                  : "bg-white/5 text-foreground/60 hover:text-lime-electric hover:bg-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}