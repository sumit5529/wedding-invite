import { useEffect, useState } from 'react';
import { wedding } from '../data';
import Reveal from './Reveal';
import GoldDivider from './GoldDivider';

function timeLeft(target) {
  const diff = Math.max(0, new Date(target) - new Date());
  return [
    ['दिन', Math.floor(diff / 86400000)],
    ['घंटे', Math.floor(diff / 3600000) % 24],
    ['मिनट', Math.floor(diff / 60000) % 60],
    ['सेकंड', Math.floor(diff / 1000) % 60],
  ];
}

export default function Countdown() {
  const [left, setLeft] = useState(() => timeLeft(wedding.countdownTarget));

  useEffect(() => {
    const timer = setInterval(() => setLeft(timeLeft(wedding.countdownTarget)), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section countdown">
      <Reveal>
        <h2 className="heading">शुभ घड़ी की प्रतीक्षा</h2>
        <GoldDivider />
        <p className="countdown__date">
          {wedding.datesText} {wedding.year}
        </p>
        <div className="countdown__tiles">
          {left.map(([label, value]) => (
            <div key={label} className="tile">
              <span className="tile__num">{String(value).padStart(2, '0')}</span>
              <span className="tile__label">{label}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
