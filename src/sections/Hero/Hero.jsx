import { motion } from 'framer-motion';
import { SparklesCore } from '../../components/ui/sparkles';
import ShinyText from '../../components/ui/ShinyText';
import heroBg from '../../assets/d3.mp4';
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
      {/* Background video */}
      <video
        className="hero-video"
        src={heroBg}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Blur + gradient overlay for readability */}
      <div className="hero-video-overlay" />
      {/* Sparkles background */}
      <div className="hero-dither" style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <SparklesCore
          id="tsparticlesfullpage"
          background="#080808"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={1}
        />
        {/* Radial Gradient mask for seamless fade at the bottom to merge with ValueProp layout */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 70%, var(--bg-secondary) 100%)', pointerEvents: 'none' }} />
      </div>

      {/* Bottom fade overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
      >
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
          {/* Gradients like the demo to look premium */}
          <div style={{ position: 'absolute', top: '-10px', left: '10%', right: '10%', height: '2px', background: 'linear-gradient(90deg, transparent, var(--accent), transparent)', filter: 'blur(4px)', opacity: 0.6 }} />
          <div style={{ position: 'absolute', top: '-10px', left: '20%', right: '20%', height: '1px', background: 'linear-gradient(90deg, transparent, var(--accent-light), transparent)' }} />
          
          <div style={{ textAlign: 'center', width: '100%' }}>
            <ShinyText
              text={<>Speak with <span className="text-blue">Authority</span> and <span className="text-blue">Charisma</span> to Inspire and Stand Out</>}
              speed={2}
              delay={0}
              color="rgba(255, 255, 255, 0.65)"
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



        <motion.p className="hero-subtitle" variants={fadeUp(0.28)} style={{ fontWeight: '700', fontSize: '1.15rem', color: 'var(--text-primary)' }}>
          Dedicate 6 weeks of Your Life to Master the Most Valuable Skill Ever!
        </motion.p>

        <motion.div className="hero-cta-group" variants={fadeUp(0.4)}>
          <a href={SKOOL_URL}>
            <button className="btn-accent">
              <span>Join the Cohort →</span>
            </button>
          </a>
        </motion.div>
      </motion.div>

    </section>
  );
}
