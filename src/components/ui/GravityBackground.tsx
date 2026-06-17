import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const isMobile = () => window.innerWidth < 768;

const GravityBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Floating geometric shapes data — only created on desktop
  const shapesData = useRef(
    Array.from({ length: isMobile() ? 0 : 12 }).map((_, i) => {
      const type = ['circle', 'square', 'triangle', 'glass-card'][Math.floor(Math.random() * 4)];
      let width = Math.random() * 60 + 40;
      let height = width;
      if (type === 'glass-card') {
        width = Math.random() * 100 + 100;
        height = width * 0.6;
      }
      return {
        id: i,
        type,
        width,
        height,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 1.5,
        depth: Math.random() * 0.7 + 0.3,
        element: null as HTMLElement | null,
      };
    })
  );

  // Main Physics and Particle Engine — skipped on mobile
  useEffect(() => {
    if (isMobile()) return; // 📱 Skip heavy canvas on mobile

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // AI Network Particles
    const particles = Array.from({ length: 40 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 1.5 + 0.5,
      baseAlpha: Math.random() * 0.3 + 0.1,
      color: Math.random() > 0.8 ? '#ff7a00' : '#9ca3af',
    }));

    let animationFrame: number;

    const render = () => {
      // 1. Draw Canvas Particles
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.color === '#ff7a00' ? p.baseAlpha * 2 : p.baseAlpha;
        if (p.color === '#ff7a00') {
          ctx.shadowBlur = 12;
          ctx.shadowColor = '#ff7a00';
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.fill();
        ctx.shadowBlur = 0;

        // Lines between particles
        for (let j = i + 1; j < particles.length; j++) {
          let p2 = particles[j];
          const lDx = p.x - p2.x;
          const lDy = p.y - p2.y;
          const lDist = Math.sqrt(lDx * lDx + lDy * lDy);

          if (lDist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color === '#ff7a00' || p2.color === '#ff7a00' ? '#ff7a00' : '#6b7280';
            ctx.globalAlpha = (1 - lDist / 120) * 0.15;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      // 2. Update DOM Shapes (Gravity/Inertia physics)
      shapesData.current.forEach(shape => {
        if (!shape.element) return;

        // Friction / Air resistance
        shape.vx *= 0.99;
        shape.vy *= 0.99;
        shape.vRot *= 0.99;

        // Base ambient drift
        shape.vx += (Math.random() - 0.5) * 0.02;
        shape.vy += (Math.random() - 0.5) * 0.02;

        // Cap speed
        const speed = Math.sqrt(shape.vx * shape.vx + shape.vy * shape.vy);
        if (speed > 3) {
          shape.vx = (shape.vx / speed) * 3;
          shape.vy = (shape.vy / speed) * 3;
        }

        shape.x += shape.vx;
        shape.y += shape.vy;
        shape.rotation += shape.vRot;

        // Bounce off walls (Gravity bounding box)
        if (shape.x < -shape.width) shape.x = width + shape.width;
        if (shape.x > width + shape.width) shape.x = -shape.width;
        if (shape.y < -height * 0.2) shape.y = height + height * 0.2;
        if (shape.y > height + height * 0.2) shape.y = -height * 0.2;

        // GPU accelerated transform
        shape.element.style.transform = `translate3d(${shape.x}px, ${shape.y}px, 0) rotate(${shape.rotation}deg) scale(${shape.depth})`;
      });

      animationFrame = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div 
      style={{ 
        position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none', overflow: 'hidden',
        background: 'transparent'
      }}
    >
      {/* Soft ambient orange light */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', opacity: 0.35 }}>
        <motion.div
          animate={{ x: [0, -40, 30, 0], y: [0, 50, -20, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            width: '60vw',
            height: '60vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,122,0,0.08) 0%, transparent 60%)',
            left: '20%',
            top: '10%',
            filter: 'blur(100px)',
          }}
        />
        <motion.div
          animate={{ x: [0, 50, -30, 0], y: [0, -60, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            width: '80vw',
            height: '80vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(167,139,250,0.04) 0%, transparent 60%)',
            right: '-20%',
            bottom: '-20%',
            filter: 'blur(100px)',
          }}
        />
      </div>

      {/* AI Network Canvas */}
      <canvas 
        ref={canvasRef} 
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1 }} 
      />

      {/* Floating Geometric Objects & Glass Cards */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 2, perspective: '1000px' }}>
        {shapesData.current.map((shape) => (
          <div
            key={shape.id}
            ref={(el) => { shape.element = el; }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: `${shape.width}px`,
              height: `${shape.height}px`,
              willChange: 'transform',
            }}
            className="flex items-center justify-center"
          >
            {shape.type === 'circle' && (
              <div className="w-full h-full rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_15px_rgba(255,122,0,0.05)]" />
            )}
            {shape.type === 'square' && (
              <div className="w-full h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_15px_rgba(255,122,0,0.05)]" />
            )}
            {shape.type === 'triangle' && (
              <div 
                className="w-full h-full opacity-30" 
                style={{
                  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                  background: 'linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,122,0,0.1))',
                  backdropFilter: 'blur(4px)'
                }}
              />
            )}
            {shape.type === 'glass-card' && (
              <div className="w-full h-full rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-2xl overflow-hidden flex flex-col p-3 gap-2">
                <div className="w-1/3 h-2 bg-white/10 rounded-full" />
                <div className="w-2/3 h-2 bg-white/5 rounded-full" />
                <div className="w-1/2 h-2 bg-[#ff7a00]/20 rounded-full mt-auto" />
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* SVG Noise Texture for Premium Look */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.03, zIndex: 3, mixBlendMode: 'overlay' }}>
        <filter id="gravityNoise">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#gravityNoise)" />
      </svg>
    </div>
  );
};

export default GravityBackground;
