import React, { useState } from 'react';
import { ExternalLink, Eye, LayoutGrid, Table, ArrowUpRight, Star } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './GithubIcon';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  const filterTabs = [
    { id: 'all', label: `Todos (${PROJECTS.length})` },
    { id: '3d', label: '3D & Partículas' },
    { id: 'game', label: 'Juegos & Godot' },
    { id: 'ai', label: 'IA & Cloud' },
    { id: 'security', label: 'Seguridad' },
    { id: 'web', label: 'Web Apps' },
    { id: 'landing', label: 'Landing & UI' },
    { id: 'backend', label: 'Backend' },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-cyan-400 font-bold text-lg">03</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Proyectos & Repositorios de GitHub
          </h2>
          <div className="h-px bg-slate-800 flex-1 ml-4"></div>
        </div>

        <p className="text-gray-400 text-sm max-w-2xl mb-8">
          Todos los proyectos y repositorios de mi cuenta de GitHub y portafolio:
          videojuegos en Godot 4, simulaciones 3D con Three.js, herramientas de seguridad,
          sistemas comerciales full-stack y landing pages optimizadas.
        </p>

        {/* View Controls & Filter */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
          <div className="flex flex-wrap items-center gap-1.5">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition ${
                  filter === tab.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold shadow-sm'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5 bg-slate-950/80 p-1 rounded-lg border border-slate-800">
            <button
              onClick={() => setViewMode('grid')}
              title="Vista Cuadrícula"
              className={`p-1.5 rounded text-xs transition ${
                viewMode === 'grid' ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('table')}
              title="Vista Tabla (formato README)"
              className={`p-1.5 rounded text-xs transition ${
                viewMode === 'table' ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Table className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Grid View */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/30 relative overflow-hidden"
              >
                {/* Glow accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 transition-opacity opacity-75 group-hover:opacity-100"
                  style={{ backgroundColor: project.color }}
                />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className="text-[10px] font-mono font-bold px-2 py-0.5 rounded"
                      style={{ backgroundColor: `${project.color}15`, color: project.color }}
                    >
                      {project.badge}
                    </span>
                    <div className="flex items-center gap-2">
                      {project.stars && project.stars > 0 && (
                        <span className="flex items-center gap-1 text-[11px] font-mono text-amber-300/90 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/20">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          <span>{project.stars}</span>
                        </span>
                      )}
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-gray-400 hover:text-cyan-400 transition"
                        title="Ver detalles"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                    {project.name}
                  </h3>

                  <div className="text-xs font-mono text-cyan-400/90 mb-3">
                    {project.tagline}
                  </div>

                  <p className="text-gray-300 text-xs leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-slate-950 text-gray-300 border border-slate-800 text-[10px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 gap-2">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-slate-950 text-gray-400 hover:text-white border border-slate-800 transition"
                      title="Ver repositorio en GitHub"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-mono text-gray-400 hover:text-cyan-300 transition flex items-center gap-1"
                      >
                        <span>Detalles</span>
                        <Eye className="w-3.5 h-3.5" />
                      </button>

                      {project.demoUrl ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition hover:underline"
                        >
                          <span>Demo</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-purple-400 hover:text-purple-300 transition hover:underline"
                        >
                          <span>Repo</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Table View matching README */
          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/80">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-slate-950 border-b border-slate-800 text-gray-400 uppercase tracking-wider">
                <tr>
                  <th className="py-3.5 px-4">Proyecto</th>
                  <th className="py-3.5 px-4">Descripción</th>
                  <th className="py-3.5 px-4">Stack</th>
                  <th className="py-3.5 px-4">GitHub</th>
                  <th className="py-3.5 px-4 text-right">Demo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-gray-300">
                {filteredProjects.map((project) => (
                  <tr key={project.id} className="hover:bg-slate-800/40 transition">
                    <td className="py-3.5 px-4 font-bold text-white whitespace-nowrap">
                      <span className="text-cyan-400 mr-2">⚡</span>
                      {project.name}
                    </td>
                    <td className="py-3.5 px-4 text-gray-300 min-w-[260px]">
                      {project.description}
                    </td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <div className="flex flex-wrap gap-1">
                        {project.stack.map((s, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] text-cyan-300"
                          >
                            `{s}`
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-gray-300 hover:text-white transition"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Repo</span>
                      </a>
                    </td>
                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                      {project.demoUrl ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-900/60 transition"
                        >
                          <span>Ver →</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-gray-500 font-mono text-[11px]">API/Backend</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
