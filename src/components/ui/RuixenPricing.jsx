import React from 'react';
import NumberFlow from '@number-flow/react';
import { FaCheck } from 'react-icons/fa6';
import ElectricBorder from './ElectricBorder';
import './RuixenPricing.css';

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
    
    const cardContent = (
        <div className={`ruixen-card ${isMastermind ? "mastermind" : ""}`}>
            {isMastermind && (
                <div className="mastermind-glow"></div>
            )}

            <div className="ruixen-card-top">
                <h2 className="ruixen-card-title">{plan.title}</h2>
                <h3 className="ruixen-card-price" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
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
                </h3>
                <p className="ruixen-card-desc">{plan.desc}</p>
            </div>

            <div className="ruixen-card-middle" style={{ marginTop: "1rem" }}>
                <a href={contactHref} style={{ textDecoration: 'none' }}>
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
