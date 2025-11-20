import theme from '../theme/theme';
import { textures } from '../assets';

const primaryLinks = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contact' }
];

const resources = [
  { label: 'Sustainability Report', href: 'https://www.unep.org/resources/report/global-environment-outlook-6' },
  { label: 'Packaging Insights', href: 'https://www.mckinsey.com/industries/paper-forest-products-and-packaging/our-insights' },
  { label: 'Circular Economy', href: 'https://ellenmacarthurfoundation.org/topics/circular-economy-introduction/overview' },
  { label: 'Investor Deck', href: 'https://www.canva.com/design/DAFvJpODcVE' }
];

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/aranyasprivate/',
    icon: (
      <path d="M5 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-2 6h4v12H3V9Zm7 0h3.7l.3 1.8h.1c1-1.4 2.5-2.1 4.3-2.1 3 0 5.6 2 5.6 6.5V21h-4v-5.1c0-1.9-.7-3.2-2.3-3.2-1.2 0-1.9.8-2.2 1.6-.1.3-.1.7-.1 1.1V21h-4V9Z" />
    )
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/aranyas.global?igsh=MWR5NmkyZW9lMW1vNA==',
    icon: (
      <path d="M8 3h8c3 0 5 2 5 5v8c0 3-2 5-5 5H8c-3 0-5-2-5-5V8c0-3 2-5 5-5Zm0 2c-1.7 0-3 1.3-3 3v8c0 1.7 1.3 3 3 3h8c1.7 0 3-1.3 3-3V8c0-1.7-1.3-3-3-3H8Zm8.2 2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
    )
  },
  {
    label: 'Behance',
    href: 'https://www.behance.net/aranyaspk',
    icon: (
      <path d="M4 9h4.3c1.8 0 3.1 1.2 3.1 2.7 0 1-.6 1.9-1.6 2.3 1.3.3 2.2 1.4 2.2 2.7C12 18.5 10.6 20 8.4 20H4V9Zm3.9 3.8c.6 0 1-.4 1-1s-.5-1-1-1H7v2h.9Zm.2 4.5c.6 0 1-.5 1-1.1s-.5-1.1-1-1.1H7v2.2h1.1ZM15 9h7v1.8h-7V9Zm-.1 4.8c0-2.4 1.7-4.2 4.1-4.2 2.3 0 4 1.6 4 4.2v.7H18c.2.9.9 1.6 2.2 1.6.9 0 1.7-.3 2.3-.8l1.1 1.5c-.9.8-2.2 1.3-3.7 1.3-2.6 0-4.9-1.6-4.9-4.3Zm4.1-2.2c-.9 0-1.5.5-1.7 1.3h3.4c-.1-.9-.7-1.3-1.7-1.3Z" />
    )
  }
];

const Footer = () => (
  <footer
    style={{
      padding: '88px 6vw 36px',
      background: `radial-gradient(circle at top, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 55%, #030805 100%)`,
      color: theme.colors.cream,
      borderTop: `1px solid ${theme.colors.accent}33`,
      position: 'relative',
      overflow: 'hidden'
    }}
  >
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        background: `radial-gradient(1200px circle at 20% -10%, ${theme.colors.accent}11, transparent)`
      }}
    />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '32px',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: 48,
          borderBottom: `1px solid ${theme.colors.stone}33`
        }}
      >
        <div style={{ maxWidth: 520 }}>
          <p
            style={{
              fontFamily: theme.typography.serif,
              fontSize: '2.2rem',
              marginBottom: 12,
              letterSpacing: '0.12em'
            }}
          >
            Crafted packaging for conscious luxury brands.
          </p>
          <p
            style={{
              color: theme.colors.stone,
              fontFamily: theme.typography.sans,
              lineHeight: 1.6
            }}
          >
            We blend natural fibers, timeless design language, and measurable sustainability
            data to help founders launch covetable products without compromising the planet.
          </p>
        </div>
        <div
          style={{
            background: `${theme.colors.primary}aa`,
            padding: '28px 32px',
            borderRadius: 20,
            border: `1px solid ${theme.colors.accent}33`,
            minWidth: 280,
            backdropFilter: 'blur(14px)'
          }}
        >
          <p style={{ margin: 0, fontSize: '0.9rem', letterSpacing: '0.3em', color: theme.colors.stone }}>
            concierge
          </p>
          <p style={{ marginTop: 10, fontSize: '1.25rem', fontFamily: theme.typography.serif }}>
            Book a private material lab tour
          </p>
          <a
            href="mailto:contactus@aranyasglobal.com?subject=Material%20Lab%20Tour"
            style={{
              display: 'inline-flex',
              marginTop: 12,
              alignItems: 'center',
              gap: 8,
              padding: '12px 22px',
              borderRadius: 999,
              border: `1px solid ${theme.colors.accent}`,
              textDecoration: 'none',
              color: theme.colors.cream,
              letterSpacing: '0.12em',
              fontSize: '0.85rem'
            }}
          >
            Request access →
          </a>
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '32px',
          padding: '48px 0',
          borderBottom: `1px solid ${theme.colors.stone}22`
        }}
      >
        <div>
          <p style={columnTitleStyle}>Explore</p>
          <div style={columnListStyle}>
            {primaryLinks.map((link) => (
              <a key={link.href} href={link.href} style={footerLinkStyle}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p style={columnTitleStyle}>Resources</p>
          <div style={columnListStyle}>
            {resources.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer" style={footerLinkStyle}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p style={columnTitleStyle}>Connect</p>
          <div style={columnListStyle}>
            <a href="mailto:contactus@aranyasglobal.com" style={footerLinkStyle}>
              contactus@aranyasglobal.com
            </a>
            <a href="tel:+917760703887" style={footerLinkStyle}>
              +91 7760703887
            </a>
            <a
              href="https://maps.app.goo.gl/4cPrL3pMarWAmx3R9"
              target="_blank"
              rel="noreferrer"
              style={footerLinkStyle}
            >
              Bhandary’s Estate, Kuriyala, Bantwal, 574211
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '32px 0 16px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <img
            src={textures.logo}
            alt="Aranyas logo"
            style={{
              width: 62,
              height: 62,
              objectFit: 'contain',
              filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.55))'
            }}
            loading="lazy"
          />
          <div>
            <p style={{ margin: 0, letterSpacing: '0.35em' }}>ARANYAS</p>
            <small style={{ color: theme.colors.stone, letterSpacing: '0.25em' }}>
              Nature&apos;s Way of Packaging
            </small>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 14 }}>
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              style={footerIconLinkStyle}
              aria-label={social.label}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={theme.colors.cream} strokeWidth="0.8">
                {social.icon}
              </svg>
            </a>
          ))}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 16,
          alignItems: 'center',
          justifyContent: 'space-between',
          color: theme.colors.stone,
          fontSize: '0.9rem'
        }}
      >
        <p style={{ margin: 0, letterSpacing: '0.16em' }}>
          © {new Date().getFullYear()} Aranyas Private Limited. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          <a
            href="https://www.privacypolicies.com/live/0a51cf7c-9fbd-4e9d-a49a-1921da1057c5"
            target="_blank"
            rel="noreferrer"
            style={footerMiniLinkStyle}
          >
            Privacy Policy
          </a>
          <a
            href="https://www.termsfeed.com/live/3a62a330-823a-4e09-b90e-1a3bfa2a343b"
            target="_blank"
            rel="noreferrer"
            style={footerMiniLinkStyle}
          >
            Terms of Service
          </a>
          <a
            href="https://www.linkedin.com/company/aranyasprivate/jobs/"
            target="_blank"
            rel="noreferrer"
            style={footerMiniLinkStyle}
          >
            Careers
          </a>
        </div>
      </div>
    </div>
  </footer>
);

const columnTitleStyle = {
  letterSpacing: '0.4em',
  fontSize: '0.8rem',
  textTransform: 'uppercase',
  color: theme.colors.stone,
  marginBottom: 12
};

const columnListStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 12
};

const footerLinkStyle = {
  color: theme.colors.cream,
  textDecoration: 'none',
  fontFamily: theme.typography.sans,
  fontSize: '1rem',
  letterSpacing: '0.04em',
  opacity: 0.8
};

const footerMiniLinkStyle = {
  color: theme.colors.stone,
  textDecoration: 'none',
  letterSpacing: '0.1em'
};

const footerIconLinkStyle = {
  width: 44,
  height: 44,
  borderRadius: '999px',
  border: `1px solid ${theme.colors.stone}55`,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `${theme.colors.primary}aa`,
  backdropFilter: 'blur(8px)'
};

export default Footer;

