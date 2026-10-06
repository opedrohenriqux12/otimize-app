import React from 'react';
import { SCENES } from '../data/presentationData';
import { Sun, Moon, Sparkles } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

interface NavigationHeaderProps {
  currentScene: number;
  onSelectScene: (sceneId: number) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  hasInteracted: boolean;
}

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  currentScene,
  onSelectScene,
  isDarkMode,
  toggleDarkMode,
  hasInteracted,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 py-4 backdrop-blur-md bg-opacity-70 transition-colors">
      {/* Brand Logo */}
      <div 
        onClick={() => onSelectScene(1)}
        className="flex items-center gap-3 cursor-pointer group"
      >
        <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center font-bold text-black text-xl shadow-lg shadow-emerald-500/30 group-hover:scale-105 transition-transform">
          O
        </div>
        <div className="flex flex-col">
          <div className="flex items-center text-xl sm:text-2xl font-extrabold tracking-tight">
            <span className={isDarkMode ? "text-white" : "text-slate-900"}>Otim</span>
            <span className="text-emerald-500">ize</span>
          </div>
          <span className="text-[10px] text-emerald-400 font-mono tracking-widest uppercase -mt-1 hidden sm:block">
            Open Source
          </span>
        </div>
      </div>

      {/* Segmented Scene Progress Nav */}
      <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/60 border border-white/10 backdrop-blur-md">
        {SCENES.map((scene) => {
          const isActive = scene.id === currentScene;
          return (
            <button
              key={scene.id}
              onClick={() => onSelectScene(scene.id)}
              className={`relative px-2.5 py-1 rounded-full text-xs font-mono transition-all duration-300 ${
                isActive
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
              title={`${scene.id}. ${scene.title}`}
            >
              {scene.id < 10 ? `0${scene.id}` : scene.id}
              {isActive && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald-400 animate-ping" />
              )}
            </button>
          );
        })}
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3">
        {/* Nav Helper Tip (Hides after first interaction) */}
        {!hasInteracted && (
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono animate-pulse">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Use ← → ou Swipe</span>
          </div>
        )}

        {/* GitHub Badge */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-xl border border-white/10 hover:border-emerald-500/40 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all flex items-center gap-2 text-xs font-mono"
          title="Ver código no GitHub"
        >
          <GithubIcon className="w-4 h-4" />
          <span className="hidden sm:inline">GitHub</span>
        </a>

        {/* Dark/Light Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-xl border border-white/10 hover:border-emerald-500/40 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-amber-400 transition-all"
          aria-label="Alternar tema"
          title={isDarkMode ? "Modo Claro" : "Modo Escuro"}
        >
          {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>
    </header>
  );
};
