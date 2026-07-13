import React from "react";
import { motion } from "framer-motion";
import { Leaf, FlaskConical, ShieldCheck } from "lucide-react";

const LIFESTYLE_IMAGE = "https://media.base44.com/images/public/6a5316ed0f20d00f5bb090e0/a313514f6_generated_5b9608a9.png";

const FEATURES = [
  {
    icon: Leaf,
    title: "Экопродукт",
    description: "В процессе выращивания не используются удобрения. Микрозелень растёт благодаря чистой воде, натуральному биогумусу и специальному спектру освещения.",
  },
  {
    icon: FlaskConical,
    title: "Научно доказано",
    description: "Исследования подтвердили, что по содержанию полезных веществ микрозелень многократно превосходит взрослые растения.",
  },
  {
    icon: ShieldCheck,
    title: "Сертификация",
    description: "Вся продукция проходит полную проверку качества и имеет необходимую сертификацию.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-lime-electric/3 rounded-full blur-[150px]" />
      
      <div className="max-w-7xl mx-auto px-5">
        {/* Top block */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lime-electric font-heading text-sm uppercase tracking-[0.25em] mb-4">О нас</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Прямо с грядок<br />
              <span className="text-lime-electric">наших теплиц</span>
            </h2>
            <p className="text-foreground/60 text-lg leading-relaxed mb-6">
              Мы предлагаем вам микрозелень и съедобные цветы из первых рук. Наша продукция экологична и обладает свежим, 
              насыщенным вкусом благодаря отработанной технологии процессов и отвечает самым высоким стандартам качества.
            </p>
            <p className="text-foreground/60 text-lg leading-relaxed">
              Мы уже работаем с лучшими ресторанами и шеф-поварами Екатеринбурга, 
              и будем рады сотрудничеству с вами.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src={LIFESTYLE_IMAGE}
                alt="Микрозелень в современной кухне"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-lime-electric/20 rounded-2xl" />
          </motion.div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-8 hover:vitality-glow transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-xl bg-lime-electric/10 flex items-center justify-center mb-6 group-hover:bg-lime-electric/20 transition-colors">
                <feature.icon className="w-7 h-7 text-lime-electric" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-foreground/50 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}