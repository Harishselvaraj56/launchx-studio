import { useEffect, useState, useRef } from 'react';

const DURATION = 1400; // total ms before fade-out starts


interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  delay: number;
  vx: number;
  vy: number;
}

const PageLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'enter' | 'progress' | 'exit'>('enter');
  const [particles, setParticles] = useState<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);

  // Generate particles around logo rocket area
  useEffect(() => {
    const pts: Particle[] = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: 50 + (Math.random() - 0.5) * 40,
      y: 45 + (Math.random() - 0.5) * 30,
      size: Math.random() * 4 + 2,
      opacity: Math.random() * 0.6 + 0.2,
      delay: Math.random() * 600,
      vx: (Math.random() - 0.5) * 60,
      vy: -(Math.random() * 40 + 10),
    }));
    setParticles(pts);
  }, []);

  // Progress animation
  useEffect(() => {
    // Small delay to let logo fade-in start
    const enterTimeout = setTimeout(() => {
      setPhase('progress');
      startRef.current = performance.now();

      const animate = (now: number) => {
        const elapsed = now - startRef.current;
        const pct = Math.min(elapsed / (DURATION * 0.7), 1);
        // Ease: fast start, decelerate at end
        const eased = 1 - Math.pow(1 - pct, 2.5);
        setProgress(Math.round(eased * 100));

        if (pct < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          // Brief pause at 100%, then exit
          setTimeout(() => setPhase('exit'), 120);
        }
      };

      rafRef.current = requestAnimationFrame(animate);
    }, 200);

    return () => {
      clearTimeout(enterTimeout);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // When exit phase completes, notify parent
  useEffect(() => {
    if (phase === 'exit') {
      const t = setTimeout(onComplete, 500);
      return () => clearTimeout(t);
    }
  }, [phase, onComplete]);

  const isExiting = phase === 'exit';

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: isExiting ? 'opacity 0.5s cubic-bezier(0.4,0,0.2,1)' : 'none',
        opacity: isExiting ? 0 : 1,
        pointerEvents: isExiting ? 'none' : 'all',
      }}
    >
      {/* ── Logo + Glow wrapper ── */}
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>

        {/* Ambient glow behind logo */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -55%)',
            width: '260px',
            height: '260px',
            background: 'radial-gradient(circle, rgba(255,122,0,0.12) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(30px)',
            opacity: phase === 'enter' ? 0 : 1,
            transition: 'opacity 0.8s ease',
            pointerEvents: 'none',
          }}
        />

        {/* ── Logo Mark (SVG icon) ── */}
        <div
          style={{
            opacity: phase === 'enter' ? 0 : 1,
            filter: phase === 'enter' ? 'blur(8px)' : 'blur(0px)',
            transform: phase === 'enter' ? 'scale(0.92)' : 'scale(1)',
            transition: 'opacity 0.55s cubic-bezier(0.16,1,0.3,1), filter 0.55s cubic-bezier(0.16,1,0.3,1), transform 0.55s cubic-bezier(0.16,1,0.3,1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            position: 'relative',
          }}
        >
          {/* Brand icon — lightning bolt, recoloured orange */}
          <div style={{ position: 'relative' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 46"
              fill="none"
              style={{
                width: 'clamp(64px, 14vw, 96px)',
                height: 'auto',
                filter: 'drop-shadow(0 0 18px rgba(255,122,0,0.35))',
              }}
            >
              {/* Main shape — orange */}
              <path
                fill="#FF7A00"
                d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z"
              />
              {/* Inner highlight */}
              <path
                fill="rgba(255,255,255,0.18)"
                d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z"
              />
            </svg>

            {/* Floating particles */}
            {particles.map((p) => (
              <div
                key={p.id}
                style={{
                  position: 'absolute',
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  borderRadius: '50%',
                  background: '#FF7A00',
                  opacity: phase === 'progress' ? p.opacity : 0,
                  transform: phase === 'progress'
                    ? `translate(${p.vx * 0.4}px, ${p.vy * 0.4}px) scale(1)`
                    : 'translate(0,0) scale(0)',
                  transition: `opacity 0.4s ease ${p.delay}ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${p.delay}ms`,
                  pointerEvents: 'none',
                }}
              />
            ))}
          </div>

          {/* ── Wordmark ── */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
            <span
              style={{
                fontSize: 'clamp(1.5rem, 5vw, 2rem)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                color: '#111827',
                fontFamily: "'Outfit', sans-serif",
                lineHeight: 1,
              }}
            >
              LaunchX
            </span>
            <span
              style={{
                fontSize: 'clamp(1.5rem, 5vw, 2rem)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                color: '#FF6B00',
                fontFamily: "'Outfit', sans-serif",
                lineHeight: 1,
              }}
            >
              Studio
            </span>
          </div>
        </div>

        {/* ── Progress track ── */}
        <div
          style={{
            width: 'clamp(140px, 30vw, 220px)',
            height: '2px',
            background: 'rgba(0,0,0,0.07)',
            borderRadius: '100px',
            overflow: 'hidden',
            opacity: phase === 'enter' ? 0 : 1,
            transition: 'opacity 0.4s ease 0.3s',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #FF6B00, #FF9533)',
              borderRadius: '100px',
              transition: 'width 0.08s linear',
              boxShadow: '0 0 8px rgba(255,107,0,0.5)',
            }}
          />
        </div>

      </div>
    </div>
  );
};

export default PageLoader;
