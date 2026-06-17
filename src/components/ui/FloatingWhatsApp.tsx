import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <>
      <style>{`
        @keyframes waPulse {
          0%   { box-shadow: 0 0 0 0 rgba(37,211,102,0.5), 0 4px 16px rgba(0,0,0,0.15); }
          60%  { box-shadow: 0 0 0 16px rgba(37,211,102,0), 0 4px 16px rgba(0,0,0,0.15); }
          100% { box-shadow: 0 0 0 0 rgba(37,211,102,0), 0 4px 16px rgba(0,0,0,0.15); }
        }
        #wa-fab {
          animation: waPulse 5s ease-out infinite;
          transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1);
        }
        #wa-fab:hover { transform: scale(1.12); }
        #wa-fab:active { transform: scale(0.95); }
      `}</style>

      <a
        href="https://wa.me/917010325350"
        target="_blank"
        rel="noopener noreferrer"
        id="wa-fab"
        aria-label="Chat on WhatsApp"
        style={{
          position: 'fixed',
          right: '20px',
          bottom: 'max(20px, env(safe-area-inset-bottom, 20px))',
          zIndex: 9999,
          width: 'clamp(52px, 8vw, 60px)',
          height: 'clamp(52px, 8vw, 60px)',
          minWidth: '48px',
          minHeight: '48px',
          backgroundColor: '#25D366',
          color: '#FFFFFF',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
          cursor: 'pointer',
        }}
      >
        <MessageCircle
          strokeWidth={2}
          style={{ width: 'clamp(24px, 4vw, 30px)', height: 'clamp(24px, 4vw, 30px)' }}
        />
      </a>
    </>
  );
};

export default FloatingWhatsApp;

