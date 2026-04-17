import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCheck } from 'react-icons/fa6';
import './Pricing.css';

const SKOOL_URL = '#pricing'; // Provided by user as just #pricing or skool page, fallback

const plans = [
  {
    name: 'All Round',
    price: '₹5,999',
    desc: 'Designed for individuals at every level. From beginners to early advanced speakers, to systematically master and elevate their communication skills.',
    features: [
      'Access to over 4 hours / 19 Modules of Structured Pre-Recorded Classes',
      'Daily assignments to reinforce and apply what you learn',
      'Access to a community of like-minded individuals',
    ],
    cta: 'Join Now',
    isPremium: false,
  },
  {
    name: '1-on-1 Coaching',
    price: '₹44,999',
    desc: 'Designed for Entrepreneurs, Creators & Founders to reach their Full Speaking Potential with Direct Guidance.',
    features: [
      'Includes 4 live sessions, along with lifetime access to all learning materials',
      'Uniquely Curated Curriculum for Each Individual',
      'Every Session is Tailored to Enhance Your Speaking Style',
      'Direct, Personalized Feedback from Dharsan to Accelerate Your Improvement',
    ],
    cta: 'Apply Now',
    isPremium: true,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <motion.div
          className="pricing-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-tag">Enrollment</span>
          <h2 className="section-heading" style={{ marginBottom: '16px' }}>
            Choose Your{' '}
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Transformation</em>
          </h2>
          <div className="accent-divider" style={{ margin: '20px auto' }} />
          <p className="section-subtext">
            Invest in the most valuable skill you will ever learn.
          </p>
        </motion.div>

        <div className="pricing-grid" ref={ref}>
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              className={`pricing-card ${p.isPremium ? 'premium' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 }}
            >
              {p.isPremium && <div className="premium-badge">Limited Slots</div>}
              
              <div className="pricing-card-tag">{p.isPremium ? 'Direct Guidance' : 'Cohort Access'}</div>
              <h3 className="pricing-card-name">{p.name}</h3>
              <div className="pricing-card-price">
                {p.price}
              </div>
              <p className="pricing-card-desc">{p.desc}</p>

              <div className="pricing-features-label">What's Included</div>
              <ul className="pricing-features">
                {p.features.map(f => (
                  <li key={f}>
                    <div className="check"><FaCheck /></div>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a href={SKOOL_URL}>
                <button className="btn-accent" style={{ width: '100%' }}>
                  <span>{p.cta} →</span>
                </button>
              </a>
              {p.isPremium && <p className="limited-note">* Subject to availability and application review.</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
