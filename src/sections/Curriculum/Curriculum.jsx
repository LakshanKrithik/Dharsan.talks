import { motion } from 'framer-motion';
import SpotlightBackground from '../../components/ui/SpotlightBackground';
import './Curriculum.css';

const SKOOL_URL = '#pricing';

const sessions = [
  {
    num: '1',
    title: 'Foundation Mastery',
    modules: [
      'Improving Speech & Thought Clarity',
      'Integrating Pauses to Become a Powerful Speaker',
      'Controlling Pace to Control Speech Delivery',
    ]
  },
  {
    num: '2',
    title: 'Pitch & Emotion',
    modules: [
      'Understanding Pitch to Convey Emotions',
      'Using Emphasis to make your Speech Irresistible',
      'How to record and review your footages',
    ]
  },
  {
    num: '3',
    title: 'Dynamic Vocabulary',
    modules: [
      'Developing A Dynamic Vocabulary Arsenal using AI',
      'Developing your Unique Surface Lexicon using AI',
      'Speaking with Body Language and Facial Expressions',
    ]
  },
  {
    num: '4',
    title: 'Structure & Accent',
    modules: [
      'Speaking with Structure',
      'Strengthening your Mind-to-mouth connection',
      'Improving Your Thick Indian Accent',
    ]
  },
  {
    num: '5',
    title: 'Personality & Charisma',
    modules: [
      'Building on Your Personality to Make You Stand Out',
      'Speaking with Competence to Make People Respect You',
      'Speaking with Charisma to Make People Like You',
    ]
  },
  {
    num: '6',
    title: 'Confidence & Banter',
    modules: [
      'Speaking with Confidence and Handling Anxiety',
      'How to Become an Interesting Story Teller',
      'Mastering Witty Banter to Become Socially Likable',
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
