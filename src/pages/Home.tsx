import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  ArrowRight, Star, Calendar, 
  Sparkles, Cpu, Globe, ShoppingCart,
  FileText, Camera, Film, Image as ImageIcon, Share2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TextReveal from '../components/ui/TextReveal';

import akilaImg from '../assets/portfolio/akila.png';
import ironempireImg from '../assets/portfolio/ironempire.png';
import smartcropImg from '../assets/portfolio/smartcrop.png';

// ─── Stats Count-up Component ───────────────────────────────────────────
const CountUp = ({ to, suffix = '' }: { to: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = to;
    const duration = 1500;
    const increment = Math.ceil(end / (duration / 16)); // ~60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, to]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// ─── Animation Variants ─────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } }
};

const Home = () => {
  const navigate = useNavigate();
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<any>(null);
  
  // Interactive Cost Estimator State
  const [selectedService, setSelectedService] = useState('landing');
  const [selectedFeaturePack, setSelectedFeaturePack] = useState('basic');

  // Mouse 3D tilt tracking for Hero visual
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const heroVisualRef = useRef<HTMLDivElement>(null);

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroVisualRef.current) return;
    const rect = heroVisualRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    const rotX = -(mouseY / (height / 2)) * 10;
    const rotY = (mouseX / (width / 2)) * 10;
    setTilt({ x: rotX, y: rotY });
  };

  const handleHeroMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const featurePacks = [
    { id: 'basic', name: 'Standard Features Only', price: 0, desc: 'Responsive layout, standard performance, and core page designs.' },
    { id: 'professional', name: 'Professional Pack (+₹2,499)', price: 2499, desc: 'Adds advanced SEO setup, custom UI layout drafts, and support integration.' },
    { id: 'enterprise', name: 'Enterprise Pack (+₹4,999)', price: 4999, desc: 'Adds custom API workflows, CRM analytics, and 1-month priority support.' }
  ];

  // Services Database
  const servicesList = [
    {
      id: 'landing',
      icon: <FileText size={22} />,
      title: 'Landing Page',
      priceText: 'Starting from ₹4,999',
      priceVal: 4999,
      isRecurring: false,
      desc: 'High-converting single-page sales funnels optimized to convert visitors into leads.'
    },
    {
      id: 'webdev',
      icon: <Globe size={22} />,
      title: 'Website Development',
      priceText: 'Starting from ₹7,999',
      priceVal: 7999,
      isRecurring: false,
      desc: 'Pixel-perfect, blazing-fast multi-page React or Next.js sites engineered for speed.'
    },
    {
      id: 'ecommerce',
      icon: <ShoppingCart size={22} />,
      title: 'E-Commerce',
      priceText: 'Starting from ₹11,999',
      priceVal: 11999,
      isRecurring: false,
      desc: 'Digital storefronts configured with inventory metrics and secure checkouts.'
    },
    {
      id: 'smm',
      icon: <Share2 size={22} />,
      title: 'Social Media Marketing',
      priceText: '₹8,999/month',
      priceVal: 8999,
      isRecurring: true,
      desc: 'Growth-focused campaigns, content designs, and posting schedules across networks.'
    },
    {
      id: 'reelshoot',
      icon: <Camera size={22} />,
      title: 'Reel (Script + Shoot + Edit)',
      priceText: 'Starting from ₹2,999',
      priceVal: 2999,
      isRecurring: false,
      desc: 'End-to-end short-form video production from hooks scripts to editing.'
    },
    {
      id: 'reeledit',
      icon: <Film size={22} />,
      title: 'Reel (Edit Only)',
      priceText: 'Starting from ₹999',
      priceVal: 999,
      isRecurring: false,
      desc: 'Viral post-production edits, sound syncing, trending templates, and captions.'
    },
    {
      id: 'poster',
      icon: <ImageIcon size={22} />,
      title: 'Poster Design',
      priceText: 'Starting from ₹499',
      priceVal: 499,
      isRecurring: false,
      desc: 'Premium graphics and banners custom-built to capture visual attention.'
    },
    {
      id: 'ai-automation',
      icon: <Cpu size={22} />,
      title: 'AI Business Automation',
      priceText: 'Starting from ₹14,999',
      priceVal: 14999,
      isRecurring: false,
      desc: 'Automate business workflows using intelligent AI tools, chatbots, and integrations.'
    }
  ];

  const currentServiceObj = servicesList.find(s => s.id === selectedService);
  const currentFeatureObj = featurePacks.find(f => f.id === selectedFeaturePack);
  
  const corePrice = currentServiceObj ? currentServiceObj.priceVal : 0;
  const featurePrice = currentServiceObj && selectedService !== 'none' ? (currentFeatureObj ? currentFeatureObj.price : 0) : 0;
  const totalCost = corePrice + featurePrice;
  const isRecurring = currentServiceObj ? currentServiceObj.isRecurring : false;

  // Case Study Details Database
  const caseStudiesData = [
    {
      title: 'Akila Store',
      image: akilaImg,
      category: 'E-Commerce',
      problem: 'The client had no digital footprint. Relying solely on physical walk-ins resulted in limited brand reach, stagnant ordering volumes, and manual, error-prone stock management.',
      solution: 'Designed and engineered a high-performance React & Node.js custom e-commerce engine. Built a responsive web portal, integrated automated inventory logs, and optimized the payment cart workflow for friction-free checkouts.',
      result: 'Boosted online orders by 120% in the first 90 days. Digitized 100% of store inventory, saving 15 hours of manual work weekly.',
      stats: '120% Order Increase'
    },
    {
      title: 'Iron Empire Fitness',
      image: ironempireImg,
      category: 'Business Website',
      problem: 'Struggled to acquire new high-ticket gym sign-ups. Their old site was static, slow, and lacked simple tools like pricing estimators or interactive session schedules.',
      solution: 'Re-imagined the brand with a premium dark-themed fitness platform. Developed visual layout schedules, built-in custom membership price calculators, and configured smooth Framer Motion interaction paths.',
      result: 'Increased membership sign-up conversions by 45%. Improved mobile visitor retention time by 60%.',
      stats: '45% Registration Lift'
    },
    {
      title: 'SmartCrop',
      image: smartcropImg,
      category: 'AI Web Application',
      problem: 'Farmers lacked a reliable, user-friendly method to forecast crop yield statistics based on soil characteristics and regional climate data.',
      solution: 'Created an intelligent AI dashboard that processes parameters in real-time. Designed intuitive tables, streamlined inputs, and rendered predictive data insights with crisp graphs.',
      result: 'Achieved an 85% predictive yield calculation accuracy. Adopted by 200+ active farmers in the first crop cycle.',
      stats: '85% Predict Accuracy'
    }
  ];

  return (
    <div style={{ position: 'relative' }}>
      
      {/* ━━━ HERO SECTION ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '120px',
          paddingBottom: '80px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Ambient hero glow */}
        <div className="lx-hero-glow" aria-hidden="true" />
        <div className="container mx-auto" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }} className="hero-grid">
            
            {/* Left side: Heading & CTA */}
            <div style={{ textAlign: 'left', maxWidth: '640px' }}>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255, 107, 0, 0.06)',
                  border: '1px solid rgba(255, 107, 0, 0.15)',
                  borderRadius: '100px',
                  padding: '6px 16px',
                  marginBottom: '1.5rem'
                }}
              >
                <Star size={12} style={{ color: '#FF6B00', fill: '#FF6B00' }} />
                <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#FF6B00' }}>
                  Trusted by Growth-Focused Brands
                </span>
              </motion.div>

              <h1
                className="lx-heading"
                style={{ color: '#111827', marginBottom: '1.5rem', fontWeight: 900 }}
              >
                <TextReveal text="We Build Websites That Turn" delay={0.1} /> <span style={{ color: '#FF6B00' }}><TextReveal text="Visitors Into Customers." delay={0.4} /></span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="lx-body"
                style={{ fontSize: '1.15rem', marginBottom: '2.5rem', color: 'var(--text-muted)', lineHeight: 1.6 }}
              >
                Premium websites, e-commerce stores, and smart AI workflow integrations custom-built to help modern businesses scale and convert leads.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
              >
                <button className="lx-btn-primary" onClick={() => navigate('/contact')} style={{ boxShadow: 'none' }}>
                  Start Your Project <ArrowRight size={18} />
                </button>
                <button className="lx-btn-ghost" onClick={() => navigate('/portfolio')}>
                  View Portfolio
                </button>
              </motion.div>
            </div>

            {/* Right side: 3D Interactive Parallax Scene */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                width: '100%',
                maxWidth: '520px',
                height: '420px',
                margin: '0 auto',
                perspective: '1200px',
              }}
              className="hero-3d-scene"
            >
              <motion.div
                ref={heroVisualRef}
                onMouseMove={handleHeroMouseMove}
                onMouseLeave={handleHeroMouseLeave}
                animate={{
                  rotateX: tilt.x,
                  rotateY: tilt.y,
                }}
                transition={{ type: 'spring', stiffness: 150, damping: 20 }}
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Layer 0: Background Glass Circle with blur & orange gradient (z: -40px) */}
                <motion.div
                  animate={{
                    y: [-15, 15, -15],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    position: 'absolute',
                    left: '-20px',
                    bottom: '40px',
                    width: '130px',
                    height: '130px',
                    borderRadius: '38px',
                    background: 'rgba(255, 107, 0, 0.03)',
                    border: '1px solid rgba(255, 107, 0, 0.15)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    transform: 'translateZ(-40px)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Layer 1: Base Analytics System Card (z: 15px) */}
                <motion.div
                  animate={{
                    y: [-8, 8, -8],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{
                    position: 'absolute',
                    top: '40px',
                    left: '20px',
                    width: '380px',
                    height: '240px',
                    background: 'rgba(255,255,255,0.92)',
                    border: '1px solid rgba(0,0,0,0.07)',
                    borderRadius: '16px',
                    padding: '1.25rem',
                    boxShadow: '0 16px 48px rgba(0,0,0,0.12)',
                    transform: 'translateZ(15px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                  }}
                >
                  {/* Window header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', borderBottom: '1px solid rgba(0,0,0,0.08)', paddingBottom: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56' }} />
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }} />
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f' }} />
                    <div style={{ marginLeft: '10px', fontSize: '0.7rem', color: '#9CA3AF', fontFamily: 'monospace' }}>launchx.app/analytics</div>
                  </div>

                  {/* Core stats grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', flexGrow: 1 }}>
                    <div style={{ background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '8px', padding: '0.75rem' }}>
                      <div style={{ fontSize: '0.6rem', color: '#9CA3AF', fontWeight: 600 }}>REVENUE INCREMENTAL</div>
                      <div style={{ fontSize: '1.2rem', fontWeight: 800, marginTop: '2px', color: '#111827' }}>+₹1,48,290</div>
                      <div style={{ fontSize: '0.55rem', color: '#27c93f', marginTop: '2px' }}>↑ 12.4% this week</div>
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '8px', padding: '0.75rem' }}>
                      <div style={{ fontSize: '0.6rem', color: '#9CA3AF', fontWeight: 600 }}>SYSTEM SPEED</div>
                      <div style={{ fontSize: '1.2rem', fontWeight: 800, marginTop: '2px', color: '#FF6B00' }}>99.8ms</div>
                      <div style={{ fontSize: '0.55rem', color: '#27c93f', marginTop: '2px' }}>Excellent</div>
                    </div>
                  </div>
                  
                  {/* Footer status line */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.6rem', color: '#9CA3AF', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '0.75rem', marginTop: '0.75rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#27c93f', display: 'inline-block' }} /> Live Pipeline connected
                    </span>
                    <span>v2.1.0</span>
                  </div>
                </motion.div>

                {/* Layer 2: Floating Traffic Chart Card (z: 65px) */}
                <motion.div
                  animate={{
                    y: [10, -10, 10],
                  }}
                  transition={{
                    duration: 4.8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{
                    position: 'absolute',
                    bottom: '40px',
                    right: '10px',
                    width: '270px',
                    height: '160px',
                    background: 'rgba(255,255,255,0.88)',
                    border: '1px solid rgba(255, 107, 0, 0.15)',
                    borderRadius: '14px',
                    padding: '1rem',
                    boxShadow: '0 12px 32px rgba(0,0,0,0.10)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    transform: 'translateZ(65px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: '#6B7280', fontWeight: 700 }}>
                    <span>CONVERSION LEADS</span>
                    <span style={{ color: '#FF6B00' }}>4.82% Average</span>
                  </div>

                  <svg viewBox="0 0 300 80" style={{ width: '100%', height: '65px', marginTop: '10px' }}>
                    <defs>
                      <linearGradient id="chartGradient3d" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.25"/>
                        <stop offset="100%" stopColor="#FF6B00" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    <path d="M 0 65 Q 40 30 80 50 T 160 15 T 240 40 T 300 10 L 300 80 L 0 80 Z" fill="url(#chartGradient3d)" />
                    <path d="M 0 65 Q 40 30 80 50 T 160 15 T 240 40 T 300 10" fill="none" stroke="#FF6B00" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="160" cy="15" r="3" fill="#fff" stroke="#FF6B00" strokeWidth="1.5" />
                  </svg>

                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.55rem', color: '#9CA3AF', borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '0.5rem' }}>
                    <span>Mon</span>
                    <span>Wed</span>
                    <span>Fri</span>
                    <span>Sun</span>
                  </div>
                </motion.div>

                {/* Layer 3: Floating AI Automation Capsule Node (z: 110px) */}
                <motion.div
                  animate={{
                    y: [-12, 12, -12],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '30px',
                    width: '210px',
                    height: '70px',
                    background: 'rgba(255,255,255,0.92)',
                    border: '1px dashed rgba(255, 107, 0, 0.35)',
                    borderRadius: '12px',
                    padding: '0.75rem 1rem',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                    transform: 'translateZ(110px)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}
                >
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF6B00' }}>
                    <Cpu size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#111827' }}>AI Lead Flow</div>
                    <div style={{ fontSize: '0.55rem', color: '#6B7280', marginTop: '2px' }}>Executing workflows...</div>
                  </div>
                </motion.div>

                {/* Layer 4: Floating Abstract Glass Ring/Donut (z: 80px) */}
                <motion.div
                  animate={{
                    y: [15, -15, 15],
                    rotate: [360, 0],
                  }}
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '120px',
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    border: '4px solid rgba(255,255,255,0.04)',
                    borderTopColor: 'rgba(255,107,0,0.25)',
                    transform: 'translateZ(80px)',
                    pointerEvents: 'none',
                  }}
                />
              </motion.div>
            </motion.div>

          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
            .hero-3d-scene { transform: scale(0.85); transform-origin: center center; margin-top: 1rem; }
          }
          @media (max-width: 480px) {
            .hero-3d-scene { transform: scale(0.7); transform-origin: center center; height: 320px; }
          }
        `}</style>
      </section>

      {/* ━━━ TRUST / STATISTICS SECTION ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="lx-section" style={{ borderTop: '1px solid rgba(0,0,0,0.06)', background: 'var(--bg2)' }}>
        <div className="container mx-auto">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', textAlign: 'center' }}>
            {[
              { to: 50, suffix: '+', label: 'Projects Delivered' },
              { to: 98, suffix: '%', label: 'Client Satisfaction' },
              { to: 24, suffix: '/7', label: 'Support Available' },
              { to: 3, suffix: 'x', label: 'Average ROI Boost' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ padding: '2rem 1.5rem', background: 'rgba(0, 0, 0, 0.01)', border: '1px solid rgba(0, 0, 0, 0.04)', borderRadius: '16px' }}
              >
                <div style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', fontWeight: 800, color: '#111827', letterSpacing: '-0.03em', marginBottom: '8px' }}>
                  <CountUp to={stat.to} suffix={stat.suffix} />
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ SERVICES SECTION ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="lx-section" style={{ borderTop: '1px solid rgba(0, 0, 0, 0.06)' }}>
        <div className="container mx-auto">
          
          <div style={{ textAlign: 'left', marginBottom: '4rem' }}>
            <p className="lx-eyebrow" style={{ marginBottom: '0.75rem' }}>Our Services</p>
            <h2 className="lx-heading" style={{ color: '#111827', maxWidth: '600px' }}>
              <TextReveal text="Solutions Crafted for Growth." />
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {servicesList.map((svc) => (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="lx-card lx-card-glow"
                style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}
              >
                <div className="icon-wrapper" style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 107, 0, 0.08)', border: '1px solid rgba(255, 107, 0, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF6B00', marginBottom: '1.5rem' }}>
                  {svc.icon}
                </div>
                
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#111827', marginBottom: '4px' }}>{svc.title}</h3>
                <p style={{ fontSize: '0.95rem', color: '#FF6B00', fontWeight: 700, marginBottom: '1.25rem' }}>
                  {svc.priceText}
                </p>
                
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem', flexGrow: 1 }}>{svc.desc}</p>
                
                <button 
                  className="lx-btn-ghost" 
                  style={{ width: '100%', justifyContent: 'center', padding: '10px 20px', fontSize: '0.85rem' }}
                  onClick={() => navigate('/contact')}
                >
                  Discuss Project
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ INTERACTIVE COST ESTIMATOR SECTION ━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="lx-section" style={{ borderTop: '1px solid rgba(0, 0, 0, 0.06)', background: 'var(--bg2)' }}>
        <div className="container mx-auto">
          
          <div style={{ textAlign: 'left', marginBottom: '3.5rem', maxWidth: '640px' }}>
            <p className="lx-eyebrow" style={{ marginBottom: '0.75rem' }}>Cost Estimator</p>
            <h2 className="lx-heading" style={{ color: '#111827' }}>
              Project Cost Estimator
            </h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.75rem', fontSize: '1.05rem', lineHeight: 1.5 }}>Configure a customized package price in seconds. Simple, minimal, and fully transparent.</p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--card)', border: '1px solid rgba(255,255,255,0.4)', padding: '2.5rem', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.08)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
              
              {/* Service selection dropdown */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', fontWeight: 700 }}>Select Service</label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'var(--bg2)',
                    border: '1px solid rgba(0,0,0,0.08)',
                    borderRadius: '10px',
                    padding: '12px 16px',
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {servicesList.map(s => (
                    <option key={s.id} value={s.id} style={{ background: 'var(--bg)' }}>{s.title}</option>
                  ))}
                </select>
              </div>

              {/* Feature selection dropdown */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', fontWeight: 700 }}>Select Feature Add-ons</label>
                <select
                  value={selectedFeaturePack}
                  onChange={(e) => setSelectedFeaturePack(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'var(--bg2)',
                    border: '1px solid rgba(0,0,0,0.08)',
                    borderRadius: '10px',
                    padding: '12px 16px',
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {featurePacks.map(f => (
                    <option key={f.id} value={f.id} style={{ background: 'var(--bg)' }}>{f.name}</option>
                  ))}
                </select>
              </div>

            </div>

            {/* Feature short desc helper */}
            {currentFeatureObj && currentFeatureObj.price > 0 && (
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', background: 'rgba(0,0,0,0.02)', padding: '10px 14px', borderRadius: '8px', marginBottom: '2rem', borderLeft: '2px solid #FF6B00' }}>
                <strong>{currentFeatureObj.name}:</strong> {currentFeatureObj.desc}
              </p>
            )}

            {/* Price display container */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '2rem', gap: '1.5rem' }}>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '4px', fontWeight: 700 }}>Estimated Cost</span>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${selectedService}-${selectedFeaturePack}`}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}
                  >
                    <span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#FF6B00', letterSpacing: '-0.03em' }}>
                      ₹{totalCost.toLocaleString()}
                    </span>
                    {isRecurring && (
                      <span style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                        /month
                      </span>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              <a
                href={`https://wa.me/917010325350?text=Hi LaunchX Studio, I used the homepage quote builder. Service: ${currentServiceObj?.title}. Feature Tier: ${currentFeatureObj?.name}. Calculated investment: ₹${totalCost.toLocaleString()}${isRecurring ? '/mo' : ''}. Let's get started!`}
                target="_blank" 
                rel="noopener noreferrer"
                className="lx-btn-primary"
                style={{ 
                  display: 'inline-flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  textDecoration: 'none', 
                  padding: '14px 28px',
                  boxShadow: 'none'
                }}
              >
                Discuss Project
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ━━━ PORTFOLIO TEASER SECTION ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="lx-section" style={{ borderTop: '1px solid rgba(0, 0, 0, 0.06)', background: 'transparent' }}>
        <div className="container mx-auto">
          
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <p className="lx-eyebrow" style={{ marginBottom: '1rem' }}>Selected Works</p>
            <h2 className="lx-heading" style={{ color: '#111827' }}>
              <TextReveal text="Engineered" /> <span style={{ color: 'rgba(17,24,39,0.3)' }}><TextReveal text="for Impact." delay={0.2} /></span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {caseStudiesData.map((project, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card"
                style={{ overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <div 
                  style={{ width: '100%', height: '220px', overflow: 'hidden', position: 'relative', cursor: 'pointer' }} 
                  className="group"
                  data-cursor-view="true"
                  onClick={() => setSelectedCaseStudy(project)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(255,255,255,0.9)', padding: '5px 12px', borderRadius: '100px', border: '1px solid rgba(0,0,0,0.08)', backdropFilter: 'blur(8px)' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#FF7A00', textTransform: 'uppercase' }}>{project.category}</span>
                  </div>
                </div>

                <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#111827', marginBottom: '1rem' }}>{project.title}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,122,0,0.05)', border: '1px solid rgba(255,122,0,0.15)', padding: '10px 14px', borderRadius: '12px', marginBottom: '1.5rem' }}>
                      <Sparkles size={14} style={{ color: '#FF7A00' }} />
                      <span style={{ fontSize: '0.85rem', color: '#111827', fontWeight: 600 }}>{project.stats}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <button 
                      className="lx-btn-ghost" 
                      style={{ padding: '10px 20px', fontSize: '0.85rem', flexGrow: 1, justifyContent: 'center' }}
                      onClick={() => setSelectedCaseStudy(project)}
                    >
                      Case Study
                    </button>
                    <button 
                      className="lx-btn-primary" 
                      style={{ padding: '10px 20px', fontSize: '0.85rem', boxShadow: 'none' }}
                      onClick={() => navigate('/portfolio')}
                    >
                      Live View
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ CASE STUDIES TIMELINE SECTION ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="lx-section lx-section-glow-top" style={{ borderTop: '1px solid var(--border)', background: 'var(--bg2)' }}>
        <div className="container mx-auto">
          
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <p className="lx-eyebrow" style={{ marginBottom: '1rem' }}>Performance Metrics</p>
            <h2 className="lx-heading" style={{ color: '#111827' }}>
              <TextReveal text="How We Deliver" /> <span style={{ color: 'rgba(17,24,39,0.3)' }}><TextReveal text="Results." delay={0.2} /></span>
            </h2>
          </div>

          <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
            <div className="timeline-line" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
              {caseStudiesData.map((cs, i) => {
                const isEven = i % 2 === 0;
                return (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    style={{
                      display: 'flex',
                      justifyContent: isEven ? 'flex-start' : 'flex-end',
                      position: 'relative',
                      width: '100%'
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '40px',
                        transform: 'translateX(-50%)',
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        background: 'var(--bg)',
                        border: '4px solid #FF7A00',
                        boxShadow: 'none',
                        zIndex: 2
                      }}
                      className="hidden md:block"
                    />

                    <div 
                      style={{ 
                        width: '100%',
                        maxWidth: '460px',
                        background: 'var(--card)',
                        border: '1px solid rgba(255, 255, 255, 0.4)',
                        borderRadius: '24px',
                        padding: '2.5rem',
                        position: 'relative',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)'
                      }}
                    >
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#FF7A00', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                        {cs.category}
                      </span>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#111827', marginBottom: '1.5rem' }}>{cs.title}</h3>
                      
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <div>
                          <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>Problem</h4>
                          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{cs.problem}</p>
                        </div>
                        <div>
                          <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>Solution</h4>
                          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{cs.solution}</p>
                        </div>
                        <div style={{ borderTop: '1px solid rgba(0, 0, 0, 0.06)', paddingTop: '1.25rem', marginTop: '0.5rem' }}>
                          <h4 style={{ fontSize: '0.85rem', color: '#FF7A00', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>Result</h4>
                          <p style={{ fontSize: '1rem', color: '#111827', fontWeight: 700 }}>{cs.result}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
 


      {/* ━━━ PROCESS / WORKFLOW SECTION ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="lx-section" style={{ borderTop: '1px solid rgba(0, 0, 0, 0.06)' }}>
        <div className="container mx-auto">
          
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <p className="lx-eyebrow" style={{ marginBottom: '1rem' }}>Our Workflow</p>
            <h2 className="lx-heading" style={{ color: '#111827' }}>
              <TextReveal text="From First Call" /> <span style={{ color: 'rgba(17, 24, 39, 0.3)' }}><TextReveal text="to Launch." delay={0.2} /></span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            {[
              { step: '01', title: 'Discovery Call', desc: 'We align on your design goals, target audience metrics, and layout priorities on a quick consulting session.' },
              { step: '02', title: 'Strategy & Planning', desc: 'Design pixel-perfect layout mocks and create high-ticket architecture wireframes tailored to convert.' },
              { step: '03', title: 'Design & Development', desc: 'Code your product with React, Next.js, and Framer Motion transitions, maintaining strict visual precision.' },
              { step: '04', title: 'Launch & Optimization', desc: 'Deploy to fast servers, perform complete performance testing, and turn on AI capture leads workflows.' }
            ].map((p, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card"
                style={{ padding: '2.5rem', position: 'relative' }}
              >
                <div style={{ fontSize: '2.5rem', fontWeight: 950, color: 'rgba(255, 122, 0, 0.15)', fontFamily: 'monospace', marginBottom: '1rem' }}>
                  {p.step}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111827', marginBottom: '12px' }}>{p.title}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ CONVERSION CTA SECTION ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="lx-section" style={{ borderTop: '1px solid rgba(0, 0, 0, 0.06)', position: 'relative', overflow: 'hidden' }}>
        <div className="container mx-auto text-center" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            style={{ maxWidth: '800px', margin: '0 auto' }}
          >
            <p className="lx-eyebrow" style={{ marginBottom: '1.5rem' }}>Ready to Scale?</p>
            <h2 className="lx-heading" style={{ color: '#111827', marginBottom: '2rem' }}>
              <TextReveal text="Ready To Grow" /> <span style={{ color: '#FF6B00' }}><TextReveal text="Your Business?" delay={0.2} /></span>
            </h2>
            <p className="lx-body" style={{ color: 'var(--text-muted)', maxWidth: '580px', margin: '0 auto 3rem' }}>
              Let's build a website that generates more leads, more customers, and more revenue.
            </p>
            
            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button className="lx-btn-primary" onClick={() => navigate('/contact')} style={{ boxShadow: 'none' }}>
                Book Free Consultation <Calendar size={18} />
              </button>
              <button className="lx-btn-ghost" onClick={() => navigate('/contact')}>
                Discuss Project
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ━━━ CASE STUDY MODAL / DRAWER POPUP ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
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
              background: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem'
            }}
            onClick={() => setSelectedCaseStudy(null)}
          >
            <motion.div
              initial={{ scale: 0.98, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.98, y: 15 }}
              transition={{ duration: 0.25 }}
              style={{
                width: '100%',
                maxWidth: '680px',
                background: 'var(--card)',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)'
              }}
              onClick={e => e.stopPropagation()}
            >
              <div style={{ width: '100%', height: '240px', position: 'relative' }}>
                <img 
                  src={selectedCaseStudy.image} 
                  alt={selectedCaseStudy.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--card) 10%, transparent 80%)' }} />
                <button 
                  onClick={() => setSelectedCaseStudy(null)}
                  style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(0,0,0,0.1)', color: '#111827', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}
                >
                  ✕
                </button>
              </div>

              <div style={{ padding: '2.5rem', paddingTop: '1rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#FF6B00', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '6px' }}>
                  Case Study Details
                </span>
                <h3 style={{ fontSize: '2rem', fontWeight: 900, color: '#111827', marginBottom: '1.5rem' }}>{selectedCaseStudy.title}</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxHeight: '320px', overflowY: 'auto', paddingRight: '10px' }}>
                  <div>
                    <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px' }}>The Challenge</h4>
                    <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{selectedCaseStudy.problem}</p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px' }}>Our Solution</h4>
                    <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{selectedCaseStudy.solution}</p>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(0, 0, 0, 0.08)', paddingTop: '1.5rem' }}>
                    <h4 style={{ fontSize: '0.85rem', color: '#FF6B00', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px' }}>Measurable Result</h4>
                    <p style={{ fontSize: '1.15rem', color: '#111827', fontWeight: 800 }}>{selectedCaseStudy.result}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem' }}>
                  <button 
                    className="lx-btn-primary" 
                    style={{ flexGrow: 1, justifyContent: 'center', boxShadow: 'none' }}
                    onClick={() => {
                      setSelectedCaseStudy(null);
                      navigate('/portfolio');
                    }}
                  >
                    View in Portfolio
                  </button>
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

export default Home;
