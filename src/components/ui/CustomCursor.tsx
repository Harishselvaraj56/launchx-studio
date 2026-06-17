import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isView, setIsView] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }

      if (target.closest('[data-cursor-view]')) {
        setIsView(true);
      } else {
        setIsView(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-accent pointer-events-none z-[100] hidden lg:flex items-center justify-center overflow-hidden"
        style={{
          mixBlendMode: isView ? 'normal' : 'difference',
          background: isView ? 'var(--accent)' : 'transparent',
          border: isView ? 'none' : '2px solid var(--accent)'
        }}
        animate={{
          x: mousePosition.x - (isView ? 32 : 16),
          y: mousePosition.y - (isView ? 32 : 16),
          scale: isView ? 2 : (isHovering ? 1.5 : 1),
          width: isView ? '64px' : '32px',
          height: isView ? '64px' : '32px',
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      >
        <motion.span 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isView ? 1 : 0, scale: isView ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-white text-[10px] font-bold uppercase tracking-widest"
        >
          View
        </motion.span>
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-accent pointer-events-none z-[100] hidden lg:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: isView ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.1,
        }}
      />
      <div 
        className="fixed top-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none z-[-1] hidden lg:block transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 200}px, ${mousePosition.y - 200}px)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
