import { motion } from 'framer-motion';
import './WhyChoose.css';

const steps = [
  {
    num: '01',
    icon: '🎓',
    title: 'Learn the Skill',
    desc: 'Gain access to a structured, proven system built from 2 years of condensed real-world speaking knowledge.',
  },
  {
    num: '02',
    icon: '🔁',
    title: 'Implement With Daily Practice',
    desc: 'Move beyond theory. Every session comes with actionable daily practices to lock in your learning.',
  },
  {
    num: '03',
    icon: '🤝',
    title: 'Build New Connections',
    desc: 'Interact with a community of driven individuals, build relationships, and hold each other accountable.',
  },
  {
    num: '04',
    icon: '💰',
    title: 'Make Money & Build Authority',
    desc: 'Become socially magnetic. Watch your career, business, and relationships transform as your voice gains power.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }
  }),
};

export default function WhyChoose() {
  return (
    <section className="section why" id="why">
      <div className="container">
        <motion.div
          className="why-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-tag">Why This Cohort</span>
          <h2 className="section-heading" style={{ marginBottom: '16px' }}>
            More Than a Course —{' '}
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>A Complete System</em>
          </h2>
          <div className="accent-divider" style={{ margin: '20px auto' }} />
          <p className="section-subtext">
            Every element of this cohort is designed to create lasting, real-world transformation.
          </p>
        </motion.div>

        <div className="why-steps">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              className="why-step"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              <div className="why-step-num">{s.num}</div>
              <span className="why-step-icon">{s.icon}</span>
              <h3 className="why-step-title">{s.title}</h3>
              <p className="why-step-desc">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
