import React, { useState } from 'react';
import { BarChart3, ExternalLink, RefreshCw, Activity, Award, Flame } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { PROFILE_DATA } from '../data/portfolioData';

export const GitHubAnalyticsSection: React.FC = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    setRefreshKey((prev) => prev + 1);
  };

  const username = PROFILE_DATA.username;

  return (
    <section id="analytics" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-cyan-400 font-bold text-lg">04</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              GitHub Analytics
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleRefresh}
              title="Recargar métricas"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-gray-400 hover:text-cyan-400 transition"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <a
              href={PROFILE_DATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-gray-300 hover:text-white transition"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>@{username}</span>
              <ExternalLink className="w-3 h-3 text-cyan-400" />
            </a>
          </div>
        </div>

        <p className="text-gray-400 text-sm max-w-2xl mb-8">
          Métricas de actividad, racha de contribuciones y tecnologías más utilizadas
          sincronizadas en tiempo real desde GitHub.
        </p>

        {/* Analytics Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* GitHub Readme Stats */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold">
                <Award className="w-4 h-4" />
                <span>Estadísticas Generales</span>
              </div>
              <span className="text-[11px] font-mono text-gray-500">Commits & PRs</span>
            </div>
            <div className="flex items-center justify-center min-h-[170px] overflow-hidden">
              <img
                key={`stats-${refreshKey}`}
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&hide_border=true&bg_color=0D1117&title_color=00D9FF&icon_color=00D9FF&text_color=E6EDF3&count_private=true&include_all_commits=true`}
                alt="GitHub Stats de Alexander"
                className="w-full max-w-md h-auto rounded-lg shadow-inner"
                loading="lazy"
              />
            </div>
          </div>

          {/* Top Languages */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold">
                <BarChart3 className="w-4 h-4" />
                <span>Lenguajes Principales</span>
              </div>
              <span className="text-[11px] font-mono text-gray-500">Por volumen de código</span>
            </div>
            <div className="flex items-center justify-center min-h-[170px] overflow-hidden">
              <img
                key={`langs-${refreshKey}`}
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&hide_border=true&bg_color=0D1117&title_color=00D9FF&text_color=E6EDF3&langs_count=8`}
                alt="Lenguajes más usados de Alexander"
                className="w-full max-w-md h-auto rounded-lg shadow-inner"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Streak Stats */}
        <div className="mb-6 p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold">
              <Flame className="w-4 h-4 text-orange-400" />
              <span>Racha de Días con Commits</span>
            </div>
            <span className="text-[11px] font-mono text-gray-500">Streak Stats</span>
          </div>
          <div className="flex items-center justify-center overflow-x-auto py-2">
            <img
              key={`streak-${refreshKey}`}
              src={`https://streak-stats.demolab.com?user=${username}&theme=transparent&hide_border=true&ring=00D9FF&fire=00D9FF&currStreakLabel=00D9FF&sideNums=ffffff&currStreakNum=00D9FF&sideLabels=888888&dates=555555`}
              alt="GitHub Streak de Alexander"
              className="max-w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>

        {/* Activity Graph */}
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold">
              <Activity className="w-4 h-4 text-cyan-400" />
              <span>Gráfico de Actividad Continua</span>
            </div>
            <span className="text-[11px] font-mono text-gray-500">Historial reciente</span>
          </div>
          <div className="w-full overflow-x-auto rounded-lg">
            <img
              key={`graph-${refreshKey}`}
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&bg_color=0D1117&color=00D9FF&line=00D9FF&point=ffffff&area=true&area_color=00D9FF&hide_border=true`}
              alt="Gráfico de actividad de GitHub"
              className="w-full min-w-[600px] h-auto"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
