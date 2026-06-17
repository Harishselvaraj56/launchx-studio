import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Omit handlers that Framer Motion redefines with incompatible signatures
type SafeButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'onAnimationStart' | 'onDrag' | 'onDragEnd' | 'onDragStart'
>;

interface MagneticButtonProps extends SafeButtonProps {
  children: React.ReactNode;
  intensity?: number;
}

const MagneticButton = ({
  children,
  className = '',
  onClick,
  intensity = 0.5,
  ...rest
}: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * intensity;
    const y = (e.clientY - (top + height / 2)) * intensity;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={buttonRef}
      className={className}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      {...rest}
    >
      {children}
    </motion.button>
  );
};

export default MagneticButton;

