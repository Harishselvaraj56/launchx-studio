import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles } from 'lucide-react';

import akilaImg from '../assets/portfolio/akila.png';
import meenatchiImg from '../assets/portfolio/meenatchi.png';
import ironempireImg from '../assets/portfolio/ironempire.png';
import smartcropImg from '../assets/portfolio/smartcrop.png';
import leocafeImg from '../assets/portfolio/leocafe.png';
import spotifyImg from '../assets/portfolio/spotify.png';
import clientportImg from '../assets/portfolio/clientport.png';
import ownerportImg from '../assets/portfolio/ownerport.png';

const projects = [
  {
    title: 'Akila Store',
    category: 'E-Commerce',
    tech: 'React · Node.js · MongoDB',
    link: 'https://akila-store.vercel.app/',
    description: 'A premium e-commerce platform with seamless payment integration and advanced inventory management.',
    image: akilaImg,
    stats: '120% Sales Growth',
    problem: 'Retail store was entirely dependent on physical foot traffic, resulting in flat sales curves and complex manual stocktaking processes.',
    solution: 'Built a bespoke React & Node.js custom e-commerce solution. Integrated auto-synced stock logs and automated Razorpay checkout flows.',
    result: 'Generated 120% order increase in 90 days, automating 100% of order logs.',
  },
  {
    title: 'Sri Meenatchi Textiles',
    category: 'Business Websites',
    tech: 'React · Tailwind CSS',
    link: 'https://meenatchi-store.onrender.com/',
    description: 'A beautiful digital storefront showcasing premium textiles and driving offline footfall.',
    image: meenatchiImg,
    stats: '85% Lead Increase',
    problem: 'B2B retail wholesale buyers lacked a catalog viewer to verify fabric availability, which caused lost wholesale inquiries.',
    solution: 'Designed a minimal catalog catalog web dashboard displaying textile lines with high-resolution galleries and WhatsApp routing.',
    result: 'B2B inquiry leads increased by 85%, and digital catalog traffic hit 5,000+ views monthly.',
  },
  {
    title: 'Iron Empire Fitness',
    category: 'Business Websites',
    tech: 'React · Framer Motion',
    link: 'https://ironempirefitness.in/',
    description: 'A high-energy gym website with membership calculators and dynamic class schedules.',
    image: ironempireImg,
    stats: '45% Signup Lift',
    problem: 'Gym lead acquisitions were slow due to a static site lacking simple conversion tools like estimators or live workout routines.',
    solution: 'Created an immersive dark-mode gym portal featuring custom interactive pricing calculators and rich animations.',
    result: 'Member sign-ups rose by 45% within 60 days of launch.',
  },
  {
    title: 'SmartCrop',
    category: 'AI Projects',
    tech: 'React · Python · ML',
    link: 'https://smartcrop-final.vercel.app/',
    description: 'AI-powered agricultural tool helping farmers predict crop yields with real-time data insights.',
    image: smartcropImg,
    stats: '85% ML Accuracy',
    problem: 'Farming communities faced high crop output uncertainty and lacked modern data-driven tools to analyze soil composition.',
    solution: 'Engineered an AI portal powered by machine learning algorithms, giving users dynamic inputs and graphical forecasts.',
    result: 'Achieved an 85% prediction yield forecast accuracy, supporting over 200+ local farmers.',
  },
  {
    title: 'Leo Cafe',
    category: 'Business Websites',
    tech: 'React · Next.js',
    link: 'https://leocafeonline.netlify.app/',
    description: 'A modern cafe website featuring online ordering and seamless table reservations.',
    image: leocafeImg,
    stats: '35% Digital Sales',
    problem: 'Phone-based orders caused busy phone lines and ordering errors during rush hours.',
    solution: 'Deployed a custom responsive digital menu platform featuring live seat reservation booking calendars.',
    result: 'Digital orders represented 35% of total sales in month 1, and ordering mistakes fell to zero.',
  },
  {
    title: 'Spotify Clone',
    category: 'Business Websites',
    tech: 'React · Spotify API',
    link: 'https://harishh.neocities.org/spotify/',
    description: 'Full music player experience replicating the core Spotify interface and streaming logic.',
    image: spotifyImg,
    stats: 'State Sync Demo',
    problem: 'Flat UI mockups were insufficient to demonstrate advanced state handling skills to global enterprise clients.',
    solution: 'Built an active Spotify replica integrating the official Spotify Web API with dynamic playback states and local volumes.',
    result: 'Successfully demonstrated seamless token management and real-time audio playback handlers.',
  },
  {
    title: 'Client Portfolio',
    category: 'Landing Pages',
    tech: 'React · Tailwind CSS',
    link: 'https://portfolio-benzzz.netlify.app/',
    description: 'A sleek, professional portfolio designed for a creative director to showcase their best work.',
    image: clientportImg,
    stats: '200% Booking Lift',
    problem: 'Freelancer lacked an engaging digital storefront to exhibit creative campaign designs.',
    solution: 'Built a micro-designed single-page landing site displaying responsive assets with glass card headers.',
    result: 'Freelance client booking inquiries rose by 200% following launch.',
  },
  {
    title: 'Owner Portfolio',
    category: 'Landing Pages',
    tech: 'React · Three.js',
    link: 'https://harishh.neocities.org/portfolio/port/p',
    description: 'Immersive 3D-powered portfolio pushing the boundaries of modern web design.',
    image: ownerportImg,
    stats: 'Featured Gallery',
    problem: 'Flat templates failed to distinguish engineering skill sets in competitive global recruitment spaces.',
    solution: 'Engineered an interactive 3D portal using Three.js shader renderers and high-frequency animations.',
    result: 'Featured on multiple global web design galleries, driving significant contract traffic.',
  },
];

const filters = [
  { id: 'All', name: 'All' },
  { id: 'Business Websites', name: 'Business Websites' },
  { id: 'E-Commerce', name: 'E-Commerce' },
  { id: 'Landing Pages', name: 'Landing Pages' },
  { id: 'AI Projects', name: 'AI Projects' },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<any>(null);

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div style={{ background: 'transparent', paddingTop: '90px', position: 'relative', overflow: 'hidden' }}>
      
      {/* Page Hero */}
      <section style={{ padding: '8rem 0 3rem', position: 'relative', overflow: 'hidden' }}>
        <div className="container mx-auto text-center">
          <motion.p
            className="lx-eyebrow"
            style={{ marginBottom: '1.25rem' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          >
            Showcase
          </motion.p>
          <motion.h1
            className="lx-heading"
            style={{ color: '#111827', textAlign: 'center', marginBottom: '1.5rem' }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Projects We're <span style={{ color: '#9CA3AF' }}>Proud Of.</span>
          </motion.h1>
          <motion.p
            className="lx-body"
            style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', color: '#6B7280' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          >
            Crafted with obsessive precision, pixel-perfect designs, and high-performance engines.
          </motion.p>
        </div>
      </section>

      {/* Filter Bar */}
      <section style={{ paddingBottom: '3rem' }}>
        <div className="container mx-auto" style={{ display: 'flex', justifyContent: 'center' }}>
          <div 
            style={{ 
              display: 'flex', 
              gap: '6px', 
              padding: '6px', 
              borderRadius: '100px', 
              background: 'rgba(0,0,0,0.04)', 
              border: '1px solid rgba(0,0,0,0.06)',
              overflowX: 'auto',
              maxWidth: '100%',
              whiteSpace: 'nowrap'
            }}
          >
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                style={{
                  padding: '10px 22px',
                  borderRadius: '100px',
                  border: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  background: activeFilter === filter.id ? '#FF7A00' : 'transparent',
                  color: activeFilter === filter.id ? '#fff' : '#6B7280',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: activeFilter === filter.id ? '0 5px 15px rgba(255, 122, 0, 0.25)' : 'none'
                }}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ paddingBottom: '8rem' }}>
        <div className="container mx-auto">
          <motion.div 
            layout
            className="portfolio-grid"
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '2.5rem' 
            }}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={project.title}
                  className="glass-card"
                  style={{
                    height: '420px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  {/* Laptop Mockup representation */}
                  <div style={{ padding: '1.25rem 1.25rem 0' }}>
                    <div style={{ position: 'relative', width: '95%', margin: '0 auto', height: '185px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                      {/* Laptop screen frame */}
                      <div style={{
                        position: 'relative',
                        width: '100%',
                        height: '175px',
                        background: '#1c1c1c',
                        borderRadius: '12px 12px 0 0',
                        padding: '6px 6px 0',
                        border: '2px solid rgba(255,255,255,0.08)',
                        borderBottom: 'none',
                        overflow: 'hidden',
                      }}>
                        {/* Screen inside mockup */}
                        <div style={{ width: '100%', height: '100%', borderRadius: '6px 6px 0 0', overflow: 'hidden', position: 'relative', background: '#1F2937' }}>
                          <img
                            src={`${project.image}?v=1.0.2`}
                            alt={project.title}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                            }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                          />
                        </div>
                      </div>
                      {/* Laptop base */}
                      <div style={{
                        width: '108%',
                        marginLeft: '-4%',
                        height: '8px',
                        background: 'linear-gradient(180deg, #333 0%, #1a1a1a 100%)',
                        borderRadius: '0 0 6px 6px',
                        position: 'relative',
                        zIndex: 2,
                        borderBottom: '1px solid rgba(255,255,255,0.1)'
                      }} />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div style={{ padding: '2rem', paddingTop: '0.75rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span style={{ color: '#FF7A00', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                          {project.category}
                        </span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'rgba(255,122,0,0.08)', border: '1px solid rgba(255,122,0,0.2)', padding: '4px 8px', borderRadius: '6px' }}>
                          <Sparkles size={10} style={{ color: '#FF7A00' }} />
                          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#111827' }}>{project.stats}</span>
                        </div>
                      </div>

                      <h3 style={{ color: '#111827', fontSize: '1.25rem', fontWeight: 800, marginBottom: '6px' }}>{project.title}</h3>
                      <p style={{ color: '#9CA3AF', fontSize: '0.8rem', fontFamily: 'monospace' }}>{project.tech}</p>
                    </div>

                    <div style={{ display: 'flex', gap: '10px', marginTop: '1.25rem' }}>
                      <button
                        onClick={() => setSelectedCaseStudy(project)}
                        style={{
                          flexGrow: 1,
                          background: 'rgba(0,0,0,0.04)',
                          border: '1px solid rgba(0,0,0,0.08)',
                          color: '#374151',
                          padding: '10px',
                          borderRadius: '100px',
                          fontWeight: 700,
                          fontSize: '0.8rem',
                          cursor: 'pointer',
                          transition: 'all 0.3s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,122,0,0.35)'}
                        onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'}
                      >
                        Case Study
                      </button>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          background: '#FF7A00',
                          color: '#fff',
                          padding: '10px 18px',
                          borderRadius: '100px',
                          fontWeight: 700,
                          fontSize: '0.8rem',
                          textDecoration: 'none',
                          boxShadow: '0 5px 15px rgba(255, 122, 0, 0.2)',
                          transition: 'all 0.3s',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.transform = 'scale(1.02)';
                          e.currentTarget.style.boxShadow = '0 8px 20px rgba(255, 122, 0, 0.4)';
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = '0 5px 15px rgba(255, 122, 0, 0.2)';
                        }}
                      >
                        Visit <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Inline CSS Grid adjustments */}
        <style>{`
          @media (max-width: 1024px) {
            .portfolio-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 2rem !important; }
          }
          @media (max-width: 640px) {
            .portfolio-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          }
        `}</style>
      </section>

      {/* Case Study Details Modal Drawer Popup */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              background: 'rgba(255,255,255,0.75)',
              backdropFilter: 'blur(15px)',
              WebkitBackdropFilter: 'blur(15px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem'
            }}
            onClick={() => setSelectedCaseStudy(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              style={{
                width: '100%',
                maxWidth: '680px',
                background: 'var(--card)',
                border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: '28px',
                overflow: 'hidden',
                boxShadow: '0 20px 64px rgba(0,0,0,0.12)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)'
              }}
              onClick={e => e.stopPropagation()}
            >
              {/* Header Visual */}
              <div style={{ width: '100%', height: '240px', position: 'relative' }}>
                <img 
                  src={selectedCaseStudy.image} 
                  alt={selectedCaseStudy.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--card) 10%, transparent 80%)' }} />
                <button 
                  onClick={() => setSelectedCaseStudy(null)}
                  style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(0,0,0,0.1)', color: '#111827', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}
                >
                  ✕
                </button>
              </div>

              {/* Contents details */}
              <div style={{ padding: '2.5rem', paddingTop: '1rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#FF7A00', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '6px' }}>
                  Case Study Execution
                </span>
                <h3 style={{ fontSize: '2rem', fontWeight: 900, color: '#111827', marginBottom: '1.5rem' }}>{selectedCaseStudy.title}</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxHeight: '320px', overflowY: 'auto', paddingRight: '10px' }}>
                  <div>
                    <h4 style={{ fontSize: '0.85rem', color: '#9CA3AF', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px' }}>The Challenge</h4>
                    <p style={{ fontSize: '1rem', color: '#6B7280', lineHeight: 1.6 }}>{selectedCaseStudy.problem}</p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.85rem', color: '#9CA3AF', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px' }}>Our Solution</h4>
                    <p style={{ fontSize: '1rem', color: '#6B7280', lineHeight: 1.6 }}>{selectedCaseStudy.solution}</p>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '1.5rem' }}>
                    <h4 style={{ fontSize: '0.85rem', color: '#FF7A00', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px' }}>Measurable Result</h4>
                    <p style={{ fontSize: '1.15rem', color: '#111827', fontWeight: 800 }}>{selectedCaseStudy.result}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem' }}>
                  <a 
                    href={selectedCaseStudy.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lx-btn-primary glow-btn" 
                    style={{ flexGrow: 1, justifyContent: 'center', textDecoration: 'none' }}
                  >
                    Visit Live Website <ExternalLink size={14} />
                  </a>
                  <button 
                    className="lx-btn-ghost"
                    onClick={() => setSelectedCaseStudy(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Portfolio;
