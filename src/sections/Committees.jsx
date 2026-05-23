import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const COMMITTEES = [
  {
    abbr: 'LS',
    roman: 'I',
    name: 'Lok Sabha',
    tag: 'National Politics',
    desc: "The lower house of India's Parliament. Spirited debate on the bills, motions and questions that shape a billion lives.",
    level: 'Intermediate'
  },
  {
    abbr: 'HR',
    roman: 'II',
    name: 'UNHRC',
    tag: 'United Nations Human Rights Council',
    desc: "Defending dignity across borders. Delegates confront the world's most urgent humanitarian crises and the politics behind them.",
    level: 'Advanced'
  },
  {
    abbr: 'IP',
    roman: 'III',
    name: 'International Press',
    tag: 'Journalists & Caricaturists',
    desc: 'The watchful eye of the conference. Reporters, photographers and cartoonists chronicle every committee and hold power to account.',
    level: 'All Levels'
  },
  {
    abbr: 'FI',
    roman: 'IV',
    name: 'Indian Film Industry',
    tag: 'Cinema & Culture',
    desc: 'Lights, camera, diplomacy. A creative committee where icons of Indian cinema negotiate the future of art, money and influence.',
    level: 'Beginner'
  },
  {
    abbr: 'DS',
    roman: 'V',
    name: 'DISEC',
    tag: 'Disarmament & International Security',
    desc: 'The first committee of the General Assembly. Tackle global security threats, arms control and the fragile balance of peace.',
    level: 'Advanced'
  },
  {
    abbr: 'DH',
    roman: 'VI',
    name: 'Dhurandhar',
    tag: 'Crisis · Specialised',
    desc: 'A high-octane crisis committee. Fast-paced, secretive and unpredictable — only the sharpest survive the shifting battlefield.',
    level: 'Expert'
  }
];

export default function Committees() {
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cmte', {
        opacity: 0,
        y: 48,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.09,
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 82%',
          once: true
        }
      });
    }, gridRef);
    return () => ctx.revert();
  }, []);

  const handleMove = e => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty('--mx', `${px * 100}%`);
    el.style.setProperty('--my', `${py * 100}%`);
    el.style.setProperty('--ry', `${(px - 0.5) * 10}deg`);
    el.style.setProperty('--rx', `${(0.5 - py) * 10}deg`);
  };

  const handleLeave = e => {
    const el = e.currentTarget;
    el.style.setProperty('--ry', '0deg');
    el.style.setProperty('--rx', '0deg');
  };

  return (
    <section id="committees" className="section committees">
      <div className="section__head">
        <span className="section__kicker">COMMITTEES</span>
        <h2 className="section__title">Our Committees</h2>
        <p className="section__sub">Six arenas. One red sky. Choose where your voice is heard.</p>
      </div>

      <div className="committees__grid" ref={gridRef}>
        {COMMITTEES.map((c, i) => (
          <article
            className="cmte"
            key={c.name}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
          >
            <span className="cmte__glow" aria-hidden="true" />
            <div className="cmte__top">
              <span className="cmte__index">0{i + 1}</span>
              <span className="cmte__jp">{c.roman}</span>
            </div>
            <div className="cmte__abbr">{c.abbr}</div>
            <h3 className="cmte__name">{c.name}</h3>
            <p className="cmte__tag">{c.tag}</p>
            <p className="cmte__desc">{c.desc}</p>
            <div className="cmte__foot">
              <span className="cmte__level">{c.level}</span>
              <span className="cmte__arrow">→</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
