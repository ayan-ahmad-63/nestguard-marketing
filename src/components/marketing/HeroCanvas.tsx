"use client";
import React, { useEffect, useRef } from "react";

type Variant = "platform" | "security" | "hardware" | "how-it-works" | "construction" | "docs" | "default";
type Align = "left" | "center";

// Canvas animation uses any[] intentionally — each variant populates distinct field shapes
// that are guarded at runtime. Strict typing would require per-variant discriminated unions
// with excessive type casting throughout the draw loop.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CanvasParticle = Record<string, any>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CanvasLine = Record<string, any>;

const VARIANT_COLORS: Record<Variant, string> = {
  platform: "#ff6b00",
  security: "#ff6b00",
  hardware: "#ff6b00",
  "how-it-works": "#ff6b00",
  construction: "#ffb067",
  docs: "#ffffff",
  default: "#ffffff",
};

export default function HeroCanvas({ variant = "default", align = "center" }: { variant?: Variant; align?: Align }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;
    
    // State for different animations
    let particles: CanvasParticle[] = [];
    let lines: CanvasLine[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const init = () => {
      const color = VARIANT_COLORS[variant];
      
      if (variant === "platform" || variant === "default") {
        particles = [];
        const numParticles = window.innerWidth < 768 ? 30 : 60;
        for (let i = 0; i < numParticles; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            radius: Math.random() * 2 + 0.5,
            alpha: Math.random() * 0.5 + 0.1,
          });
        }
      } else if (variant === "hardware") {
        lines = [];
        const numLines = window.innerWidth < 768 ? 10 : 20;
        for (let i = 0; i < numLines; i++) {
          lines.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            length: Math.random() * 100 + 50,
            speed: (Math.random() * 0.7 + 0.3) * (Math.random() > 0.5 ? 1 : -1),
            isHorizontal: Math.random() > 0.5,
            alpha: Math.random() * 0.3 + 0.1,
          });
        }
      } else if (variant === "how-it-works") {
        particles = [];
        const numParticles = window.innerWidth < 768 ? 40 : 80;
        for (let i = 0; i < numParticles; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speed: Math.random() * 1.5 + 0.5,
            size: Math.random() * 1.5 + 0.5,
            alpha: Math.random() * 0.4 + 0.1,
          });
        }
      } else if (variant === "construction") {
        lines = [];
        const numLines = window.innerWidth < 768 ? 15 : 30;
        for (let i = 0; i < numLines; i++) {
          lines.push({
            x: Math.random() * canvas.width * 2 - canvas.width,
            y: Math.random() * canvas.height * 2 - canvas.height,
            length: Math.random() * 200 + 100,
            speed: Math.random() * 2 + 1,
            width: Math.random() * 8 + 2,
            alpha: Math.random() * 0.2 + 0.05,
          });
        }
      } else if (variant === "docs") {
        lines = []; // clear any previous lines
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const color = VARIANT_COLORS[variant];
      time += 0.01;

      // Base translation
      const centerX = align === "left" ? canvas.width * 0.75 : canvas.width / 2;
      const centerY = canvas.height / 2;

      if (variant === "platform" || variant === "default") {
        // Data Constellation
        particles.forEach((p, i) => {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.globalAlpha = Math.min(1, p.alpha * 1.5); // Increased alpha
          ctx.fill();

          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 120) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = color;
              ctx.globalAlpha = (1 - dist / 120) * 0.4; // Increased from 0.15 to 0.4
              ctx.stroke();
            }
          }
        });
      } else if (variant === "security") {
        const maxRadius = Math.max(canvas.width, canvas.height);
        
        // Concentric rings (static)
        for (let r = 50; r < maxRadius; r += 100) {
          ctx.beginPath();
          ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
          ctx.strokeStyle = color;
          ctx.globalAlpha = 0.15;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Rotating radar line (no fill, just the line)
        const angle = time * 2;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(centerX + Math.cos(angle) * maxRadius, centerY + Math.sin(angle) * maxRadius);
        ctx.strokeStyle = color;
        ctx.globalAlpha = 0.5;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      } else if (variant === "hardware") {
        // Circuit Grid Flow
        lines.forEach(l => {
          if (l.isHorizontal) {
            l.x += l.speed;
            if (l.x > canvas.width + l.length) l.x = -l.length;
            if (l.x < -l.length) l.x = canvas.width + l.length;
            
            ctx.beginPath();
            ctx.moveTo(l.x, l.y);
            ctx.lineTo(l.x + l.length, l.y);
          } else {
            l.y += l.speed;
            if (l.y > canvas.height + l.length) l.y = -l.length;
            if (l.y < -l.length) l.y = canvas.height + l.length;
            
            ctx.beginPath();
            ctx.moveTo(l.x, l.y);
            ctx.lineTo(l.x, l.y + l.length);
          }
          
          ctx.strokeStyle = color;
          ctx.globalAlpha = Math.min(1, l.alpha * 2); // Increased alpha
          ctx.lineWidth = 2;
          ctx.stroke();
          
          // Draw node at head
          ctx.beginPath();
          ctx.arc(l.isHorizontal ? (l.speed > 0 ? l.x + l.length : l.x) : l.x, 
                  l.isHorizontal ? l.y : (l.speed > 0 ? l.y + l.length : l.y), 
                  4, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.globalAlpha = Math.min(1, l.alpha * 3); // Increased alpha
          ctx.fill();
        });
      } else if (variant === "how-it-works") {
        // Vertical Data Stream (Matrix-like particles falling)
        ctx.fillStyle = color;
        particles.forEach((p) => {
          p.y += p.speed;
          if (p.y > canvas.height) {
            p.y = -10;
            p.x = Math.random() * canvas.width;
          }
          
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.globalAlpha = p.alpha;
          ctx.fill();

          // Add a subtle tail fading upwards
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x, p.y - p.speed * 8);
          ctx.strokeStyle = color;
          ctx.globalAlpha = p.alpha * 0.3;
          ctx.lineWidth = p.size;
          ctx.stroke();
        });
      } else if (variant === "construction") {
        // Diagonal hazard/construction beams
        ctx.fillStyle = color;
        lines.forEach((l) => {
          l.x += l.speed;
          l.y += l.speed;
          
          if (l.x - l.length > canvas.width || l.y - l.length > canvas.height) {
            if (Math.random() > 0.5) {
              l.x = Math.random() * canvas.width;
              l.y = -l.length;
            } else {
              l.x = -l.length;
              l.y = Math.random() * canvas.height;
            }
          }
          
          ctx.beginPath();
          ctx.moveTo(l.x, l.y);
          ctx.lineTo(l.x - l.length, l.y - l.length);
          ctx.strokeStyle = color;
          ctx.globalAlpha = l.alpha;
          ctx.lineWidth = l.width;
          ctx.stroke();
        });
      } else if (variant === "docs") {
        // Perspective Tech Grid (Synthwave style)
        const vanishingPoint = { x: canvas.width / 2, y: canvas.height * 0.25 };
        
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        
        // Moving horizontal lines
        const cycle = (time * 0.8) % 1; 
        
        for (let i = 0; i < 35; i++) {
          const z = i + cycle;
          const yDist = Math.pow(1.18, z) * 10;
          const y = vanishingPoint.y + yDist;
          
          if (y < canvas.height && y > vanishingPoint.y) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            
            // Fade based on distance from vanishing point
            let alpha = Math.min(0.25, (y - vanishingPoint.y) / (canvas.height * 0.4));
            ctx.globalAlpha = Math.max(0, alpha);
            ctx.stroke();
          }
        }
        
        // Radiating vertical lines
        const numVLines = window.innerWidth < 768 ? 16 : 32;
        const spacing = canvas.width / numVLines;
        ctx.globalAlpha = 0.1;
        for (let i = -numVLines; i <= numVLines * 2; i++) {
          const bottomX = (i * spacing) - (canvas.width * 0.5); 
          ctx.beginPath();
          ctx.moveTo(vanishingPoint.x, vanishingPoint.y);
          ctx.lineTo(vanishingPoint.x + bottomX * 4, canvas.height);
          ctx.stroke();
        }

        // Glowing vanishing point orb
        const gradient = ctx.createRadialGradient(vanishingPoint.x, vanishingPoint.y, 0, vanishingPoint.x, vanishingPoint.y, 250);
        gradient.addColorStop(0, `${color}30`);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.arc(vanishingPoint.x, vanishingPoint.y, 250, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("resize", resize);
    resize();
    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [variant, align]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-80 md:opacity-100">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
