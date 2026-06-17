import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator as CalcIcon, Clock, Check } from 'lucide-react';

const websiteTypes = [
  { id: 'none', name: 'No Website Needed', price: 0, time: 0 },
  { id: 'landing', name: 'Landing Page', price: 4999, time: 7 },
  { id: 'business', name: 'Business Website', price: 7999, time: 14 },
  { id: 'ecommerce', name: 'E-Commerce Website', price: 11999, time: 28 },
];

const addOns = [
  { id: 'smm', name: 'Social Media Management (Monthly)', price: 7999, time: 0 },
];

const unitServices = [
  { id: 'video', name: 'Video Editing', pricePerUnit: 499, label: 'Videos' },
  { id: 'poster', name: 'Poster Design', pricePerUnit: 499, label: 'Posters' },
  { id: 'reel', name: 'Reel Editing', pricePerUnit: 499, label: 'Reels' },
];

const CalculatorSection = () => {
  const [selectedWeb, setSelectedWeb] = useState('none');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [units, setUnits] = useState<Record<string, number>>({
    video: 0,
    poster: 0,
    reel: 0,
  });

  const [totalCost, setTotalCost] = useState(0);
  const [timeline, setTimeline] = useState('');

  useEffect(() => {
    let cost = 0;
    
    const web = websiteTypes.find(w => w.id === selectedWeb);
    if (web) {
      cost += web.price;
      if (web.time === 0) setTimeline('Depends on services');
      else if (web.time === 7) setTimeline('~1 Week');
      else if (web.time === 14) setTimeline('~2 Weeks');
      else setTimeline('~3-4 Weeks');
    }

    selectedAddOns.forEach(id => {
      const addon = addOns.find(a => a.id === id);
      if (addon) cost += addon.price;
    });

    unitServices.forEach(srv => {
      cost += units[srv.id] * srv.pricePerUnit;
    });

    setTotalCost(cost);
  }, [selectedWeb, selectedAddOns, units]);

  const toggleAddOn = (id: string) => {
    if (selectedAddOns.includes(id)) {
      setSelectedAddOns(selectedAddOns.filter(a => a !== id));
    } else {
      setSelectedAddOns([...selectedAddOns, id]);
    }
  };

  const updateUnit = (id: string, value: number) => {
    if (value >= 0) {
      setUnits({ ...units, [id]: value });
    }
  };

  return (
    <section id="calculator" className="section-padding relative overflow-hidden" style={{ background: '#0B0F19' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(255,107,0,0.05) 0%, transparent 70%)' }} />
      
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="mb-24">
          <motion.span
            className="text-accent text-sm font-bold uppercase tracking-widest mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Calculator
          </motion.span>
          <motion.h2 
            className="font-extrabold tracking-tighter mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', lineHeight: 1 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Project <span style={{ color: 'rgba(255,255,255,0.25)' }}>Estimator</span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-xl max-w-2xl font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Get an instant estimate for your next big idea.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
          
          {/* Options */}
          <div className="lg:col-span-2 space-y-12">
            {/* Web Dev Options */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center text-lg font-bold">1</div>
                Core Platform
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {websiteTypes.map(web => (
                  <button
                    key={web.id}
                    onClick={() => setSelectedWeb(web.id)}
                    className={`p-6 rounded-3xl text-left border transition-all duration-300 relative overflow-hidden group ${
                      selectedWeb === web.id 
                        ? 'border-accent bg-accent/5 shadow-[0_0_30px_rgba(255,107,0,0.1)]' 
                        : 'border-white/5 glass hover:bg-white/5 hover:border-white/10'
                    }`}
                  >
                    <div className="font-bold text-xl mb-2">{web.name}</div>
                    <div className="text-gray-400">
                      {web.price > 0 ? `₹${web.price.toLocaleString()}` : 'Free'}
                    </div>
                    {selectedWeb === web.id && (
                      <div className="absolute top-6 right-6 text-accent">
                        <Check size={24} />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Add-ons & Unit Services */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center text-lg font-bold">2</div>
                Growth Add-ons
              </h3>
              
              <div className="space-y-4">
                {/* Subscription Add-ons */}
                {addOns.map(addon => (
                  <button
                    key={addon.id}
                    onClick={() => toggleAddOn(addon.id)}
                    className={`w-full p-6 rounded-3xl text-left border transition-all duration-300 flex items-center justify-between ${
                      selectedAddOns.includes(addon.id)
                        ? 'border-secondary bg-secondary/5 shadow-[0_0_30px_rgba(124,58,237,0.1)]' 
                        : 'border-white/5 glass hover:bg-white/5 hover:border-white/10'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-xl mb-1">{addon.name}</div>
                      <div className="text-gray-400">₹{addon.price.toLocaleString()}</div>
                    </div>
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${selectedAddOns.includes(addon.id) ? 'border-secondary bg-secondary text-white' : 'border-white/20 text-transparent'}`}>
                      <Check size={16} />
                    </div>
                  </button>
                ))}

                {/* Unit Services */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {unitServices.map(srv => (
                    <div key={srv.id} className="glass p-6 rounded-3xl border border-white/5 flex flex-col hover:border-white/10 transition-colors">
                      <div className="font-bold text-xl mb-1">{srv.name}</div>
                      <div className="text-gray-400 mb-6">₹{srv.pricePerUnit} / {srv.label.slice(0, -1)}</div>
                      
                      <div className="mt-auto flex items-center justify-between bg-black/40 rounded-2xl p-2 border border-white/5">
                        <button 
                          onClick={() => updateUnit(srv.id, units[srv.id] - 1)}
                          className="w-12 h-12 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center font-bold text-2xl transition-colors"
                        >-</button>
                        <span className="font-bold text-2xl w-12 text-center">{units[srv.id]}</span>
                        <button 
                          onClick={() => updateUnit(srv.id, units[srv.id] + 1)}
                          className="w-12 h-12 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center font-bold text-2xl transition-colors"
                        >+</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sticky Result Panel */}
          <div className="relative">
            <motion.div 
              className="sticky top-32 glass p-10 rounded-[2.5rem] border border-accent/20 shadow-2xl shadow-accent/5 flex flex-col overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="absolute -top-10 -right-10 text-white/5 pointer-events-none transform rotate-12">
                <CalcIcon size={200} strokeWidth={1} />
              </div>
              
              <h3 className="text-2xl font-bold mb-10 relative z-10 text-gray-300 uppercase tracking-widest">Summary</h3>
              
              <div className="space-y-6 mb-12 flex-grow relative z-10">
                <div className="flex justify-between items-start text-lg">
                  <span className="text-gray-400 max-w-[60%] leading-snug">{websiteTypes.find(w => w.id === selectedWeb)?.name}</span>
                  <span className="font-bold text-white whitespace-nowrap">₹{websiteTypes.find(w => w.id === selectedWeb)?.price.toLocaleString()}</span>
                </div>
                
                {selectedAddOns.map(id => {
                  const addon = addOns.find(a => a.id === id);
                  return (
                    <div key={id} className="flex justify-between items-start text-lg">
                      <span className="text-gray-400 max-w-[60%] leading-snug">{addon?.name}</span>
                      <span className="font-bold text-white whitespace-nowrap">₹{addon?.price.toLocaleString()}</span>
                    </div>
                  );
                })}
                
                {unitServices.map(srv => {
                  if (units[srv.id] > 0) {
                    return (
                      <div key={srv.id} className="flex justify-between items-start text-lg">
                        <span className="text-gray-400 max-w-[60%] leading-snug">{units[srv.id]}x {srv.label}</span>
                        <span className="font-bold text-white whitespace-nowrap">₹{(units[srv.id] * srv.pricePerUnit).toLocaleString()}</span>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>

              <div className="border-t border-white/10 pt-8 mb-8 relative z-10">
                <div className="flex flex-col mb-6">
                  <span className="text-gray-400 mb-2 uppercase tracking-widest text-sm font-bold">Total Investment</span>
                  <motion.div 
                    key={totalCost}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#ff954d] tracking-tighter"
                  >
                    ₹{totalCost.toLocaleString()}
                  </motion.div>
                </div>
                <div className="flex items-center gap-3 text-lg text-gray-300 bg-white/5 p-4 rounded-2xl border border-white/5">
                  <Clock size={20} className="text-secondary"/>
                  <span className="font-medium">{timeline}</span>
                </div>
              </div>

              <a 
                href={`https://wa.me/917010325350?text=Hi LaunchX Studio, I used your calculator and my estimated project cost is ₹${totalCost.toLocaleString()}. Let's discuss.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white hover:bg-gray-100 text-black py-5 rounded-full font-bold transition-all text-center hover:scale-105 text-lg relative z-10 flex justify-center items-center gap-2"
              >
                Send to WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
