import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail } from 'lucide-react';

const Instagram = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const Linkedin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const Whatsapp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
);

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    budget: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi LaunchX Studio, I am ${form.name}.%0A%0A*Email:* ${form.email}%0A*Budget:* ${form.budget || 'Not specified'}%0A%0A*Message:* ${form.message}`;
    window.open(`https://wa.me/917010325350?text=${text}`, '_blank');
    setSent(true);
  };

  const contactInfo = [
    {
      label: 'Email',
      value: 'harishselvaraj56@gmail.com',
      href: 'mailto:harishselvaraj56@gmail.com',
      icon: <Mail size={20} />,
    },
    {
      label: 'Phone',
      value: '+91 7010325350',
      href: 'tel:+917010325350',
      icon: <Phone size={20} />,
    },
    {
      label: 'Instagram',
      value: '@launchxstudio',
      href: 'https://www.instagram.com/launchxstudio/',
      icon: <Instagram />,
    },
    {
      label: 'LinkedIn',
      value: 'Harish Selvaraj',
      href: 'https://www.linkedin.com/in/harish-selvaraj-919623344/',
      isLinkedin: true,
    },
  ];

  const inputStyle = {
    width: '100%', 
    background: 'transparent', 
    border: 'none',
    borderBottom: '1px solid rgba(0,0,0,0.15)',
    padding: '16px 0', 
    fontSize: '1.05rem', 
    color: '#111827',
    outline: 'none', 
    transition: 'border-color 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    fontFamily: 'inherit',
  };

  return (
    <div style={{ background: 'transparent', paddingTop: '90px', position: 'relative', overflow: 'hidden' }}>
      
      {/* Hero */}
      <div style={{ padding: '8rem 0 4rem', position: 'relative', overflow: 'hidden' }}>
        <div className="container mx-auto" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.p className="lx-eyebrow" style={{ marginBottom: '1.25rem' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Contact</motion.p>
          <motion.h1 className="lx-heading" style={{ color: '#111827', textAlign: 'center', marginBottom: '1.5rem' }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            Let's Build <span style={{ color: '#FF6B00' }}>Something Great.</span>
          </motion.h1>
        </div>
      </div>

      {/* Main Layout */}
      <div className="container mx-auto" style={{ paddingBottom: '10rem' }}>
        <div 
          className="contact-layout"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))', gap: '5rem', alignItems: 'start' }}
        >
          {/* Left Column — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <p className="lx-body" style={{ marginBottom: '4rem', maxWidth: '440px', color: '#6B7280' }}>
              Fill out the form and we'll get back to you within 24 hours. Or reach out directly — we are always open to discuss custom requirements.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {contactInfo.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                  style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', textDecoration: 'none', transition: 'transform 0.2s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'translateX(6px)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'translateX(0)')}
                >
                  <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: 'rgba(255,107,0,0.06)', border: '1px solid rgba(255,107,0,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF6B00', flexShrink: 0 }}>
                    {c.isLinkedin ? <Linkedin /> : c.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: '0.8rem', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px', fontWeight: 700 }}>{c.label}</p>
                    <p style={{ color: '#111827', fontWeight: 700, fontSize: '1rem' }}>{c.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div style={{ marginTop: '4rem', padding: '2rem', borderRadius: '20px', background: 'rgba(255,107,0,0.04)', border: '1px solid rgba(255,107,0,0.15)', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div style={{ color: '#FF6B00', flexShrink: 0 }}><Whatsapp /></div>
              <div>
                <p style={{ color: '#111827', fontWeight: 800, marginBottom: '4px' }}>Quick Support on WhatsApp</p>
                <p style={{ color: '#6B7280', fontSize: '0.9rem' }}>We typically respond within 1–2 hours</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card"
            style={{ 
              padding: 'clamp(2rem, 5vw, 3.5rem)'
            }}
          >
            {sent ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🎉</div>
                <h3 style={{ fontSize: '2rem', fontWeight: 900, color: '#111827', marginBottom: '1rem' }}>Request Sent!</h3>
                <p style={{ color: '#6B7280', lineHeight: 1.7 }}>We have compiled your query. We will redirect you to WhatsApp to dispatch it directly.</p>
                <button onClick={() => setSent(false)} className="lx-btn-primary" style={{ marginTop: '2.5rem', border: 'none', padding: '14px 36px', borderRadius: '100px', fontWeight: 800, cursor: 'pointer' }}>Send Another Request</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                <div>
                  <input name="name" required value={form.name} onChange={handleChange} placeholder="Your Name" style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderBottomColor = '#FF6B00')}
                    onBlur={e => (e.currentTarget.style.borderBottomColor = 'rgba(0,0,0,0.15)')} />
                </div>
                <div>
                  <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="Email Address" style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderBottomColor = '#FF6B00')}
                    onBlur={e => (e.currentTarget.style.borderBottomColor = 'rgba(0,0,0,0.15)')} />
                </div>
                <div>
                  <select name="budget" value={form.budget} onChange={handleChange} style={{ ...inputStyle, appearance: 'none', backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'rgba(107,114,128,0.6)\' stroke-width=\'2\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0 center', backgroundSize: '20px' }}>
                    <option value="" style={{ background: '#fff' }}>Budget Range (optional)</option>
                    <option value="Under ₹20,000" style={{ background: '#fff' }}>Under ₹20,000</option>
                    <option value="₹20,000 – ₹50,000" style={{ background: '#fff' }}>₹20,000 – ₹50,000</option>
                    <option value="₹50,000 – ₹1,00,000" style={{ background: '#fff' }}>₹50,000 – ₹1,00,000</option>
                    <option value="₹1,00,000+" style={{ background: '#fff' }}>₹1,00,000+</option>
                  </select>
                </div>
                <div>
                  <textarea name="message" required rows={4} value={form.message} onChange={handleChange} placeholder="Tell us about your project requirements..." style={{ ...inputStyle, resize: 'none' }}
                    onFocus={e => (e.currentTarget.style.borderBottomColor = '#FF6B00')}
                    onBlur={e => (e.currentTarget.style.borderBottomColor = 'rgba(0,0,0,0.15)')} />
                </div>
                
                <button
                  type="submit"
                  className="lx-btn-primary"
                  style={{ 
                    padding: '16px', 
                    borderRadius: '100px', 
                    fontWeight: 800, 
                    fontSize: '1rem', 
                    border: 'none', 
                    cursor: 'pointer', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: '8px'
                  }}
                >
                  Send Message <Send size={16} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
      
      {/* Responsive adjustments */}
      <style>{`
        @media (max-width: 1024px) {
          .contact-layout { grid-template-columns: 1fr !important; gap: 4rem !important; }
        }
      `}</style>
      
    </div>
  );
};

export default Contact;
