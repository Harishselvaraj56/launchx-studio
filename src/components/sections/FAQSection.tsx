import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How long does website development take?',
    answer: 'The timeline varies depending on the complexity of the project. A standard landing page can take 1-2 weeks, while a full e-commerce website might take 3-4 weeks. We always provide a clear timeline before starting any project.',
  },
  {
    question: 'Do you provide hosting support?',
    answer: 'Yes, we provide end-to-end solutions including deployment and hosting setup. For premium packages, we also offer 1-3 months of free maintenance and support.',
  },
  {
    question: 'Can you redesign existing websites?',
    answer: 'Absolutely. We can take your existing website and completely revamp its design, improve its performance, and upgrade its technology stack to modern standards.',
  },
  {
    question: 'Do you provide SEO?',
    answer: 'Yes, basic on-page SEO is included in all our website packages. For advanced SEO (keyword research, ongoing content strategy, backlinking), we offer specialized digital growth packages.',
  },
  {
    question: 'How does payment work?',
    answer: 'We typically require a 50% deposit upfront to begin work, with the remaining 50% due upon project completion and your final approval. For monthly retainers like social media management, payments are made at the beginning of each cycle.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding relative overflow-hidden" style={{ background: '#0B0F19' }}>
      <div className="absolute top-0 right-0 pointer-events-none" style={{ width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(255,107,0,0.05) 0%, transparent 70%)' }} />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-32">
        <div className="lg:w-1/3">
          <motion.span
            className="text-accent text-sm font-bold uppercase tracking-widest mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            FAQ
          </motion.span>
          <motion.h2 
            className="font-extrabold tracking-tighter mb-8"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', lineHeight: 1 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Got <span style={{ color: 'rgba(255,255,255,0.25)' }}>Questions?</span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Everything you need to know about working with LaunchX Studio.
          </motion.p>
        </div>

        <div className="lg:w-2/3 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-white/10"
            >
              <button
                className="w-full py-8 text-left flex justify-between items-center focus:outline-none group"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`text-2xl font-bold transition-colors ${openIndex === index ? 'text-accent' : 'text-white group-hover:text-gray-300'}`}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-accent shrink-0 ml-6"
                >
                  <ChevronDown size={32} strokeWidth={1.5} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 text-xl text-gray-400 font-light leading-relaxed pr-12">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
