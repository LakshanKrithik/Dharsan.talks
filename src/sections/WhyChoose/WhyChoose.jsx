import { motion } from 'framer-motion';

import GradientText from '../../components/GradientText/GradientText';
import ShinyText from '../../components/ui/ShinyText';
import d3mp4 from '../../assets/d3.mp4';
import './WhyChoose.css';

const leftCards = [
  {
    title: 'Learn the Skill',
    desc: 'Gain access to a structured, proven system built from 2 years of condensed real-world speaking knowledge.',
  },
  {
    title: 'Daily Practice',
    desc: 'Move beyond theory. Every session comes with actionable daily practices to lock in your learning.',
  },
];

const rightCards = [
  {
    title: 'Build Connections',
    desc: 'Interact with a community of driven individuals, build relationships, and hold each other accountable.',
  },
  {
    title: 'Build Authority',
    desc: 'Become socially magnetic. Watch your career, business, and relationships transform as your voice gains power.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.18 }
  }),
};

export default function WhyChoose() {
  return (
    <section className="section why" id="why">
      {/* Static Waves Background */}
      <div className="why-bg-container">
        <div className="why-waves" />
      </div>

      <div className="container why-container">
        {/* Header */}
        <motion.div
          className="why-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >


          <h2 className="section-heading why-heading">
            <GradientText
              colors={["#F0EDE6", "#6391F5", "#a78bfa", "#6391F5", "#F0EDE6"]}
              animationSpeed={6}
              showBorder={false}
              className="why-heading-gradient"
            >
              More Than a Course
            </GradientText>
            <GradientText
              colors={["#6391F5", "#a78bfa", "#c4b5fd", "#6391F5"]}
              animationSpeed={4}
              showBorder={false}
              className="why-heading-gradient why-heading-em"
            >
              A Complete System
            </GradientText>
          </h2>

          <div className="accent-divider" style={{ margin: '24px auto' }} />
        </motion.div>

        {/* Three-column layout */}
        <div className="why-grid">

          {/* Left Cards */}
          <div className="why-col why-col--left">
            {leftCards.map((card, i) => (
              <motion.div
                key={card.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                className="why-card-motion"
              >
                <div className="why-glass-card">
                  <div className="why-card-inner">
                    <div className="why-card-number ibm-plex-sans-condensed-bold">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="why-card-text">
                      <h3 className="why-card-title ibm-plex-sans-condensed-semibold">
                        <ShinyText 
                          text={card.title} 
                          speed={3} 
                          color="rgba(255, 255, 255, 0.85)" 
                          shineColor="#ffffff" 
                          spread={120} 
                        />
                      </h3>
                      <p className="why-card-desc ibm-plex-sans-condensed-bold">{card.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Video */}
          <motion.div
            className="why-center-image"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <video
              src={d3mp4}
              className="why-portrait"
              autoPlay
              loop
              muted
              playsInline
            />
          </motion.div>

          {/* Right Cards */}
          <div className="why-col why-col--right">
            {rightCards.map((card, i) => (
              <motion.div
                key={card.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                className="why-card-motion"
              >
                <div className="why-glass-card">
                  <div className="why-card-inner">
                    <div className="why-card-number ibm-plex-sans-condensed-bold">
                      {String(i + 3).padStart(2, '0')}
                    </div>
                    <div className="why-card-text">
                      <h3 className="why-card-title ibm-plex-sans-condensed-semibold">
                        <ShinyText 
                          text={card.title} 
                          speed={3} 
                          color="rgba(255, 255, 255, 0.85)" 
                          shineColor="#ffffff" 
                          spread={120} 
                        />
                      </h3>
                      <p className="why-card-desc ibm-plex-sans-condensed-bold">{card.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
