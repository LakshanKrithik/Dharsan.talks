import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import RuixenPricing from '../../components/ui/RuixenPricing';
import './Pricing.css';

const SKOOL_URL = '#pricing';

const plans = [
  {
    id: 'standard',
    title: 'All Round',
    monthlyPrice: 2999,
    originalPrice: 7999,
    annuallyPrice: 59990,
    desc: 'Designed for individuals at every level from beginners to early advanced speakers, to systematically master and elevate their communication skills.',
    features: [
      'Access to over 4 hours / 19 Modules of pre-recorded classes',
      'Daily assignments to reinforce & apply learnings',
      'Access to a community of like-minded individuals',
    ],
    buttonText: 'Join Now',
  },
  {
    id: 'mastermind',
    title: '1-on-1 Coaching',
    monthlyPrice: 44999,
    annuallyPrice: 449990,
    desc: 'Designed for Entrepreneurs, Creators & Founders to reach their Full Speaking Potential with Direct Guidance & Accelerated Growth.',
    features: [
      'Includes 4 live sessions + lifetime material access',
      'Uniquely Curated Framework for Each Individual',
      'Personalized Feedback from Dharsan to accelerate improvement',
    ],
    buttonText: 'Apply Now',
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="section pricing" id="pricing" style={{ paddingTop: '80px', paddingBottom: '120px', position: 'relative' }}>
      {/* Premium Static Background */}
      <div className="pricing-bg-container">
        <div className="pricing-glow-core" />
        <div className="pricing-grid-overlay" />
      </div>

      <div className="container" ref={ref} style={{ position: 'relative', zIndex: 1 }}>
         <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
         >
             <RuixenPricing plans={plans} contactHref={SKOOL_URL} />
         </motion.div>
      </div>
    </section>
  );
}
