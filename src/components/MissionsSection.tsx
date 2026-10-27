import React, { useState } from 'react';
import { Target, Terminal } from 'lucide-react';
import { MISSIONS } from '../data/portfolioData';

export const MissionsSection: React.FC = () => {
  const [activeMissionIndex, setActiveMissionIndex] = useState<number | null>(null);

  const asciiBars = [
    "[████████████░░░░░░░░] 60% → Dominar TypeScript avanzado",
    "[███████████████░░░░░] 75% → Proyectos React complejos",
    "[████████░░░░░░░░░░░░] 40% → Backend con FastAPI + Python",
    "[█████████████░░░░░░░] 65% → Three.js & experiencias 3D",
    "[██████░░░░░░░░░░░░░░] 30% → Sistemas de autenticación",
  ];

  return (
    <section id="missions" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-cyan-400 font-bold text-lg">05</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
            <span>Current Mission</span>
            <Target className="w-6 h-6 text-cyan-400" />
          </h2>
          <div className="h-px bg-slate-800 flex-1 ml-4"></div>
        </div>

        <p className="text-gray-400 text-sm max-w-2xl mb-8">
          Metas técnicas activas, curva de aprendizaje y objetivos de dominio
          para seguir elevando el nivel de desarrollo y arquitectura.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Visual Progress Trackers */}
          <div className="lg:col-span-7 space-y-4">
            {MISSIONS.map((mission, idx) => (
              <div
                key={idx}
                onClick={() => setActiveMissionIndex(activeMissionIndex === idx ? null : idx)}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  activeMissionIndex === idx
                    ? 'bg-slate-900 border-cyan-500/50 shadow-lg shadow-cyan-950/40'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-950 text-cyan-300 border border-slate-800">
                      {mission.tag}
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {mission.title}
                    </span>
                  </div>
                  <span className="text-sm font-mono font-bold text-cyan-400">
                    {mission.progress}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-950 rounded-full h-2.5 overflow-hidden p-0.5 border border-slate-800">
                  <div
                    className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-500 h-full rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${mission.progress}%` }}
                  />
                </div>

                {/* Expanded Details */}
                {activeMissionIndex === idx && (
                  <div className="mt-3 pt-3 border-t border-slate-800 text-xs text-gray-300 leading-relaxed font-sans animate-fadeIn">
                    <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-1">
                      Enfoque de maestría:
                    </div>
                    {mission.details}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column: Original Terminal ASCII representation from README */}
          <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl overflow-hidden backdrop-blur-md">
            <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="font-mono text-xs text-gray-400">
                  README.md ascii_progress
                </span>
              </div>
              <span className="text-[10px] font-mono text-cyan-400/80">RAW VIEW</span>
            </div>

            <div className="p-4 sm:p-5 font-mono text-xs text-cyan-300/90 bg-black/60 overflow-x-auto leading-loose selection:bg-cyan-500/40">
              <div className="text-gray-500 pb-1">
                # Progreso original en texto plano
              </div>
              {asciiBars.map((line, i) => (
                <div key={i} className="whitespace-pre hover:text-white transition-colors">
                  {line}
                </div>
              ))}
            </div>

            <div className="p-5 border-t border-slate-800/80 space-y-2.5">
              <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                Filosofía de Crecimiento:
              </div>
              <div className="flex items-start gap-2 text-xs text-gray-300">
                <span className="text-amber-400 font-mono">🔨</span>
                <span>Construyendo proyectos cada vez más completos y escalables</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-gray-300">
                <span className="text-cyan-400 font-mono">📚</span>
                <span>Aprendiendo buenas prácticas · arquitectura · clean code</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-gray-300">
                <span className="text-blue-400 font-mono">🌐</span>
                <span>Explorando backend, bases de datos y APIs REST</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-gray-300">
                <span className="text-emerald-400 font-mono">🤝</span>
                <span>Abierto a colaborar en proyectos creativos e innovadores</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
