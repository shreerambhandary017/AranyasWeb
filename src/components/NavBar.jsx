import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import theme from '../theme/theme';
import { textures } from '../assets';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contact' }
];

const NavBar = () => {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > 120);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="navbar"
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        padding: solid ? '18px 6vw' : '28px 6vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: solid ? 'rgba(4, 13, 9, 0.9)' : 'transparent',
        backdropFilter: solid ? 'blur(14px)' : 'none',
        borderBottom: solid ? '1px solid rgba(214, 178, 99, 0.22)' : 'none',
        transition: 'all 0.5s ease'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img
          src={textures.logo}
          alt="Aranyas logo"
          style={{
            width: 52,
            height: 52,
            objectFit: 'contain',
            filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.35))'
          }}
          loading="lazy"
        />
        <div>
          <p style={{ fontFamily: theme.typography.serif, fontSize: '1rem', letterSpacing: '0.35em' }}>ARANYAS</p>
          <small style={{ color: theme.colors.stone, fontSize: '0.85rem' }}>Nature&apos;s Way of Packaging</small>
        </div>
      </div>
      <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              color: '#f5f0e6',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontSize: '0.85rem',
              position: 'relative'
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          style={{
            border: `1px solid ${theme.colors.accent}`,
            borderRadius: 999,
            padding: '12px 22px',
            textTransform: 'uppercase',
            fontSize: '0.8rem',
            letterSpacing: '0.18em',
            color: theme.colors.cream
          }}
        >
          Connect
        </a>
      </nav>
    </motion.header>
  );
};

export default NavBar;

