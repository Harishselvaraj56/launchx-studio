import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const packages = [
  {
    title: 'Landing Page',
    price: '₹4,999',
    subtitle: 'Perfect for new businesses',
    popular: false,
    features: [
      'Single Page Design',
      'Mobile Responsive',
      'Contact Form',
      'SEO Basics',
      '1 Week Delivery',
    ],
  },
  {
    title: 'Business Website',
    price: '₹7,999',
    subtitle: 'Most chosen by growing brands',
    popular: true,
    features: [
      'Up to 5 Pages',
      'Custom UI/UX Design',
      'SEO Setup',
      'WhatsApp Integration',
      '1 Month Support',
    ],
  },
  {
    title: 'E-Commerce',
    price: '₹11,999',
    subtitle: 'Full online store solution',
    popular: false,
    features: [
      'Full Product Catalog',
      'Payment Gateway',
      'Admin Dashboard',
      'Inventory Management',
      '3 Months Support',
    ],
  },
];

const extras = [
  { label: 'Social Media Management', price: '₹7,999/month' },
  { label: 'Video Editing', price: '₹499/video' },
];

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="section-padding relative overflow-hidden"
      style={{ background: '#070B14' }}
    >
      {/* glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: 0, left: '50%', transform: 'translateX(-50%)',
          width: '900px', height: '600px',
          background: 'radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 65%)',
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            className="text-accent text-sm font-bold uppercase tracking-widest mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Pricing
          </motion.span>
          <motion.h2
            className="font-extrabold tracking-tight text-white"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', lineHeight: 1 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Transparent{' '}
            <span className="text-gradient">Pricing</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 text-xl mt-6 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            No hidden fees. No surprises. Just premium quality.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto" style={{ alignItems: 'stretch' }}>
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="pricing-card-hover"
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '24px',
                padding: pkg.popular ? '2.5rem' : '2rem',
                background: pkg.popular
                  ? 'linear-gradient(135deg, rgba(255,107,0,0.12) 0%, rgba(124,58,237,0.08) 100%)'
                  : 'rgba(255,255,255,0.025)',
                border: pkg.popular
                  ? '1px solid rgba(255,107,0,0.4)'
                  : '1px solid rgba(255,255,255,0.07)',
                boxShadow: pkg.popular ? '0 0 60px rgba(255,107,0,0.15)' : 'none',
                transform: pkg.popular ? 'scale(1.03)' : 'scale(1)',
                zIndex: pkg.popular ? 10 : 1,
              }}
            >
              {pkg.popular && (
                <div
                  style={{
                    position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
                    background: '#FF6B00', color: '#fff',
                    padding: '4px 20px', borderRadius: '100px',
                    fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>
                  {pkg.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.3)', marginBottom: '16px' }}>
                  {pkg.subtitle}
                </p>
                <div style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em' }}>
                  {pkg.price}
                </div>
              </div>

              <ul style={{ listStyle: 'none', marginBottom: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {pkg.features.map((f, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.75)', fontSize: '1rem' }}>
                    <Check size={18} style={{ color: '#FF6B00', flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/917010325350?text=Hi LaunchX Studio, I'm interested in the ${pkg.title} plan (${pkg.price})`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block', textAlign: 'center',
                  padding: '16px', borderRadius: '100px',
                  fontWeight: 700, fontSize: '1rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                  background: pkg.popular ? '#FF6B00' : 'rgba(255,255,255,0.07)',
                  color: '#fff',
                  border: pkg.popular ? 'none' : '1px solid rgba(255,255,255,0.1)',
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              >
                Get Started →
              </a>
            </motion.div>
          ))}
        </div>

        {/* Extras */}
        <motion.div
          className="max-w-3xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {extras.map((e, i) => (
            <div
              key={i}
              style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '1.5rem 2rem', borderRadius: '16px',
                background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{e.label}</span>
              <span style={{ color: '#FF6B00', fontWeight: 700, fontSize: '1.1rem' }}>{e.price}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
