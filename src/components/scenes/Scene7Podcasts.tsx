import React, { useState, useEffect } from 'react';
import { PODCASTS_DATA } from '../../data/presentationData';
import { Headphones, Play, Pause, Volume2, Sparkles, Radio } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Scene7Podcasts: React.FC = () => {
  const [activeTrack, setActiveTrack] = useState(PODCASTS_DATA[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(42);
  const [earnedPts, setEarnedPts] = useState<number>(0);

  useEffect(() => {
    let timer: any;
    if (isPlaying) {
      timer = setInterval(() => {
        setSeconds((prev) => {
          if (prev % 10 === 0 && prev > 0) {
            setEarnedPts((pts) => pts + 5);
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying && earnedPts === 0) {
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.6 },
        colors: ['#10B981', '#F59E0B'],
      });
    }
  };

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full h-full flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 md:px-20 py-10 gap-8 max-w-7xl mx-auto">
      {/* Left Info Column */}
      <div className="flex-1 flex flex-col items-start gap-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
          <Headphones className="w-4 h-4 text-emerald-400" />
          <span>CONTEÚDO EM ÁUDIO QUE PONTUA</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Podcasts de <span className="text-emerald-400">Foco & Saúde Mental</span>
        </h2>

        <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-md">
          Aproveite seus deslocamentos ou pausas ativas para ouvir conteúdos curtos sobre ergonomics, mental health, rotina de estudos e inteligência emocional.
        </p>

        {/* Audio Rewards Highlight */}
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-emerald-500/30 flex items-center justify-between w-full max-w-md">
          <div className="flex items-center gap-3">
            <Radio className="w-5 h-5 text-emerald-400 animate-pulse" />
            <div>
              <h4 className="text-xs font-bold text-white">Pontuação por Escuta Ativa</h4>
              <p className="text-[11px] text-slate-400">+5 PTS a cada minuto ouvido</p>
            </div>
          </div>
          <div className="px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-400 font-mono font-bold text-xs">
            +{earnedPts} PTS GANHOS
          </div>
        </div>

        {/* Track Selection List */}
        <div className="w-full max-w-md space-y-2 mt-2">
          {PODCASTS_DATA.map((track) => {
            const isSelected = activeTrack.id === track.id;
            return (
              <div
                key={track.id}
                onClick={() => {
                  setActiveTrack(track);
                  setIsPlaying(true);
                }}
                className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-slate-800 border-emerald-500/50 text-white'
                    : 'bg-slate-900/40 border-white/5 text-slate-400 hover:bg-slate-900/80'
                }`}
              >
                <div>
                  <h5 className="text-xs font-bold text-white">{track.title}</h5>
                  <span className="text-[10px] text-slate-400">{track.author} • {track.duration}</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10">
                  +{track.points} PTS
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Audio Player Widget */}
      <div className="flex-1 w-full max-w-md p-6 rounded-3xl bg-slate-900/90 border border-white/10 shadow-2xl backdrop-blur-md flex flex-col justify-between h-[420px] relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl" />

        {/* Header */}
        <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-white/10 pb-3">
          <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
            <Sparkles className="w-3.5 h-3.5" /> Otimize Audio Player
          </span>
          <span>128 kbps HQ</span>
        </div>

        {/* Soundwave Visualizer & Cover */}
        <div className="flex flex-col items-center justify-center my-auto text-center gap-4">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-emerald-600 to-indigo-600 flex items-center justify-center text-white shadow-xl shadow-emerald-500/20">
            <Headphones className="w-10 h-10" />
          </div>

          <div>
            <h3 className="text-base font-bold text-white max-w-xs">{activeTrack.title}</h3>
            <p className="text-xs text-slate-400 mt-1">{activeTrack.author}</p>
          </div>

          {/* Soundwave Bars */}
          <div className="flex items-center gap-1.5 h-8">
            <div className={`w-1 bg-emerald-400 rounded-full ${isPlaying ? 'animate-soundwave-1' : 'h-2'}`} />
            <div className={`w-1 bg-emerald-400 rounded-full ${isPlaying ? 'animate-soundwave-2' : 'h-3'}`} />
            <div className={`w-1 bg-emerald-400 rounded-full ${isPlaying ? 'animate-soundwave-3' : 'h-1'}`} />
            <div className={`w-1 bg-emerald-400 rounded-full ${isPlaying ? 'animate-soundwave-4' : 'h-4'}`} />
            <div className={`w-1 bg-emerald-400 rounded-full ${isPlaying ? 'animate-soundwave-5' : 'h-2'}`} />
          </div>
        </div>

        {/* Timeline & Controls */}
        <div>
          <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
            <span>{formatTime(seconds)}</span>
            <span>{activeTrack.duration}</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-slate-950 border border-white/10 overflow-hidden mb-4">
            <div
              className="h-full bg-emerald-500 transition-all duration-300"
              style={{ width: `${(seconds % 120) * (100 / 120)}%` }}
            />
          </div>

          <div className="flex items-center justify-between">
            <Volume2 className="w-4 h-4 text-slate-400" />
            <button
              onClick={togglePlay}
              className="w-12 h-12 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center font-bold shadow-lg shadow-emerald-500/30 transition-all hover:scale-105 cursor-pointer"
            >
              {isPlaying ? <Pause className="w-5 h-5 fill-slate-950" /> : <Play className="w-5 h-5 fill-slate-950 ml-0.5" />}
            </button>
            <div className="text-xs font-mono text-amber-400 font-bold">
              +{activeTrack.points} PTS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
