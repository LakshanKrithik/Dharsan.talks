import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus } from 'react-icons/fa6';
import { SparklesCore } from '../../components/ui/SparklesCore';
import './FAQ.css';

const faqs = [
  {
    q: 'Who is this program for?',
    a: 'Entrepreneurs, creators, students, professionals—anyone who wants to speak clearly, confidently, and persuasively in real-world situations.',
  },
  {
    q: 'What results can I realistically expect?',
    a: 'You’ll be able to handle conversations, interviews, and presentations confidently. And by extension, improve all aspects of your life, such as growing your business / career, making more money & building strong relationships.',
  },
  {
    q: 'How is this different from other English or communication courses?',
    a: 'This curriculum is focused on real-world speaking, not just theory. I’ve provided you with daily practices and activities to help you stay consistent until you master your communication skills.',
  },
  {
    q: 'How much time do I need to invest?',
    a: 'This can vary depending on the individual. But dedicating 1 Hour Per day consistently for 60 - 90 Days is a sweet spot to become an extraordinary speaker.',
  },
  {
    q: 'I’m not fluent at all & what if this doesn’t work for me?',
    a: 'Results depend on implementation, but the system is designed to absolutely work if followed consistently.',
  },
  {
    q: 'What happens after the 6 weeks?',
    a: 'The 6-week program is designed to help you understand and internalize the system with focused, efficient practice. Beyond that, minimal continued practice is essential to refine your skills and strengthen your weaker areas until you achieve true mastery.',
  },
  {
    q: 'Is there lifetime access?',
    a: 'No. You’ll receive 2 months of access—intentionally designed to create urgency and ensure you take action. This is more than enough time to fully learn and absorb the entire system.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="section faq" id="faq" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Sparkles Effect strictly bound to the FAQ section back layer */}
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
          particleDensity={50} // Lowered slightly so text remains 100% legible
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={0.8}
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          className="faq-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <div className="accent-divider" style={{ margin: '20px auto' }} />
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
