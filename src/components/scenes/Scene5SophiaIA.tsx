import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, Send, CheckCircle2, Sparkles, User, RefreshCw } from 'lucide-react';

export const Scene5SophiaIA: React.FC = () => {
  const [messages, setMessages] = useState<
    { sender: 'user' | 'sophia'; text: string; steps?: { text: string; pts: number }[] }[]
  >([
    {
      sender: 'user',
      text: 'Sophia, preciso estudar a prova inteira de Matemática e Redação do ENEM, mas não sei por onde começar e estou paralisado.',
    },
  ]);

  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const runSimulation = () => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'sophia',
          text: 'Olá! Não se preocupe. Do grego sophía ("sabedoria"), meu objetivo é transformar esse grande desafio em 3 micro-passos executáveis para hoje:',
          steps: [
            { text: 'Passo 1: Resolver 5 questões de Geometria Plana (15 min)', pts: 25 },
            { text: 'Passo 2: Escrever a introdução da redação com modelo nota 1000 (20 min)', pts: 35 },
            { text: 'Passo 3: Fazer um quiz de 3 perguntas no Otimize para fixação (10 min)', pts: 20 },
          ],
        },
      ]);
      setIsTyping(false);
    }, 1200);
  };

  useEffect(() => {
    runSimulation();
  }, []);

  const toggleStep = (idx: number) => {
    if (completedSteps.includes(idx)) {
      setCompletedSteps(completedSteps.filter((i) => i !== idx));
    } else {
      setCompletedSteps([...completedSteps, idx]);
    }
  };

  return (
    <div className="w-full h-full flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 md:px-20 py-10 gap-8 max-w-7xl mx-auto">
      {/* Left Info Panel */}
      <div className="flex-1 flex flex-col items-start gap-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono">
          <Bot className="w-4 h-4 text-indigo-400" />
          <span>COPILOTO INTELIGENTE DE HÁBITOS</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          IA <span className="text-indigo-400">Sophia</span>
        </h2>

        <p className="text-sm font-mono text-indigo-300/80 bg-indigo-950/40 px-3 py-1.5 rounded-lg border border-indigo-500/20">
          Etimologia: Do grego <span className="text-white italic">sophía</span> = Sabedoria.
        </p>

        <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-md">
          A Sophia atua como sua mentora pessoal. Ela pega objetivos gigantescos e assustadores e os desmembra em micro-passos executáveis que não causam ansiedade.
        </p>

        <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 text-xs text-slate-300 space-y-2 w-full max-w-md">
          <div className="flex items-center gap-2 font-bold text-indigo-300">
            <Sparkles className="w-4 h-4" />
            <span>Por que micro-passos funcionam?</span>
          </div>
          <p className="text-slate-400">
            A neurociência comprova que completar tarefas de 15 a 20 minutos gera picos de dopamina saudável, eliminando a paralisia por procrastinação.
          </p>
        </div>

        <button
          onClick={() => {
            setMessages([
              {
                sender: 'user',
                text: 'Sophia, preciso organizar meu cronograma de estudos para a prova da faculdade.',
              },
            ]);
            setCompletedSteps([]);
            runSimulation();
          }}
          className="mt-2 px-5 py-2.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/40 border border-indigo-500/40 text-indigo-300 text-xs font-mono flex items-center gap-2 transition-all cursor-pointer"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Simular Nova Pergunta à Sophia</span>
        </button>
      </div>

      {/* Right Chat Interface */}
      <div className="flex-1 w-full max-w-md h-[460px] rounded-3xl bg-slate-900/90 border border-indigo-500/30 p-4 flex flex-col justify-between shadow-2xl backdrop-blur-md relative overflow-hidden">
        {/* Chat Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-600/30">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">Sophia IA PRO</h3>
              <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Online • Copiloto de Hábitos
              </span>
            </div>
          </div>
          <span className="text-[10px] font-mono px-2 py-1 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            v2.4
          </span>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto no-scrollbar py-4 space-y-4">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'sophia' && (
                <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white shrink-0 mt-1">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`p-3.5 rounded-2xl max-w-[85%] text-xs leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-emerald-600 text-white rounded-br-none'
                    : 'bg-slate-800 text-slate-200 border border-white/10 rounded-bl-none'
                }`}
              >
                <p>{msg.text}</p>

                {msg.steps && (
                  <div className="mt-3 space-y-2 border-t border-white/10 pt-2">
                    {msg.steps.map((step, sIdx) => {
                      const isDone = completedSteps.includes(sIdx);
                      return (
                        <div
                          key={sIdx}
                          onClick={() => toggleStep(sIdx)}
                          className={`p-2 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                            isDone
                              ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300'
                              : 'bg-slate-900 border-white/10 text-slate-300 hover:border-indigo-400/40'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <CheckCircle2
                              className={`w-4 h-4 ${isDone ? 'text-emerald-400' : 'text-slate-500'}`}
                            />
                            <span className={isDone ? 'line-through text-slate-400' : ''}>
                              {step.text}
                            </span>
                          </div>
                          <span className="font-mono text-[10px] text-amber-400 font-bold shrink-0">
                            +{step.pts} PTS
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {msg.sender === 'user' && (
                <div className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center text-white shrink-0 mt-1">
                  <User className="w-4 h-4" />
                </div>
              )}
            </motion.div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-indigo-400 font-mono italic">
              <Sparkles className="w-3.5 h-3.5 animate-spin" />
              <span>Sophia está estruturando seus micro-passos...</span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="border-t border-white/10 pt-2 flex items-center gap-2">
          <input
            type="text"
            readOnly
            value="Estudar Redação e Matemática..."
            className="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-xs text-slate-400 focus:outline-none"
          />
          <button className="p-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 transition-colors">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
