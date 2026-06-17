import { useRef, useCallback, type ReactNode, type CSSProperties } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Max tilt angle in degrees (default 6) */
  maxTilt?: number;
  /** Scale on hover (default 1.02) */
  hoverScale?: number;
  /** Disable tilt — useful for "popular" featured cards that already have a scale */
  noFloat?: boolean;
}

/**
 * TiltCard
 * Wraps any card content and adds:
 *  - Perspective 3D tilt tracking cursor position (rAF)
 *  - A subtle shimmer / light-reflection overlay that follows the cursor
 *  - A gentle floating idle animation (CSS class)
 *  - Graceful no-op on touch / mobile
 */
const TiltCard = ({
  children,
  className = '',
  style = {},
  maxTilt = 6,
  hoverScale = 1.02,
  noFloat = false,
}: TiltCardProps) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const shimmerRef = useRef<HTMLDivElement>(null);

  // Detect touch so we skip the effect entirely
  const isTouch = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isTouch) return;
      const el = wrapRef.current;
      if (!el) return;

      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        // Normalise to -1 → +1
        const nx = (e.clientX - cx) / (rect.width / 2);
        const ny = (e.clientY - cy) / (rect.height / 2);

        const rotX = -ny * maxTilt;   // tilt up/down
        const rotY = nx * maxTilt;    // tilt left/right

        el.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${hoverScale})`;
        el.style.boxShadow = '0 20px 50px rgba(0,0,0,0.12), 0 8px 32px rgba(255,122,0,0.14)';

        // Shimmer: move gradient origin with cursor
        if (shimmerRef.current) {
          const px = ((e.clientX - rect.left) / rect.width) * 100;
          const py = ((e.clientY - rect.top) / rect.height) * 100;
          shimmerRef.current.style.background = `radial-gradient(circle at ${px}% ${py}%, rgba(255,255,255,0.18) 0%, transparent 60%)`;
          shimmerRef.current.style.opacity = '1';
        }
      });
    },
    [isTouch, maxTilt, hoverScale],
  );

  const handleMouseLeave = useCallback(() => {
    if (isTouch) return;
    cancelAnimationFrame(rafRef.current);
    const el = wrapRef.current;
    if (!el) return;
    el.style.transform = '';
    el.style.boxShadow = '';
    if (shimmerRef.current) {
      shimmerRef.current.style.opacity = '0';
    }
  }, [isTouch]);

  return (
    <div
      ref={wrapRef}
      className={`lx-tilt-card${noFloat ? '' : ' lx-float'} ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease',
        ...style,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Shimmer / light-reflection overlay */}
      <div
        ref={shimmerRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          pointerEvents: 'none',
          opacity: 0,
          transition: 'opacity 0.4s ease',
          zIndex: 2,
        }}
      />

      {/* Content layer — sits above shimmer for pointer events */}
      <div style={{ position: 'relative', zIndex: 3, height: '100%' }}>
        {children}
      </div>
    </div>
  );
};

export default TiltCard;
