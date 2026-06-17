import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'How long does a website take to build?',
    a: 'Timeline depends on project complexity. A landing page typically takes 1 week, a business website 2 weeks, and a full e-commerce store 3–4 weeks. We always provide a clear timeline before starting.',
  },
  {
    q: 'Do you provide hosting and deployment?',
    a: 'Yes — we handle end-to-end deployment. For premium packages we also offer 1–3 months of free maintenance and support after launch.',
  },
  {
    q: 'Can you redesign my existing website?',
    a: 'Absolutely. We can take your existing site, completely revamp its design, improve performance, and upgrade the technology to modern standards.',
  },
  {
    q: 'Is SEO included in every package?',
    a: 'Basic on-page SEO is included in all website packages. For advanced SEO (keyword research, content strategy, link building), we offer specialized digital growth add-ons.',
  },
  {
    q: 'How does payment work?',
    a: 'We require a 50% deposit upfront to begin work, with the remaining 50% due on final delivery and your approval. Monthly retainers (e.g., social media management) are billed at the start of each cycle.',
  },
  {
    q: 'Do you work with clients outside India?',
    a: 'Yes! We work remotely with clients worldwide. All communication and project updates happen via WhatsApp, email, or video call — whichever you prefer.',
  },
  {
    q: 'What makes LaunchX Studio different from other agencies?',
    a: "We combine premium custom design with high-performance engineering. We don't use templates — every project is custom-built from scratch, obsessed over, and tested before delivery.",
  },
];

const FAQItem = ({ faq, index, isOpen, onToggle }: { faq: typeof faqs[0]; index: number; isOpen: boolean; onToggle: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    style={{
      marginBottom: '1rem',
      borderRadius: '16px',
      background: isOpen ? 'rgba(255, 107, 0, 0.03)' : 'var(--card)',
      border: isOpen ? '1px solid rgba(255, 107, 0, 0.35)' : '1px solid rgba(0,0,0,0.08)',
      overflow: 'hidden',
      transition: 'all 0.2s ease',
      boxShadow: isOpen ? '0 4px 20px rgba(255,107,0,0.08)' : '0 2px 12px rgba(0,0,0,0.04)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
    }}
  >
    <button
      onClick={onToggle}
      style={{
        width: '100%',
        padding: '1.75rem 2rem',
        background: 'none',
        border: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '2rem',
        cursor: 'pointer',
        textAlign: 'left',
      }}
    >
      <span style={{ fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', fontWeight: 700, color: isOpen ? '#FF6B00' : '#111827', transition: 'color 0.3s', lineHeight: 1.4 }}>
        {faq.q}
      </span>
      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} style={{ flexShrink: 0, color: isOpen ? '#FF6B00' : '#9CA3AF' }}>
        <ChevronDown size={20} strokeWidth={2} />
      </motion.div>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25 }}
          style={{ overflow: 'hidden' }}
        >
          <p style={{ padding: '0 2rem 2rem', color: '#6B7280', fontSize: '1rem', lineHeight: 1.75, margin: 0 }}>
            {faq.a}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div style={{ background: 'transparent', paddingTop: '90px', position: 'relative', overflow: 'hidden' }}>
      
      {/* Hero */}
      <div style={{ padding: '8rem 0 4rem', position: 'relative', overflow: 'hidden' }}>
        <div className="container mx-auto" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.p className="lx-eyebrow" style={{ marginBottom: '1.25rem' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Support</motion.p>
          <motion.h1 className="lx-heading" style={{ color: '#111827', textAlign: 'center', marginBottom: '1.5rem' }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            Got <span style={{ color: '#9CA3AF' }}>Questions?</span>
          </motion.h1>
        </div>
      </div>

      {/* Accordion Layout */}
      <div className="container mx-auto" style={{ maxWidth: '900px', paddingBottom: '10rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.p
            className="lx-body"
            style={{ maxWidth: '600px', margin: '0 auto 2.5rem', textAlign: 'center', color: '#6B7280' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
          >
            Everything you need to know about working with LaunchX Studio. Can't find your answer? Reach out directly.
          </motion.p>
          <motion.a
            href="https://wa.me/917010325350?text=Hi LaunchX Studio, I have a question..."
            target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="lx-btn-primary"
            style={{ padding: '14px 32px', textDecoration: 'none', fontSize: '0.95rem', boxShadow: 'none' }}
          >
            Ask on WhatsApp →
          </motion.a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
