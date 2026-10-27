import React, { useState, useEffect } from 'react';
import { Terminal, ExternalLink, Menu, X, Send } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { PROFILE_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenTerminal?: () => void;
  onOpenContact?: () => void;
  onOpenReadme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, onOpenContact, onOpenReadme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "01. Sobre mí", href: "#about" },
    { label: "02. Stack", href: "#tech" },
    { label: "03. Proyectos", href: "#projects" },
    { label: "04. Métricas", href: "#analytics" },
    { label: "05. Misiones", href: "#missions" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-cyan-500/15 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center text-black font-black text-lg shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition">
            A
          </div>
          <div>
            <div className="font-mono font-bold text-base tracking-wider text-white flex items-center gap-1.5">
              <span>ALEXANDER</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            </div>
            <div className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase">
              Creative Coder
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-mono text-gray-300 hover:text-cyan-400 transition-colors py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-200 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Availability Pill */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-[11px] text-emerald-300 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Disponible</span>
          </div>

          {/* Terminal Launcher */}
          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              title="Abrir CLI Terminal"
              className="p-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-cyan-500/50 text-gray-300 hover:text-cyan-400 transition"
            >
              <Terminal className="w-4 h-4" />
            </button>
          )}

          {/* README.md Copier */}
          {onOpenReadme && (
            <button
              onClick={onOpenReadme}
              title="Ver y Copiar README.md para GitHub"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-cyan-950/60 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 text-xs font-mono transition"
            >
              <span className="text-cyan-400 font-bold">README.md</span>
            </button>
          )}

          {/* GitHub Link */}
          <a
            href={PROFILE_DATA.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Ver GitHub"
            className="p-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-cyan-500/50 text-gray-300 hover:text-white transition"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          {/* Contact Button */}
          {onOpenContact ? (
            <button
              onClick={onOpenContact}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs transition shadow-md shadow-cyan-500/20 active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Contactar</span>
            </button>
          ) : (
            <a
              href={`mailto:${PROFILE_DATA.email}`}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs transition"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Contactar</span>
            </a>
          )}
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-lg bg-slate-900 text-cyan-400 border border-slate-800"
            >
              <Terminal className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 text-gray-300 hover:text-white border border-slate-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-cyan-500/20 px-4 pt-3 pb-6 space-y-3">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-mono text-emerald-300">
              {PROFILE_DATA.availability}
            </span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-mono text-gray-300 hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            {onOpenReadme && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReadme();
                }}
                className="flex items-center justify-center gap-2 py-2 rounded-lg bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold"
              >
                <span>📋 Ver / Copiar README.md</span>
              </button>
            )}
            <a
              href={PROFILE_DATA.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2 rounded-lg bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Ver Portfolio 3D Externo</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenContact) onOpenContact();
              }}
              className="flex items-center justify-center gap-2 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Contactar a Alexander</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
