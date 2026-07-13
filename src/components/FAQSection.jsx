import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_DATA = [
  {
    q: "Что такое микрозелень?",
    a: "Микрозелень — это молодые побеги растений в возрасте 7-14 дней. Они содержат в 4-40 раз больше питательных веществ, чем взрослые растения. Это концентрат витаминов, минералов и антиоксидантов в миниатюрном виде.",
  },
  {
    q: "Как хранить микрозелень?",
    a: "Микрозелень на корню хранится в холодильнике до 7 дней. Срезанная микрозелень — до 5 дней в герметичном контейнере при температуре +2...+6°C. Не мойте микрозелень заранее — только перед употреблением.",
  },
  {
    q: "Как использовать микрозелень?",
    a: "Добавляйте в салаты, смузи, сэндвичи, используйте как гарнир к основным блюдам. Микрозелень отлично дополняет супы, пасту и даже десерты. Главное — не подвергать термообработке, чтобы сохранить все полезные свойства.",
  },
  {
    q: "Есть ли минимальный заказ?",
    a: "Минимальный заказ составляет 1000 ₽. При заказе от этой суммы доставка по Москве бесплатна. Доставка по Московской области рассчитывается индивидуально.",
  },
  {
    q: "Как часто осуществляется доставка?",
    a: "Мы доставляем ежедневно по будням. Вы можете выбрать удобное время доставки при оформлении заказа. Также доступна подписка с регулярной доставкой 1-7 раз в неделю.",
  },
  {
    q: "Используются ли пестициды при выращивании?",
    a: "Нет. Мы принципиально не используем никаких химических удобрений и пестицидов. Микрозелень выращивается на чистой воде и натуральном биогумусе под специальными лампами с оптимальным спектром излучения.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 md:py-32 relative">
      <div className="max-w-3xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-lime-electric font-heading text-sm uppercase tracking-[0.25em] mb-4">FAQ</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold">
            Частые <span className="text-lime-electric">вопросы</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {FAQ_DATA.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card rounded-xl border-none px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-display font-bold text-base hover:text-lime-electric transition-colors py-5 hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/50 leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}