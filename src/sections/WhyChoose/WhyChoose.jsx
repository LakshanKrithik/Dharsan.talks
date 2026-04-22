import { motion } from 'framer-motion';
import GlassSurface from '../../components/ui/GlassSurface';
import MagicRings from '../../components/ui/MagicRings';
import GradientText from '../../components/GradientText/GradientText';
import ShinyText from '../../components/ui/ShinyText';
import dharsanImg from '../../assets/d2.png';
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
      {/* MagicRings background */}
      <div className="why-bg">
        <MagicRings
          color="#4427c4"
          colorTwo="#2226df"
          ringCount={6}
          speed={1}
          attenuation={10}
          lineThickness={2}
          baseRadius={0.35}
          radiusStep={0.1}
          scaleRate={0.1}
          opacity={1}
          blur={0}
          noiseAmount={0.1}
          rotation={0}
          ringGap={1.5}
          fadeIn={0.7}
          fadeOut={0.5}
          followMouse={false}
          mouseInfluence={0.2}
          hoverScale={1.2}
          parallax={0.05}
          clickBurst={false}
        />
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
                <GlassSurface
                  width="100%"
                  height="auto"
                  borderRadius={16}
                  backgroundOpacity={0.08}
                  distortionScale={-120}
                  className="why-glass-card"
                >
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
                </GlassSurface>
              </motion.div>
            ))}
          </div>

          {/* Center Image */}
          <motion.div
            className="why-center-image"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={dharsanImg} alt="Dharsan" className="why-portrait" />
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
                <GlassSurface
                  width="100%"
                  height="auto"
                  borderRadius={16}
                  backgroundOpacity={0.08}
                  distortionScale={-120}
                  className="why-glass-card"
                >
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
                </GlassSurface>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
