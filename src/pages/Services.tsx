import { motion } from 'framer-motion';
import { 
  ArrowRight, Check, Globe, FileText, ShoppingCart, 
  Camera, Share2, Image as ImageIcon, Film, Cpu 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TiltCard from '../components/ui/TiltCard';

// ─── Service Cards Data ───────────────────────────────────────────────────────
const serviceCards = [
  {
    icon: FileText,
    color: '#FF6B00',
    title: 'Landing Page',
    price: 'Starting from ₹4,999',
    delivery: '5–7 Days',
    desc: 'High-converting single-page sales funnels optimized to convert visitors into leads.',
    features: ['Conversion Layouts', 'Mobile Responsive', 'Contact Funnels', 'Basic SEO Setup'],
  },
  {
    icon: Globe,
    color: '#FF6B00',
    title: 'Website Development',
    price: 'Starting from ₹7,999',
    delivery: '7–14 Days',
    desc: 'Pixel-perfect, blazing-fast multi-page React or Next.js sites engineered for speed.',
    features: ['SEO Optimized', 'Mobile Responsive', 'Fast Loading', 'Modern UI'],
  },
  {
    icon: ShoppingCart,
    color: '#FF6B00',
    title: 'E-Commerce',
    price: 'Starting from ₹11,999',
    delivery: '14–21 Days',
    desc: 'Digital storefronts configured with inventory metrics and secure checkouts.',
    features: ['Payment Integrations', 'Admin Stock Dashboards', 'Customer Orders Flow', 'Dynamic Catalogs'],
  },
  {
    icon: Share2,
    color: '#FF6B00',
    title: 'Social Media Marketing',
    price: '₹8,999/month',
    delivery: 'Monthly Retainer',
    desc: 'Growth-focused campaigns, content designs, and posting schedules across networks.',
    features: ['Content Calendars', 'Daily Feed Posting', 'Growth Analytics', 'Platform Strategy'],
  },
  {
    icon: Camera,
    color: '#FF6B00',
    title: 'Reel (Script + Shoot + Edit)',
    price: 'Starting from ₹2,999',
    delivery: '3–5 Days',
    desc: 'End-to-end short-form video production from hooks scripts to editing.',
    features: ['Hook-First Scripting', 'Multi-Angle Captures', 'Sound Design Synced', 'Color Grading FX'],
  },
  {
    icon: Film,
    color: '#FF6B00',
    title: 'Reel (Edit Only)',
    price: 'Starting from ₹999',
    delivery: '2–3 Days',
    desc: 'Viral post-production edits, sound syncing, trending templates, and captions.',
    features: ['Trending Audio Syncs', 'Dynamic Captions', 'Sound Effects Synced', 'Viral-ready Exports'],
  },
  {
    icon: ImageIcon,
    color: '#FF6B00',
    title: 'Poster Design',
    price: 'Starting from ₹499',
    delivery: '1–2 Days',
    desc: 'Premium graphics and banners custom-built to capture visual attention.',
    features: ['Brand Style Assets', 'High-res Exports', 'Multiple Revisions', 'Quick Drafts'],
  },
  {
    icon: Cpu,
    color: '#FF6B00',
    title: 'AI Business Automation',
    price: 'Starting from ₹14,999',
    delivery: '7–14 Days',
    desc: 'Automate business workflows using intelligent AI tools, chatbots, and integrations.',
    features: ['AI Chatbots', 'WhatsApp Workflows', 'Lead Capture Systems', 'Workflow Automation'],
  },
];

// ─── Alternating Showcase Data ────────────────────────────────────────────────
const showcases = [
  {
    num: '01',
    title: 'Website Development',
    sub: 'Full-Scale Custom Systems',
    desc: 'We build blazing-fast, visually stunning websites using modern frameworks like React and Next.js. Every site is engineered for performance, accessibility, and conversion — not just aesthetics.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1400&q=85',
  },
  {
    num: '02',
    title: 'AI Automation Integration',
    sub: 'AI-Powered Business Workflows',
    desc: 'Configure custom WhatsApp chatbots, AI customer agents, and automated database sync workflows to automate lead generation and reduce manual administrative work.',
    tags: ['AI Agent Builder', 'WhatsApp API', 'OpenAI', 'Workflow Pipes'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400&q=85',
  },
  {
    num: '03',
    title: 'E-Commerce Solutions',
    sub: 'Digital Shops Engineered to Convert',
    desc: 'From simple product listings and local checkouts to complex payment systems, inventory sync metrics, and admin analytics dashboards. We build e-commerce channels designed to scale revenue.',
    tags: ['Cart Engines', 'Secure Pay Gateways', 'Admin Portal', 'Stock Metrics'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=85',
  },
];

// ─── Service Card Component ───────────────────────────────────────────────────
const ServiceCard = ({ s, i }: { s: typeof serviceCards[0]; i: number }) => {
  const Icon = s.icon;
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.3, delay: (i % 3) * 0.05 }}
      style={{ height: '100%' }}
    >
      <TiltCard
        className="lx-card lx-card-glow"
        style={{
          minHeight: '480px',
          padding: '2.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          cursor: 'default',
          height: '100%',
        }}
      >
        <div>
          {/* Icon */}
          <div className="icon-wrapper" style={{
            width: '48px', height: '48px', borderRadius: '12px',
            background: 'rgba(255, 107, 0, 0.08)',
            border: '1px solid rgba(255, 107, 0, 0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: '1.5rem', flexShrink: 0,
          }}>
            <Icon size={22} style={{ color: '#FF6B00' }} />
          </div>

          {/* Title */}
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#111827', marginBottom: '4px' }}>{s.title}</h3>

          {/* Price & Turnaround Info */}
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
            Starting from <strong style={{ color: '#FF6B00' }}>{s.price.replace('Starting from ', '')}</strong> · {s.delivery}
          </p>

          {/* Description */}
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
            {s.desc}
          </p>
        </div>

        {/* Feature checklist + CTA */}
        <div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '2rem' }}>
            {s.features.map((feat, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <Check size={14} style={{ color: '#FF6B00' }} /> {feat}
              </li>
            ))}
          </ul>

          <button
            onClick={() => navigate('/contact')}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              background: 'none',
              border: '1px solid rgba(0,0,0,0.12)',
              color: '#111827',
              padding: '12px',
              borderRadius: '100px',
              fontWeight: 700,
              fontSize: '0.875rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#FF6B00';
              e.currentTarget.style.borderColor = '#FF6B00';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'none';
              e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)';
              e.currentTarget.style.color = '#111827';
            }}
          >
            Get Quote <ArrowRight size={14} />
          </button>
        </div>
      </TiltCard>
    </motion.div>
  );
};

// ─── Main Services Page ────────────────────────────────────────────────────────
const Services = () => {
  const navigate = useNavigate();

  return (
    <div style={{ background: 'transparent', paddingTop: '90px', position: 'relative', overflow: 'hidden' }}>
      
      {/* Page Hero */}
      <section style={{ padding: '8rem 0 4rem', position: 'relative' }}>
        {/* Ambient glow */}
        <div style={{ position: 'absolute', top: '20%', right: '10%', width: '40vw', height: '40vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,122,0,0.055) 0%, transparent 65%)', pointerEvents: 'none', zIndex: 0 }} aria-hidden="true" />
        <div className="container mx-auto text-center">
          <motion.p
            className="lx-eyebrow"
            style={{ marginBottom: '1.25rem' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          >
            Capabilities
          </motion.p>
          <motion.h1
            className="lx-display"
            style={{ color: '#111827', textAlign: 'center', marginBottom: '2rem' }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Premium Services <span style={{ color: 'rgba(17, 24, 39, 0.25)' }}>Built to Scale.</span>
          </motion.h1>
          <motion.p
            className="lx-body"
            style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', color: 'var(--text-muted)' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
          >
            We design, develop and optimize pixel-perfect products worth charging premium high-ticket rates.
          </motion.p>
        </div>
      </section>

      {/* Service Cards Grid (8 items) */}
      <section style={{ position: 'relative', padding: '6rem 0' }}>
        
        <div className="container mx-auto" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
          }}
            className="services-grid"
          >
            {serviceCards.map((s, i) => (
              <ServiceCard key={i} s={s} i={i} />
            ))}
          </div>
        </div>

        {/* Responsive Grid Layout Rules */}
        <style>{`
          @media (max-width: 1024px) {
            .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 640px) {
            .services-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          }
        `}</style>
      </section>

      {/* Alternating Showcase Showcases */}
      <section style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        {showcases.map((s, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={i}
              style={{
                padding: '8rem 0',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <div
                className="container mx-auto"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
                  gap: '5rem',
                  alignItems: 'center',
                }}
              >
                {/* Text Content */}
                <motion.div
                  style={{ order: isEven ? 0 : 1 }}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#FF7A00', letterSpacing: '0.15em', fontFamily: 'monospace' }}>{s.num}</span>
                    <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, rgba(255,122,0,0.3), transparent)' }} />
                  </div>

                  <h2 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', fontWeight: 900, lineHeight: 1.1, color: '#111827', marginBottom: '0.75rem' }}>
                    {s.title}
                  </h2>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '2rem' }}>
                    {s.sub}
                  </p>
                  <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                    {s.desc}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '3rem' }}>
                    {s.tags.map((t, j) => (
                      <span key={j} style={{ padding: '5px 14px', borderRadius: '100px', border: '1px solid var(--border)', background: 'rgba(255,255,255,0.6)', fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500 }}>{t}</span>
                    ))}
                  </div>

                  <button
                    onClick={() => navigate('/contact')}
                    className="lx-btn-primary glow-btn"
                  >
                    Start This Project <ArrowRight size={16} />
                  </button>
                </motion.div>

                {/* Visual Image */}
                <motion.div
                  style={{ order: isEven ? 1 : 0 }}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', aspectRatio: '4/3', border: '1px solid rgba(0,0,0,0.06)' }}>
                    <img
                      src={s.image}
                      alt={s.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.9)', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom CTA Conversion */}
      <section style={{ padding: '8rem 0', textAlign: 'center' }}>
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="lx-heading" style={{ color: '#111827', marginBottom: '1.5rem' }}>
              Have a custom project?
            </h2>
            <p className="lx-body" style={{ marginBottom: '3.5rem', maxWidth: '600px', margin: '0 auto 3.5rem', color: 'var(--text-muted)' }}>
              We custom build, scale and automate logic workflows to match your enterprise benchmarks. Let's align on a call.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="lx-btn-primary glow-btn"
              style={{ padding: '18px 52px', fontSize: '1.1rem' }}
            >
              Start Your Project <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
