import { useRef } from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Arun K.',
    role: 'Entrepreneur',
    text: 'This program completely changed how I communicate in meetings. I went from nervous to commanding the room in just 6 weeks.',
    avatar: null,
  },
  {
    name: 'Priya S.',
    role: 'Content Creator',
    text: 'My storytelling improved dramatically. My audience engagement doubled after applying the techniques from this curriculum.',
    avatar: null,
  },
  {
    name: 'Rahul M.',
    role: 'Software Engineer',
    text: 'I used to struggle in interviews. After this program, I landed offers from 3 top companies. The confidence shift is real.',
    avatar: null,
  },
  {
    name: 'Sneha R.',
    role: 'MBA Student',
    text: 'The vocabulary and accent modules were game-changers. People now compliment my communication skills regularly.',
    avatar: null,
  },
  {
    name: 'Vikram D.',
    role: 'Sales Manager',
    text: 'My closing rate went up 40% after mastering the persuasion and conviction techniques. Worth every penny.',
    avatar: null,
  },
  {
    name: 'Ananya P.',
    role: 'Public Speaker',
    text: 'I thought I was already a good speaker. This program showed me how much more impactful I could be. Absolutely transformative.',
    avatar: null,
  },
  {
    name: 'Karthik V.',
    role: 'Startup Founder',
    text: 'Pitching to investors used to terrify me. Now I walk in with clarity and charisma. This is the real deal.',
    avatar: null,
  },
  {
    name: 'Deepa N.',
    role: 'HR Professional',
    text: 'The body language and facial expression modules helped me connect with people on a deeper level. Highly recommend.',
    avatar: null,
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
      <div className="testimonial-author">
        <div className="testimonial-avatar">
          {testimonial.name.charAt(0)}
        </div>
        <div className="testimonial-info">
          <span className="testimonial-name">{testimonial.name}</span>
          <span className="testimonial-role">{testimonial.role}</span>
        </div>
      </div>
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
