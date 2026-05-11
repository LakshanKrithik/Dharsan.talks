import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './SpotlightBackground.css';

// Individual Spotlight element
const Spotlight = ({ className, ...props }) => {
  return (
    <motion.div
      className={`spotlight ${className}`}
      {...props}
    />
  );
};

// SpotlightBackground container
const SpotlightBackground = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth <= 768);
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="spotlight-container">
      <div className="spotlight-overlay">
        <Spotlight
          initial={{ x: "-50%", y: "-50%", rotate: "0deg", opacity: isMobile ? 0.3 : 1 }}
          animate={isMobile ? { opacity: 0.3 } : {
            x: ["-50%", "-30%", "-70%", "-50%"],
            y: ["-50%", "-70%", "-30%", "-50%"],
            rotate: ["0deg", "15deg", "-15deg", "0deg"],
          }}
          transition={isMobile ? {} : {
            duration: 12,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="spotlight-left"
        />

        {!isMobile && (
          <Spotlight
            initial={{ x: "0%", y: "0%", rotate: "0deg" }}
            animate={{
              x: ["0%", "20%", "-20%", "0%"],
              y: ["0%", "30%", "10%", "0%"],
              rotate: ["-20deg", "0deg", "20deg", "-20deg"],
            }}
            transition={{
              duration: 15,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
              delay: 3,
            }}
            className="spotlight-mid"
          />
        )}

        <Spotlight
          initial={{ x: "0%", y: "0%", rotate: "10deg", opacity: isMobile ? 0.3 : 1 }}
          animate={isMobile ? { opacity: 0.3 } : {
            x: ["0%", "-30%", "10%", "0%"],
            y: ["0%", "-20%", "20%", "0%"],
            rotate: ["10deg", "-10deg", "25deg", "10deg"],
          }}
          transition={isMobile ? {} : {
            duration: 18,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
            delay: 5,
          }}
          className="spotlight-right"
        />
      </div>

      <div className="spotlight-content">
        {children}
      </div>
      
      {/* Top fade mask to blend seamlessly with the Aurora section above */}
      <div className="spotlight-top-mask"></div>
    </div>
  );
};

export default SpotlightBackground;
