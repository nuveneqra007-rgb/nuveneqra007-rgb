import React, { useState } from 'react';
import { Mail, Copy, Check, Send, ExternalLink, X } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PROFILE_DATA.email}?subject=${encodeURIComponent(
      subject || 'Propuesta de Colaboración / Proyecto'
    )}&body=${encodeURIComponent(
      `Hola Alexander,\n\nSoy ${senderName || 'un visitante de tu perfil'}.\n\n${message}\n\nSaludos!`
    )}`;
    window.location.href = mailtoUrl;
  };

  const setTemplate = (tpl: 'collab' | 'freelance' | 'hire') => {
    if (tpl === 'collab') {
      setSubject('Colaboración en proyecto de desarrollo web');
      setMessage('Hola Alexander, vi tus proyectos 3D y tu stack tecnológico. Me gustaría conversar sobre una colaboración...');
    } else if (tpl === 'freelance') {
      setSubject('Oportunidad de proyecto Freelance');
      setMessage('Hola Alexander, tenemos un proyecto que requiere desarrollo frontend moderno y animaciones...');
    } else {
      setSubject('Propuesta laboral / Contratación');
      setMessage('Hola Alexander, estamos buscando talento con tu perfil para una posición remota...');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-xl bg-slate-900 border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-bold text-white">Contactar a Alexander</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-gray-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          {/* Email direct copy bar */}
          <div className="flex items-center justify-between p-3.5 bg-slate-950/80 rounded-xl border border-slate-800">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono text-gray-400">Email:</span>
              <span className="text-sm font-mono text-cyan-300 font-semibold select-all">
                {PROFILE_DATA.email}
              </span>
            </div>
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 text-xs font-mono transition"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copiado</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiar</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Templates */}
          <div>
            <div className="text-xs font-mono text-gray-400 mb-2">Plantillas rápidas:</div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setTemplate('collab')}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-300 text-xs font-mono transition"
              >
                🤝 Colaboración
              </button>
              <button
                type="button"
                onClick={() => setTemplate('freelance')}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-300 text-xs font-mono transition"
              >
                💼 Freelance
              </button>
              <button
                type="button"
                onClick={() => setTemplate('hire')}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-300 text-xs font-mono transition"
              >
                🚀 Contratación
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSendEmail} className="space-y-3.5">
            <div>
              <label className="block text-xs font-mono text-gray-400 mb-1">Tu Nombre</label>
              <input
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="Ej. Carlos Méndez"
                className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-gray-400 mb-1">Asunto</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Propuesta de proyecto"
                className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-gray-400 mb-1">Mensaje</label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Cuéntame sobre la idea o propuesta..."
                className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400 resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg text-xs font-mono text-gray-400 hover:text-white"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex items-center gap-1.5 px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-bold text-xs font-mono transition shadow-md shadow-cyan-500/20"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Abrir Cliente de Correo</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export const ContactSection: React.FC<{ onOpenContactModal: () => void }> = ({ onOpenContactModal }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 relative overflow-hidden text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Glowing header from README */}
        <div className="inline-block mb-3 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-widest uppercase">
          — LET&apos;S BUILD SOMETHING GREAT —
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
          Ideas → Code → Experience → Impact
        </h2>

        <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-8 font-light">
          ¿Tienes una idea innovadora, necesitas una experiencia 3D cautivadora o buscas
          un frontend developer comprometido con el detalle?
        </p>

        {/* Buttons matching README badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href={PROFILE_DATA.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-bold text-sm transition transform hover:-translate-y-0.5 shadow-lg shadow-cyan-500/25"
          >
            <span>🌐 MI PORTFOLIO 3D</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenContactModal}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/40 text-white font-mono text-sm transition transform hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>📧 Enviar Mensaje</span>
          </button>

          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-gray-300 hover:text-white font-mono text-xs transition"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">¡Email Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-gray-400" />
                <span>{PROFILE_DATA.email}</span>
              </>
            )}
          </button>
        </div>

        {/* Subtitle from README */}
        <div className="text-xs sm:text-sm text-gray-400 font-mono italic">
          Designed with curiosity. Built with code. Powered by passion. 🚀
        </div>

        {/* Footer wave image matching README */}
        <div className="mt-12 w-full rounded-2xl overflow-hidden border border-cyan-500/20 shadow-xl bg-gradient-to-r from-[#00D9FF] via-[#0a0a2e] to-black">
          <img
            src="https://capsule-render.vercel.app/api?type=waving&color=0:00D9FF,50:0a0a2e,100:000000&height=100&section=footer"
            alt="Waving Footer Banner"
            className="w-full h-auto min-h-[90px] object-cover"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
};
