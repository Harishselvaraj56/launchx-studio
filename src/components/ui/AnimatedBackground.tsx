import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rawMouse = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      rawMouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Ether style colors
    const colors = ['#ffffff', '#f3f4f6', '#7FDBFF', '#A78BFA'];
    const particleCount = 35; // Limit to 20-40 max
    
    const particles: {
      x: number; y: number;
      vx: number; vy: number;
      baseVx: number; baseVy: number;
      radius: number; color: string;
      alpha: number; depth: number;
    }[] = [];

    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 1.5 + 1; // 1px to 2.5px radius
      const depth = radius / 2.5; 
      const vx = (Math.random() - 0.5) * 0.3 * depth;
      const vy = (Math.random() - 0.5) * 0.3 * depth;
      
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx, vy, baseVx: vx, baseVy: vy,
        radius,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.2 + 0.2, // 0.2 - 0.4 opacity
        depth
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      const mx = rawMouse.current.x;
      const my = rawMouse.current.y;
      
      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        
        // Mouse interaction (gentle repulsion)
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const repulseRadius = 150;
        
        if (dist < repulseRadius) {
          const force = (repulseRadius - dist) / repulseRadius;
          p.vx += (dx / dist) * force * 0.02;
          p.vy += (dy / dist) * force * 0.02;
        }
        
        // Return to base velocity
        p.vx += (p.baseVx - p.vx) * 0.05;
        p.vy += (p.baseVy - p.vy) * 0.05;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around smoothly
        if (p.x < -50) p.x = width + 50;
        if (p.x > width + 50) p.x = -50;
        if (p.y < -50) p.y = height + 50;
        if (p.y > height + 50) p.y = -50;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        
        if (p.depth < 0.6) {
           ctx.shadowBlur = 3;
           ctx.shadowColor = p.color;
        } else {
           ctx.shadowBlur = 0;
        }
        
        ctx.fill();
        ctx.shadowBlur = 0;
        
        // Connect lines
        for (let j = i + 1; j < particles.length; j++) {
           let p2 = particles[j];
           const lDx = p.x - p2.x;
           const lDy = p.y - p2.y;
           const lDist = Math.sqrt(lDx * lDx + lDy * lDy);
           const connectRadius = 160;
           
           if (lDist < connectRadius) {
             const lineAlpha = (1 - (lDist / connectRadius)) * 0.15; // 0.15 max opacity
             ctx.beginPath();
             ctx.moveTo(p.x, p.y);
             ctx.lineTo(p2.x, p2.y);
             // Create subtle gradient line based on distance
             const gradient = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y);
             gradient.addColorStop(0, p.color);
             gradient.addColorStop(1, p2.color);
             
             ctx.strokeStyle = gradient;
             ctx.globalAlpha = lineAlpha;
             ctx.lineWidth = 1;
             ctx.stroke();
           }
        }
      }
      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        // Minimal transparent background to let the body gradient show through
        background: 'transparent',
      }}
    >
      {/* Subtle ether accents matching the body background */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', filter: 'blur(120px)', opacity: 0.4 }}>
        <motion.div
          animate={{ x: [0, 50, -30, 0], y: [0, -60, 40, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', top: '-10%', left: '-10%', width: '50vw', height: '50vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(167, 139, 250, 0.15) 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ x: [0, -60, 40, 0], y: [0, 50, -30, 0] }}
          transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '60vw', height: '60vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(127, 219, 255, 0.15) 0%, transparent 70%)' }}
        />
      </div>

      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.9, zIndex: 1 }}
      />
    </div>
  );
};

export default AnimatedBackground;
