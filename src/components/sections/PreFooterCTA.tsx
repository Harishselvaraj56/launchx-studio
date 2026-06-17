import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const PreFooterCTA = () => {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '120px 0',
        background: 'linear-gradient(135deg, #0B0F19 0%, #1a0a00 50%, #0B0F19 100%)',
      }}
    >
      {/* Top divider glow */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '60%', height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(255,107,0,0.4), transparent)',
      }} />

      {/* Ambient orange glow */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80vw', height: '80vw', maxWidth: '900px', maxHeight: '900px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,107,0,0.12) 0%, transparent 65%)',
          pointerEvents: 'none',
          filter: 'blur(40px)',
        }}
      />

      {/* Glassmorphism accent cards (decorative) */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '15%', left: '5%',
          width: '120px', height: '70px', borderRadius: '16px',
          background: 'rgba(255,107,0,0.06)',
          border: '1px solid rgba(255,107,0,0.15)',
          backdropFilter: 'blur(8px)',
          pointerEvents: 'none',
        }}
      />
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -4, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        style={{
          position: 'absolute', bottom: '20%', right: '6%',
          width: '90px', height: '90px', borderRadius: '50%',
          background: 'rgba(255,107,0,0.04)',
          border: '1px solid rgba(255,107,0,0.12)',
          backdropFilter: 'blur(8px)',
          pointerEvents: 'none',
        }}
      />
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        style={{
          position: 'absolute', top: '60%', right: '12%',
          width: '60px', height: '60px', borderRadius: '12px',
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.06)',
          backdropFilter: 'blur(6px)',
          pointerEvents: 'none',
        }}
      />

      {/* Main content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8"
            style={{
              background: 'rgba(255,107,0,0.1)',
              border: '1px solid rgba(255,107,0,0.25)',
              borderRadius: '100px',
              padding: '8px 20px',
            }}
          >
            <Sparkles size={14} style={{ color: '#FF6B00' }} />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FF6B00', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Let's Work Together
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 6rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 1,
              color: '#fff',
              marginBottom: '1.5rem',
            }}
          >
            Ready to Scale{' '}
            <span style={{
              background: 'linear-gradient(135deg, #FF6B00 0%, #ff9533 60%, #ffb366 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Your Business?
            </span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
              color: 'rgba(255,255,255,0.5)',
              fontWeight: 400,
              maxWidth: '600px',
              margin: '0 auto 3rem',
              lineHeight: 1.6,
            }}
          >
            Let's build a website that turns visitors into customers.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link
              to="/contact"
              className="lx-cta-shine group inline-flex items-center gap-3"
              style={{
                background: 'linear-gradient(135deg, #FF6B00 0%, #ff8533 100%)',
                color: '#fff',
                padding: '18px 44px',
                borderRadius: '100px',
                fontWeight: 800,
                fontSize: '1.1rem',
                textDecoration: 'none',
                boxShadow: '0 0 50px rgba(255,107,0,0.35), 0 8px 30px rgba(255,107,0,0.25)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.06) translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 0 70px rgba(255,107,0,0.5), 0 16px 40px rgba(255,107,0,0.35)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1) translateY(0px)';
                e.currentTarget.style.boxShadow = '0 0 50px rgba(255,107,0,0.35), 0 8px 30px rgba(255,107,0,0.25)';
              }}
            >
              Book Free Consultation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center justify-center gap-8 mt-12"
          >
            {['Free Consultation', 'No Hidden Fees', 'Fast Delivery'].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  background: '#FF6B00',
                  boxShadow: '0 0 8px rgba(255,107,0,0.6)',
                }} />
                <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PreFooterCTA;
