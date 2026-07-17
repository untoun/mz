import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, ShoppingCart, Trash2 } from "lucide-react";

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemove }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full md:max-w-md z-50 bg-forest-deep border-l border-white/5 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <div className="flex items-center gap-3">
                <ShoppingCart className="w-5 h-5 text-lime-electric" />
                <h3 className="font-display text-lg font-bold">Корзина</h3>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-foreground/30">
                  <ShoppingCart className="w-16 h-16 mb-4" />
                  <p className="text-lg font-medium">Корзина пуста</p>
                  <p className="text-sm mt-1">Добавьте микрозелень из каталога</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="glass-card rounded-xl p-4 flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display font-bold text-sm truncate">{item.name}</h4>
                        <p className="text-lime-electric font-bold mt-1">{item.price} ₽</p>
                        <div className="flex items-center gap-3 mt-2">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.qty - 1)}
                            className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-sm font-bold w-4 text-center">{item.qty}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.qty + 1)}
                            className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => onRemove(item.id)}
                            className="ml-auto p-1 text-foreground/30 hover:text-destructive transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-foreground/50">Итого:</span>
                  <span className="font-body text-2xl font-bold text-foreground">{total} ₽</span>
                </div>
                <a
                  href="https://max.ru/u/f9LHodD0cOIgzB8PPL16ZxpD0Y7ELbSgqEq1YACHDjq1JYxWPcHdNrKm1-I"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-lime-electric text-forest-deep font-heading font-bold text-center uppercase tracking-wider rounded-full hover:shadow-[0_0_40px_rgba(200,255,0,0.3)] transition-all duration-500"
                >
                  Оформить заказ
                </a>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}