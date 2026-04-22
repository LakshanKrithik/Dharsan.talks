import React, { useState } from "react";
import "./BubbleText.css";

export default function BubbleText({ text = "Bubbbbbbbble text" }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const words = text.split(" ");
  let charIndex = 0;

  return (
    <h2
      onMouseLeave={() => setHoveredIndex(null)}
      className="bubble-text-container"
    >
      {words.map((word, wordIdx) => {
        const wordChars = word.split("").map((char) => {
          const idx = charIndex++;
          const distance = hoveredIndex !== null ? Math.abs(hoveredIndex - idx) : null;
          
          let classes = "bubble-char";
          if (distance === 0) classes += " hover-0";
          else if (distance === 1) classes += " hover-1";
          else if (distance === 2) classes += " hover-2";

          return (
            <span
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              className={classes}
            >
              {char}
            </span>
          );
        });

        const hasSpace = wordIdx !== words.length - 1;
        const spaceIdx = charIndex;
        if (hasSpace) charIndex++;

        let spaceClasses = "bubble-char";
        if (hasSpace) {
          const distance = hoveredIndex !== null ? Math.abs(hoveredIndex - spaceIdx) : null;
          if (distance === 0) spaceClasses += " hover-0";
          else if (distance === 1) spaceClasses += " hover-1";
          else if (distance === 2) spaceClasses += " hover-2";
        }

        return (
          <span key={wordIdx} className="bubble-word">
            {wordChars}
            {hasSpace && (
              <span
                key={spaceIdx}
                onMouseEnter={() => setHoveredIndex(spaceIdx)}
                className={spaceClasses}
              >
                {"\u00A0"}
              </span>
            )}
          </span>
        );
      })}
    </h2>
  );
}
