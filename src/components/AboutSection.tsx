import React, { useState } from 'react';
import { Copy, Check, Code, User, Hammer, BookOpen, Globe, Users } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const rawCode = `const alexander = {
  role     : "Full-Stack Developer",
  location : "República Dominicana 🇩🇴",
  focus    : ["Web Development", "3D Web Experiences", "Full-Stack Architecture", "UI/UX"],
  stack    : ["TypeScript", "React", "Vite", "Three.js", "GSAP", "Python", "FastAPI"],
  learning : ["Node.js", "Python", "FastAPI", "Supabase", "Cloud Architecture"],
  mindset  : "Learn → Build → Improve → Repeat 🔁",
  goal     : "Convert ideas into premium digital experiences.",
  openTo   : "Freelance · Collaborations · Remote Work",
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(rawCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const pillars = [
    {
      icon: Hammer,
      title: "Construcción Continua",
      desc: "Creando proyectos cada vez más completos, escalables y con código modular.",
      color: "text-amber-400",
      bg: "bg-amber-400/10 border-amber-400/20"
    },
    {
      icon: BookOpen,
      title: "Aprendizaje Constante",
      desc: "Profundizando en patrones arquitectónicos, buenas prácticas y clean code.",
      color: "text-cyan-400",
      bg: "bg-cyan-400/10 border-cyan-400/20"
    },
    {
      icon: Globe,
      title: "Visión Full-Stack",
      desc: "Expandiendo horizontes hacia FastAPI, Python, Supabase y arquitecturas cloud.",
      color: "text-blue-400",
      bg: "bg-blue-400/10 border-blue-400/20"
    },
    {
      icon: Users,
      title: "Colaboración Abierta",
      desc: "Dispuesto a colaborar en proyectos creativos e innovadores a nivel global.",
      color: "text-emerald-400",
      bg: "bg-emerald-400/10 border-emerald-400/20"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-cyan-400 font-bold text-lg">01</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Sobre mí
          </h2>
          <div className="h-px bg-slate-800 flex-1 ml-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Code Inspector Window */}
          <div className="lg:col-span-7 bg-slate-900/90 rounded-2xl border border-slate-700/80 shadow-2xl overflow-hidden backdrop-blur-md">
            {/* Terminal Window Bar */}
            <div className="bg-slate-950/80 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                <span className="ml-2 font-mono text-xs text-gray-400 flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5 text-cyan-400" />
                  alexander.profile.ts
                </span>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-xs font-mono text-gray-300 hover:text-white transition"
                title="Copiar código"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar TS</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Body */}
            <div className="p-4 sm:p-6 overflow-x-auto font-mono text-xs sm:text-sm leading-relaxed text-gray-300 selection:bg-cyan-500/30">
              <div className="text-gray-500 select-none pb-2">
                // Definición tipada del perfil de Alexander
              </div>
              <div>
                <span className="text-purple-400">const</span>{' '}
                <span className="text-cyan-300 font-semibold">alexander</span>{' '}
                <span className="text-slate-400">=</span>{' '}
                <span className="text-yellow-300">{'{'}</span>
              </div>

              <div className="pl-4 sm:pl-6 space-y-1.5 my-1">
                <div>
                  <span className="text-cyan-200">role</span>
                  <span className="text-slate-500">{'     '}: </span>
                  <span className="text-emerald-300">&quot;Full-Stack Developer&quot;</span>
                  <span className="text-slate-500">,</span>
                </div>

                <div>
                  <span className="text-cyan-200">location</span>
                  <span className="text-slate-500"> : </span>
                  <span className="text-emerald-300">&quot;República Dominicana 🇩🇴&quot;</span>
                  <span className="text-slate-500">,</span>
                </div>

                <div>
                  <span className="text-cyan-200">focus</span>
                  <span className="text-slate-500">{'    '}: </span>
                  <span className="text-slate-400">[</span>
                  <span className="text-emerald-300">&quot;Web Development&quot;</span>
                  <span className="text-slate-400">, </span>
                  <span className="text-emerald-300">&quot;3D Web Experiences&quot;</span>
                  <span className="text-slate-400">, </span>
                  <span className="text-emerald-300">&quot;UI/UX&quot;</span>
                  <span className="text-slate-400">]</span>
                  <span className="text-slate-500">,</span>
                </div>

                <div>
                  <span className="text-cyan-200">stack</span>
                  <span className="text-slate-500">{'    '}: </span>
                  <span className="text-slate-400">[</span>
                  <span className="text-cyan-300">&quot;TypeScript&quot;</span>
                  <span className="text-slate-400">, </span>
                  <span className="text-cyan-300">&quot;React&quot;</span>
                  <span className="text-slate-400">, </span>
                  <span className="text-cyan-300">&quot;Vite&quot;</span>
                  <span className="text-slate-400">, </span>
                  <span className="text-cyan-300">&quot;Three.js&quot;</span>
                  <span className="text-slate-400">, </span>
                  <span className="text-cyan-300">&quot;GSAP&quot;</span>
                  <span className="text-slate-400">]</span>
                  <span className="text-slate-500">,</span>
                </div>

                <div>
                  <span className="text-cyan-200">learning</span>
                  <span className="text-slate-500"> : </span>
                  <span className="text-slate-400">[</span>
                  <span className="text-yellow-200">&quot;Node.js&quot;</span>
                  <span className="text-slate-400">, </span>
                  <span className="text-yellow-200">&quot;Python&quot;</span>
                  <span className="text-slate-400">, </span>
                  <span className="text-yellow-200">&quot;FastAPI&quot;</span>
                  <span className="text-slate-400">, </span>
                  <span className="text-yellow-200">&quot;Supabase&quot;</span>
                  <span className="text-slate-400">]</span>
                  <span className="text-slate-500">,</span>
                </div>

                <div>
                  <span className="text-cyan-200">mindset</span>
                  <span className="text-slate-500">{'  '}: </span>
                  <span className="text-emerald-300">&quot;Learn → Build → Improve → Repeat 🔁&quot;</span>
                  <span className="text-slate-500">,</span>
                </div>

                <div>
                  <span className="text-cyan-200">goal</span>
                  <span className="text-slate-500">{'     '}: </span>
                  <span className="text-emerald-300">&quot;Convert ideas into premium digital experiences.&quot;</span>
                  <span className="text-slate-500">,</span>
                </div>

                <div>
                  <span className="text-cyan-200">openTo</span>
                  <span className="text-slate-500">{'   '}: </span>
                  <span className="text-emerald-300">&quot;Freelance · Collaborations · Remote Work&quot;</span>
                  <span className="text-slate-500">,</span>
                </div>
              </div>

              <div>
                <span className="text-yellow-300">{'}'}</span>
                <span className="text-slate-400">;</span>
              </div>
            </div>

            {/* Status Footer */}
            <div className="bg-slate-950/60 px-4 py-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-gray-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Status: Compilado sin errores
              </span>
              <span className="text-cyan-400">TypeScript 5.x</span>
            </div>
          </div>

          {/* Right Column: Bio & Core Philosophy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 rounded-2xl border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <User className="w-5 h-5 text-cyan-400" />
                <span>Perfil y Visión</span>
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                {PROFILE_DATA.aboutText}
              </p>

              <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                {PROFILE_DATA.focus.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono"
                  >
                    #{item}
                  </span>
                ))}
              </div>
            </div>

            {/* Philosophy Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pillars.map((p, idx) => {
                const IconComponent = p.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition"
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2.5 ${p.bg}`}>
                      <IconComponent className={`w-4 h-4 ${p.color}`} />
                    </div>
                    <div className="font-semibold text-white text-xs mb-1">
                      {p.title}
                    </div>
                    <div className="text-gray-400 text-[11px] leading-snug">
                      {p.desc}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
