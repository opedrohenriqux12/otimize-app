import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MEC_COURSES_DATA } from '../../data/presentationData';
import { BookOpen, CheckCircle, RefreshCw, Award, ArrowRight, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Scene6MecCourses: React.FC = () => {
  const [courses, setCourses] = useState(MEC_COURSES_DATA);

  const handleValidateQuiz = (id: string) => {
    setCourses(
      courses.map((c) => (c.id === id ? { ...c, progress: 100 } : c))
    );
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#3B82F6', '#10B981'],
    });
  };

  return (
    <div className="w-full h-full flex flex-col justify-center px-6 sm:px-12 md:px-20 py-10 max-w-7xl mx-auto overflow-y-auto no-scrollbar">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono mb-2">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>SINCRONIZAÇÃO OFICIAL MEC</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Plataforma <span className="text-blue-400">Aprenda Mais</span> (MEC)
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Faça cursos gratuitos de capacitação e valide o conteúdo no Otimize para resgatar pontos.
          </p>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold animate-pulse">
          <RefreshCw className="w-4 h-4 text-emerald-400 animate-spin" />
          <span>Sincronização em Tempo Real Ativa</span>
        </div>
      </div>

      {/* Visual Workflow Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold font-mono">
            1
          </div>
          <div>
            <h4 className="text-xs font-bold text-white">Estude no Aprenda Mais</h4>
            <p className="text-[11px] text-slate-400">Assista às aulas gratuitas do MEC</p>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-600 ml-auto hidden md:block" />
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold font-mono">
            2
          </div>
          <div>
            <h4 className="text-xs font-bold text-white">Valide por Quiz no App</h4>
            <p className="text-[11px] text-slate-400">Responda a 3 perguntas rápidas</p>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-600 ml-auto hidden md:block" />
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold font-mono">
            3
          </div>
          <div>
            <h4 className="text-xs font-bold text-white">Receba Pontos e Nível</h4>
            <p className="text-[11px] text-slate-400">Acumule até 150 PTS por curso</p>
          </div>
        </div>
      </div>

      {/* Courses Catalog */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-blue-500/40 flex flex-col justify-between gap-4 transition-all"
          >
            <div>
              <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  {course.category}
                </span>
                <span className="text-slate-400">{course.hours}h de carga</span>
              </div>

              <h3 className="font-bold text-white text-base mb-1">{course.title}</h3>
              <p className="text-xs text-slate-400 flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                <span>{course.institution}</span>
              </p>
            </div>

            {/* Progress Bar & Actions */}
            <div>
              <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
                <span>Progresso</span>
                <span className="text-emerald-400 font-bold">{course.progress}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-950 border border-white/10 overflow-hidden mb-3">
                <div
                  className="h-full bg-blue-500 rounded-full transition-all duration-500"
                  style={{ width: `${course.progress}%` }}
                />
              </div>

              <button
                onClick={() => handleValidateQuiz(course.id)}
                className={`w-full py-2.5 rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                  course.progress === 100
                    ? 'bg-emerald-500/20 border border-emerald-500/50 text-emerald-300'
                    : 'bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30 cursor-pointer'
                }`}
              >
                {course.progress === 100 ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Conteúdo Validado (+{course.points} PTS)</span>
                  </>
                ) : (
                  <>
                    <Award className="w-4 h-4" />
                    <span>Validar por Quiz (+{course.points} PTS)</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
