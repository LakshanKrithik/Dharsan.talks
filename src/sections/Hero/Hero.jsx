import { motion } from 'framer-motion';
import { AnimatedText } from '../../components/ui/AnimatedText';
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
      {/* Content */}
      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
      >
        <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', width: '100%', zIndex: 10 }}>
            <AnimatedText
              text={<>Speak with <span className="font-display" style={{ WebkitTextFillColor: '#3D6ED6', color: '#3D6ED6', fontStyle: 'italic', fontWeight: '400', padding: '0 12px' }}>Authority</span> <br/> and <span className="font-display" style={{ WebkitTextFillColor: '#3D6ED6', color: '#3D6ED6', fontStyle: 'italic', fontWeight: '400', padding: '0 12px' }}>Charisma</span> <br/> to Inspire and Stand Out</>}
              hoverEffect={true}
              gradientColors="linear-gradient(90deg, #ffffff, #b3b3b3, #ffffff, #e6e6e6, #ffffff)"
              gradientAnimationDuration={3}
              textClassName="hero-title"
              style={{ lineHeight: '1.4' }}
            />
          </div>
        </div>

        <motion.p className="hero-subtitle" variants={fadeUp(0.28)} style={{ fontWeight: '600', fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', marginTop: '20px' }}>
          Dedicate 6 weeks of Your Life to Master the Most Valuable Skill Ever!
        </motion.p>

        <motion.div className="hero-cta-group" variants={fadeUp(0.4)} style={{ marginTop: '40px' }}>
          <a href={SKOOL_URL}>
            <button className="btn-brutal" style={{ transform: 'scale(1.1)' }}>
              JOIN
            </button>
          </a>
        </motion.div>
      </motion.div>

    </section>
  );
}
