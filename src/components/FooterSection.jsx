import React from "react";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import MaxIcon from "@/components/MaxIcon";

export default function FooterSection() {
  return (
    <footer id="contacts" className="border-t border-white/5">
      {/* Contact CTA */}
      <div className="max-w-7xl mx-auto px-5 py-20 text-center">
        <p className="text-lime-electric font-heading text-sm uppercase tracking-[0.25em] mb-4">Контакты</p>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-6">
          Свяжитесь <span className="text-lime-electric">с нами</span>
        </h2>
        <p className="text-foreground/50 text-lg max-w-xl mx-auto mb-10">
          Готовы ответить на любые вопросы и помочь с выбором микрозелени для вашего стола
        </p>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
          <a
            href="tel:+79961730229"
            className="glass-card rounded-2xl p-6 flex flex-col items-center gap-3 hover:vitality-glow transition-all duration-500 group"
          >
            <Phone className="w-6 h-6 text-lime-electric" />
            <span className="font-display font-bold text-sm group-hover:text-lime-electric transition-colors">
              +7 (996) 173-02-29
            </span>
          </a>
          <a
            href="mailto:mz-ekb@internet.ru"
            className="glass-card rounded-2xl p-6 flex flex-col items-center gap-3 hover:vitality-glow transition-all duration-500 group"
          >
            <Mail className="w-6 h-6 text-lime-electric" />
            <span className="font-display font-bold text-sm group-hover:text-lime-electric transition-colors">
              mz-ekb@internet.ru
            </span>
          </a>
          <a
            href="https://max.ru/u/f9LHodD0cOIgzB8PPL16ZxpD0Y7ELbSgqEq1YACHDjq1JYxWPcHdNrKm1-I"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-6 flex flex-col items-center gap-3 hover:vitality-glow transition-all duration-500 group"
          >
            <MaxIcon className="w-6 h-6" />
            <span className="font-display font-bold text-sm group-hover:text-lime-electric transition-colors">
              Написать в MAX
            </span>
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="font-display text-xl font-extrabold text-lime-electric">
              Микро<span className="text-foreground">зелень</span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-foreground/30 text-sm">
            <MapPin className="w-4 h-4" />
            <span>Екатеринбург</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-lime-electric/20 hover:text-lime-electric transition-all"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://max.ru/channel_microfresh"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-lime-electric/20 hover:text-lime-electric transition-all"
            >
              <MaxIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-foreground/20 text-xs">
            <span>© 2024 Микрозелень. Все права защищены.</span>
            <div className="flex gap-6">
              <a href="https://wa.me/79961730229?text=Политика%20конфиденциальности" target="_blank" rel="noopener noreferrer" className="hover:text-foreground/40 transition-colors">Политика конфиденциальности</a>
              <a href="https://wa.me/79961730229?text=Пользовательское%20соглашение" target="_blank" rel="noopener noreferrer" className="hover:text-foreground/40 transition-colors">Пользовательское соглашение</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}