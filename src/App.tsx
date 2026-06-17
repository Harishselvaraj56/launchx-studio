import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';
import GravityBackground from './components/ui/GravityBackground';
import PreFooterCTA from './components/sections/PreFooterCTA';
import PageLoader from './components/ui/PageLoader';

import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import Calculator from './pages/Calculator';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

// ─── SPA Route Redirect Components ──────────────────────────────────────────────
const OwnerPortfolioRedirect = () => {
  useEffect(() => {
    window.location.replace('https://harishh.neocities.org/portfolio/port/p');
  }, []);
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#050505', color: '#fff' }}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Redirecting to Owner Portfolio...</h2>
        <div className="lx-eyebrow" style={{ color: '#FF6B00' }}>Please wait</div>
      </div>
    </div>
  );
};

const ClientPortfolioRedirect = () => {
  useEffect(() => {
    window.location.replace('https://portfolio-benzzz.netlify.app/');
  }, []);
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#050505', color: '#fff' }}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Redirecting to Client Portfolio...</h2>
        <div className="lx-eyebrow" style={{ color: '#FF6B00' }}>Please wait</div>
      </div>
    </div>
  );
};

// ─── App Content Wrapper (with access to router hooks) ─────────────────────────
const AppContent = () => {
  const location = useLocation();

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen" style={{ background: 'transparent', position: 'relative' }}>
      {/* ── Global Gravity & Particles Background ── */}
      <GravityBackground />

      <Navbar />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as any }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Redirect support for specific subroutes requested by user */}
              <Route path="/portfolio/owner" element={<OwnerPortfolioRedirect />} />
              <Route path="/portfolio/client" element={<ClientPortfolioRedirect />} />
              
              {/* Fallback route redirect */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <PreFooterCTA />
      <Footer />
    </div>
  );
};

// ─── Main App Component ──────────────────────────────────────────────────────────────────
function App() {
  const [loaded, setLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <BrowserRouter>
      {/* ✨ Premium Loader — only on hard refresh */}
      {!loaded && <PageLoader onComplete={() => setLoaded(true)} />}

      {/* Scroll Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60]"
        style={{ height: '2px', scaleX, background: '#FF6B00', transformOrigin: 'left' }}
      />

      {/* Main content is always mounted – navbar appears instantly */}
      <AppContent />

      <FloatingWhatsApp />
      {/* WhatsApp tooltip — appears on hover via CSS */}
      <div className="wa-fab-tooltip">Chat on WhatsApp</div>
    </BrowserRouter>
  );
}

export default App;
