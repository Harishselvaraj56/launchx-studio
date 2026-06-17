import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Star } from 'lucide-react';
import TextReveal from '../ui/TextReveal';
import MagneticButton from '../ui/MagneticButton';

const Hero = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[#0B0F19]"
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full animate-blob"
          style={{
            top: '5%', left: '15%',
            width: '650px', height: '650px',
            background: 'radial-gradient(circle, rgba(255,107,0,0.18) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute rounded-full animate-blob"
          style={{
            top: '25%', right: '5%',
            width: '550px', height: '550px',
            background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)',
            filter: 'blur(80px)',
            animationDelay: '3s',
          }}
        />
        <div
          className="absolute rounded-full animate-blob"
          style={{
            bottom: '10%', left: '40%',
            width: '400px', height: '400px',
            background: 'radial-gradient(circle, rgba(255,107,0,0.10) 0%, transparent 70%)',
            filter: 'blur(60px)',
            animationDelay: '5s',
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Main content — takes all remaining height */}
      <div className="relative z-10 flex flex-col flex-1 justify-between" style={{ paddingTop: '96px' }}>
        {/* Hero Text Block */}
        <div className="container mx-auto px-6 md:px-12 pt-16 md:pt-24">
          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 mb-10"
            style={{
              background: 'rgba(255,107,0,0.08)',
              border: '1px solid rgba(255,107,0,0.2)',
              borderRadius: '100px',
              padding: '8px 20px',
            }}
          >
            <Star size={14} className="text-accent fill-accent" />
            <span className="text-sm font-semibold text-accent tracking-wider">PREMIUM DIGITAL AGENCY</span>
          </motion.div>

          <h1 className="text-huge text-white mb-8">
            <TextReveal text="Building Brands" delay={0.1} stagger={0.08} />
            <br />
            <span className="text-gradient">
              <TextReveal text="That Grow." delay={0.5} stagger={0.08} />
            </span>
          </h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12 max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            Premium Websites, E-Commerce Solutions, Social Media Management,<br className="hidden md:block" />
            Video Editing and Digital Growth Services.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <MagneticButton
              onClick={() => scrollTo('#contact')}
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 overflow-hidden"
              style={{ background: '#FF6B00', color: '#fff', boxShadow: '0 0 40px rgba(255,107,0,0.35)' }}
            >
              <span className="relative z-10">Get Started</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
            <MagneticButton
              onClick={() => scrollTo('#portfolio')}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 text-white"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              View Our Work
            </MagneticButton>
          </motion.div>
        </div>

        {/* Stats Row — anchored at the bottom of the screen */}
        <motion.div
          className="container mx-auto px-6 md:px-12 pb-12 pt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 pt-10"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            {[
              { value: '8+', label: 'Projects Delivered', icon: Zap },
              { value: '100%', label: 'Mobile Responsive', icon: Shield },
              { value: 'Fast', label: 'Delivery Timeline', icon: Zap },
              { value: '100%', label: 'Client Focused', icon: Star },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="flex flex-col group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
              >
                <div
                  className="text-4xl md:text-6xl font-extrabold text-white mb-2 tracking-tighter transition-colors duration-500 group-hover:text-accent"
                >
                  {stat.value}
                </div>
                <div className="text-gray-500 font-medium tracking-widest text-xs uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
