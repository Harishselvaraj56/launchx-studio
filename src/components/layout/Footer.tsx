import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const Instagram = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const Linkedin = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Calculator', path: '/calculator' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', paddingTop: '5rem', paddingBottom: '2.5rem', position: 'relative', zIndex: 1 }}>
      <div className="container mx-auto" style={{ maxWidth: '1400px' }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              to="/"
              style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', marginBottom: '1.25rem' }}
            >
              <span style={{ fontSize: '1.6rem', fontWeight: 950, letterSpacing: '-0.03em', color: '#111827' }}>LaunchX</span>
              <span style={{ fontSize: '1.6rem', fontWeight: 950, letterSpacing: '-0.03em', color: '#FF6B00', marginLeft: '4px' }}>Studio</span>
            </Link>
            <p style={{ color: '#6B7280', fontSize: '0.975rem', lineHeight: 1.7, maxWidth: '340px', marginBottom: '2rem' }}>
              We build premium, conversion-focused websites and AI automation setups that turn visitors into high-paying customers.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { href: 'https://www.instagram.com/launchxstudio/', icon: <Instagram /> },
                { href: 'https://www.linkedin.com/in/harish-selvaraj-919623344/', icon: <Linkedin /> },
                { href: 'mailto:harishselvaraj56@gmail.com', icon: <Mail size={20} /> },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer"
                  style={{
                    width: '44px', height: '44px', borderRadius: '50%',
                    border: '1px solid rgba(0,0,0,0.08)',
                    background: 'rgba(0,0,0,0.02)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#6B7280', textDecoration: 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#111827'; e.currentTarget.style.borderColor = '#FF7A00'; e.currentTarget.style.background = 'rgba(255,122,0,0.1)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#6B7280'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'; e.currentTarget.style.background = 'rgba(0,0,0,0.02)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
 
          {/* Navigation */}
          <div>
            <h4 style={{ color: '#111827', fontWeight: 800, marginBottom: '1.75rem', fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {quickLinks.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    style={{ color: '#6B7280', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.25s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#FF7A00')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
 
          {/* Contact */}
          <div>
            <h4 style={{ color: '#111827', fontWeight: 800, marginBottom: '1.75rem', fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <a href="tel:+917010325350" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#6B7280', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.25s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#111827')} onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}>
                <Phone size={16} style={{ color: '#FF7A00' }} /> +91 7010325350
              </a>
              <a href="mailto:harishselvaraj56@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#6B7280', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.25s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#111827')} onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}>
                <Mail size={16} style={{ color: '#FF7A00' }} /> harishselvaraj56@gmail.com
              </a>
              <a href="https://www.instagram.com/launchxstudio/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#6B7280', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.25s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#111827')} onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}>
                <Instagram size={16} /> @launchxstudio
              </a>
            </div>
          </div>
        </div>
 
        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(0, 0, 0, 0.06)', paddingTop: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.25rem' }}>
          <p style={{ color: '#9CA3AF', fontSize: '0.85rem' }}>
            © {year} LaunchX Studio. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/faq" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color = '#FF7A00')} onMouseLeave={e => (e.currentTarget.style.color = '#9CA3AF')}>FAQ</Link>
            <Link to="/contact" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color = '#FF7A00')} onMouseLeave={e => (e.currentTarget.style.color = '#9CA3AF')}>Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
