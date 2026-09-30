'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/** Interactive technology composition — connected nodes, data lines, annotation geometry */
export function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const SIZE = 480;
    canvas.width = SIZE * dpr;
    canvas.height = SIZE * dpr;
    canvas.style.width = `${SIZE}px`;
    canvas.style.height = `${SIZE}px`;
    ctx.scale(dpr, dpr);

    // Node network
    interface Node {
      x: number; y: number;
      vx: number; vy: number;
      r: number;
      type: 'data' | 'annotation' | 'output';
    }

    const nodes: Node[] = [
      { x: 240, y: 140, vx: 0.3, vy: 0.2, r: 6, type: 'data' },
      { x: 140, y: 220, vx: -0.2, vy: 0.35, r: 5, type: 'annotation' },
      { x: 340, y: 200, vx: 0.25, vy: -0.3, r: 5, type: 'annotation' },
      { x: 180, y: 320, vx: -0.15, vy: -0.2, r: 4, type: 'output' },
      { x: 310, y: 310, vx: 0.2, vy: 0.15, r: 4, type: 'output' },
      { x: 90, y: 150, vx: 0.4, vy: 0.1, r: 3, type: 'data' },
      { x: 390, y: 140, vx: -0.35, vy: 0.25, r: 3, type: 'annotation' },
      { x: 240, y: 360, vx: 0.1, vy: -0.3, r: 5, type: 'output' },
      { x: 120, y: 390, vx: 0.3, vy: -0.15, r: 3, type: 'data' },
      { x: 380, y: 370, vx: -0.25, vy: -0.1, r: 3, type: 'annotation' },
    ];

    const colors = {
      data:       { stroke: '#2563EB', fill: 'rgba(37,99,235,0.15)', glow: 'rgba(37,99,235,0.4)' },
      annotation: { stroke: '#06B6D4', fill: 'rgba(6,182,212,0.12)', glow: 'rgba(6,182,212,0.35)' },
      output:     { stroke: '#3B82F6', fill: 'rgba(59,130,246,0.1)',  glow: 'rgba(59,130,246,0.3)' },
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, SIZE, SIZE);
      timeRef.current = time;
      const t = time * 0.001;

      // Update node positions
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 20 || n.x > SIZE - 20) n.vx *= -1;
        if (n.y < 20 || n.y > SIZE - 20) n.vy *= -1;
      });

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 180;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.35;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(59,130,246,${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Floating data packets along lines
      nodes.forEach((n, i) => {
        if (i % 3 === 0) {
          const target = nodes[(i + 1) % nodes.length];
          const prog = (Math.sin(t + i) * 0.5 + 0.5);
          const px = n.x + (target.x - n.x) * prog;
          const py = n.y + (target.y - n.y) * prog;
          ctx.beginPath();
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(6,182,212,0.8)';
          ctx.fill();
        }
      });

      // Draw nodes
      nodes.forEach((n) => {
        const c = colors[n.type];
        const pulse = Math.sin(t * 1.5 + n.x * 0.05) * 0.3 + 0.7;

    const glowAlpha = { data: 0.25, annotation: 0.22, output: 0.2 };
        const glowChannels = { data: '37,99,235', annotation: '6,182,212', output: '59,130,246' };

        // Glow
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 4);
        grad.addColorStop(0, `rgba(${glowChannels[n.type]},${(glowAlpha[n.type] * pulse).toFixed(2)})`);
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 4, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Fill
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = c.fill;
        ctx.strokeStyle = c.stroke;
        ctx.lineWidth = 1.5;
        ctx.fill();
        ctx.stroke();

        // Inner dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 0.35, 0, Math.PI * 2);
        ctx.fillStyle = c.stroke;
        ctx.fill();
      });

      // Central hub ring
      const cx = SIZE / 2, cy = SIZE / 2;
      const ringR = 60 + Math.sin(t * 0.5) * 4;
      ctx.beginPath();
      ctx.arc(cx, cy, ringR, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(37,99,235,0.15)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 8]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Rotating arc
      ctx.beginPath();
      ctx.arc(cx, cy, ringR, t * 0.8, t * 0.8 + Math.PI * 0.6);
      ctx.strokeStyle = 'rgba(6,182,212,0.5)';
      ctx.lineWidth = 2;
      ctx.stroke();

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  // Respect reduced motion
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
      style={{
        position: 'relative',
        width: '480px',
        height: '480px',
        maxWidth: '100%',
      }}
      aria-hidden="true"
    >
      {/* Outer decoration ring */}
      <div style={{
        position: 'absolute',
        inset: '-1px',
        borderRadius: '50%',
        border: '1px solid rgba(37,99,235,0.12)',
        pointerEvents: 'none',
      }} />

      {/* Corner brackets — annotation geometry aesthetic */}
      {[
        { top: '5%', left: '5%', rotate: '0deg' },
        { top: '5%', right: '5%', rotate: '90deg' },
        { bottom: '5%', right: '5%', rotate: '180deg' },
        { bottom: '5%', left: '5%', rotate: '270deg' },
      ].map((pos, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: '24px',
          height: '24px',
          ...pos,
          transform: `rotate(${pos.rotate})`,
          borderTop: '2px solid rgba(6,182,212,0.4)',
          borderLeft: '2px solid rgba(6,182,212,0.4)',
        }} />
      ))}

      {/* Canvas */}
      {!prefersReducedMotion && (
        <canvas
          ref={canvasRef}
          style={{
            display: 'block',
            borderRadius: '50%',
          }}
        />
      )}

      {/* Static fallback for reduced-motion */}
      {prefersReducedMotion && (
        <div style={{
          width: '480px',
          height: '480px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.1) 0%, transparent 70%)',
          border: '1px solid rgba(37,99,235,0.15)',
        }} />
      )}
    </motion.div>
  );
}
