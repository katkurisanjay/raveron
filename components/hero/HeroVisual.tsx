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

    // Neural Network Layers
    interface Node {
      x: number; y: number;
      baseX: number; baseY: number;
      r: number;
      type: 'data' | 'annotation' | 'output';
      layerIndex: number;
    }

    const layers = [3, 5, 5, 2];
    const xPos = [80, 190, 300, 410];
    const nodes: Node[] = [];
    
    layers.forEach((nodeCount, lIndex) => {
      const x = xPos[lIndex];
      const spacingY = 360 / (nodeCount + 1);
      for (let i = 0; i < nodeCount; i++) {
        const y = 60 + spacingY * (i + 1);
        const type = lIndex === 0 ? 'data' : (lIndex === layers.length - 1 ? 'output' : 'annotation');
        nodes.push({
          x, y,
          baseX: x, baseY: y,
          r: lIndex === 0 || lIndex === layers.length - 1 ? 5 : 4,
          type,
          layerIndex: lIndex,
        });
      }
    });

    const colors = {
      data:       { stroke: '#2563EB', fill: 'rgba(37,99,235,0.15)' },
      annotation: { stroke: '#06B6D4', fill: 'rgba(6,182,212,0.12)' },
      output:     { stroke: '#3B82F6', fill: 'rgba(59,130,246,0.1)' },
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, SIZE, SIZE);
      timeRef.current = time;
      const t = time * 0.001;

      // Float nodes slightly
      nodes.forEach((n, i) => {
        n.x = n.baseX + Math.sin(t * 0.8 + i) * 6;
        n.y = n.baseY + Math.cos(t * 0.9 + i) * 6;
      });

      // Draw Neural Network connections
      nodes.forEach((n1) => {
        nodes.forEach((n2) => {
          if (n2.layerIndex === n1.layerIndex + 1) {
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            const flow = Math.sin(t * 2 - n1.layerIndex * 0.5) * 0.5 + 0.5;
            ctx.strokeStyle = `rgba(6,182,212,${0.08 + flow * 0.15})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      // Data packets flowing through layers
      nodes.forEach((n1, i) => {
        const nextLayerNodes = nodes.filter(n => n.layerIndex === n1.layerIndex + 1);
        if (nextLayerNodes.length > 0) {
          const targetIndex = (i + Math.floor(t * 2)) % nextLayerNodes.length;
          const target = nextLayerNodes[targetIndex];
          const prog = (t * 0.8 + i * 0.25) % 1; 
          const px = n1.x + (target.x - n1.x) * prog;
          const py = n1.y + (target.y - n1.y) * prog;
          
          ctx.beginPath();
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(37,99,235,0.8)';
          ctx.shadowBlur = 8;
          ctx.shadowColor = 'rgba(37,99,235,0.8)';
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // Draw neural net nodes
      nodes.forEach((n) => {
        const c = colors[n.type];
        const pulse = Math.sin(t * 2 + n.y * 0.05) * 0.3 + 0.7;
        const glowAlpha = { data: 0.25, annotation: 0.22, output: 0.2 };
        const glowChannels = { data: '37,99,235', annotation: '6,182,212', output: '59,130,246' };

        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 4);
        grad.addColorStop(0, `rgba(${glowChannels[n.type]},${(glowAlpha[n.type] * pulse).toFixed(2)})`);
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 4, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = c.fill;
        ctx.strokeStyle = c.stroke;
        ctx.lineWidth = 1.5;
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 0.35, 0, Math.PI * 2);
        ctx.fillStyle = c.stroke;
        ctx.fill();
      });

      // Central RAVERON text with pulsing glow
      const cx = SIZE / 2, cy = SIZE / 2;
      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = 'bold 20px Inter, system-ui, sans-serif';
      
      const textPulse = 0.7 + Math.sin(t * 1.5) * 0.3;
      ctx.fillStyle = `rgba(255, 255, 255, ${textPulse})`;
      ctx.shadowBlur = 15;
      ctx.shadowColor = `rgba(6,182,212,${textPulse * 0.8})`;
      
      ctx.fillText('R A V E R O N', cx, cy);
      ctx.restore();

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
