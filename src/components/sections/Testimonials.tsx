import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO, FitLife',
    text: 'LaunchX completely transformed our online presence. The new e-commerce platform doubled our sales in just two months. Absolute professionals.',
  },
  {
    name: 'David Chen',
    role: 'Founder, TechStart',
    text: 'The speed and quality of their work is unmatched. They understood our vision perfectly and delivered a stunning landing page that converts.',
  },
  {
    name: 'Priya Sharma',
    role: 'Marketing Director, Bloom',
    text: 'Their social media strategy is brilliant. We saw a 300% increase in engagement. The reels they edit for us always hit the mark.',
  },
  {
    name: 'Michael Ross',
    role: 'Owner, Local Cafe',
    text: 'Best investment we made for our business. The website is beautiful, fast, and brings in reservations automatically.',
  },
];

const Testimonials = () => {
  // Double the array for seamless infinite scrolling
  const scrollItems = [...testimonials, ...testimonials];

  return (
    <section className="section-padding relative overflow-hidden" style={{ background: '#070B14', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container mx-auto px-6 md:px-12 mb-20 relative z-10">
        <motion.span
          className="text-accent text-sm font-bold uppercase tracking-widest mb-4 block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Testimonials
        </motion.span>
        <motion.h2 
          className="font-extrabold tracking-tighter"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', lineHeight: 1 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Client <span className="text-gradient">Stories</span>
        </motion.h2>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex pb-10">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #070B14, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #070B14, transparent)' }} />
        
        <motion.div 
          className="flex gap-8 px-4"
          animate={{ x: [0, -1920] }} // Adjust based on item width
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {scrollItems.map((item, index) => (
            <div 
              key={index} 
              className="w-[350px] md:w-[450px] glass-card p-10 shrink-0 flex flex-col justify-between"
            >
              <Quote className="text-accent mb-8 w-12 h-12 opacity-50" />
              <p className="text-xl md:text-2xl text-white mb-10 leading-relaxed font-light">"{item.text}"</p>
              <div>
                <h4 className="font-bold text-lg">{item.name}</h4>
                <p className="text-gray-500 text-sm">{item.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
