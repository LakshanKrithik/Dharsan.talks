import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Curriculum.css';

const SKOOL_URL = '#pricing';

const sessions = [
  {
    num: 'Session 01',
    title: 'Speech & Thought Clarity',
    modules: [
      'Improving Speech & Thought Clarity',
      'Integrating Pauses to Become a Powerful Speaker',
      'Controlling Pace to Control Speech Delivery',
    ],
  },
  {
    num: 'Session 02',
    title: 'Vocal Power & Expression',
    modules: [
      'Understanding Pitch to Convey Emotions',
      'Using Emphasis to Make Your Speech Irresistible',
      'How to Record and Review Your Footages',
    ],
  },
  {
    num: 'Session 03',
    title: 'Language & Presence',
    modules: [
      'Developing a Dynamic Vocabulary Arsenal using AI',
      'Developing Your Unique Surface Lexicon using AI',
      'Speaking with Body Language and Facial Expressions',
    ],
  },
  {
    num: 'Session 04',
    title: 'Structure & Identity',
    modules: [
      'Speaking with Structure',
      'Strengthening Your Mind-to-Mouth Connection',
      'Improving Your Thick Indian Accent',
    ],
  },
  {
    num: 'Session 05',
    title: 'Personality & Authority',
    modules: [
      'Building on Your Personality to Make You Stand Out',
      'Speaking with Competence to Make People Respect You',
      'Speaking with Charisma to Make People Like You',
    ],
  },
  {
    num: 'Session 06',
    title: 'Confidence & Social Mastery',
    modules: [
      'Speaking with Confidence and Handling Anxiety',
      'How to Become an Interesting Story Teller',
      'Mastering Witty Banter to Become Socially Likable',
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

export default function Curriculum() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="section curriculum" id="curriculum">
      <div className="container">
        <motion.div
          className="curriculum-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-tag">The Curriculum</span>
          <h2 className="section-heading" style={{ marginBottom: '16px' }}>
            The Complete System to Make You an{' '}
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Incredible Speaker</em>
          </h2>
          <div className="accent-divider" style={{ margin: '20px auto' }} />
          <p className="section-subtext">
            Master this system and walk into any conversation knowing exactly what to say and how to say it.
          </p>
        </motion.div>

        <div className="curriculum-grid" ref={ref}>
          {sessions.map((s, i) => (
            <motion.div
              key={s.num}
              className="session-card"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <div className="session-number">{s.num}</div>
              <h3 className="session-title">{s.title}</h3>
              <ul className="session-modules">
                {s.modules.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="curriculum-cta">
          <a href={SKOOL_URL}>
            <button className="btn-accent">
              <span>Join the Cohort →</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
