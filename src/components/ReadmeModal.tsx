import React, { useState } from 'react';
import { X, Copy, Check, FileText, ExternalLink } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

interface ReadmeModalProps {
  isOpen: boolean;
  onClose: () => void;
  markdownContent: string;
}

export const ReadmeModal: React.FC<ReadmeModalProps> = ({
  isOpen,
  onClose,
  markdownContent,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(markdownContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-4xl bg-slate-900 border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-950 border border-cyan-500/30 text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>README.md para tu Perfil de GitHub</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
                  Listo para Pegar
                </span>
              </h3>
              <p className="text-xs text-gray-400 font-mono">
                nuveneqra007-rgb / nuveneqra007-rgb / README.md
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono transition shadow-md shadow-cyan-500/20"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>¡README Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiar Todo el Markdown</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Action Callout */}
        <div className="px-6 py-3 bg-cyan-950/30 border-b border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-300 font-mono">
          <span>
            Pega este contenido directamente en el archivo <strong>README.md</strong> de tu repositorio en GitHub para que se vea en tu perfil público.
          </span>
          <a
            href="https://github.com/nuveneqra007-rgb/nuveneqra007-rgb/edit/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-cyan-500/40 text-cyan-300 hover:text-white hover:bg-slate-800 shrink-0 transition"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>Editar en GitHub Web</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Markdown Source Preview */}
        <div className="p-6 overflow-y-auto flex-1 font-mono text-xs text-gray-300 bg-slate-950/90 leading-relaxed selection:bg-cyan-500/30">
          <pre className="whitespace-pre-wrap">{markdownContent}</pre>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-gray-400">
          <span>{markdownContent.split('\n').length} líneas de Markdown optimizado</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-200 transition"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
