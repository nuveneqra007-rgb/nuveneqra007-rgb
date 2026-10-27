import React, { useState } from 'react';
import { X, ExternalLink, Sparkles, CheckCircle2, Monitor, Code } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [showIframe, setShowIframe] = useState(false);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-3xl bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className="text-xs font-mono font-bold px-2.5 py-1 rounded-md"
              style={{ backgroundColor: `${project.color}20`, color: project.color }}
            >
              {project.badge}
            </span>
            <h3 className="text-xl font-bold text-white">{project.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          <div>
            <div className="text-sm font-mono text-cyan-400 mb-1">
              {project.tagline}
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Stack Tags */}
          <div>
            <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Code className="w-3.5 h-3.5 text-cyan-400" />
              Tecnologías y Librerías
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-slate-950 text-cyan-300 border border-cyan-500/25 text-xs font-mono"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Puntos Clave de Arquitectura & UX
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-300 leading-snug">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Preview Switch (if demo available) */}
          {project.demoUrl ? (
            showIframe ? (
              <div className="rounded-xl overflow-hidden border border-slate-700 bg-black">
                <div className="px-4 py-2 bg-slate-950 text-xs font-mono text-gray-400 flex items-center justify-between border-b border-slate-800">
                  <span className="truncate">{project.demoUrl}</span>
                  <button
                    onClick={() => setShowIframe(false)}
                    className="text-cyan-400 hover:underline ml-2"
                  >
                    Ocultar visor
                  </button>
                </div>
                <div className="w-full h-80 relative">
                  <iframe
                    src={project.demoUrl}
                    title={project.name}
                    className="w-full h-full border-0"
                    sandbox="allow-scripts allow-same-origin allow-forms"
                  />
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <Monitor className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>
                    Puedes interactuar con el demo en vivo o probarlo directamente aquí.
                  </span>
                </div>
                <button
                  onClick={() => setShowIframe(true)}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-200 text-xs font-mono shrink-0 transition"
                >
                  Cargar en visor
                </button>
              </div>
            )
          ) : (
            <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800 text-xs font-mono text-gray-400">
              Repositorio de infraestructura / servicio backend sin interfaz gráfica directa.
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-500/50 text-gray-200 text-xs font-mono transition"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Ver Código en GitHub</span>
            </a>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-mono text-gray-400 hover:text-white transition"
            >
              Cerrar
            </button>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-bold text-xs font-mono transition shadow-md shadow-cyan-500/20"
              >
                <span>Abrir Demo en Vivo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
