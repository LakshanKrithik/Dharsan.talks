import React, { useState, useEffect } from 'react';
import NumberFlow from '@number-flow/react';
import { FaCheck } from 'react-icons/fa6';
import ElectricBorder from './ElectricBorder';
import './RuixenPricing.css';

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState(null);
    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
        // Fixed end time: 48 hours from June 25, 2026 at 18:30 IST
        const endTime = new Date('2026-06-27T18:30:00+05:30').getTime();

        const updateTimer = () => {
            const now = Date.now();
            const diff = endTime - now;

            if (diff <= 0) {
                setIsExpired(true);
                return;
            }

            const h = Math.floor(diff / (1000 * 60 * 60));
            const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((diff % (1000 * 60)) / 1000);

            setTimeLeft(`${h.toString().padStart(2, '0')}h ${m.toString().padStart(2, '0')}m ${s.toString().padStart(2, '0')}s`);
        };

        updateTimer();
        const interval = setInterval(updateTimer, 1000);

        return () => clearInterval(interval);
    }, []);

    if (isExpired || !timeLeft) return null;

    return (
        <span style={{ 
            fontSize: '0.8rem', 
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            color: 'rgba(255, 255, 255, 0.9)', 
            padding: '5px 14px', 
            borderRadius: '24px',
            fontWeight: '500',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            letterSpacing: '0.01em',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
        }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 15 15"></polyline>
            </svg>
            <span style={{ opacity: 0.7 }}>Ends in</span>
            <span style={{ 
                fontVariantNumeric: 'tabular-nums', 
                fontWeight: '600', 
                color: '#ffffff',
                letterSpacing: '0.5px'
            }}>
                {timeLeft}
            </span>
        </span>
    );
};

export default function RuixenPricing({ plans, contactHref }) {
    return (
        <div className="ruixen-wrapper">
            <div className="ruixen-header-flex">

                
                <h2 className="ruixen-title" style={{ fontSize: '3.5rem', marginBottom: '40px' }}>Programs Offered</h2>
            </div>

            <div className="ruixen-grid">
                {plans.map((plan) => (
                    <PlanCard key={plan.id} plan={plan} contactHref={contactHref} />
                ))}
            </div>
        </div>
    );
}

const PlanCard = ({ plan, contactHref }) => {
    const isMastermind = plan.id === "mastermind";
    const buttonLink = plan.href || contactHref;
    
    const cardContent = (
        <div className={`ruixen-card ${isMastermind ? "mastermind" : ""}`}>
            {isMastermind && (
                <div className="mastermind-glow"></div>
            )}

            <div className="ruixen-card-top">
                <h2 className="ruixen-card-title">{plan.title}</h2>
                <h3 className="ruixen-card-price" style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                    <span className={plan.originalPrice ? "ruixen-highlighted-price" : ""}>
                        <NumberFlow
                            value={plan.monthlyPrice}
                            format={{
                                currency: "INR",
                                style: "currency",
                                currencySign: "standard",
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0,
                                currencyDisplay: "narrowSymbol"
                            }}
                        />
                    </span>
                    {plan.originalPrice && (
                        <span className="ruixen-original-price">
                            ₹{plan.originalPrice}
                        </span>
                    )}
                    {plan.id === 'standard' && <CountdownTimer />}
                </h3>
                <p className="ruixen-card-desc">{plan.desc}</p>
            </div>

            <div className="ruixen-card-middle" style={{ marginTop: "1rem" }}>
                <a href={buttonLink} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                    <button className={`ruixen-submit-btn ${isMastermind ? "mastermind-btn" : ""}`}>
                        {plan.buttonText}
                    </button>
                </a>
            </div>

            <div className="ruixen-card-bottom">
                <span className="ruixen-includes">Includes:</span>
                {plan.features.map((feature, idx) => (
                    <div key={idx} className="ruixen-feature">
                        <FaCheck style={{ flexShrink: 0, marginTop: '4px', color: isMastermind ? '#f40b35' : 'var(--accent)' }} />
                        <span>{feature}</span>
                    </div>
                ))}
            </div>
        </div>
    );

    if (isMastermind) {
        return (
            <div style={{ display: 'flex' }}>
                <ElectricBorder
                    color="#f40b35"
                    speed={1}
                    chaos={0.13}
                    borderRadius={24}  
                    style={{ width: '100%' }}
                >
                    {cardContent}
                </ElectricBorder>
            </div>
        );
    }
    
    return (
        <div style={{ display: 'flex' }}>
            {cardContent}
        </div>
    );
};
