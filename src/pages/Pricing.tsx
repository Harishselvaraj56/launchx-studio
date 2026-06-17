import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const packages = [
  {
    title: 'Landing Page',
    price: 'Starting from ₹4,999',
    subtitle: 'Perfect for new product promotions',
    popular: false,
    features: ['Custom Landing Page', 'Mobile Responsive UI', 'Contact & Lead Capture', 'Basic SEO Integration', '1 Week Delivery Timeline'],
  },
  {
    title: 'Website Development',
    price: 'Starting from ₹7,999',
    subtitle: 'Most chosen by growing brands',
    popular: true,
    features: ['Up to 5 Pages Custom React Build', 'Advanced UI/UX Mockups', 'Full SEO & Metadata Config', 'WhatsApp Chatbot Integration', '1 Month Technical Support'],
  },
  {
    title: 'E-Commerce',
    price: 'Starting from ₹11,999',
    subtitle: 'Full digital storefront solution',
    popular: false,
    features: ['Full E-Commerce catalog sync', 'Razorpay/Stripe Payment integration', 'Secure Admin Metrics Dashboard', 'Inventory management controls', '3 Months Priority Support'],
  },
];

const addOns = [
  { title: 'Social Media Marketing', price: '₹8,999', per: '/month', desc: 'Growth-focused campaigns, content designs, and posting schedules across networks.' },
  { title: 'Reel (Script + Shoot + Edit)', price: '₹2,999', per: '/project', desc: 'Professional end-to-end video production from scripting to shooting and post-production editing.' },
  { title: 'Reel (Edit Only)', price: '₹999', per: '/reel', desc: 'Trend-optimized viral reels engineered for maximum organic reach.' },
  { title: 'Poster Design', price: '₹499', per: '/poster', desc: 'Premium custom graphics and brand assets ready for marketing campaign pushes.' },
  { title: 'AI Business Automation', price: '₹14,999', per: '/setup', desc: 'Automate business workflows using intelligent AI tools, chatbots, and integrations.' },
];

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <div style={{ background: 'transparent', paddingTop: '90px', position: 'relative', overflow: 'hidden' }}>
      
      {/* Hero */}
      <div style={{ padding: '8rem 0 4rem', position: 'relative', overflow: 'hidden' }}>
        {/* Ambient glow */}
        <div style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: '60vw', height: '60vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,122,0,0.055) 0%, transparent 60%)', pointerEvents: 'none', zIndex: 0 }} aria-hidden="true" />
        <div className="container mx-auto" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.p className="lx-eyebrow" style={{ marginBottom: '1.25rem' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Investment</motion.p>
          <motion.h1 className="lx-heading" style={{ color: '#111827', textAlign: 'center', marginBottom: '1.5rem' }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            Transparent <span style={{ color: '#9CA3AF' }}>Pricing Models.</span>
          </motion.h1>
          <motion.p className="lx-body" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', color: '#6B7280' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            No hidden fees. Custom engineered high-ticket assets matching global standards.
          </motion.p>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div style={{ padding: '2rem 0 8rem' }}>
        <div className="container mx-auto">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '2.5rem', alignItems: 'stretch' }}>
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="lx-card lx-card-glow"
                style={{
                  position: 'relative',
                  padding: '3rem 2.5rem',
                  display: 'flex', flexDirection: 'column',
                  ...(pkg.popular ? { borderColor: 'rgba(255,122,0,0.5)', borderWidth: '2px', boxShadow: '0 8px 40px rgba(255,122,0,0.12), 0 0 0 1px rgba(255,122,0,0.08)' } : {})
                }}
              >
                {pkg.popular && (
                  <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: '#FF6B00', color: '#fff', padding: '6px 24px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                    Most Popular
                  </div>
                )}
                
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#111827', marginBottom: '6px' }}>{pkg.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#9CA3AF', marginBottom: '1.5rem' }}>{pkg.subtitle}</p>
                  <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#FF6B00', letterSpacing: '-0.03em', lineHeight: 1 }}>{pkg.price}</div>
                </div>

                <ul style={{ listStyle: 'none', marginBottom: '3rem', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {pkg.features.map((f, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#374151', fontSize: '0.95rem' }}>
                      <Check size={16} style={{ color: '#FF6B00', flexShrink: 0 }} /> {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/917010325350?text=Hi LaunchX Studio, I'm interested in the ${pkg.title} plan (${pkg.price})`}
                  target="_blank" rel="noopener noreferrer"
                  className={pkg.popular ? "lx-btn-primary" : "lx-btn-ghost"}
                  style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px',
                    textDecoration: 'none', width: '100%', padding: '14px', boxShadow: 'none'
                  }}
                >
                  Get Started <ArrowRight size={16} />
                </a>
              </motion.div>
            ))}
          </div>

          {/* Add-ons */}
          <div style={{ marginTop: '8rem', textAlign: 'center' }}>
            <motion.h2 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.03em', color: '#111827', marginBottom: '1rem' }}
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Add-On <span style={{ color: '#9CA3AF' }}>Services</span>
            </motion.h2>
            <p style={{ color: '#6B7280', fontSize: '1.05rem', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem' }}>Configure visual edits and poster options on top of standard features.</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem', textAlign: 'left' }}>
              {addOns.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="lx-card lx-card-glow"
                  style={{ padding: '2rem' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111827', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        {a.title}
                        {a.per === '/month' && (
                          <span style={{ fontSize: '0.65rem', background: 'rgba(255, 107, 0, 0.08)', color: '#FF6B00', padding: '2px 8px', borderRadius: '100px', border: '1px solid rgba(255, 107, 0, 0.2)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Monthly</span>
                        )}
                      </h4>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '1.3rem', fontWeight: 900, color: '#FF6B00' }}>{a.price}</span>
                      <span style={{ fontSize: '0.8rem', color: '#9CA3AF', display: 'block' }}>{a.per}</span>
                    </div>
                  </div>
                  <p style={{ color: '#6B7280', fontSize: '0.9rem', lineHeight: 1.6 }}>{a.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Estimator */}
          <motion.div
            className="lx-card lx-card-glow"
            style={{ marginTop: '8rem', padding: '4rem 2rem', borderRadius: '16px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.5)' }}
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <p style={{ color: '#6B7280', fontSize: '1rem', marginBottom: '1rem' }}>Not sure which plan is right for you?</p>
            <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#111827', marginBottom: '2rem' }}>Try our custom project estimator</h3>
            <button
              onClick={() => navigate('/calculator')}
              className="lx-btn-primary"
              style={{ padding: '14px 32px', fontSize: '0.95rem', boxShadow: 'none' }}
            >
              Open Calculator <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
