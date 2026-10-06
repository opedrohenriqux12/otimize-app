import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, Monitor, Eye, Lock, ArrowRight, 
  Moon, LayoutDashboard, Bot, GraduationCap, Headphones, Import, 
  Award, CreditCard, User, Flame, CheckCircle2, Clock, BookOpen, ShieldCheck, Plus
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const Scene8InteractiveMockups: React.FC = () => {
  const [deviceTab, setDeviceTab] = useState<'phone' | 'desktop'>('desktop');
  const [loginTab, setLoginTab] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('seuemail@exemplo.com');
  const [password, setPassword] = useState('12345678');
  const [remember, setRemember] = useState(true);
  const [activeSidebar, setActiveSidebar] = useState('Dashboard');
  const [dashboardTasks, setDashboardTasks] = useState([
    { id: 1, title: 'Concluir Módulo 3: Lógica & Algoritmos (Plataforma Aprenda Mais MEC)', pts: 100, done: false, color: 'text-emerald-400' },
    { id: 2, title: 'Quiz de Validação: Fundamentos de Marketing Digital', pts: 75, done: false, color: 'text-indigo-400' },
    { id: 3, title: 'Ouvir Podcast: "Foco no que Importa: Ergonomia & Saúde Mental"', pts: 50, done: true, color: 'text-amber-400' },
    { id: 4, title: 'Manter uso de Instagram/TikTok abaixo de 30 minutos', pts: 50, done: false, color: 'text-blue-400' },
  ]);
  const [ptsCount, setPtsCount] = useState(50);

  const toggleTask = (id: number) => {
    setDashboardTasks(tasks => tasks.map(t => {
      if (t.id === id) {
        const nextDone = !t.done;
        setPtsCount(prev => nextDone ? prev + t.pts : prev - t.pts);
        if (nextDone) {
          confetti({
            particleCount: 50,
            spread: 50,
            origin: { y: 0.6 },
            colors: ['#10B981', '#3B82F6']
          });
        }
        return { ...t, done: nextDone };
      }
      return t;
    }));
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDeviceTab('desktop');
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.5 },
      colors: ['#10B981', '#6366F1']
    });
  };

  return (
    <div className="w-full h-full flex flex-col justify-between px-4 sm:px-10 md:px-16 py-8 max-w-[1400px] mx-auto overflow-y-auto no-scrollbar">
      {/* Scene Header & Device Switcher Tabs */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
        <div>
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-1">
            DEMONSTRAÇÃO 100% CÓDIGO VIVO (HTML / CSS / SVG)
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Navegue pelos Mockups do App
          </h2>
        </div>

        {/* Device Switcher */}
        <div className="flex items-center p-1.5 rounded-2xl bg-slate-900 border border-white/10">
          <button
            onClick={() => setDeviceTab('phone')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
              deviceTab === 'phone'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>Celular (Login)</span>
          </button>

          <button
            onClick={() => setDeviceTab('desktop')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
              deviceTab === 'desktop'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Monitor className="w-4 h-4" />
            <span>Computador (Dashboard)</span>
          </button>
        </div>
      </div>

      {/* Main Showcase Window */}
      <div className="flex-1 flex items-center justify-center relative w-full my-auto">
        {deviceTab === 'phone' ? (
          /* ==================== PHONE MOCKUP (LOGIN SCREEN) ==================== */
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-[340px] sm:max-w-[370px] bg-[#0d0e14] border-[8px] border-[#1a1b26] rounded-[44px] p-4 shadow-2xl shadow-emerald-500/10 text-white relative font-sans my-2"
          >
            {/* Dynamic Island Notch */}
            <div className="w-28 h-4 rounded-full bg-black mx-auto mb-4 flex items-center justify-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700" />
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>

            {/* Inner Phone Screen Content */}
            <div className="w-full bg-[#12131A] rounded-[32px] p-5 border border-white/5 flex flex-col items-center justify-between text-center min-h-[500px]">
              {/* App Icon */}
              <div className="w-14 h-14 rounded-2xl bg-[#10B981] flex items-center justify-center font-extrabold text-black text-2xl shadow-lg shadow-emerald-500/40 mb-2">
                O
              </div>

              {/* Title Logo */}
              <div className="text-2xl font-extrabold tracking-tight mb-1">
                <span>Otim</span>
                <span className="text-[#10B981]">ize</span>
              </div>

              {/* Slogan */}
              <p className="text-[11px] text-slate-400 mb-5 italic">
                "Otimizar o presente para construir o futuro"
              </p>

              {/* Form Container */}
              <form onSubmit={handleLoginSubmit} className="w-full space-y-4 text-left">
                {/* Tabs Entrar / Criar Conta */}
                <div className="grid grid-cols-2 p-1 rounded-xl bg-[#181924] border border-white/5">
                  <button
                    type="button"
                    onClick={() => setLoginTab('login')}
                    className={`py-2 rounded-lg text-xs font-bold transition-all text-center ${
                      loginTab === 'login' ? 'bg-[#222332] text-white shadow' : 'text-slate-400'
                    }`}
                  >
                    Entrar
                  </button>
                  <button
                    type="button"
                    onClick={() => setLoginTab('register')}
                    className={`py-2 rounded-lg text-xs font-bold transition-all text-center ${
                      loginTab === 'register' ? 'bg-[#222332] text-white shadow' : 'text-slate-400'
                    }`}
                  >
                    Criar Conta
                  </button>
                </div>

                {/* Email Field */}
                <div>
                  <label className="text-[11px] text-slate-400 font-medium mb-1 block">
                    E-mail do Usuário:
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#181924] border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
                      placeholder="seuemail@exemplo.com"
                    />
                    <div className="absolute right-3 p-1 rounded bg-emerald-500/20 text-emerald-400">
                      <Lock className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label className="text-[11px] text-slate-400 font-medium mb-1 block">
                    Senha:
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#181924] border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
                    />
                    <div className="absolute right-3 flex items-center gap-1.5">
                      <div className="p-1 rounded bg-emerald-500/20 text-emerald-400">
                        <Lock className="w-3.5 h-3.5" />
                      </div>
                      <Eye className="w-3.5 h-3.5 text-slate-400 cursor-pointer" />
                    </div>
                  </div>
                </div>

                {/* Checkbox */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="w-4 h-4 rounded accent-emerald-500 cursor-pointer"
                  />
                  <label htmlFor="remember" className="text-[11px] text-slate-300 cursor-pointer">
                    Lembrar meu login
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#10B981] hover:bg-[#0F9D6B] text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30 transition-all cursor-pointer"
                >
                  <span>Entrar na Plataforma</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* Bottom Shortcuts */}
              <div className="w-full pt-4 border-t border-white/5 flex items-center justify-around text-[10px] text-slate-400">
                <span className="flex items-center gap-1 hover:text-emerald-400 cursor-pointer">
                  <Bot className="w-3.5 h-3.5 text-emerald-400" /> Sophia IA
                </span>
                <span className="flex items-center gap-1 hover:text-emerald-400 cursor-pointer">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-400" /> Cursos MEC
                </span>
                <span className="flex items-center gap-1 hover:text-emerald-400 cursor-pointer">
                  <Award className="w-3.5 h-3.5 text-emerald-400" /> Recompensas
                </span>
              </div>
            </div>
          </motion.div>
        ) : (
          /* ==================== DESKTOP MOCKUP (DASHBOARD) ==================== */
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-5xl bg-[#090A0F] border-[6px] border-[#181924] rounded-2xl shadow-2xl shadow-emerald-500/10 overflow-hidden text-white font-sans text-xs flex flex-col md:flex-row min-h-[540px]"
          >
            {/* Sidebar */}
            <div className="w-full md:w-56 bg-[#0D0E15] border-b md:border-b-0 md:border-r border-white/10 p-4 flex flex-col justify-between shrink-0">
              <div className="space-y-6">
                {/* Logo & Theme Toggle */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-[#10B981] flex items-center justify-center font-extrabold text-black text-xs">
                      O
                    </div>
                    <span className="font-extrabold text-sm text-white">Otimize</span>
                  </div>
                  <div className="p-1 rounded-md bg-slate-800 text-slate-400">
                    <Moon className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Section PLATAFORMA */}
                <div>
                  <span className="text-[9px] font-mono uppercase text-slate-500 tracking-wider block mb-2">
                    Plataforma
                  </span>
                  <div className="space-y-1">
                    {[
                      { name: 'Dashboard', icon: <LayoutDashboard className="w-3.5 h-3.5" /> },
                      { name: 'IA Sophia', icon: <Bot className="w-3.5 h-3.5" />, badge: 'PRO' },
                      { name: 'Estudos & MEC', icon: <GraduationCap className="w-3.5 h-3.5" /> },
                      { name: 'Podcasts', icon: <Headphones className="w-3.5 h-3.5" /> },
                    ].map((item) => (
                      <button
                        key={item.name}
                        onClick={() => setActiveSidebar(item.name)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl transition-all ${
                          activeSidebar === item.name
                            ? 'bg-[#10B981]/15 text-[#10B981] font-bold border border-[#10B981]/30'
                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {item.icon}
                          <span>{item.name}</span>
                        </div>
                        {item.badge && (
                          <span className="text-[8px] font-mono px-1 rounded bg-indigo-500/30 text-indigo-300">
                            {item.badge}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Section GAMIFICAÇÃO & PREFERÊNCIAS */}
                <div>
                  <span className="text-[9px] font-mono uppercase text-slate-500 tracking-wider block mb-2">
                    Gamificação & Preferências
                  </span>
                  <div className="space-y-1">
                    {[
                      { name: 'Importar MEC', icon: <Import className="w-3.5 h-3.5" /> },
                      { name: 'Recompensas', icon: <Award className="w-3.5 h-3.5" /> },
                      { name: 'Meu Plano', icon: <CreditCard className="w-3.5 h-3.5" /> },
                      { name: 'Painel do Usuário', icon: <User className="w-3.5 h-3.5" /> },
                    ].map((item) => (
                      <button
                        key={item.name}
                        onClick={() => setActiveSidebar(item.name)}
                        className={`w-full flex items-center gap-2 px-3 py-2 rounded-xl transition-all ${
                          activeSidebar === item.name
                            ? 'bg-[#10B981]/15 text-[#10B981] font-bold border border-[#10B981]/30'
                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* User Profile */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-teal-600 flex items-center justify-center font-bold text-[10px] text-white">
                    PE
                  </div>
                  <div>
                    <span className="font-bold text-white block leading-tight">PEDR</span>
                    <span className="text-[9px] text-rose-400 hover:underline cursor-pointer">
                      [→ Sair da Conta]
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Area */}
            <div className="flex-1 p-5 bg-[#0A0B10] overflow-y-auto no-scrollbar space-y-4">
              {/* Header Greeting & Streak */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-1.5">
                    Olá, PEDR! 👋
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    Otimize o presente para construir seu futuro consciente.
                  </p>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-mono flex items-center gap-1 font-bold">
                  <Flame className="w-3.5 h-3.5 fill-amber-400" />
                  <span>0 Dias no Foco</span>
                </div>
              </div>

              {/* Main Points & Level Card */}
              <div className="p-4 rounded-2xl bg-[#12131B] border border-white/10 relative">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
                  <div>
                    <div className="text-2xl font-mono font-extrabold text-white">{ptsCount}</div>
                    <span className="text-[10px] text-slate-400">Pontos de Tempo Consciente Acumulados</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-[10px] font-mono flex items-center gap-1 hover:bg-white/10">
                      <Plus className="w-3 h-3 text-emerald-400" /> Sincronizar Aprenda Mais MEC
                    </button>
                    <button 
                      onClick={() => confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } })}
                      className="px-3 py-1.5 rounded-xl bg-[#10B981] hover:bg-[#0F9D6B] text-slate-950 font-bold text-[10px] font-mono flex items-center gap-1"
                    >
                      Resgatar Recompensas
                    </button>
                  </div>
                </div>

                <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-1">
                  <span>Nível 1 — Iniciante do Foco</span>
                  <span>{ptsCount} / 500 pts</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-900 border border-white/5 overflow-hidden mb-3">
                  <div className="h-full bg-[#10B981] rounded-full" style={{ width: `${(ptsCount / 500) * 100}%` }} />
                </div>

                {/* Badges Pills */}
                <div className="flex flex-wrap gap-2 pt-1 border-t border-white/5">
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] font-mono flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Sincronização em Tempo Real
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[9px] font-mono">
                    Cursos Aprenda Mais MEC
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[9px] font-mono">
                    Tokens de IA Sophia
                  </span>
                </div>
              </div>

              {/* 3 Metric Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-[#12131B] border border-white/5">
                  <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 w-fit mb-2">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="text-base font-mono font-bold text-white">00m</div>
                  <span className="text-[9px] text-slate-400 block">Tempo de tela poupado hoje</span>
                  <span className="text-[8px] text-emerald-400 font-mono mt-1 block">~ Om vs média semanal</span>
                </div>

                <div className="p-3 rounded-xl bg-[#12131B] border border-white/5">
                  <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 w-fit mb-2">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div className="text-base font-mono font-bold text-white">1 curso</div>
                  <span className="text-[9px] text-slate-400 block">Em andamento no MEC Aprenda Mais</span>
                  <span className="text-[8px] text-blue-400 font-mono mt-1 block">• Sincronização Ativa</span>
                </div>

                <div className="p-3 rounded-xl bg-[#12131B] border border-white/5">
                  <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 w-fit mb-2">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div className="text-base font-mono font-bold text-white">00m</div>
                  <span className="text-[9px] text-slate-400 block">Estudo & Validação MEC</span>
                  <span className="text-[8px] text-amber-400 font-mono mt-1 block">~ Média diária: 3h00u</span>
                </div>
              </div>

              {/* Pergunte à Sophia IA Callout */}
              <div className="p-3.5 rounded-xl bg-[#151624] border border-indigo-500/30 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-indigo-600 text-white shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs">Pergunte à Sophia IA</h4>
                    <p className="text-[10px] text-slate-400">
                      Sua copiloto inteligente de hábitos — divide objetivos complexos em micro-passos executáveis.
                    </p>
                  </div>
                </div>
                <button className="px-3 py-1.5 rounded-lg bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 font-mono text-[10px] hover:bg-indigo-600/50 shrink-0">
                  Abrir Assistente ›
                </button>
              </div>

              {/* Cronograma Consciente de Hoje */}
              <div className="p-4 rounded-2xl bg-[#12131B] border border-white/5">
                <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
                  <h4 className="font-bold text-white text-xs flex items-center gap-1.5">
                    Cronograma Consciente de Hoje
                  </h4>
                  <span className="text-[9px] font-mono text-slate-500">30 SET 2026</span>
                </div>

                <div className="space-y-2">
                  {dashboardTasks.map((t) => (
                    <div
                      key={t.id}
                      onClick={() => toggleTask(t.id)}
                      className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        t.done
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                          : 'bg-[#181924] border-white/5 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className={`w-3.5 h-3.5 ${t.done ? 'text-emerald-400' : 'text-slate-600'}`} />
                        <span className={`text-[11px] ${t.done ? 'line-through text-slate-400' : ''}`}>
                          {t.title}
                        </span>
                      </div>
                      <span className={`font-mono text-[10px] font-bold ${t.color}`}>
                        +{t.pts} PTS
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
