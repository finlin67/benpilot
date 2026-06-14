"use client";

import { useEffect, useState } from "react";

const COLORS = ["#38bdf8", "#fbbf24", "#34d399", "#f472b6", "#a78bfa", "#fb923c"];

interface Particle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
}

export function Confetti() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.8,
      duration: 2 + Math.random() * 2,
      color: COLORS[i % COLORS.length],
      size: 6 + Math.random() * 6,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden" aria-hidden>
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute animate-confetti-fall rounded-sm"
          style={{
            left: `${p.left}%`,
            top: "-12px",
            width: p.size,
            height: p.size * 0.6,
            backgroundColor: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
