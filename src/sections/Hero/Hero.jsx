import { motion } from 'framer-motion';
import { ShaderAnimation } from '../../components/ui/ShaderAnimation';
import ShinyText from '../../components/ui/ShinyText';
import d3 from '../../assets/d3.mp4';
import d4 from '../../assets/d4.mp4';
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
      {/* Shader background */}
      <div className="hero-dither" style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <ShaderAnimation />
        {/* Radial Gradient mask for seamless fade at the bottom to merge with ValueProp layout */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 70%, var(--bg-secondary) 100%)', pointerEvents: 'none', zIndex: 2 }} />
      </div>

      {/* Videos on left and right */}
      <div className="hero-videos-container">
        <motion.div 
          className="hero-video-wrapper video-left"
          initial={{ opacity: 0, x: -80, y: '-50%' }}
          animate={{ opacity: 1, x: 0, y: '-50%' }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <video src={d3} className="hero-video" autoPlay loop muted playsInline />
          <div className="video-overlay" />
        </motion.div>

        <motion.div 
          className="hero-video-wrapper video-right"
          initial={{ opacity: 0, x: 80, y: '-50%' }}
          animate={{ opacity: 1, x: 0, y: '-50%' }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          <video src={d4} className="hero-video" autoPlay loop muted playsInline />
          <div className="video-overlay" />
        </motion.div>
      </div>

      {/* Bottom fade overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
      >
        <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          {/* Gradients like the demo to look premium */}
          <div style={{ position: 'absolute', top: '-10px', left: '10%', right: '10%', height: '2px', background: 'linear-gradient(90deg, transparent, var(--accent), transparent)', filter: 'blur(4px)', opacity: 0.6 }} />
          <div style={{ position: 'absolute', top: '-10px', left: '20%', right: '20%', height: '1px', background: 'linear-gradient(90deg, transparent, var(--accent-light), transparent)' }} />
          
          <div style={{ textAlign: 'center', width: '100%', zIndex: 10 }}>
            <ShinyText
              text={<>Speak with <span className="text-blue">Authority</span><br/> and <span className="text-blue">Charisma</span> to<br/> Inspire and Stand Out</>}
              speed={2}
              delay={0}
              color="rgba(255, 255, 255, 0.7)"
              shineColor="#ffffff"
              spread={120}
              direction="left"
              yoyo
              pauseOnHover={false}
              disabled={false}
              className="hero-title"
            />
          </div>
        </div>

        <motion.p className="hero-subtitle" variants={fadeUp(0.28)} style={{ fontWeight: '600', fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', marginTop: '20px' }}>
          Dedicate 6 weeks of Your Life to Master the Most Valuable Skill Ever!
        </motion.p>

        <motion.div className="hero-cta-group" variants={fadeUp(0.4)} style={{ marginTop: '40px' }}>
          <a href={SKOOL_URL}>
            <button className="btn-accent shiny-silver-border" style={{ transform: 'scale(1.1)' }}>
              <span>Join</span>
            </button>
          </a>
        </motion.div>
      </motion.div>

    </section>
  );
}
