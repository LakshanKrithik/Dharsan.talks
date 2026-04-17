import { motion } from 'framer-motion';
import Dither from '../../components/Dither/Dither';
import BlurText from '../../components/BlurText/BlurText';
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
      {/* Dither background */}
      <div className="hero-dither">
        <Dither
          waveColor={[0.13333333333333333, 0.3176470588235294, 0.6196078431372549]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
          pixelSize={2}
        />
      </div>

      {/* Bottom fade overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-eyebrow" variants={fadeUp(0)}>
          6-Week Live Cohort · Starts Soon
        </motion.div>

        <BlurText
          text="Speak with Authority and Charisma to Inspire and Stand Out"
          delay={140}
          animateBy="words"
          direction="top"
          className="hero-title font-bebas"
        />

        <motion.p className="hero-subtitle" variants={fadeUp(0.28)}>
          Dedicate <strong>6 Weeks</strong> of Your Life to Master the{' '}
          <strong>Most Valuable Skill Ever.</strong>
        </motion.p>

        <motion.div className="hero-cta-group" variants={fadeUp(0.4)}>
          <a href={SKOOL_URL}>
            <button className="btn-accent">
              <span>Join the Cohort →</span>
            </button>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="hero-scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}
