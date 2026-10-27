import React, { useState } from 'react';
import { TECH_STACK } from '../data/portfolioData';

export const TechStackSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | '3d' | 'backend' | 'tools'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTech = TECH_STACK.filter((item) => {
    const matchesCategory = activeTab === 'all' || item.category === activeTab;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', label: 'Todo el Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: '3d', label: '3D & Animación' },
    { id: 'backend', label: 'Backend & DB' },
    { id: 'tools', label: 'Herramientas' },
  ];

  return (
    <section id="tech" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-cyan-400 font-bold text-lg">02</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Tech Stack
          </h2>
          <div className="h-px bg-slate-800 flex-1 ml-4"></div>
        </div>

        <p className="text-gray-400 text-sm max-w-2xl mb-8">
          Herramientas y tecnologías modernas utilizadas para construir arquitecturas limpias,
          interfaces hiper-rápidas y experiencias 3D inmersivas en el navegador.
        </p>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition ${
                  activeTab === cat.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold shadow-sm'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="w-full sm:w-auto">
            <input
              type="text"
              placeholder="Buscar tecnología..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-56 px-3 py-1.5 bg-slate-950/80 border border-slate-700 rounded-lg text-xs text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-400"
            />
          </div>
        </div>

        {/* Grid of Tech Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredTech.map((item) => (
            <div
              key={item.name}
              className="group p-4 rounded-xl bg-slate-900/70 hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-500/30 transition-all duration-200 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-60 group-hover:opacity-100 transition"
                style={{ backgroundColor: item.color }}
              ></div>

              <div className="flex items-start justify-between gap-2 mb-3">
                <img
                  src={item.badgeUrl}
                  alt={item.name}
                  className="h-7 rounded object-contain shadow-sm"
                  loading="lazy"
                />
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950/80 text-gray-400 border border-slate-800 uppercase">
                  {item.category}
                </span>
              </div>

              <div className="font-semibold text-white text-sm mb-1 group-hover:text-cyan-300 transition-colors">
                {item.name}
              </div>

              <p className="text-gray-400 text-xs leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Original Shields Preview Row from README */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 text-center">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-4">
            Badges Oficiales del Perfil de GitHub
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            {TECH_STACK.map((item) => (
              <img
                key={item.name}
                src={item.badgeUrl}
                alt={item.name}
                className="h-6 hover:scale-105 transition-transform"
                loading="lazy"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
