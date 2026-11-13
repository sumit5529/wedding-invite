import { useState } from 'react';

function makePetals(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: 6 + Math.random() * 8,
    duration: 10 + Math.random() * 12,
    delay: -Math.random() * 20,
    drift: (Math.random() * 2 - 1) * 80,
    rotate: Math.random() * 360,
  }));
}

export default function Petals({ count = 24 }) {
  const [petals] = useState(() => makePetals(count));

  return (
    <div className="petals" aria-hidden="true">
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 0.6,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            '--drift': `${p.drift}px`,
            '--rot': `${p.rotate}deg`,
          }}
        />
      ))}
    </div>
  );
}
