import React from "react";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const PLANS = [
  {
    name: "Стартовый",
    price: "690",
    period: "/неделя",
    description: "Идеально для знакомства",
    features: [
      "3 вида микрозелени",
      "Доставка 1 раз в неделю",
      "Выбор сортов на ваш вкус",
      "Рецепты в подарок",
    ],
    popular: false,
  },
  {
    name: "Витальный",
    price: "1 190",
    period: "/неделя",
    description: "Самый популярный выбор",
    features: [
      "5 видов микрозелени",
      "Доставка 2 раза в неделю",
      "Выбор сортов + новинки",
      "Рецепты",
      "Скидка 10% на весь каталог",
    ],
    popular: true,
  },
  {
    name: "Максимум",
    price: "2 690",
    period: "/неделя",
    description: "Для настоящих ценителей",
    features: [
      "Все виды микрозелени",
      "Доставка каждый день",
      "Приоритетный сбор урожая",
      "Персональный менеджер",
      "Скидка 20% на весь каталог",
      "Съедобные цветы в подарок",
    ],
    popular: false,
  },
];

export default function SubscriptionSection() {
  return (
    <section id="subscription" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-lime-electric/3 rounded-full blur-[180px]" />

      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-lime-electric font-heading text-sm uppercase tracking-[0.25em] mb-4">Подписка</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-4">
            Свежесть <span className="text-lime-electric">по расписанию</span>
          </h2>
          <p className="text-foreground/50 text-lg max-w-2xl mx-auto">
            Оформите подписку и получайте свежую микрозелень регулярно с выгодой до 20%
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`rounded-2xl p-8 relative ${
                plan.popular
                  ? "border-2 border-lime-electric/50 bg-lime-electric/5"
                  : "glass-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-4 py-1 bg-lime-electric text-forest-deep text-xs font-bold uppercase tracking-wider rounded-full">
                  <Star className="w-3 h-3" />
                  Популярный
                </div>
              )}

              <h3 className="font-display text-xl font-bold mb-1">{plan.name}</h3>
              <p className="text-foreground/40 text-sm mb-5">{plan.description}</p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-body text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-foreground/40 text-sm">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-foreground/70">
                    <Check className="w-4 h-4 text-lime-electric flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://max.ru/u/f9LHodD0cOIgzB8PPL16ZxpD0Y7ELbSgqEq1YACHDjq1JYxWPcHdNrKm1-I"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-3.5 text-center font-heading font-bold uppercase tracking-wider rounded-full transition-all duration-500 text-sm ${
                  plan.popular
                    ? "bg-lime-electric text-forest-deep hover:shadow-[0_0_30px_rgba(200,255,0,0.3)]"
                    : "border border-foreground/20 text-foreground hover:border-lime-electric/50 hover:text-lime-electric"
                }`}
              >
                Оформить подписку
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}