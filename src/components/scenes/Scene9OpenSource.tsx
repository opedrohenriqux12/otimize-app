import React from 'react';
import { motion } from 'framer-motion';
import { Code, ShieldCheck, Heart, GitBranch, Terminal, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../GithubIcon';

export const Scene9OpenSource: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center px-6 sm:px-12 md:px-20 py-10 max-w-7xl mx-auto overflow-y-auto no-scrollbar">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
          <GithubIcon className="w-4 h-4 text-emerald-400" />
          <span>TRANSPARÊNCIA ABSOLUTA</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          100% <span className="text-emerald-400 underline decoration-emerald-500/50">Open Source</span> e Comunitário
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-2">
          Acreditamos que o software para saúde mental e foco jovem não deve conter caixas-pretas nem monetização oculta de dados pessoais.
        </p>
      </div>

      {/* Grid of 3 Open Source Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 hover:border-emerald-500/30 transition-all"
        >
          <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 w-fit mb-4">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Privacidade em Primeiro Lugar</h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Seus dados de uso de tela e rotina permanecem no seu dispositivo. Sem rastreadores invasivos de terceiros.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 hover:border-indigo-500/30 transition-all"
        >
          <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 w-fit mb-4">
            <Code className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Auditoria de Código Aberto</h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Qualquer desenvolvedor pode inspecionar o código no GitHub, verificar a lógica dos algoritmos de pontos e propor melhorias.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 hover:border-amber-500/30 transition-all"
        >
          <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 w-fit mb-4">
            <Heart className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Desenvolvido Pela Comunidade</h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Estudantes, designers e programadores colaboram juntos criando novas integrações com o MEC, podcasts e parceiros de prêmios.
          </p>
        </motion.div>
      </div>

      {/* GitHub Callout Card */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-emerald-950/40 to-slate-900 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex items-center gap-4">
          <div className="p-4 rounded-2xl bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/30 shrink-0">
            <Terminal className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <span>github.com/otimize-app/otimize</span>
              <GitBranch className="w-4 h-4 text-emerald-400" />
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              Licença MIT • Contribua com Pull Requests, sugestões de funcionalidades ou reporte bugs.
            </p>
          </div>
        </div>

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/30 transition-all shrink-0"
        >
          <GithubIcon className="w-4 h-4" />
          <span>Ver Repositório no GitHub</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
