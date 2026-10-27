import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  baseAlpha: number;
}

export const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [particleMode, setParticleMode] = useState<'cyber' | 'galaxy' | 'aurora'>('cyber');
  const mouseRef = useRef<{ x: number | null; y: number | null; radius: number }>({
    x: null,
    y: null,
    radius: 140,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    let particles: Particle[] = [];

    const getColors = () => {
      if (particleMode === 'cyber') {
        return ['#00D9FF', '#06b6d4', '#3b82f6', '#8b5cf6'];
      } else if (particleMode === 'galaxy') {
        return ['#ec4899', '#8b5cf6', '#6366f1', '#00D9FF'];
      } else {
        return ['#10b981', '#06b6d4', '#14b8a6', '#6ee7b7'];
      }
    };

    const initParticles = () => {
      particles = [];
      const colors = getColors();
      const density = Math.min(100, Math.floor((width * height) / 14000));
      for (let i = 0; i < density; i++) {
        const radius = Math.random() * 2 + 1;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.7,
          vy: (Math.random() - 0.5) * 0.7,
          radius,
          color: colors[Math.floor(Math.random() * colors.length)],
          baseAlpha: Math.random() * 0.5 + 0.3,
        });
      }
    };

    initParticles();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 110) {
            const alpha = (1 - distance / 110) * 0.22;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 217, 255, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      // Draw and update particles
      particles.forEach((p) => {
        // Mouse interaction
        if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
          const dx = p.x - mouseRef.current.x;
          const dy = p.y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseRef.current.radius) {
            const force = (mouseRef.current.radius - dist) / mouseRef.current.radius;
            const angle = Math.atan2(dy, dx);
            p.x += Math.cos(angle) * force * 2.2;
            p.y += Math.sin(angle) * force * 2.2;
          }
        }

        p.x += p.vx;
        p.y += p.vy;

        // Wrap boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.baseAlpha;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1.0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleMode]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full opacity-60" />
      {/* Subtly positioned particle preset toggle control */}
      <div className="absolute bottom-4 right-4 pointer-events-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-cyan-500/20 text-xs text-gray-400">
        <span className="text-[10px] uppercase font-mono tracking-wider text-cyan-400">Ambiente 3D:</span>
        <button
          onClick={() => setParticleMode('cyber')}
          className={`px-2 py-0.5 rounded transition ${particleMode === 'cyber' ? 'bg-cyan-500/30 text-cyan-300 font-semibold' : 'hover:text-gray-200'}`}
        >
          Cyber
        </button>
        <button
          onClick={() => setParticleMode('galaxy')}
          className={`px-2 py-0.5 rounded transition ${particleMode === 'galaxy' ? 'bg-purple-500/30 text-purple-300 font-semibold' : 'hover:text-gray-200'}`}
        >
          Galaxia
        </button>
        <button
          onClick={() => setParticleMode('aurora')}
          className={`px-2 py-0.5 rounded transition ${particleMode === 'aurora' ? 'bg-emerald-500/30 text-emerald-300 font-semibold' : 'hover:text-gray-200'}`}
        >
          Aurora
        </button>
      </div>
    </div>
  );
};
