import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';
import { PROFILE_DATA, PROJECTS, MISSIONS } from '../data/portfolioData';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1">
          <p className="text-cyan-400 font-bold">
            ⚡ Alexander Interactive Dev Terminal v1.0.0
          </p>
          <p className="text-gray-400 text-xs">
            Escribe <span className="text-yellow-300 font-mono">help</span> para ver los comandos disponibles.
          </p>
        </div>
      ),
    },
  ]);
  const [isExpanded, setIsExpanded] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode;

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-gray-300 font-semibold mb-1">Comandos disponibles:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-gray-400">
              <div><span className="text-cyan-300 font-bold">about</span> : Sobre Alexander y visión</div>
              <div><span className="text-cyan-300 font-bold">projects</span> : Listar proyectos destacados</div>
              <div><span className="text-cyan-300 font-bold">stack</span> : Tecnologías dominadas</div>
              <div><span className="text-cyan-300 font-bold">missions</span> : Metas de desarrollo actuales</div>
              <div><span className="text-cyan-300 font-bold">contact</span> : Información de contacto</div>
              <div><span className="text-cyan-300 font-bold">clear</span> : Limpiar pantalla del terminal</div>
              <div><span className="text-cyan-300 font-bold">sudo hire</span> : Acción especial</div>
            </div>
          </div>
        );
        break;

      case 'about':
        output = (
          <div className="text-xs space-y-1 text-gray-300">
            <p><span className="text-cyan-400 font-bold">Nombre:</span> {PROFILE_DATA.name}</p>
            <p><span className="text-cyan-400 font-bold">Rol:</span> {PROFILE_DATA.role}</p>
            <p><span className="text-cyan-400 font-bold">Ubicación:</span> {PROFILE_DATA.location}</p>
            <p><span className="text-cyan-400 font-bold">Lema:</span> &quot;{PROFILE_DATA.quote}&quot;</p>
            <p><span className="text-cyan-400 font-bold">Disponibilidad:</span> {PROFILE_DATA.availability}</p>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-cyan-400 font-bold">{PROJECTS.length} Proyectos & Repositorios:</p>
            {PROJECTS.map((p, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between text-gray-300 gap-1 pb-1 border-b border-slate-800">
                <span>⚡ {p.name} ({p.stack.join(', ')})</span>
                <a href={p.demoUrl || p.repoUrl} target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline truncate max-w-xs">
                  {p.demoUrl ? p.demoUrl : p.repoUrl}
                </a>
              </div>
            ))}
          </div>
        );
        break;

      case 'stack':
        output = (
          <div className="space-y-1 text-xs text-gray-300">
            <p><span className="text-cyan-400 font-bold">Frontend:</span> TypeScript, React, Vite, JavaScript, HTML5, CSS3</p>
            <p><span className="text-cyan-400 font-bold">3D & Animation:</span> Three.js, GSAP</p>
            <p><span className="text-cyan-400 font-bold">Backend & DB:</span> Python, FastAPI, Supabase</p>
            <p><span className="text-cyan-400 font-bold">Tools:</span> Git, GitHub, Vercel, VS Code</p>
          </div>
        );
        break;

      case 'missions':
        output = (
          <div className="space-y-1 text-xs text-gray-300">
            <p className="text-cyan-400 font-bold">Metas Técnicas Actuales:</p>
            {MISSIONS.map((m, i) => (
              <div key={i} className="flex items-center justify-between">
                <span>• {m.title}</span>
                <span className="font-mono text-cyan-300">{m.progress}%</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-xs text-gray-300">
            <p><span className="text-cyan-400 font-bold">Email:</span> {PROFILE_DATA.email}</p>
            <p><span className="text-cyan-400 font-bold">GitHub:</span> {PROFILE_DATA.githubUrl}</p>
            <p><span className="text-cyan-400 font-bold">Portfolio 3D:</span> {PROFILE_DATA.portfolioUrl}</p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'sudo hire':
        output = (
          <div className="space-y-1 text-xs text-emerald-300 font-bold">
            <p>🚀 Permiso concedido. ¡Iniciando contacto con Alexander!</p>
            <button
              onClick={onOpenContact}
              className="mt-1 px-3 py-1 bg-emerald-500 text-black rounded font-mono font-bold hover:bg-emerald-400 transition"
            >
              Abrir formulario de contratación
            </button>
          </div>
        );
        break;

      default:
        output = (
          <p className="text-xs text-rose-400">
            Comando no reconocido: &quot;{cmd}&quot;. Escribe <span className="underline text-yellow-300">help</span> para opciones.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className={`bg-slate-950 border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col font-mono transition-all duration-300 ${
          isExpanded ? 'w-full h-full max-w-6xl max-h-[92vh]' : 'w-full max-w-2xl h-[460px]'
        }`}
      >
        {/* Header Bar */}
        <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-bold text-gray-200">
              alexander@cli: ~/portfolio (bash)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 rounded text-gray-400 hover:text-white transition"
              title={isExpanded ? 'Restaurar' : 'Maximizar'}
            >
              {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-gray-400 hover:text-rose-400 transition"
              title="Cerrar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Console Body */}
        <div className="p-4 overflow-y-auto flex-1 space-y-3 text-xs leading-relaxed">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                <span className="text-emerald-400">nuveneqra@dev:~$</span>
                <span className="text-white">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input bar */}
        <form
          onSubmit={handleCommand}
          className="bg-slate-900/90 border-t border-slate-800 px-4 py-3 flex items-center gap-2"
        >
          <span className="text-emerald-400 text-xs font-bold">nuveneqra@dev:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe 'help', 'projects', 'about'..."
            className="flex-1 bg-transparent border-0 text-cyan-200 text-xs font-mono focus:outline-none placeholder-gray-600"
          />
          <button
            type="submit"
            className="p-1.5 text-cyan-400 hover:text-white transition"
            title="Ejecutar"
          >
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
