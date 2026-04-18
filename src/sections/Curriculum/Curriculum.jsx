import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AnimatedList from './AnimatedList';
import { AnimatedText } from '../../components/ui/AnimatedText';
import { SparklesCore } from '../../components/ui/SparklesCore';
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

export default function Curriculum() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="section curriculum" id="curriculum" style={{ position: 'relative' }}>
      {/* Sparkles Background spanning the ENTIRE third page section */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        zIndex: 0,
        pointerEvents: 'none'
      }}>
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.5}
          particleDensity={60} // Lowered slightly since it covers the entire section now
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={0.8}
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          className="curriculum-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 0 20px' }}
        >
          <span className="section-tag">The Curriculum</span>
          
          <AnimatedText 
            text="The end-to-end curriculum that lets you handle any conversation confidently" 
            textClassName="section-heading"
            style={{ fontSize: '3.2rem', lineHeight: 1.15, maxWidth: '1000px', margin: '16px auto 0' }}
            gradientColors="linear-gradient(90deg, rgba(255,255,255,0.4), #ffffff, rgba(255,255,255,0.4))"
            gradientAnimationDuration={4}
          />
        </motion.div>

        <div className="curriculum-interactive" ref={ref} style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <AnimatedList items={sessions} displayScrollbar={false} />
          </motion.div>
        </div>

        <div className="curriculum-cta" style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
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
