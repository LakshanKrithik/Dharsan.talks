import { motion } from 'framer-motion';
import { AnimatedText } from '../../components/ui/AnimatedText';
import heroVideo from '../../assets/download2.mp4';
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
      {/* Background Video B-Roll (Right Aligned & Blended) */}
      <div className="hero-video-bg-container">
        <div className="hero-video-bg-wrapper">
          <video 
            autoPlay 
            muted 
            playsInline
            loop
            className="hero-bg-video"
            src={heroVideo}
            onTimeUpdate={(e) => {
              // Loop the best 10 second chunk of the clip
              if (e.target.currentTime >= 10) {
                e.target.currentTime = 0;
                e.target.play();
              }
            }}
          />
          {/* Gradient Masks to blend the video smoothly into the dark background */}
          <div className="hero-video-mask-right"></div>
          <div className="hero-video-mask-bottom"></div>
          <div className="hero-video-mask-overlay"></div>
        </div>
      </div>

      {/* Eye-catching Background Glow */}
      <div className="hero-bg-glow"></div>

      {/* Content */}
      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
      >
        <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
          <div style={{ textAlign: 'left', width: '100%', zIndex: 10 }}>
            <h1 className="hero-title">
              The Complete Communication School to <br className="hide-on-mobile" /> 
              <span className="hero-title-accent">Speak With Confidence & Fluency</span>
            </h1>
          </div>
        </div>

        <motion.p className="hero-subtitle" variants={fadeUp(0.28)}>
          Dedicate just 12 weeks of your life to master the most valuable skill ever
        </motion.p>

        <motion.div className="hero-cta-group" variants={fadeUp(0.4)}>
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
