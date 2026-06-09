import { motion } from 'framer-motion';
import SpotlightBackground from '../../components/ui/SpotlightBackground';
import './Curriculum.css';

const SKOOL_URL = '#pricing';

const sessions = [
  {
    num: '1',
    title: 'Foundation Mastery',
    modules: [
      'Improving Thought Clarity',
      'Improving Speech Clarity',
      'Strengthening Mind To Mouth Connection',
    ]
  },
  {
    num: '2',
    title: 'Dynamic Speech Delivery',
    modules: [
      'Controlling Pace For Dynamic Speech Delivery',
      'Understanding Pitch To Convey Emotions',
      'Integrating pause + emphasis to make your speech irresistible',
    ]
  },
  {
    num: '3',
    title: 'Vocabulary Mastery',
    modules: [
      'How To Record & Review To Become A Unique Speaker',
      'Developing A Dynamic Vocabulary Arsenal Using AI',
      'Developing Your Unique Surface Lexicon Using AI',
    ]
  },
  {
    num: '4',
    title: 'Nonverbal Communication',
    modules: [
      'Amplyfing Your Speech With Body Language',
      'Using Facial Expressions',
      'Speaking with Conviction',
    ]
  },
  {
    num: '5',
    title: 'Accent & Mirroring',
    modules: [
      'Improving Your Thick Indian Accent',
      'Mirroring Speech and Personality Attributes from the Best',
    ]
  },
  {
    num: '6',
    title: 'Mastering Social Interactions',
    modules: [
      'Speaking With Charisma & Wit To Become Socially Likable',
      'Speaking With Authority & To Command Respect',
      'Speaking With Conviction To Move & Persuade People',
      'How To Become An Interesting Storyteller',
    ]
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function Curriculum() {
  return (
    <section id="curriculum">
      <SpotlightBackground>
        <div className="curriculum" style={{ background: 'transparent' }}>
          <div className="curriculum-container">
        <motion.div
          className="curriculum-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
        >
          <h1 className="curriculum-main-title">
            This curriculum is designed to help you handle any conversation <span className="cursive-text">confidently</span>
          </h1>
        </motion.div>

        <div className="curriculum-bento-grid">
          {sessions.map((session, index) => (
            <motion.div
              key={session.num}
              className="curriculum-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.2, 0, 0, 1] }}
              style={{ '--card-index': index }}
            >
              <div className="curriculum-card-header">
                <span className="curriculum-number">{session.num}</span>
                <h2 className="curriculum-card-title">{session.title}</h2>
              </div>
              <ul>
                {session.modules.map((module, mIdx) => (
                  <li key={mIdx}>{module}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="curriculum-bottom-btn-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <a href={SKOOL_URL}>
            <button className="curriculum-accent-btn">
              Join Now
            </button>
          </a>
        </motion.div>
          </div>
        </div>
      </SpotlightBackground>
    </section>
  );
}
