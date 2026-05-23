import { useState, useEffect } from 'react';

const TARGET = new Date('2026-07-12T09:00:00+05:30').getTime();

function getRemaining() {
  const diff = Math.max(0, TARGET - Date.now());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { days, hours, minutes, seconds };
}

const UNITS = [
  ['days', 'DAYS'],
  ['hours', 'HRS'],
  ['minutes', 'MIN'],
  ['seconds', 'SEC']
];

export default function Countdown() {
  const [t, setT] = useState(getRemaining);

  useEffect(() => {
    const id = setInterval(() => setT(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="countdown" role="timer" aria-label="Countdown to KIRA MUN 2026">
      {UNITS.map(([key, label]) => (
        <div className="countdown__unit" key={key}>
          <span className="countdown__value">{String(t[key]).padStart(2, '0')}</span>
          <span className="countdown__label">{label}</span>
        </div>
      ))}
    </div>
  );
}
