import React from "react";
import "./BubbleText.css";

export default function BubbleText({ text = "Bubbbbbbbble text" }) {
  const words = text.split(" ");

  return (
    <h2 className="bubble-text-container">
      {words.map((word, wordIdx) => {
        const wordChars = word.split("").map((char, charIdx) => {
          return (
            <span
              key={charIdx}
              className="bubble-char"
            >
              {char}
            </span>
          );
        });

        const hasSpace = wordIdx !== words.length - 1;

        return (
          <span key={wordIdx} className="bubble-word">
            {wordChars}
            {hasSpace && (
              <span className="bubble-char">
                {"\u00A0"}
              </span>
            )}
          </span>
        );
      })}
    </h2>
  );
}
