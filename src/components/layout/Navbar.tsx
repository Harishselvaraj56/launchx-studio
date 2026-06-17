import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

type PageKey = 'home' | 'services' | 'portfolio' | 'pricing' | 'calculator' | 'faq' | 'contact';

const navLinks: { name: string; path: string; page: PageKey }[] = [
  { name: 'Home', path: '/', page: 'home' },
  { name: 'Services', path: '/services', page: 'services' },
  { name: 'Portfolio', path: '/portfolio', page: 'portfolio' },
  { name: 'Pricing', path: '/pricing', page: 'pricing' },
  { name: 'Calculator', path: '/calculator', page: 'calculator' },
  { name: 'FAQ', path: '/faq', page: 'faq' },
];

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMobileOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const getPageKey = (path: string): PageKey => {
    if (path === '/') return 'home';
    const clean = path.replace('/', '').split('/')[0];
    return clean as PageKey;
  };

  const currentPage = getPageKey(location.pathname);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          height: '80px',
          zIndex: 50,
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          background: scrolled ? 'rgba(255, 255, 255, 0.82)' : 'rgba(249, 250, 251, 0)',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0, 0, 0, 0.07)' : '1px solid transparent',
          boxShadow: scrolled ? '0 2px 20px rgba(0, 0, 0, 0.07)' : 'none',
        }}
      >
        <div
          className="container mx-auto h-full flex items-center justify-between"
          style={{ maxWidth: '1400px' }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '2px' }}
          >
            <span style={{ fontSize: '1.35rem', fontWeight: 900, letterSpacing: '-0.03em', color: '#111827' }}>
              LaunchX
            </span>
            <span style={{ fontSize: '1.35rem', fontWeight: 900, letterSpacing: '-0.03em', color: '#FF6B00', marginLeft: '3px' }}>
              Studio
            </span>
          </Link>
 
          {/* Desktop nav — visible at ≥1024px */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.page}
                to={link.path}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: currentPage === link.page ? '#111827' : '#6B7280',
                  textDecoration: 'none',
                  letterSpacing: '0.02em',
                  transition: 'color 0.3s ease',
                  position: 'relative',
                  padding: '8px 4px',
                }}
                onMouseEnter={e => { if (currentPage !== link.page) e.currentTarget.style.color = '#FF7A00'; }}
                onMouseLeave={e => { if (currentPage !== link.page) e.currentTarget.style.color = '#6B7280'; }}
              >
                {link.name}
                {currentPage === link.page && (
                  <motion.div
                    layoutId="nav-underline"
                    style={{
                      position: 'absolute',
                      bottom: 0, left: 0, right: 0,
                      height: '2px',
                      background: '#FF6B00',
                      borderRadius: '2px',
                    }}
                  />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="lx-btn-primary"
              style={{ fontSize: '0.85rem', padding: '11px 22px' }}
            >
              <Calendar size={14} /> Book Consultation
            </Link>
          </nav>
 
          {/* Mobile toggle — visible only below 1024px */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: 'none', border: 'none', color: '#111827', cursor: 'pointer', padding: '8px', minWidth: '48px', minHeight: '48px' }}
            className="flex items-center justify-center lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>
 
      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed', inset: 0, zIndex: 49,
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: '0.25rem',
              overflowY: 'auto',
              padding: '80px 24px 40px',
            }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'absolute', top: '20px', right: '16px',
                background: 'none', border: 'none', color: '#111827',
                cursor: 'pointer', padding: '10px',
                minWidth: '48px', minHeight: '48px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: '12px',
              }}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
            {navLinks.map((link, i) => (
              <motion.div
                key={link.page}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                style={{ width: '100%', textAlign: 'center' }}
              >
                <Link
                  to={link.path}
                  style={{
                    fontSize: 'clamp(1.6rem, 6vw, 2.2rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    color: currentPage === link.page ? '#FF7A00' : '#111827',
                    textDecoration: 'none',
                    display: 'block',
                    padding: '14px 24px',
                    minHeight: '64px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '16px',
                    transition: 'background 0.2s ease',
                  }}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.05 }}
              style={{ marginTop: '1.5rem' }}
            >
              <Link
                to="/contact"
                style={{
                  background: 'linear-gradient(135deg, #FF7A00 0%, #ff9533 100%)',
                  color: '#fff',
                  padding: '16px 40px', borderRadius: '100px',
                  fontWeight: 700, fontSize: '1.1rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 10px 30px rgba(255, 122, 0, 0.3)',
                  minHeight: '56px',
                }}
              >
                <Calendar size={18} /> Book Consultation
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
