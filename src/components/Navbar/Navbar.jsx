import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const links = [
  { label: 'About',      href: '#value' },
  { label: 'Curicullum', href: '#curriculum' },
  { label: 'Perks',      href: '#contact' },
  { label: 'Pricing',    href: '#pricing' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScroll = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className={`navbar${scrolled ? ' scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="navbar-inner">
          <div className="navbar-logo bebas-neue-regular">
            dharsan.talks
          </div>

          <ul className="navbar-links">
            {links.map(l => (
              <li key={l.label}>
                <a href={l.href} onClick={e => { e.preventDefault(); handleScroll(l.href); }}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <button className="navbar-cta-btn" onClick={() => handleScroll('#pricing')}>
            Join Now
          </button>

          <div className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
            <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu open"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                onClick={e => { e.preventDefault(); handleScroll(l.href); }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                {l.label}
              </motion.a>
            ))}
            <button className="navbar-cta-btn" style={{ marginTop: '16px' }} onClick={() => { handleScroll('#pricing'); setMenuOpen(false); }}>
              Join Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
