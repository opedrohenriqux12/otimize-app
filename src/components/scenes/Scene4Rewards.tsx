import React, { useState, useEffect } from 'react';
import { REWARDS_DATA } from '../../data/presentationData';
import { Award, Gift, Sparkles, Check, Flame, Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Scene4Rewards: React.FC = () => {
  const [points, setPoints] = useState<number>(350);
  const [claimedId, setClaimedId] = useState<string | null>(null);

  // Animated increment simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setPoints((prev) => (prev < 850 ? prev + 5 : 850));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const handleClaim = (rewardId: string, cost: number) => {
    if (points >= cost) {
      setPoints((prev) => prev - cost);
      setClaimedId(rewardId);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#10B981', '#6366F1', '#F59E0B'],
      });
      setTimeout(() => setClaimedId(null), 3000);
    }
  };

  const digitalRewards = REWARDS_DATA.filter((r) => r.category === 'digital');
  const physicalRewards = REWARDS_DATA.filter((r) => r.category === 'fisico');

  return (
    <div className="w-full h-full flex flex-col justify-center px-6 sm:px-12 md:px-20 py-10 max-w-7xl mx-auto overflow-y-auto no-scrollbar">
      {/* Level & Points Banner */}
      <div className="p-6 rounded-3xl bg-slate-900/80 border border-emerald-500/30 backdrop-blur-md mb-8 shadow-xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
              <Trophy className="w-4 h-4 text-emerald-400" />
              <span>PAINEL DE PONTOS DE TEMPO CONSCIENTE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Nível 1 — <span className="text-emerald-400">Iniciante do Foco</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 font-mono font-extrabold text-2xl flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-400 animate-spin" />
              <span>{points} PTS</span>
            </div>
            <div className="px-3 py-2 rounded-2xl bg-amber-500/10 border border-amber-500/40 text-amber-400 font-mono text-xs flex items-center gap-1.5 font-bold">
              <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>5 Dias no Foco</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div>
          <div className="flex justify-between text-xs font-mono text-slate-400 mb-1.5">
            <span>Progresso para Nível 2 (Especialista)</span>
            <span className="text-emerald-400 font-bold">{points} / 1000 PTS</span>
          </div>
          <div className="w-full h-3 rounded-full bg-slate-950 border border-white/10 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500 shadow-[0_0_12px_#10B981]"
              style={{ width: `${Math.min((points / 1000) * 100, 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Rewards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Digital Block */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-slate-300 font-bold text-lg border-b border-white/10 pb-2">
            <Award className="w-5 h-5 text-indigo-400" />
            <span>Prêmios Digitais (Vouchers & Assinaturas)</span>
          </div>

          {digitalRewards.map((reward) => (
            <div
              key={reward.id}
              className="p-4 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-indigo-500/30 flex items-center justify-between gap-4 transition-all"
            >
              <div>
                <h4 className="font-bold text-white text-sm">{reward.title}</h4>
                <p className="text-xs text-slate-400 mt-0.5">{reward.description}</p>
                <span className="text-xs font-mono text-indigo-400 font-bold mt-1 inline-block">
                  {reward.points} PTS
                </span>
              </div>
              <button
                onClick={() => handleClaim(reward.id, reward.points)}
                disabled={points < reward.points}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all shrink-0 ${
                  claimedId === reward.id
                    ? 'bg-emerald-500 text-slate-950'
                    : points >= reward.points
                    ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-500/30 cursor-pointer'
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                }`}
              >
                {claimedId === reward.id ? (
                  <span className="flex items-center gap-1">
                    <Check className="w-4 h-4" /> Resgatado!
                  </span>
                ) : (
                  'Resgatar'
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Physical Block */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-slate-300 font-bold text-lg border-b border-white/10 pb-2">
            <Gift className="w-5 h-5 text-emerald-400" />
            <span>Prêmios Físicos (Entregues em Casa)</span>
          </div>

          {physicalRewards.map((reward) => (
            <div
              key={reward.id}
              className="p-4 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-emerald-500/30 flex items-center justify-between gap-4 transition-all"
            >
              <div>
                <h4 className="font-bold text-white text-sm">{reward.title}</h4>
                <p className="text-xs text-slate-400 mt-0.5">{reward.description}</p>
                <span className="text-xs font-mono text-emerald-400 font-bold mt-1 inline-block">
                  {reward.points} PTS
                </span>
              </div>
              <button
                onClick={() => handleClaim(reward.id, reward.points)}
                disabled={points < reward.points}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all shrink-0 ${
                  claimedId === reward.id
                    ? 'bg-emerald-500 text-slate-950'
                    : points >= reward.points
                    ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md shadow-emerald-500/30 cursor-pointer'
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                }`}
              >
                {claimedId === reward.id ? (
                  <span className="flex items-center gap-1">
                    <Check className="w-4 h-4" /> Resgatado!
                  </span>
                ) : (
                  'Resgatar'
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
