import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Award, Gift, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Scene3Solution: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      num: 1,
      title: 'Uso Consciente',
      desc: 'O usuário reduz hábitos automáticos e mantém o foco em tarefas diárias, estudos ou leituras.',
      icon: <Smartphone className="w-8 h-8 text-emerald-400" />,
      detail: 'Sem bloqueios punitivos. Apenas contagem em tempo real da sua atenção focada.'
    },
    {
      num: 2,
      title: 'Pontos de Tempo Consciente',
      desc: 'Cada minuto de foco acumula pontos na carteira do Otimize, com bônus por ofensivas de dias em sequência.',
      icon: <Award className="w-8 h-8 text-amber-400" />,
      detail: 'Acompanhe seu avanço em níveis: de "Iniciante do Foco" a "Mestre da Produtividade".'
    },
    {
      num: 3,
      title: 'Recompensas Reais',
      desc: 'Troque seus pontos acumulados por vouchers digitais (música, delivery) ou itens físicos entregues em casa.',
      icon: <Gift className="w-8 h-8 text-indigo-400" />,
      detail: 'Incentivos tangíveis que recompensam imediatamente seus esforços de médio e longo prazo.'
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center px-6 sm:px-12 md:px-20 py-12 max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
          MUDANÇA DE PARADIGMA
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Em vez de punir o uso de tela, <span className="text-emerald-400 underline decoration-emerald-500/50">recompensamos seu foco</span>.
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-3">
          O Otimize cria um ciclo positivo de motivação através da gamificação consciente.
        </p>
      </div>

      {/* Visual Flow Pipeline */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {steps.map((step) => {
          const isSelected = activeStep === step.num;
          return (
            <motion.div
              key={step.num}
              onClick={() => setActiveStep(step.num)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: step.num * 0.15 }}
              className={`p-6 rounded-3xl cursor-pointer transition-all border ${
                isSelected
                  ? 'bg-slate-900 border-emerald-500 shadow-xl shadow-emerald-500/20 scale-105'
                  : 'bg-slate-900/40 border-white/10 hover:border-white/20 hover:bg-slate-900/60'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  {step.icon}
                </div>
                <span className="text-2xl font-mono font-extrabold text-emerald-400/40">
                  0{step.num}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-4">{step.desc}</p>

              {/* Active step expanded insight */}
              <div className="pt-3 border-t border-white/5 flex items-start gap-2 text-xs text-emerald-300">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
                <span>{step.detail}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Connection Indicator */}
      <div className="mt-8 text-center text-xs font-mono text-slate-500 flex items-center justify-center gap-2">
        <span>PASSO DO CICLO: {activeStep} DE 3</span>
        <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
      </div>
    </div>
  );
};
