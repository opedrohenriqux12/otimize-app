import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Sparkles, Smartphone, CheckCircle } from 'lucide-react';

interface Scene1HeroProps {
  onNext: () => void;
  onGoToMockups: () => void;
}

export const Scene1Hero: React.FC<Scene1HeroProps> = ({ onNext, onGoToMockups }) => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Otimizar o presente para construir o futuro';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 md:px-20 py-12 gap-8 max-w-7xl mx-auto">
      {/* Left Column: Headline & Hero Text */}
      <motion.div 
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex-1 flex flex-col items-start gap-6 z-10"
      >
        {/* Open Source Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Projeto Open Source • Uso Consciente de Telas</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none">
          <span className="text-white">Otim</span>
          <span className="text-emerald-500 drop-shadow-[0_0_35px_rgba(16,185,129,0.5)]">ize</span>
        </h1>

        {/* Typewriter Slogan */}
        <div className="h-14 sm:h-16 flex items-center">
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-300 font-sans tracking-tight">
            "{typedText}
            <span className="text-emerald-400 animate-blink">|</span>"
          </p>
        </div>

        {/* Short Value Proposition */}
        <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
          O aplicativo que transforma o tempo de tela consciente em recompensas digitais e físicas reais para jovens de 16 a 24 anos. Menos ansiedade, mais conquistas.
        </p>

        {/* Highlights Pill Badges */}
        <div className="flex flex-wrap gap-3 pt-2">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Recompensas Reais</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>IA Sophia Integrada</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Sincronizado com MEC</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <button
            onClick={onNext}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-extrabold text-base flex items-center gap-3 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <span>Explorar Apresentação</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={onGoToMockups}
            className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 text-white font-semibold text-base flex items-center gap-2 hover:bg-white/10 transition-all cursor-pointer"
          >
            <Smartphone className="w-5 h-5 text-emerald-400" />
            <span>Ver App Interativo</span>
          </button>
        </div>
      </motion.div>

      {/* Right Column: Floating Phone Mockup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="flex-1 flex items-center justify-center relative w-full max-w-sm lg:max-w-none"
      >
        {/* Glow backdrop */}
        <div className="absolute w-72 h-72 rounded-full bg-emerald-500/20 blur-3xl -z-10 animate-pulse" />

        {/* Smartphone Container */}
        <div className="w-[270px] sm:w-[300px] h-[540px] rounded-[42px] bg-slate-950 border-[6px] border-slate-800 p-3 shadow-2xl shadow-emerald-500/20 animate-float relative glass-panel">
          {/* Dynamic Island */}
          <div className="w-24 h-4 rounded-full bg-black mx-auto mb-3 flex items-center justify-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700" />
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
          </div>

          {/* Screen Content Preview */}
          <div className="w-full h-[470px] rounded-[30px] bg-[#0A0A0F] p-4 flex flex-col justify-between border border-white/5 overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-white/5 pb-2">
              <span className="text-emerald-400 font-bold">Otimize App</span>
              <span>100 PTS</span>
            </div>

            {/* Central Graphic */}
            <div className="flex flex-col items-center justify-center gap-3 my-auto">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center text-3xl font-extrabold text-slate-950 shadow-lg shadow-emerald-500/40">
                O
              </div>
              <h3 className="text-xl font-bold text-white">Foco Ativo</h3>
              <p className="text-xs text-slate-400 text-center px-4">
                Você acumula <span className="text-emerald-400 font-mono">+10 PTS</span> a cada 15 min de uso consciente!
              </p>

              {/* Progress Ring Simulation */}
              <div className="w-28 h-28 rounded-full border-4 border-emerald-500/20 border-t-emerald-500 flex items-center justify-center my-2 animate-spin duration-1000">
                <div className="text-center font-mono font-bold text-emerald-400 text-sm">
                  01:45:00
                </div>
              </div>
            </div>

            {/* Bottom Status Card */}
            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-emerald-500/30 flex items-center justify-between">
              <span className="text-xs text-slate-300">Próximo Nível</span>
              <span className="text-xs font-mono text-emerald-400 font-bold">85%</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
