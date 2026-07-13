import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, User, Phone, MessageSquare } from "lucide-react";
import MaxIcon from "@/components/MaxIcon";

export default function QuickOrderForm() {
  const [form, setForm] = useState({ name: "", phone: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open("https://max.ru/u/f9LHodD0cOIgzB8PPL16ZxpD0Y7ELbSgqEq1YACHDjq1JYxWPcHdNrKm1-I", "_blank");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", comment: "" });
    }, 4000);
  };

  return (
    <section id="order" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-lime-electric/5 rounded-full blur-[160px]" />

      <div className="max-w-2xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-lime-electric font-heading text-sm uppercase tracking-[0.25em] mb-4">
            Быстрый заказ
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-4">
            Оставьте <span className="text-lime-electric">заявку</span>
          </h2>
          <p className="text-foreground/50 text-lg">
            Заполните форму — и мы свяжемся с вами для оформления заказа
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass-card rounded-2xl p-8 space-y-5"
        >
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-foreground/60 mb-2">
              <User className="w-4 h-4 text-lime-electric" /> Ваше имя
            </label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Как к вам обращаться"
              className="w-full px-4 py-3 rounded-xl bg-forest-deep/50 border border-white/10 text-foreground placeholder:text-foreground/30 focus:border-lime-electric/50 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-foreground/60 mb-2">
              <Phone className="w-4 h-4 text-lime-electric" /> Телефон
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              placeholder="+7 (___) ___-__-__"
              className="w-full px-4 py-3 rounded-xl bg-forest-deep/50 border border-white/10 text-foreground placeholder:text-foreground/30 focus:border-lime-electric/50 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-foreground/60 mb-2">
              <MessageSquare className="w-4 h-4 text-lime-electric" /> Что хотите заказать
            </label>
            <textarea
              name="comment"
              rows="3"
              value={form.comment}
              onChange={handleChange}
              placeholder="Например: горошек, подсолнечник, руккола — по 2 лотка"
              className="w-full px-4 py-3 rounded-xl bg-forest-deep/50 border border-white/10 text-foreground placeholder:text-foreground/30 focus:border-lime-electric/50 focus:outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={submitted}
            className="w-full py-4 bg-lime-electric text-forest-deep font-heading font-bold uppercase tracking-wider rounded-full hover:shadow-[0_0_40px_rgba(74,222,128,0.3)] transition-all duration-500 flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {submitted ? (
              <>
                <CheckCircle className="w-5 h-5" /> Заявка отправлена!
              </>
            ) : (
              <>
                <MaxIcon className="w-5 h-5" /> Отправить заявку
              </>
            )}
          </button>

          <p className="text-center text-foreground/30 text-xs">
            Нажимая кнопку, вы откроете чат с нами в мессенджере MAX
          </p>
        </motion.form>
      </div>
    </section>
  );
}