import React from 'react';
import './AnimatedPricingCards.css';

const Wave = () => (
  <svg
    width="129"
    height="1387"
    viewBox="0 0 129 1387"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="animate-waves"
  >
    <path
      d="M11.2131 11L106.283 106.07M106.283 106.07L117.279 117.066M106.283 106.07L22.2962 190.003M106.283 106.07L116.688 95.6708M11.2962 200.997L22.2962 190.003M22.2962 190.003L11.2529 178.96M22.2962 190.003L106.323 274.03M106.323 274.03L117.319 285.026M106.323 274.03L22.4537 357.846M106.323 274.03L116.728 263.631M11.3361 368.957L22.4537 357.846M22.4537 357.846L11.5493 346.901M22.4537 357.846L106.44 442.149M106.44 442.149L117.416 453.166M106.44 442.149L22.2962 525.925M106.44 442.149L116.865 431.769M11.2756 536.897L22.2962 525.925M22.2962 525.925L11.2737 514.861M22.2962 525.925L106.165 610.109M106.165 610.109L117.14 621.126M106.165 610.109L11 704.857M106.165 610.109L116.59 599.729M11.2131 683L106.283 778.07M106.283 778.07L117.279 789.066M106.283 778.07L22.2962 862.003M106.283 778.07L116.688 767.671M11.2962 872.997L22.2962 862.003M22.2962 862.003L11.2529 850.96M22.2962 862.003L106.323 946.03M106.323 946.03L117.319 957.026M106.323 946.03L22.4537 1029.85M106.323 946.03L116.728 935.631M11.3361 1040.96L22.4537 1029.85M22.4537 1029.85L11.5493 1018.9M22.4537 1029.85L106.44 1114.15M106.44 1114.15L117.416 1125.17M106.44 1114.15L22.2962 1197.92M106.44 1114.15L116.865 1103.77M11.2756 1208.9L22.2962 1197.92M22.2962 1197.92L11.2737 1186.86M22.2962 1197.92L106.165 1282.11M106.165 1282.11L117.14 1293.13M106.165 1282.11L11 1376.86M106.165 1282.11L116.59 1271.73"
      stroke="#282828"
      strokeWidth="31"
    />
  </svg>
);

const Cross = () => (
  <svg
    width="130"
    height="130"
    viewBox="0 0 130 130"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11 11L118.899 119M11.101 119L119 11" stroke="#282828" strokeWidth="31" />
  </svg>
);

export const PricingWrapper = ({
  children,
  contactHref,
  btnText = 'contact',
  className = '',
  type = 'waves'
}) => (
  <div className={`pricing-wrapper ${type} ${className}`}>
    <div className="pricing-content">
      {children}
      <div className="pricing-footer">
        {/* Replaced Next.js Link with standard anchor layout mapping */}
        <a href={contactHref} style={{ width: '100%', textDecoration: 'none' }}>
          <button className="pricing-btn">{btnText}</button>
        </a>
      </div>
    </div>
    {type === 'waves' && (
      <>
        <div className="wave-svg left">
          <Wave />
        </div>
        <div className="wave-svg right">
          <Wave />
        </div>
      </>
    )}
    {type === 'crosses' && (
      <>
        <div className="cross-svg cross-1"><Cross /></div>
        <div className="cross-svg cross-2"><Cross /></div>
        <div className="cross-svg cross-3"><Cross /></div>
      </>
    )}
  </div>
);

export const Heading = ({ children, className = '' }) => (
  <h2 className={`pricing-heading ${className}`}>{children}</h2>
);

export const Price = ({ children, className = '' }) => (
  <div className={`pricing-price ${className}`}>{children}</div>
);

export const Paragraph = ({ children, className = '' }) => (
  <p className={`pricing-paragraph ${className}`}>{children}</p>
);
