import { motion } from 'framer-motion';

const stats = [
  { value: '8+', label: 'Projects Delivered' },
  { value: '100%', label: 'Responsive Design' },
  { value: 'Fast', label: 'Delivery Time' },
  { value: '100%', label: 'Client Satisfaction' },
];

const BrandsStats = () => {
  return (
    <section className="section-padding border-y border-white/5 bg-[#03050a] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center text-center group"
            >
              <div className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter group-hover:text-accent transition-colors duration-500">
                {stat.value}
              </div>
              <div className="text-gray-400 font-medium tracking-wide text-sm uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsStats;
