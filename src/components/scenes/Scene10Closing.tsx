import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Mail, MessageSquare, Globe, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Scene10ClosingProps {
  onRestart: () => void;
}

export const Scene10Closing: React.FC<Scene10ClosingProps> = ({ onRestart }) => {
  const handleFinalCta = () => {
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#10B981', '#6366F1', '#F59E0B', '#3B82F6'],
    });
  };

  return (
    <div className="w-full h-full flex flex-col justify-between px-6 sm:px-12 md:px-20 py-10 max-w-7xl mx-auto overflow-y-auto no-scrollbar">
      {/* Central Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center my-auto max-w-3xl mx-auto space-y-6">
        {/* Animated Brand Emblem */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-20 h-20 rounded-3xl bg-emerald-500 flex items-center justify-center text-4xl font-extrabold text-slate-950 shadow-2xl shadow-emerald-500/50"
        >
          O
        </motion.div>

        {/* Brand Name & Slogan */}
        <div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Otim<span className="text-emerald-500">ize</span>
          </h2>
          <p className="text-lg sm:text-2xl font-medium text-emerald-400 mt-2 italic font-sans">
            "Otimizar o presente para construir o futuro"
          </p>
        </div>

        <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
          Sua jornada para um uso de tela mais consciente, produtivo e recompensador começa hoje. Junte-se a milhares de jovens transformando tempo em conquistas reais.
        </p>

        {/* Main CTA */}
        <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={handleFinalCta}
            className="px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-base flex items-center gap-3 shadow-xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-slate-950 fill-slate-950" />
            <span>Quero otimizar meu tempo</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={onRestart}
            className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 text-white font-semibold text-sm flex items-center gap-2 hover:bg-white/10 transition-all cursor-pointer"
          >
            <span>Rever Apresentação (Cena 01)</span>
          </button>
        </div>
      </div>

      {/* Footer Links & Placeholders */}
      <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-400">
        <div className="flex items-center gap-2 justify-center sm:justify-start">
          <Mail className="w-4 h-4 text-emerald-400" />
          <span>contato@otimize.app</span>
        </div>

        <div className="flex items-center justify-center gap-4">
          <span className="flex items-center gap-1 hover:text-emerald-400 cursor-pointer">
            <MessageSquare className="w-3.5 h-3.5" /> Comunidade Discord
          </span>
          <span>•</span>
          <span className="flex items-center gap-1 hover:text-emerald-400 cursor-pointer">
            <Globe className="w-3.5 h-3.5" /> Portal de Documentação
          </span>
        </div>

        <div className="flex items-center gap-1 justify-center sm:justify-end text-[11px]">
          <span>Desenvolvido com</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>para o futuro consciente.</span>
        </div>
      </div>
    </div>
  );
};
