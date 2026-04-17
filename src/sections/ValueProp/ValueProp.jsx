import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './ValueProp.css';

const SKOOL_URL = '#pricing';

const steps = [
  { icon: '📖', label: 'Learn', desc: 'Absorb proven frameworks, vocal techniques, and real-world communication principles.' },
  { icon: '🔁', label: 'Practice', desc: 'Reinforce every session with daily real-world exercises and actionable assignments.' },
  { icon: '📈', label: 'Improve', desc: 'Track your evolution, review your footage, and build unstoppable speaking momentum.' },
];

export default function ValueProp() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section value" id="value">
      <div className="container">
        <div className="value-inner" ref={ref}>
          {/* Left: Text */}
          <motion.div
            className="value-text"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-tag">The Method</span>
            <h2 className="section-heading" style={{ marginBottom: '20px' }}>
              2 Years of Condensed Knowledge &amp;{' '}
              <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Real-World Practice</em>
            </h2>
            <div className="accent-divider" />
            <p className="section-subtext">
              No fluff. No theory overload. Just the exact system to help you reach your untapped speaking potential — structured for real results.
            </p>
            <a href={SKOOL_URL}>
              <button className="btn-accent">
                <span>Join the Cohort →</span>
              </button>
            </a>
          </motion.div>

          {/* Right: Step Timeline */}
          <div className="value-visual">
            {steps.map((s, i) => (
              <motion.div
                key={s.label}
                className="step-row"
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 + i * 0.15 }}
              >
                <div className="step-icon-wrap">{s.icon}</div>
                <div>
                  <div className="step-label">{s.label}.</div>
                  <div className="step-desc">{s.desc}</div>
                </div>
              </motion.div>
            ))}
            <motion.p
              className="value-tagline"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              — Simple as that.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
