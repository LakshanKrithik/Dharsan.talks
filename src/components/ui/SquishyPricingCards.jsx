import { motion } from 'framer-motion';
import './SquishyPricingCards.css';

export const PricingCard = ({ label, monthlyPrice, description, features, cta, backgroundClass, BGComponent, contactHref }) => {
  return (
    <motion.div
      whileHover="hover"
      transition={{ duration: 1, ease: "backInOut" }}
      variants={{ hover: { scale: 1.05 } }}
      className={`squishy-card ${backgroundClass}`}
    >
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', flex: 1, height: '100%' }}>
        <span className="squishy-label">
          {label}
        </span>
        
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{ hover: { scale: 1 } }}
          transition={{ duration: 1, ease: "backInOut" }}
          className="squishy-price"
        >
          {monthlyPrice}
        </motion.span>
        
        <p className="squishy-desc">{description}</p>
        
        <ul className="squishy-features">
          {features.map((f, idx) => (
            <li key={idx}>
              <span style={{ color: backgroundClass === 'premium' ? '#111' : 'var(--accent)', fontWeight: 800 }}>✓</span> 
              {f}
            </li>
          ))}
        </ul>

        {backgroundClass === 'premium' && (
            <span style={{ fontSize: '0.75rem', color: 'rgba(0,0,0,0.5)', marginTop: '-8px', marginBottom: '16px' }}>
                * Restricted intake subject to review.
            </span>
        )}

        <a href={contactHref} style={{ width: '100%', textDecoration: 'none', marginTop: 'auto' }}>
          <button className="squishy-btn">
            {cta}
          </button>
        </a>
      </div>
      
      <BGComponent />
    </motion.div>
  );
};

export const BGComponent1 = () => (
  <motion.svg
    width="380"
    height="520"
    viewBox="0 0 320 384"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={{ hover: { scale: 1.5 } }}
    transition={{ duration: 1, ease: "backInOut" }}
    style={{ position: 'absolute', inset: 0, zIndex: 0 }}
  >
    <motion.circle
      variants={{ hover: { scaleY: 0.5, y: -25 } }}
      transition={{ duration: 1, ease: "backInOut", delay: 0.2 }}
      cx="160.5"
      cy="114.5"
      r="101.5"
      fill="rgba(255, 255, 255, 0.05)"
    />
    <motion.ellipse
      variants={{ hover: { scaleY: 2.25, y: -25 } }}
      transition={{ duration: 1, ease: "backInOut", delay: 0.2 }}
      cx="160.5"
      cy="265.5"
      rx="101.5"
      ry="43.5"
      fill="rgba(255, 255, 255, 0.05)"
    />
  </motion.svg>
);

export const BGComponent2 = () => (
  <motion.svg
    width="380"
    height="520"
    viewBox="0 0 320 384"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={{ hover: { scale: 1.05 } }}
    transition={{ duration: 1, ease: "backInOut" }}
    style={{ position: 'absolute', inset: 0, zIndex: 0 }}
  >
    <motion.rect
      x="14"
      width="153"
      height="153"
      rx="15"
      fill="rgba(0, 0, 0, 0.05)"
      variants={{ hover: { y: 219, rotate: "90deg", scaleX: 2 } }}
      style={{ y: 12 }}
      transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
    />
    <motion.rect
      x="155"
      width="153"
      height="153"
      rx="15"
      fill="rgba(0, 0, 0, 0.05)"
      variants={{ hover: { y: 12, rotate: "90deg", scaleX: 2 } }}
      style={{ y: 219 }}
      transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
    />
  </motion.svg>
);
