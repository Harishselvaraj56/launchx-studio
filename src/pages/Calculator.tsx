import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Minus, Plus } from 'lucide-react';

const servicesList = [
  { id: 'none', title: 'No Core Service', priceVal: 0, isRecurring: false, time: '' },
  { id: 'landing', title: 'Landing Page', priceVal: 4999, isRecurring: false, time: '5–7 Days' },
  { id: 'webdev', title: 'Website Development', priceVal: 7999, isRecurring: false, time: '7–14 Days' },
  { id: 'ecommerce', title: 'E-Commerce', priceVal: 11999, isRecurring: false, time: '14–21 Days' },
  { id: 'smm', title: 'Social Media Marketing', priceVal: 8999, isRecurring: true, time: 'Monthly Retainer' },
  { id: 'ai-automation', title: 'AI Business Automation', priceVal: 14999, isRecurring: false, time: '7–14 Days' }
];

const featurePacks = [
  { id: 'basic', name: 'Standard Features Included', price: 0, desc: 'Responsive layout, standard performance, and core page designs.' },
  { id: 'professional', name: 'Professional Pack (+₹2,499)', price: 2499, desc: 'Adds advanced SEO setup, custom UI layout drafts, and support integration.' },
  { id: 'enterprise', name: 'Enterprise Pack (+₹4,999)', price: 4999, desc: 'Adds custom API workflows, CRM analytics, and 1-month priority support.' }
];

const unitServices = [
  { id: 'reelshoot', name: 'Reel (Script + Shoot + Edit)', price: 2999, unit: 'video' },
  { id: 'reeledit', name: 'Reel (Edit Only)', price: 999, unit: 'reel' },
  { id: 'poster', name: 'Poster Design', price: 499, unit: 'poster' },
];

const Calculator = () => {
  const [selectedService, setSelectedService] = useState('landing');
  const [selectedFeaturePack, setSelectedFeaturePack] = useState('basic');
  const [quantities, setQuantities] = useState<Record<string, number>>({ reelshoot: 0, reeledit: 0, poster: 0 });
  const [totals, setTotals] = useState({ oneTime: 0, recurring: 0 });

  useEffect(() => {
    const serviceObj = servicesList.find(s => s.id === selectedService);
    const featureObj = featurePacks.find(f => f.id === selectedFeaturePack);
    
    let oneTime = 0;
    let recurring = 0;
    
    if (serviceObj) {
      if (serviceObj.isRecurring) {
        recurring += serviceObj.priceVal;
      } else {
        oneTime += serviceObj.priceVal;
      }
    }
    
    if (serviceObj && selectedService !== 'none' && featureObj) {
      oneTime += featureObj.price;
    }
    
    unitServices.forEach(u => {
      oneTime += (quantities[u.id] ?? 0) * u.price;
    });
    
    setTotals({ oneTime, recurring });
  }, [selectedService, selectedFeaturePack, quantities]);

  const increment = (id: string) => {
    setQuantities(q => ({ ...q, [id]: (q[id] ?? 0) + 1 }));
  };

  const decrement = (id: string) => {
    setQuantities(q => ({ ...q, [id]: Math.max(0, (q[id] ?? 0) - 1) }));
  };

  const currentServiceObj = servicesList.find(s => s.id === selectedService);
  const currentFeatureObj = featurePacks.find(f => f.id === selectedFeaturePack);

  const getWhatsAppLink = () => {
    const serviceStr = currentServiceObj && selectedService !== 'none' ? `Core Service: ${currentServiceObj.title} (₹${currentServiceObj.priceVal.toLocaleString()})` : 'No Core Service';
    const featureStr = currentServiceObj && selectedService !== 'none' ? `Feature Tier: ${currentFeatureObj?.name}` : '';
    
    const qtyArr: string[] = [];
    unitServices.forEach(u => {
      const q = quantities[u.id] ?? 0;
      if (q > 0) qtyArr.push(`${u.name} (x${q})`);
    });
    const quantitiesStr = qtyArr.length > 0 ? `Add-ons: ${qtyArr.join(', ')}` : '';
    
    const totalMsg = `Hi LaunchX Studio, I custom calculated a quote.%0A%0A- ${serviceStr}${featureStr ? `%0A- ${featureStr}` : ''}${quantitiesStr ? `%0A- ${quantitiesStr}` : ''}%0A%0ATotal One-time: ₹${totals.oneTime.toLocaleString()}${totals.recurring > 0 ? `%0ATotal Recurring: ₹${totals.recurring.toLocaleString()}/month` : ''}%0A%0ALet's connect!`;
    return `https://wa.me/917010325350?text=${totalMsg}`;
  };

  const sectionCardStyle = {
    background: 'var(--card)',
    border: '1px solid rgba(0,0,0,0.08)',
    borderRadius: '16px',
    padding: '2.5rem',
    boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
  };

  const selectStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.8)',
    border: '1px solid rgba(0,0,0,0.12)',
    borderRadius: '10px',
    padding: '12px 14px',
    color: '#111827',
    fontSize: '0.95rem',
    outline: 'none',
    cursor: 'pointer',
    fontFamily: 'inherit',
  };

  return (
    <div style={{ background: 'transparent', paddingTop: '90px', position: 'relative', overflow: 'hidden' }}>
      
      {/* Hero */}
      <div style={{ padding: '8rem 0 4rem', position: 'relative', overflow: 'hidden' }}>
        <div className="container mx-auto" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.p className="lx-eyebrow" style={{ marginBottom: '1.25rem' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Cost Estimator</motion.p>
          <motion.h1 className="lx-heading" style={{ color: '#111827', textAlign: 'center', marginBottom: '1.5rem' }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            Build Your <span style={{ color: '#9CA3AF' }}>Custom Quote.</span>
          </motion.h1>
          <motion.p className="lx-body" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', color: '#6B7280' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            Select your required core development and custom add-ons to build your custom investment calculation.
          </motion.p>
        </div>
      </div>

      {/* Calculator Body */}
      <div className="container mx-auto" style={{ paddingBottom: '10rem' }}>
        <div 
          className="calculator-layout"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 520px), 1fr))', gap: '4rem', alignItems: 'start' }}
        >
          {/* LEFT — Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            
            {/* Step 1: Core Service & Feature Pack */}
            <div style={sectionCardStyle}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#FF6B00', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.9rem', color: '#fff', flexShrink: 0 }}>1</div>
                <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#111827' }}>Core Platform & Tier</h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px', fontWeight: 700 }}>Select Service</label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    style={selectStyle}
                  >
                    {servicesList.map(s => (
                      <option key={s.id} value={s.id}>{s.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px', fontWeight: 700 }}>Select Features</label>
                  <select
                    value={selectedFeaturePack}
                    onChange={(e) => setSelectedFeaturePack(e.target.value)}
                    disabled={selectedService === 'none'}
                    style={{
                      ...selectStyle,
                      color: selectedService === 'none' ? '#9CA3AF' : '#111827',
                      cursor: selectedService === 'none' ? 'not-allowed' : 'pointer',
                      opacity: selectedService === 'none' ? 0.6 : 1,
                    }}
                  >
                    {featurePacks.map(f => (
                      <option key={f.id} value={f.id}>{f.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {currentFeatureObj && currentFeatureObj.price > 0 && selectedService !== 'none' && (
                <p style={{ fontSize: '0.85rem', color: '#6B7280', background: 'rgba(255,107,0,0.04)', padding: '10px 14px', borderRadius: '8px', borderLeft: '2px solid #FF6B00' }}>
                  <strong>{currentFeatureObj.name}:</strong> {currentFeatureObj.desc}
                </p>
              )}
            </div>

            {/* Step 2: Per-Unit Services */}
            <div style={sectionCardStyle}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#FF6B00', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.9rem', color: '#fff', flexShrink: 0 }}>2</div>
                <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#111827' }}>Add-on Service Units</h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem' }}>
                {unitServices.map(s => (
                  <div 
                    key={s.id} 
                    className="lx-card"
                    style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '160px' }}
                  >
                    <div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#111827', marginBottom: '4px' }}>{s.name}</div>
                      <div style={{ fontSize: '0.85rem', color: '#9CA3AF', marginBottom: '1.5rem' }}>₹{s.price.toLocaleString()}/{s.unit}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(0,0,0,0.04)', borderRadius: '8px', padding: '4px 6px', border: '1px solid rgba(0,0,0,0.06)' }}>
                      <button onClick={() => decrement(s.id)}
                        style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(0,0,0,0.05)', border: 'none', color: '#374151', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Minus size={14} /></button>
                      <span style={{ fontWeight: 800, fontSize: '1rem', color: '#111827', minWidth: '1.5rem', textAlign: 'center' }}>{quantities[s.id] ?? 0}</span>
                      <button onClick={() => increment(s.id)}
                        style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(0,0,0,0.05)', border: 'none', color: '#374151', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Plus size={14} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT — Sticky Summary Card */}
          <div>
            <motion.div
              className="lx-card"
              style={{ 
                position: 'sticky', 
                top: '110px', 
                padding: '2.5rem', 
                border: '1px solid rgba(0,0,0,0.08)',
                boxShadow: '0 8px 40px rgba(0,0,0,0.08)'
              }}
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
            >
              <h3 style={{ fontSize: '0.8rem', fontWeight: 800, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '2rem' }}>Investment Quote</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem', minHeight: '120px' }}>
                {currentServiceObj && selectedService !== 'none' && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                    <span style={{ color: '#6B7280' }}>{currentServiceObj.title}</span>
                    <span style={{ color: '#111827', fontWeight: 700 }}>₹{currentServiceObj.priceVal.toLocaleString()}</span>
                  </div>
                )}
                
                {currentServiceObj && selectedService !== 'none' && currentFeatureObj && currentFeatureObj.price > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                    <span style={{ color: '#6B7280' }}>{currentFeatureObj.name}</span>
                    <span style={{ color: '#111827', fontWeight: 700 }}>+₹{currentFeatureObj.price.toLocaleString()}</span>
                  </div>
                )}
                
                {unitServices.filter(s => (quantities[s.id] ?? 0) > 0).map(s => (
                  <div key={s.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                    <span style={{ color: '#6B7280' }}>{quantities[s.id]}× {s.name}</span>
                    <span style={{ color: '#111827', fontWeight: 700 }}>₹{((quantities[s.id] ?? 0) * s.price).toLocaleString()}</span>
                  </div>
                ))}
                
                {selectedService === 'none' && Object.values(quantities).every(v => v === 0) && (
                  <p style={{ color: '#9CA3AF', fontSize: '0.95rem', textAlign: 'center', paddingTop: '2rem' }}>Configure options to compute estimate...</p>
                )}
              </div>

              <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '2rem', marginBottom: '2.5rem' }}>
                <p style={{ fontSize: '0.8rem', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 700 }}>Total Investment</p>
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${totals.oneTime}-${totals.recurring}`}
                    initial={{ y: -4, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 4, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-0.03em', color: '#FF6B00' }}
                  >
                    ₹{(totals.oneTime + totals.recurring).toLocaleString()}
                  </motion.div>
                </AnimatePresence>
                
                {totals.recurring > 0 && (
                  <div style={{ fontSize: '0.85rem', color: '#6B7280', marginTop: '4px' }}>
                    Includes ₹{totals.recurring.toLocaleString()}/month retainer
                  </div>
                )}
                
                {currentServiceObj?.time && selectedService !== 'none' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '1rem', color: '#6B7280', fontSize: '0.9rem' }}>
                    <Clock size={16} style={{ color: '#FF6B00' }} /> {currentServiceObj.time} estimated turnaround
                  </div>
                )}
              </div>

              <a
                href={getWhatsAppLink()}
                target="_blank" rel="noopener noreferrer"
                className={(totals.oneTime + totals.recurring) > 0 ? "lx-btn-primary" : "lx-btn-ghost"}
                style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  textDecoration: 'none', 
                  width: '100%', 
                  padding: '16px',
                  pointerEvents: (totals.oneTime + totals.recurring) > 0 ? 'auto' : 'none',
                  opacity: (totals.oneTime + totals.recurring) > 0 ? 1 : 0.5,
                  boxShadow: 'none'
                }}
              >
                {(totals.oneTime + totals.recurring) > 0 ? 'Send Quote to WhatsApp →' : 'Configure Estimate to Start'}
              </a>
            </motion.div>
          </div>

        </div>
      </div>
      
      {/* Responsive adjustments */}
      <style>{`
        @media (max-width: 1024px) {
          .calculator-layout { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
      
    </div>
  );
};

export default Calculator;
