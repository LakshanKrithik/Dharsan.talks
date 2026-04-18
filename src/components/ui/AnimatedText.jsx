import React, { useState } from "react";
import { motion } from "framer-motion";

const AnimatedText = React.forwardRef(
  (
    {
      text,
      gradientColors = "linear-gradient(90deg, #999, #fff, #999)",
      gradientAnimationDuration = 4,
      hoverEffect = false,
      className = "",
      textClassName = "",
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = useState(false);

    const textVariants = {
      initial: {
        backgroundPosition: "0 0",
      },
      animate: {
        backgroundPosition: "100% 0",
        transition: {
          duration: gradientAnimationDuration,
          repeat: Infinity,
          repeatType: "reverse",
        },
      },
    };

    return (
      <div
        ref={ref}
        className={className}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        {...props}
      >
        <motion.h2
          className={textClassName}
          style={{
            background: gradientColors,
            backgroundSize: "300% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: isHovered ? "0 0 8px rgba(255,255,255,0.3)" : "none",
            textAlign: 'center',
            margin: 0
          }}
          variants={textVariants}
          initial="initial"
          animate="animate"
          onHoverStart={() => hoverEffect && setIsHovered(true)}
          onHoverEnd={() => hoverEffect && setIsHovered(false)}
        >
          {text}
        </motion.h2>
      </div>
    );
  }
);

AnimatedText.displayName = "AnimatedText";

export { AnimatedText };
