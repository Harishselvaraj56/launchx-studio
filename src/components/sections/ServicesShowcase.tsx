import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import TextReveal from '../ui/TextReveal';

const services = [
  {
    title: 'Website Development & Landing Pages',
    description: 'We build blazing-fast, visually stunning websites and high-converting landing pages tailored perfectly to your brand. Using modern frameworks, we ensure your site is secure, scalable, and built for the future.',
    tags: ['Website Development', 'Landing Pages', 'React', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'E-Commerce Websites',
    description: 'Convert visitors into customers with highly optimized, beautifully designed online stores. We handle everything from payment gateways to inventory management systems.',
    tags: ['E-Commerce Websites', 'Shopify', 'Custom E-Comm', 'Payment Integration'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Social Media Management',
    description: 'Grow your audience and scale your revenue with data-driven social media management and highly engaging content creation designed specifically for your target demographic.',
    tags: ['Social Media Management', 'Content Strategy', 'Growth', 'Analytics'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Video & Visual Production',
    description: 'Capture attention with high-end video shooting, professional reel editing, and stunning poster design. We create visual content that stops the scroll.',
    tags: ['Video Editing', 'Video Shooting', 'Poster Design', 'Reel Editing'],
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  }
];

const ServiceRow = ({ service, index }: { service: any, index: number }) => {
  const isEven = index % 2 === 0;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
      {/* Text Content */}
      <motion.div 
        className="flex-1 lg:w-1/2"
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="text-accent text-xl font-bold mb-4 tracking-wider">0{index + 1}</div>
        <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
          <TextReveal text={service.title} />
        </h3>
        <p className="text-xl text-gray-400 leading-relaxed mb-10">
          {service.description}
        </p>
        <div className="flex flex-wrap gap-3">
          {service.tags.map((tag: string, i: number) => (
            <span key={i} className="px-5 py-2 rounded-full border border-white/10 text-sm font-medium text-gray-300">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Image Visual with Parallax */}
      <motion.div 
        className="flex-1 lg:w-1/2 w-full"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative aspect-[4/5] md:aspect-square w-full rounded-[2rem] overflow-hidden group">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
          <motion.img 
            src={service.image} 
            alt={service.title} 
            style={{ y }}
            className="w-full h-[120%] object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out absolute -top-[10%]"
          />
        </div>
      </motion.div>
    </div>
  );
};

const ServicesShowcase = () => {
  return (
    <section id="services" className="section-padding relative" style={{ background: '#0B0F19' }}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-24">
          <motion.span
            className="text-accent text-sm font-bold uppercase tracking-widest mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Services
          </motion.span>
          <h2 
            className="font-extrabold tracking-tighter"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', lineHeight: 1 }}
          >
            <TextReveal text="What We" /> <span style={{ color: 'rgba(255,255,255,0.25)' }}><TextReveal text="Do" delay={0.2} /></span>
          </h2>
        </div>

        <div className="space-y-32 md:space-y-48">
          {services.map((service, index) => (
            <ServiceRow key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
