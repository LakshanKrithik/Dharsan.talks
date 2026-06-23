import { useRef } from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const testimonials = [
  {
    text: 'Session went good. It was informative and I learned new practicing techniques. I got to know my mistakes, and the PRP framework you taught (Point, Reason, Example, Point) was really helpful. Overall, the session was excellent.',
  },
  {
    text: 'I really felt the session was useful, even though I have watched many videos on communication before. I liked how you explained each and every mistake with precision. Everything is practical and follows a simple structure that can be practiced daily. It was a lovely session.',
  },
  {
    text: "Today's session was very useful. I learned many new things about speech clarity, mouth flexibility, and mind-mouth connection. It was very interactive and helpful for improving confidence. Thank you.",
  },
  {
    text: 'It was really an amazing session. It was very informative. I had missed the live session, but after watching the recording I found it completely knowledgeable. The concept of conviction was totally new to me and the time spent was worthwhile. Thank you for sharing such valuable information.',
  },
  {
    text: 'It was a good session. From the warm-up exercises and speech clarity training to the PRP framework and real-time audience conversations, everything was knowledgeable and insightful.',
  },
  {
    text: "Today's session was truly amazing and very insightful. You are the real OG of communication skills. I'm sure your dream of becoming the world's best orator will come true because the impact you create on people is incredible. Nailed it!",
  },
  {
    text: 'The session was very good and interactive. I learned many things about improving charisma, authority, and building vocabulary. Thank you for spending extra time clearing our doubts. This session was highly interactive, and even two hours felt insufficient because of the depth of information covered. Thank you for your guidance.',
  },
  {
    text: 'The session was really good and helpful. I learned many new things about speech clarity, confidence, and communication. The activities and interactions made the session interesting and easy to understand. Thank you for conducting such an informative session.',
  },
  {
    text: 'It was a really great session with excellent guidance. The communication practice examples were extremely helpful.',
  },
  {
    text: "I learned many things from today's session. It was unique and very useful. I got to know different exercises for improving speech clarity, thought clarity, and mind-to-mouth connection. The session felt genuine, and you were very patient throughout. You even extended the session by an hour to ensure everyone understood everything clearly. Thank you.",
  },
  {
    text: "Today's session was great and informative. You covered important topics like being charismatic, authoritative, and building vocabulary. As a beginner, some parts were challenging, but I feel I'm improving. After attending these sessions, I realized I need to practice by talking to more people. Thank you for your guidance.",
  },
  {
    text: 'The session was very interactive and you tried your best to answer every question asked. All the techniques you shared were unique and interesting to practice. Worth every penny paid.',
  },
];

// Duplicate for seamless infinite scroll
const doubledTestimonials = [...testimonials, ...testimonials];

function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-quote">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 7H7.5C6.12 7 5 8.12 5 9.5V10C5 11.1 5.9 12 7 12H9V13C9 14.1 8.1 15 7 15H6.5C5.95 15 5.5 15.45 5.5 16C5.5 16.55 5.95 17 6.5 17H7C9.21 17 11 15.21 11 13V7ZM19 7H15.5C14.12 7 13 8.12 13 9.5V10C13 11.1 13.9 12 15 12H17V13C17 14.1 16.1 15 15 15H14.5C13.95 15 13.5 15.45 13.5 16C13.5 16.55 13.95 17 14.5 17H15C17.21 17 19 15.21 19 13V7Z" fill="currentColor"/>
        </svg>
      </div>
      <p className="testimonial-text">{testimonial.text}</p>
    </div>
  );
}

export default function Testimonials() {
  const marqueeRef = useRef(null);

  const handleTouchStart = () => {
    if (marqueeRef.current) {
      marqueeRef.current.classList.add('is-touching');
    }
  };

  const handleTouchEnd = () => {
    if (marqueeRef.current) {
      setTimeout(() => {
        marqueeRef.current?.classList.remove('is-touching');
      }, 500); // Resume after 0.5s of no touch
    }
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="testimonials-title">
            Trusted by speakers who took action
          </h2>
          <p className="testimonials-subtitle">
            Real results from real people who transformed their communication
          </p>
        </motion.div>

        {/* Single row — scrolls left */}
        <div
          className="testimonials-marquee"
          ref={marqueeRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="testimonials-track testimonials-track--left">
            {doubledTestimonials.map((t, i) => (
              <TestimonialCard key={`row1-${i}`} testimonial={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
