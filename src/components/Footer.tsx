import React from 'react';
import { Globe, Mail, Terminal } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { PROFILE_DATA } from '../data/portfolioData';

export const Footer: React.FC<{ onOpenTerminal: () => void }> = ({ onOpenTerminal }) => {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-10 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-gray-500">
        
        {/* Left Info */}
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-md bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center text-xs">
            A
          </div>
          <div>
            <span className="text-gray-300 font-semibold">{PROFILE_DATA.name}</span>
            <span className="mx-2">·</span>
            <span>nuveneqra007-rgb</span>
          </div>
        </div>

        {/* Center Quote */}
        <div className="text-center text-gray-400">
          <span>&quot;{PROFILE_DATA.mindset}&quot;</span>
        </div>

        {/* Right Links */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenTerminal}
            className="hover:text-cyan-400 transition"
            title="Terminal CLI"
          >
            <Terminal className="w-4 h-4" />
          </button>
          <a
            href={PROFILE_DATA.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PROFILE_DATA.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
            title="Portfolio 3D"
          >
            <Globe className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PROFILE_DATA.email}`}
            className="hover:text-cyan-400 transition"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
};
