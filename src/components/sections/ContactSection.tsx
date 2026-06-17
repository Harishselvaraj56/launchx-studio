import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi LaunchX Studio, I am ${formData.name}.%0A%0A*Email:* ${formData.email}%0A%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/917010325350?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden" style={{ background: '#070B14', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">
              Let's build <br/>
              <span className="text-gradient">something</span> <br/>
              <span className="italic font-light text-gray-500">amazing.</span>
            </h2>
            <p className="text-2xl text-gray-400 font-light mb-12 max-w-lg">
              Fill out the form to start a conversation. We'll get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <a href="tel:+917010325350" className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                  <Phone size={24} className="text-white" />
                </div>
                <span className="text-2xl font-light">+91 7010325350</span>
              </a>
              <a href="mailto:harishselvaraj56@gmail.com" className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary transition-all duration-300">
                  <Mail size={24} className="text-white" />
                </div>
                <span className="text-2xl font-light">harishselvaraj56@gmail.com</span>
              </a>
              <a href="https://www.instagram.com/launchxstudio/" target="_blank" rel="noreferrer" className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center">
                  <span className="text-2xl font-light text-white">IG</span>
                </div>
                <span className="text-2xl font-light text-gray-400 group-hover:text-white transition-colors">@launchxstudio</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-10 md:p-14"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="focus-glow w-full bg-transparent border-b-2 border-white/20 px-0 py-4 text-2xl text-white placeholder-gray-600 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="focus-glow w-full bg-transparent border-b-2 border-white/20 px-0 py-4 text-2xl text-white placeholder-gray-600 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Email Address"
                />
              </div>
              <div>
                <textarea 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="focus-glow w-full bg-transparent border-b-2 border-white/20 px-0 py-4 text-2xl text-white placeholder-gray-600 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="group relative inline-flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold text-lg transition-all hover:scale-105 overflow-hidden w-full md:w-auto"
              >
                <span className="relative z-10">Send Message</span>
                <Send size={20} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
