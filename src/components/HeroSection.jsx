import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HERO_IMAGE = "https://media.base44.com/images/public/6a5316ed0f20d00f5bb090e0/b2963f124_generated_25a40433.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Макро-съёмка ростков микрозелени с каплями росы"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/70 via-forest-deep/50 to-forest-deep" />
      </div>

      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-lime-electric/5 blur-[120px] animate-pulse-glow" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lime-electric font-heading text-sm md:text-base uppercase tracking-[0.3em] mb-6">
            Свежая микрозелень премиум-качества
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] mb-8 text-glow"
        >
          <span className="text-foreground">Живая энергия</span>
          <br />
          <span className="text-lime-electric">к вашему столу</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Выращиваем экологически чистую микрозелень без удобрений. 
          От теплицы до вашей кухни — максимум 24 часа.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#catalog"
            className="inline-flex items-center justify-center px-8 py-4 bg-lime-electric text-forest-deep font-heading font-bold text-base uppercase tracking-wider rounded-full hover:shadow-[0_0_40px_rgba(200,255,0,0.3)] transition-all duration-500 hover:scale-105"
          >
            Перейти в каталог
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-4 border border-foreground/20 text-foreground font-heading font-medium text-base uppercase tracking-wider rounded-full hover:border-lime-electric/50 hover:text-lime-electric transition-all duration-500"
          >
            Узнать больше
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="w-5 h-5 text-foreground/30" />
      </motion.div>
    </section>
  );
}