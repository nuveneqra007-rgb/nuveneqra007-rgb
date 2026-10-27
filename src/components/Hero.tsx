import React from 'react';
import { Sparkles, Terminal, ArrowDown, ExternalLink, Code2, MapPin } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenTerminal: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, onOpenContact }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden flex flex-col items-center justify-center text-center px-4">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/20 via-blue-600/10 to-transparent blur-[120px] rounded-full pointer-events-none" />

      {/* Waving Banner representation from README */}
      <div className="w-full max-w-4xl mx-auto mb-8 relative rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl shadow-cyan-950/40 bg-gradient-to-r from-black via-[#0a0a2e] to-[#002b4d]">
        <img
          src="https://capsule-render.vercel.app/api?type=waving&color=0:000000,50:0a0a2e,100:00D9FF&height=200&section=header&text=ALEXANDER&fontSize=65&fontColor=ffffff&fontAlignY=38&desc=Full-Stack%20Developer%20%7C%20Creative%20Coder&descColor=00D9FF&descAlignY=58&animation=fadeIn"
          alt="ALEXANDER Header Banner"
          className="w-full h-auto min-h-[170px] md:min-h-[210px] object-cover"
          loading="eager"
        />
        
        {/* Glowing cyber overlay line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#00D9FF]"></div>
      </div>

      {/* Badges Bar matching README */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
        <a
          href={PROFILE_DATA.portfolioUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 hover:bg-black border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 text-xs font-mono transition shadow-sm hover:shadow-cyan-500/20 hover:scale-105"
        >
          <span>🌐 PORTFOLIO 3D</span>
          <ExternalLink className="w-3 h-3 text-cyan-400" />
        </a>

        <div className="inline-flex items-center px-3 py-1.5 rounded-lg bg-black/80 border border-slate-700 text-xs font-mono text-gray-300">
          <img
            src="https://komarev.com/ghpvc/?username=nuveneqra007-rgb&style=flat&color=00D9FF&label=VISITANTES&labelColor=000000"
            alt="Contador de Visitantes"
            className="h-4"
          />
        </div>

        <button
          onClick={onOpenContact}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 hover:bg-black border border-slate-700 hover:border-cyan-400/50 text-gray-200 text-xs font-mono transition hover:scale-105"
        >
          <span>📧 CONTACTO</span>
        </button>

        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-gray-400">
          <MapPin className="w-3 h-3 text-red-400" />
          <span>República Dominicana 🇩🇴</span>
        </div>
      </div>

      {/* Main Quote & Catchphrase */}
      <div className="max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Ideas → Code → Experience → Impact</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Construyendo experiencias digitales con{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">
            código, creatividad y propósito
          </span>
          .
        </h1>

        <p className="text-base sm:text-lg text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
          Especializado en interfaces modernas, animaciones fluidas con{' '}
          <span className="text-cyan-300 font-medium">GSAP</span> y gráficos interactivos 3D con{' '}
          <span className="text-cyan-300 font-medium">Three.js</span> y{' '}
          <span className="text-cyan-300 font-medium">React</span>.
        </p>

        {/* Action CTAs */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-bold text-sm tracking-wide transition transform hover:-translate-y-0.5 shadow-lg shadow-cyan-500/30"
          >
            <span>Explorar Todos los Proyectos</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#about"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/40 text-gray-200 text-sm font-medium transition transform hover:-translate-y-0.5"
          >
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span>Ver Objeto TypeScript</span>
          </a>

          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/30 text-cyan-300 text-sm font-mono transition transform hover:-translate-y-0.5"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>Terminal CLI</span>
          </button>
        </div>
      </div>
    </section>
  );
};
