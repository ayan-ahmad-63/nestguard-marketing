"use client";
import React, { useState, useEffect } from "react";

export default function Typewriter({ 
  words, 
  speed = 40, 
  eraseSpeed = 20,
  delay = 500,
  pause = 1500
}: { 
  words: string[]; 
  speed?: number; 
  eraseSpeed?: number;
  delay?: number;
  pause?: number;
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsStarted(true);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!isStarted) return;
    
    const currentWord = words[wordIndex];
    let timer: NodeJS.Timeout;
    
    if (isDeleting) {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length - 1));
        }, eraseSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      if (displayedText.length < currentWord.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, speed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pause);
      }
    }
    
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, isStarted, wordIndex, words, speed, eraseSpeed, pause]);

  const isPaused = !isStarted || (!isDeleting && displayedText === words[wordIndex]);

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
            animation: isPaused ? "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite" : "none",
            opacity: isPaused ? undefined : 1
          }}
        />
      </span>
    </div>
  );
}
