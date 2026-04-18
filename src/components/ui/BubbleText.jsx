import React, { useState } from "react";
import "./BubbleText.css";

export default function BubbleText({ text = "Bubbbbbbbble text" }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <h2
      onMouseLeave={() => setHoveredIndex(null)}
      className="bubble-text-container"
    >
      {text.split("").map((char, idx) => {
        const distance = hoveredIndex !== null ? Math.abs(hoveredIndex - idx) : null;
        
        let classes = "bubble-char";
        
        switch (distance) {
          case 0:
            classes += " hover-0";
            break;
          case 1:
            classes += " hover-1";
            break;
          case 2:
            classes += " hover-2";
            break;
          default:
            break;
        }

        return (
          <span
            key={idx}
            onMouseEnter={() => setHoveredIndex(idx)}
            className={classes}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        );
      })}
    </h2>
  );
}
