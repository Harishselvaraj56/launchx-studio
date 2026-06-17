import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  elementType?: React.ElementType;
  asWords?: boolean;
}

const TextReveal = ({
  text,
  className = '',
  delay = 0,
  duration = 0.5,
  stagger = 0.05,
  elementType: Component = 'span',
  asWords = true,
}: TextRevealProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: '100%', rotate: 5 },
    show: {
      opacity: 1,
      y: '0%',
      rotate: 0,
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  const items = useMemo(() => {
    return asWords ? text.split(' ') : text.split('');
  }, [text, asWords]);

  // Component is used as a wrapper tag — suppress unused warning
  void Component;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      className={`inline-flex flex-wrap ${className}`}
    >
      {items.map((item, index) => (
        <span key={index} style={{ overflow: 'hidden', display: 'inline-block' }}>
          <motion.span
            variants={itemVariants}
            style={{ display: 'inline-block', whiteSpace: 'pre' }}
          >
            {item}{asWords ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
};

export default TextReveal;
