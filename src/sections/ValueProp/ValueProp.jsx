import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Aurora from '../../components/ui/Aurora';
import BubbleText from '../../components/ui/BubbleText';
import dharsanImage from '../../assets/d1-opt.webp'; // load graphic
import './ValueProp.css';

const SKOOL_URL = '#pricing';

export default function ValueProp() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section value" id="value" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Layer wrapping the Aurora Effect seamlessly beneath content depth */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Aurora
          colorStops={["#224EA3", "#3D6ED6", "#6391F5"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
        {/* Bottom fade mask to merge into Curriculum's SpotlightBackground */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '150px', background: 'linear-gradient(to bottom, transparent, #050505)', pointerEvents: 'none' }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="value-inner" ref={ref}>
          {/* Left: Text */}
          <motion.div
            className="value-text"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <div style={{ marginBottom: '40px', width: '100%' }}>
              <BubbleText text="Teaching my 2 years of Condensed Knowledge & Real World Practices that Helps You Reach Your Untapped Speaking Potential" />
            </div>
            <p className="font-bebas" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: '700', letterSpacing: '0.05em', color: 'var(--text-primary)', textTransform: 'uppercase', lineHeight: '1.2' }}>
              Learn. Practice. Improve Effortlessly
            </p>
          </motion.div>

          {/* Right: Author Image */}
          <motion.div 
            className="value-visual"
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <div style={{ position: 'relative', width: '100%', maxWidth: '420px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--accent-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
              <img src={dharsanImage} alt="Dharsan P" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,8,0.9), transparent 60%)', pointerEvents: 'none' }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
