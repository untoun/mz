import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Droplets, Sun, Zap } from "lucide-react";

export default function ProductCard({ product, onAddToCart, index = 0 }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="glass-card rounded-2xl overflow-hidden group cursor-pointer relative"
    >
      {/* Vitality glow on hover */}
      <div className={`absolute inset-0 rounded-2xl transition-all duration-700 pointer-events-none ${
        hovered ? "shadow-[0_0_40px_rgba(200,255,0,0.12)]" : ""
      }`} />

      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Vitality icons on hover */}
        <div className={`absolute bottom-4 left-4 right-4 flex gap-2 transition-all duration-500 ${
          hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          {product.vitamins?.map((v) => (
            <span
              key={v}
              className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-lime-electric/20 text-lime-electric rounded-full backdrop-blur-sm"
            >
              {v}
            </span>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-display text-base font-bold mb-1 group-hover:text-lime-electric transition-colors">
          {product.name}
        </h3>
        <p className="text-foreground/40 text-sm mb-4">{product.variant}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="font-body text-2xl font-bold text-foreground">
              {product.price}
            </span>
            <span className="text-foreground/40 text-sm">₽</span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="w-10 h-10 rounded-full bg-lime-electric text-forest-deep flex items-center justify-center hover:scale-110 hover:shadow-[0_0_20px_rgba(200,255,0,0.3)] transition-all duration-300"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}