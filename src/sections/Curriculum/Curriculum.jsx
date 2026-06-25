import { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Curriculum.css';

gsap.registerPlugin(ScrollTrigger);

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
      'Speaking With Conviction To Move & Persuade People',
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
      'Speaking With Authority To Command Respect',
    ]
  },
];

const pairs = [
  [sessions[0], sessions[1]],
  [sessions[2], sessions[3]],
  [sessions[4], sessions[5]],
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

function CurriculumCard({ session, index }) {
  return (
    <div className="curriculum-card" style={{ '--card-index': index }}>
      <div className="curriculum-card-header">
        <span className="curriculum-number">{session.num}</span>
        <h2 className="curriculum-card-title">{session.title}</h2>
      </div>
      <ul>
        {session.modules.map((module, mIdx) => (
          <li key={mIdx}>{module}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Curriculum() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const tlRef = useRef(null);
  const stRef = useRef(null);

  const buildScrollAnimation = useCallback(() => {
    // Kill previous instance
    if (stRef.current) {
      stRef.current.kill();
      stRef.current = null;
    }
    if (tlRef.current) {
      tlRef.current.kill();
      tlRef.current = null;
    }

    // Only build on desktop
    if (window.innerWidth <= 1024) return;

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const pairElements = track.querySelectorAll('.curriculum-pair');
    if (!pairElements.length) return;

    // Reset all transforms
    gsap.set(pairElements, { clearProps: 'all' });

    // Set initial states — only use GPU-friendly properties (opacity, transform)
    gsap.set(pairElements[0], { opacity: 1, y: '0%', scale: 1, willChange: 'transform, opacity' });
    for (let i = 1; i < pairElements.length; i++) {
      gsap.set(pairElements[i], { opacity: 0, y: '40%', scale: 0.95, willChange: 'transform, opacity' });
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true, // Direct scrub without delay
        invalidateOnRefresh: true,
      }
    });

    for (let i = 0; i < pairElements.length - 1; i++) {
      // Add a 1 unit pause before starting the next transition
      const startTime = i * 2;
      
      tl.to(pairElements[i], {
        opacity: 0,
        y: '-30%',
        scale: 0.95,
        duration: 1,
        ease: 'power2.inOut',
      }, startTime);

      tl.to(pairElements[i + 1], {
        opacity: 1,
        y: '0%',
        scale: 1,
        duration: 1,
        ease: 'power2.inOut',
      }, startTime);
    }

    tlRef.current = tl;
    stRef.current = tl.scrollTrigger;
  }, []);

  useEffect(() => {
    // Build on mount
    buildScrollAnimation();

    // Debounced rebuild on resize
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        buildScrollAnimation();
      }, 300);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
      if (stRef.current) stRef.current.kill();
      if (tlRef.current) tlRef.current.kill();
    };
  }, [buildScrollAnimation]);

  return (
    <section id="curriculum">
      {/* Desktop scroll-pinned showcase */}
      <div className="curriculum-desktop-showcase" ref={sectionRef}>
        <div className="curriculum-desktop-inner">
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

          <div className="curriculum-progress">
            {pairs.map((_, idx) => (
              <div key={idx} className="curriculum-progress-dot" />
            ))}
          </div>

          <div className="curriculum-track" ref={trackRef}>
            {pairs.map((pair, pIdx) => (
              <div key={pIdx} className="curriculum-pair">
                {pair.map((session) => (
                  <CurriculumCard key={session.num} session={session} />
                ))}
              </div>
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

      {/* Mobile stacked layout */}
      <div className="curriculum-mobile">
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
    </section>
  );
}
