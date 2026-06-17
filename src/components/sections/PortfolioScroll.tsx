import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Akila Store',
    category: 'E-Commerce',
    tech: 'React · Node.js · MongoDB',
    link: 'https://akila-store.vercel.app/',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1600&q=80',
    description: 'A premium e-commerce platform with seamless payment integration.',
  },
  {
    title: 'Sri Meenatchi Textiles',
    category: 'Business Website',
    tech: 'React · Tailwind CSS',
    link: '#',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1600&q=80',
    description: 'A beautiful digital storefront showcasing premium textiles.',
  },
  {
    title: 'Iron Empire Fitness',
    category: 'Business Website',
    tech: 'React · Framer Motion',
    link: 'https://ironempirefitness.in/',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80',
    description: 'A high-energy gym website with membership calculators.',
  },
  {
    title: 'SmartCrop',
    category: 'AI Web Application',
    tech: 'React · Python · ML',
    link: 'https://smartcrop-final.vercel.app/',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1600&q=80',
    description: 'An AI tool helping farmers predict crop yields with real-time insights.',
  },
  {
    title: 'Leo Cafe',
    category: 'Restaurant Platform',
    tech: 'React · Next.js',
    link: 'https://leocafeonline.netlify.app/',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1600&q=80',
    description: 'A modern cafe website with online ordering & reservations.',
  },
  {
    title: 'Spotify Clone',
    category: 'Web Application',
    tech: 'React · Spotify API',
    link: '#',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1600&q=80',
    description: 'Full music player experience cloning the Spotify interface.',
  },
  {
    title: 'Client Portfolio',
    category: 'Personal Branding',
    tech: 'React · Tailwind CSS',
    link: '#',
    image: 'https://images.unsplash.com/photo-1507238692062-540bb51b52ce?w=1600&q=80',
    description: 'A sleek portfolio designed to showcase creative work.',
  },
  {
    title: 'Owner Portfolio',
    category: 'Personal Branding',
    tech: 'React · Three.js',
    link: '#',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80',
    description: 'An immersive 3D-powered portfolio pushing web design limits.',
  },
];

const PortfolioScroll = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: wrapperRef });
  // 8 items — travel: (8-1) * itemWidth percentage; each item is ~65vw + gap → roughly 70% per item
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-87%']);

  return (
    <section
      id="portfolio"
      ref={wrapperRef}
      style={{
        position: 'relative',
        height: '700vh',
        background: '#070B14',
      }}
    >
      {/* Sticky viewport */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {/* Section Title */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: 0,
            right: 0,
            padding: '0 3rem',
            zIndex: 20,
            pointerEvents: 'none',
          }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent text-sm font-bold uppercase tracking-widest mb-3"
          >
            Featured Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1 }}
          >
            Our Best <span style={{ color: 'rgba(255,255,255,0.25)' }}>Projects</span>
          </motion.h2>
        </div>

        {/* Horizontal track */}
        <motion.div
          style={{ x, display: 'flex', gap: '2.5rem', padding: '0 3rem', paddingTop: '140px' }}
        >
          {projects.map((project, i) => (
            <div
              key={i}
              style={{
                width: 'clamp(320px, 65vw, 900px)',
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {/* MacBook shell - top */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16/10',
                  background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)',
                  borderRadius: '16px 16px 0 0',
                  padding: '12px 12px 0',
                  border: '3px solid #333',
                  borderBottom: 'none',
                  boxShadow: '0 -4px 20px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)',
                }}
                className="group"
              >
                {/* Camera dot */}
                <div
                  style={{
                    position: 'absolute', top: '6px', left: '50%', transform: 'translateX(-50%)',
                    width: '6px', height: '6px', borderRadius: '50%',
                    background: '#111', border: '1px solid #444', zIndex: 10,
                  }}
                />
                {/* Screen */}
                <div
                  style={{
                    width: '100%', height: '100%',
                    background: '#000', borderRadius: '8px 8px 0 0',
                    overflow: 'hidden', position: 'relative',
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%', height: '100%', objectFit: 'cover',
                      opacity: 0.85, transition: 'opacity 0.5s',
                    }}
                  />
                  {/* Hover overlay with details */}
                  <div
                    style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 60%, transparent 100%)',
                      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                      padding: '2rem',
                      opacity: 0,
                      transition: 'opacity 0.5s',
                    }}
                    className="group-hover:opacity-100"
                  >
                    <span
                      style={{
                        color: '#FF6B00', fontSize: '0.75rem', fontWeight: 700,
                        letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px',
                      }}
                    >
                      {project.category}
                    </span>
                    <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 800, marginBottom: '8px', color: '#fff' }}>
                      {project.title}
                    </h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '8px', fontSize: '0.9rem' }}>
                      {project.description}
                    </p>
                    <p style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace', fontSize: '0.75rem', marginBottom: '1.5rem' }}>
                      {project.tech}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        background: '#fff', color: '#000',
                        padding: '10px 24px', borderRadius: '100px',
                        fontWeight: 700, fontSize: '0.9rem',
                        textDecoration: 'none', width: 'fit-content',
                        transition: 'transform 0.2s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                      Visit Website <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
              {/* MacBook base */}
              <div
                style={{
                  width: '108%',
                  height: '20px',
                  background: 'linear-gradient(180deg, #2e2e2e 0%, #1a1a1a 100%)',
                  borderRadius: '0 0 16px 16px',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.8)',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                    width: '25%', height: '4px',
                    background: '#111', borderRadius: '0 0 8px 8px',
                  }}
                />
              </div>
              {/* Project title below mockup */}
              <div className="mt-6 text-center">
                <p className="text-white font-bold text-xl">{project.title}</p>
                <p className="text-gray-500 text-sm mt-1">{project.category}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <div
          style={{
            position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)',
            display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.3)',
          }}
        >
          <div
            style={{
              width: '40px', height: '2px',
              background: 'rgba(255,255,255,0.15)', borderRadius: '2px', overflow: 'hidden',
            }}
          >
            <motion.div
              style={{ height: '100%', background: '#FF6B00', borderRadius: '2px' }}
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  );
};

export default PortfolioScroll;
