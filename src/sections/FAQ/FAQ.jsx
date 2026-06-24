import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus } from 'react-icons/fa6';
import './FAQ.css';

const faqs = [
  {
    q: 'Who is this program for?',
    a: 'Entrepreneurs, creators, students, professionals, anyone who wants to speak clearly, confidently, and persuasively in real-world situations.',
  },
  {
    q: 'What results can I realistically expect?',
    a: "You'll be able to handle conversations, interviews, and presentations confidently. And by extension, improve all aspects of your life, such as growing your business / career, making more money & building strong relationships.",
  },
  {
    q: 'How is this different from other English or communication courses?',
    a: "This curriculum is focused on real-world speaking, not just theory. I've provided you with daily practices and activities to help you stay consistent until you master your communication skills.",
  },
  {
    q: 'How much time do I need to invest?',
    a: 'This can vary depending on the individual. But dedicating 1 Hour Per day consistently for 60 - 90 Days is a sweet spot to become an extraordinary speaker.',
  },
  {
    q: "I'm not fluent at all & what if this doesn't work for me?",
    a: 'Results depend on implementation, but the system is designed to absolutely work if followed consistently.',
  },
  {
    q: 'What happens after the 12 weeks?',
    a: "In just 12 weeks, you'll internalize the system and speak with greater confidence, clarity, and fluency.",
  },
  {
    q: 'Is there lifetime access?',
    a: "Not exactly. You'll receive a minimum of 2 months guaranteed access, intentionally designed to create urgency and ensure you take action. This is more than enough time to fully learn and absorb the entire system. Anyways you'll be in the program as long as it is active",
  },
];

function WigglyPipe({ side }) {
  const isLeft = side === 'left';

  if (isLeft) {
    return (
      <div className="faq-pipe faq-pipe--left">
        <svg
          viewBox="0 0 200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="faq-pipe-svg"
        >
          {/* Large arc coming from left edge, curving inward */}
          <path
            d="M -60 100 C 80 150, 120 300, 40 500 C -20 650, -80 750, -60 800"
            stroke="rgba(61, 110, 214, 0.35)"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M -60 100 C 80 150, 120 300, 40 500 C -20 650, -80 750, -60 800"
            stroke="url(#flowLeft)"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            className="faq-pipe-flow faq-pipe-flow--left"
          />
          <defs>
            <linearGradient id="flowLeft" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor="rgba(0, 150, 255, 1)" />
              <stop offset="50%" stopColor="rgba(80, 200, 255, 1)" />
              <stop offset="70%" stopColor="rgba(0, 150, 255, 1)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  return (
    <div className="faq-pipe faq-pipe--right">
      <svg
        viewBox="0 0 300 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="faq-pipe-svg"
      >
        {/* Large circle arc partially visible at bottom-right */}
        <circle
          cx="250"
          cy="700"
          r="220"
          stroke="rgba(61, 110, 214, 0.3)"
          strokeWidth="6"
          fill="none"
        />
        <circle
          cx="250"
          cy="700"
          r="220"
          stroke="url(#flowRight)"
          strokeWidth="6"
          fill="none"
          className="faq-pipe-flow faq-pipe-flow--right"
          strokeDasharray="200 1200"
        />
        {/* Smaller inner arc for depth */}
        <path
          d="M 280 200 C 320 350, 260 500, 300 650"
          stroke="rgba(61, 110, 214, 0.18)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        <defs>
          <linearGradient id="flowRight" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="35%" stopColor="rgba(0, 150, 255, 1)" />
            <stop offset="50%" stopColor="rgba(80, 200, 255, 1)" />
            <stop offset="65%" stopColor="rgba(0, 150, 255, 1)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="section faq" id="faq" style={{ position: 'relative' }}>
      {/* Wiggly pipes on left and right */}
      <WigglyPipe side="left" />
      <WigglyPipe side="right" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          className="faq-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="section-heading">Frequently Asked Questions</h2>
        </motion.div>

        <div className="faq-list">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                className={`faq-item ${isOpen ? 'open' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <button className="faq-question" onClick={() => toggle(i)}>
                  {faq.q}
                  <span className="faq-icon"><FaPlus /></span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="faq-answer-cont"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="faq-answer">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
