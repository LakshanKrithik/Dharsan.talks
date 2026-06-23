import { motion } from 'framer-motion';

import GradientText from '../../components/GradientText/GradientText';
import ShinyText from '../../components/ui/ShinyText';
import d3mp4 from '../../assets/d3-opt.mp4';
import './WhyChoose.css';

const allCards = [
  {
    title: 'Learn the Skill',
    desc: 'Gain access to a structured, proven system built from 2 years of condensed real-world speaking knowledge.',
  },
  {
    title: 'Daily Practice',
    desc: 'Move beyond theory. Every session comes with actionable daily practices to lock in your learning.',
  },
  {
    title: 'Build Connections',
    desc: 'Interact with a community of driven individuals, build relationships, and hold each other accountable.',
  },
  {
    title: 'Build Authority',
    desc: 'Become socially magnetic. Watch your career, business, and relationships transform as your voice gains power.',
  },
];

// Desktop splits: left = cards 0,2 (01,03), right = cards 1,3 (02,04)
const leftCards = [allCards[0], allCards[2]];
const rightCards = [allCards[1], allCards[3]];

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
              colors={["#F0EDE6", "#6391F5", "#78B4FF", "#6391F5", "#F0EDE6"]}
              animationSpeed={6}
              showBorder={false}
              className="why-heading-gradient"
            >
              More Than a Course
            </GradientText>
            <GradientText
              colors={["#6391F5", "#78B4FF", "#5DADE2", "#6391F5"]}
              animationSpeed={4}
              showBorder={false}
              className="why-heading-gradient"
            >
              A Complete System
            </GradientText>
          </h2>

          <div className="accent-divider" style={{ display: 'none' }} />
        </motion.div>

        {/* Desktop: Three-column layout */}
        <div className="why-grid why-grid--desktop">
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
                      {String(i * 2 + 1).padStart(2, '0')}
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
                      {String(i * 2 + 2).padStart(2, '0')}
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

        {/* Mobile: cards 1-2, then video, then cards 3-4 */}
        <div className="why-grid why-grid--mobile">
          <div className="why-col">
            {allCards.slice(0, 2).map((card, i) => (
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
                        <span className="why-card-title-static">{card.title}</span>
                      </h3>
                      <p className="why-card-desc ibm-plex-sans-condensed-bold">{card.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

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

          <div className="why-col">
            {allCards.slice(2, 4).map((card, i) => (
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
                        <span className="why-card-title-static">{card.title}</span>
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
