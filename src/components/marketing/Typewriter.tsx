"use client";
import React, { useState, useEffect } from "react";

export default function Typewriter({ text, speed = 40, delay = 500 }: { text: string; speed?: number; delay?: number }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsStarted(true);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!isStarted) return;
    
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        setIsFinished(true);
      }
    }, speed);
    
    return () => clearInterval(interval);
  }, [text, speed, isStarted]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.22em", overflow: "hidden", paddingBottom: "0.08em", marginBottom: "0.02em", justifyContent: "center" }}>
      <span style={{ display: "inline-block", minWidth: "1ch" }}>
        {displayedText}
        <span 
          style={{ 
            display: "inline-block", 
            width: "2px", 
            height: "0.85em", 
            background: "currentColor", 
            marginLeft: "2px", 
            verticalAlign: "middle",
            opacity: isFinished ? 0 : 1,
            animation: isFinished ? "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite" : "none"
          }}
        />
      </span>
    </div>
  );
}
