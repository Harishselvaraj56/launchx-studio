import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden"
      style={{ background: '#0B0F19' }}
    >
      {/* Subtle glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '800px', height: '600px',
          background: 'radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
        <motion.span
          className="text-accent text-sm font-bold uppercase tracking-widest mb-6 block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About LaunchX Studio
        </motion.span>

        <motion.p
          className="text-white font-bold tracking-tight leading-tight mb-16"
          style={{ fontSize: 'clamp(2rem, 5vw, 5rem)', lineHeight: 1.05 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          We don't just build websites.{' '}
          <span style={{ color: 'rgba(255,255,255,0.25)' }}>
            We architect digital experiences that drive real growth and leave a lasting impact.
          </span>
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.p
            className="text-gray-400 text-xl font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            LaunchX Studio was born out of a desire to bridge the gap between stunning design and high-performance engineering. In a world full of templates, we chose to be the architects of custom, immersive digital products.
          </motion.p>
          <motion.p
            className="text-gray-400 text-xl font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Our mission is simple: to help ambitious brands elevate their online presence through cutting-edge technology, obsessive attention to detail, and a deep understanding of user psychology.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
