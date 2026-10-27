import React, { useState, useEffect } from 'react';
import { ParticleCanvas } from './components/ParticleCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { TechStackSection } from './components/TechStackSection';
import { ProjectsSection } from './components/ProjectsSection';
import { GitHubAnalyticsSection } from './components/GitHubAnalyticsSection';
import { MissionsSection } from './components/MissionsSection';
import { ContactSection, ContactModal } from './components/ContactSection';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { Footer } from './components/Footer';
import { ArrowUp, Terminal as TerminalIcon } from 'lucide-react';

export const App: React.FC = () => {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut: `~` or Ctrl+K/Cmd+K to toggle terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      } else if (e.key === '`' || e.key === '~') {
        // Toggle terminal only if not typing in an input
        if (
          document.activeElement?.tagName !== 'INPUT' &&
          document.activeElement?.tagName !== 'TEXTAREA'
        ) {
          e.preventDefault();
          setTerminalOpen((prev) => !prev);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* 3D Particle Canvas Background */}
      <ParticleCanvas />

      {/* Cyber Grid Texture */}
      <div className="fixed inset-0 tech-grid-bg opacity-40 pointer-events-none z-0" />

      {/* Top Navbar */}
      <Navbar
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          onOpenTerminal={() => setTerminalOpen(true)}
          onOpenContact={() => setContactModalOpen(true)}
        />

        <AboutSection />

        <TechStackSection />

        <ProjectsSection />

        <GitHubAnalyticsSection />

        <MissionsSection />

        <ContactSection onOpenContactModal={() => setContactModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Interactive CLI Terminal Drawer/Modal */}
      <InteractiveTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onOpenContact={() => {
          setTerminalOpen(false);
          setContactModalOpen(true);
        }}
      />

      {/* Contact Form / Mail Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      {/* Floating Action Button for Terminal & Scroll to top */}
      <div className="fixed bottom-6 left-6 z-40 flex items-center gap-2">
        <button
          onClick={() => setTerminalOpen(true)}
          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/40 text-cyan-300 shadow-xl shadow-cyan-950/50 backdrop-blur-md text-xs font-mono transition transform hover:scale-105"
          title="Abrir CLI Terminal (Ctrl+K o ~)"
        >
          <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
          <span className="hidden sm:inline">CLI Terminal</span>
          <span className="text-[10px] text-gray-400 font-mono px-1.5 py-0.5 rounded bg-black/50 border border-slate-700">
            Ctrl+K
          </span>
        </button>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 shadow-xl backdrop-blur-md transition transform hover:-translate-y-1"
          title="Volver arriba"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
