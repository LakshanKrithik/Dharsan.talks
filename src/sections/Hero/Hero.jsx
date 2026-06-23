import { motion } from 'framer-motion';
import vid1 from '../../assets/Website Video 1-opt.mp4';
import vid2 from '../../assets/Website Video 2-opt.mp4';
import vid3 from '../../assets/Website Video 3-opt.mp4';
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
      {/* Ambient top glow */}
      <div className="hero-ambient-glow" />

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

        {/* Videos - desktop: static grid */}
        <motion.div className="hero-images hero-images--desktop" variants={fadeUp(0.24)}>
          <div className="hero-img-placeholder">
            <video src={vid1} autoPlay loop muted playsInline preload="auto" />
          </div>
          <div className="hero-img-placeholder">
            <video src={vid3} autoPlay loop muted playsInline preload="auto" />
          </div>
          <div className="hero-img-placeholder">
            <video src={vid2} autoPlay loop muted playsInline preload="auto" />
          </div>
        </motion.div>

        {/* Videos - mobile: scrolling marquee with preloaded videos */}
        <motion.div className="hero-images hero-images--mobile" variants={fadeUp(0.24)}>
          <div className="hero-video-track">
            <div className="hero-vid-item"><video src={vid1} autoPlay loop muted playsInline preload="auto" /></div>
            <div className="hero-vid-item"><video src={vid3} autoPlay loop muted playsInline preload="auto" /></div>
            <div className="hero-vid-item"><video src={vid2} autoPlay loop muted playsInline preload="auto" /></div>
            <div className="hero-vid-item"><video src={vid1} autoPlay loop muted playsInline preload="auto" /></div>
            <div className="hero-vid-item"><video src={vid3} autoPlay loop muted playsInline preload="auto" /></div>
            <div className="hero-vid-item"><video src={vid2} autoPlay loop muted playsInline preload="auto" /></div>
          </div>
        </motion.div>

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
