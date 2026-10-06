import React from 'react';
import { motion } from 'framer-motion';
import { PROBLEMS_DATA } from '../../data/presentationData';
import { Smartphone, Target, ZapOff, Award, BookOpen, ShieldAlert } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Smartphone: <Smartphone className="w-6 h-6 text-amber-400" />,
  Target: <Target className="w-6 h-6 text-rose-400" />,
  ZapOff: <ZapOff className="w-6 h-6 text-orange-400" />,
  Award: <Award className="w-6 h-6 text-indigo-400" />,
  BookOpen: <BookOpen className="w-6 h-6 text-blue-400" />,
  ShieldAlert: <ShieldAlert className="w-6 h-6 text-emerald-400" />,
};

export const Scene2Problems: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center px-6 sm:px-12 md:px-20 py-12 max-w-7xl mx-auto overflow-y-auto no-scrollbar">
      {/* Header */}
      <div className="mb-8 text-center max-w-2xl mx-auto">
        <div className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
          DIAGNÓSTICO DA ROTINA JOVEM
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          As Dores que o Otimize Resolve
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-2">
          Jovens de 16 a 24 anos enfrentam desafios diários na gestão de tempo e foco. Entenda o cenário atual:
        </p>
      </div>

      {/* Grid of Problem Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROBLEMS_DATA.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-amber-500/40 backdrop-blur-md transition-all group hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-amber-500/10 transition-colors">
                {iconMap[item.icon]}
              </div>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 border border-white/5">
                {item.tag}
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
