import { motion } from 'framer-motion';
import './Hero.css';

const SKOOL_URL = '#pricing';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }
  }
});

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Aura Background */}
      <div className="hero-aura-container">
        {/* Top right intense dark blue sweep */}
        <div className="hero-aura-blob hero-aura-tr-sweep" />
        {/* Top right core */}
        <div className="hero-aura-blob hero-aura-tr-core" />
        {/* Bottom left deep blue sweep */}
        <div className="hero-aura-blob hero-aura-bl-sweep" />
        {/* Bottom left core */}
        <div className="hero-aura-blob hero-aura-bl-core" />
        {/* Center ambient */}
        <div className="hero-aura-blob hero-aura-center" />
      </div>

      {/* Content */}
      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
      >
        <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', width: '100%', zIndex: 10 }}>
            <h1 className="hero-title">
              The Complete Communication School to Help You Speak With
              <span className="hero-title-line2"><span className="hero-title-accent">Confidence</span> and <span className="hero-title-accent">Fluency</span></span>
            </h1>
          </div>
        </div>

        <motion.p className="hero-subtitle" variants={fadeUp(0.28)}>
          Dedicate just 12 weeks of your life to master the most valuable skill ever
        </motion.p>

        <motion.div className="hero-cta-group" variants={fadeUp(0.4)}>
          <a href={SKOOL_URL}>
            <button className="hero-join-btn">
              Join Now
            </button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
