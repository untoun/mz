import React from "react";
import { motion } from "framer-motion";
import { Sprout, Scissors, Truck, UtensilsCrossed } from "lucide-react";

const STEPS = [
  {
    icon: Sprout,
    title: "Посадка",
    description: "Семена высаживаются в экологически чистый субстрат без химических удобрений",
    time: "День 1",
  },
  {
    icon: Scissors,
    title: "Сбор урожая",
    description: "Микрозелень срезается в момент максимальной питательной ценности",
    time: "День 3-7",
  },
  {
    icon: Truck,
    title: "Доставка",
    description: "Бережная доставка в специальной упаковке, сохраняющей свежесть",
    time: "В день среза",
  },
  {
    icon: UtensilsCrossed,
    title: "На вашем столе",
    description: "Свежайшая микрозелень готова украсить ваши блюда и обогатить рацион",
    time: "24 часа",
  },
];

export default function DeliverySection() {
  return (
    <section id="delivery" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime-electric/3 rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-lime-electric font-heading text-sm uppercase tracking-[0.25em] mb-4">Доставка</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-4">
            От семени до <span className="text-lime-electric">вашего стола</span>
          </h2>
          <p className="text-foreground/50 text-lg max-w-2xl mx-auto">
            Максимум 24 часа от среза до вашей кухни. Доставляем по Екатеринбургу.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[60px] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-lime-electric/30 to-transparent" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="w-[120px] h-[120px] mx-auto rounded-full glass-card flex items-center justify-center mb-6 relative z-10">
                <step.icon className="w-10 h-10 text-lime-electric" />
              </div>
              <span className="text-lime-electric text-xs font-bold uppercase tracking-widest mb-2 block">
                {step.time}
              </span>
              <h3 className="font-display text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-foreground/40 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Delivery info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 glass-card rounded-2xl p-8 md:p-12 grid md:grid-cols-3 gap-8"
        >
          <div>
            <h4 className="font-display font-bold text-lg mb-2">Минимальный заказ</h4>
            <p className="text-lime-electric font-display text-3xl font-extrabold">700 ₽</p>
            <p className="text-foreground/40 text-sm mt-1">Доставка от 700 ₽ бесплатно</p>
          </div>
          <div>
            <h4 className="font-display font-bold text-lg mb-2">Зона доставки</h4>
            <p className="text-foreground/60 text-base">Екатеринбург</p>
            <p className="text-foreground/40 text-sm mt-1">Время доставки: 2-4 часа</p>
          </div>
          <div>
            <h4 className="font-display font-bold text-lg mb-2">Оплата</h4>
            <p className="text-foreground/60 text-base">Наличные или перевод</p>
            <p className="text-foreground/40 text-sm mt-1">Оплата при получении</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}