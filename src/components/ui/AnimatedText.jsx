import React from "react";
import { motion } from "framer-motion";

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

const AnimatedText = React.forwardRef(
  (
    {
      text,
      gradientColors = "linear-gradient(90deg, #3D6ED6, #ffffff, #3D6ED6)",
      gradientAnimationDuration = 4,
      hoverEffect = false,
      className,
      textClassName,
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const textVariants = {
      initial: {
        backgroundPosition: "0 0",
      },
      animate: {
        backgroundPosition: "200% 0",
        transition: {
          duration: gradientAnimationDuration,
          repeat: Infinity,
          ease: "linear",
        },
      },
    };

    return (
      <div
        ref={ref}
        className={cn("flex justify-center items-center py-8", className)}
        {...props}
      >
        <motion.h1
          className={cn("leading-normal", textClassName)}
          style={{
            background: gradientColors,
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: isHovered ? "0 0 8px rgba(255,255,255,0.3)" : "none",
            fontSize: "clamp(2.5rem, 6vw, 6rem)"
          }}
          variants={textVariants}
          initial="initial"
          animate="animate"
          onHoverStart={() => hoverEffect && setIsHovered(true)}
          onHoverEnd={() => hoverEffect && setIsHovered(false)}
        >
          {text}
        </motion.h1>
      </div>
    );
  }
);

AnimatedText.displayName = "AnimatedText";

export { AnimatedText };
