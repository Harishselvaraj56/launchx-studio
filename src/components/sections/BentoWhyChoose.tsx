import { motion } from 'framer-motion';
import { Zap, Shield, Smartphone, Globe } from 'lucide-react';

const BentoWhyChoose = () => {
  return (
    <section className="section-padding relative" style={{ background: '#070B14', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 text-center">
          <motion.span
            className="text-accent text-sm font-bold uppercase tracking-widest mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-extrabold tracking-tighter"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', lineHeight: 1 }}
          >
            Why Choose <span className="text-gradient">LaunchX</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">
          
          {/* Large Item */}
          <motion.div 
            className="md:col-span-2 lg:col-span-2 row-span-2 glass-card p-10 flex flex-col justify-end relative overflow-hidden group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-10 right-10 w-32 h-32 bg-accent/20 rounded-full blur-[50px] group-hover:scale-150 transition-transform duration-700" />
            <Globe className="text-accent mb-6 w-16 h-16" />
            <h3 className="text-4xl font-bold mb-4 relative z-10">Global Reach, <br/>Local Excellence.</h3>
            <p className="text-gray-400 text-lg relative z-10">We build digital products that transcend borders, optimized for a global audience while maintaining meticulous attention to detail.</p>
          </motion.div>

          {/* Square Item 1 */}
          <motion.div 
            className="glass-card p-8 flex flex-col justify-between group overflow-hidden relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
             <div className="absolute -right-10 -top-10 w-32 h-32 bg-secondary/20 rounded-full blur-[40px] group-hover:scale-150 transition-transform duration-700" />
            <Zap className="text-secondary w-10 h-10" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Lightning Fast</h3>
              <p className="text-gray-400">Optimized architectures that load instantly and perform flawlessly.</p>
            </div>
          </motion.div>

          {/* Square Item 2 */}
          <motion.div 
            className="glass-card p-8 flex flex-col justify-between group overflow-hidden relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-blue-500/20 rounded-full blur-[40px] group-hover:scale-150 transition-transform duration-700" />
            <Shield className="text-blue-400 w-10 h-10" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Rock Solid</h3>
              <p className="text-gray-400">Enterprise-grade security and scalable infrastructure you can trust.</p>
            </div>
          </motion.div>

          {/* Wide Item */}
          <motion.div 
            className="md:col-span-2 lg:col-span-2 glass-card p-10 flex items-center justify-between group overflow-hidden relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 max-w-sm">
              <Smartphone className="text-white w-12 h-12 mb-6" />
              <h3 className="text-3xl font-bold mb-2">100% Responsive</h3>
              <p className="text-gray-400">Pixel-perfect designs that adapt beautifully to any device or screen size.</p>
            </div>
            <div className="hidden lg:block relative z-10 w-48 h-full bg-white/5 rounded-2xl border border-white/10 p-2 shadow-2xl transform rotate-12 group-hover:rotate-6 transition-transform duration-500">
               <div className="w-full h-full bg-[#05080f] rounded-xl overflow-hidden relative">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-white/20 rounded-full" />
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BentoWhyChoose;
