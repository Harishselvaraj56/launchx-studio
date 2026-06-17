import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Founder = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: '#070B14' }}
    >
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Editorial Image */}
          <motion.div 
            className="w-full lg:w-5/12 aspect-[3/4] relative overflow-hidden rounded-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div className="w-full h-[120%] absolute -top-[10%]" style={{ y: imageY }}>
               {/* High-end placeholder image representing a founder/creative director */}
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Harish Selvaraj - Founder" 
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              />
            </motion.div>
            <div className="absolute inset-0 border border-white/10 pointer-events-none" />
            <div className="absolute bottom-6 left-6 mix-blend-difference">
              <p className="text-white font-bold tracking-widest uppercase text-sm">Harish Selvaraj</p>
              <p className="text-gray-300 font-light text-xs tracking-wider">Founder & Creative Director</p>
            </div>
          </motion.div>

          {/* Storytelling Text */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-10 leading-tight">
                "We don't build generic websites. We engineer <span className="text-gradient">digital assets</span> that scale businesses."
              </h2>
              
              <div className="space-y-6 text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
                <p>
                  When I started LaunchX Studio, I noticed a frustrating trend: businesses were spending thousands on websites that looked exactly like their competitors and did nothing to actually drive revenue.
                </p>
                <p>
                  A digital presence should not be an expense—it should be your hardest-working employee. That's why we obsess over performance, user psychology, and premium aesthetics. We combine cutting-edge technology with Awwwards-level design to create experiences that are impossible to ignore.
                </p>
                <p className="font-medium text-white pt-4">
                  Let's build something extraordinary together.
                </p>
              </div>

              {/* Signature / Mark */}
              <div className="mt-12 text-3xl font-serif italic text-accent opacity-80">
                Harish Selvaraj
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Founder;
