import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SCENES } from '../data/presentationData';

interface NavigationControlsProps {
  currentScene: number;
  totalScenes: number;
  onPrev: () => void;
  onNext: () => void;
  onSelectScene: (id: number) => void;
}

export const NavigationControls: React.FC<NavigationControlsProps> = ({
  currentScene,
  totalScenes,
  onPrev,
  onNext,
  onSelectScene,
}) => {
  const currentSceneObj = SCENES.find((s) => s.id === currentScene);

  return (
    <>
      {/* Side Arrow Buttons */}
      {currentScene > 1 && (
        <button
          onClick={onPrev}
          className="fixed left-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-slate-900/80 border border-white/10 hover:border-emerald-500/50 text-white hover:text-emerald-400 hover:scale-110 transition-all backdrop-blur-md shadow-xl group"
          aria-label="Cena Anterior"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>
      )}

      {currentScene < totalScenes && (
        <button
          onClick={onNext}
          className="fixed right-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-slate-900/80 border border-white/10 hover:border-emerald-500/50 text-white hover:text-emerald-400 hover:scale-110 transition-all backdrop-blur-md shadow-xl group"
          aria-label="Próxima Cena"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>
      )}

      {/* Bottom Progress Bar & Title */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 max-w-xs sm:max-w-md w-full px-4">
        {/* Active Scene Title */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/80 border border-white/10 text-xs font-mono text-slate-300 backdrop-blur-md">
          <span className="text-emerald-400 font-bold">CENA {currentScene < 10 ? `0${currentScene}` : currentScene}</span>
          <span className="text-slate-600">|</span>
          <span className="truncate max-w-[180px]">{currentSceneObj?.subtitle}</span>
        </div>

        {/* Progress Bar Track */}
        <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden flex">
          {SCENES.map((scene) => (
            <div
              key={scene.id}
              onClick={() => onSelectScene(scene.id)}
              className={`h-full flex-1 cursor-pointer transition-all duration-300 ${
                scene.id === currentScene
                  ? 'bg-emerald-500 shadow-[0_0_10px_#10B981]'
                  : scene.id < currentScene
                  ? 'bg-emerald-800/60'
                  : 'bg-white/5 hover:bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};
