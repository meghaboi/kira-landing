import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import Dither from './Dither.jsx';
import './Loader.css';

const LETTERS = ['K', 'I', 'R', 'A'];

export default function Loader({ onFinish }) {
  const root = useRef(null);
  const countRef = useRef(null);

  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (reduce) {
        if (countRef.current) countRef.current.textContent = '100';
        gsap.delayedCall(0.4, () => onFinish && onFinish());
        return;
      }

      const counter = { v: 0 };
      const tl = gsap.timeline({
        defaults: { ease: 'power4.out' },
        onComplete: () => onFinish && onFinish()
      });

      // intro fades
      tl.from('.loader__eyebrow', { opacity: 0, y: 14, duration: 0.6 }, 0.1)
        // masked letter reveal
        .from(
          '.loader__ltr-inner',
          { yPercent: 120, opacity: 0, filter: 'blur(18px)', duration: 1, stagger: 0.11 },
          0.2
        )
        .from('.loader__sub', { opacity: 0, y: 16, duration: 0.7 }, '-=0.5')
        // progress bar + counter run together
        .to('.loader__bar-fill', { scaleX: 1, duration: 2.1, ease: 'power1.inOut' }, 0.3)
        .to(
          counter,
          {
            v: 100,
            duration: 2.1,
            ease: 'power1.inOut',
            onUpdate: () => {
              if (countRef.current) {
                countRef.current.textContent = String(Math.round(counter.v)).padStart(3, '0');
              }
            }
          },
          0.3
        )
        // a quick glitch flicker on KIRA at the end
        .to('.loader__title', { x: -6, skewX: 4, duration: 0.05, repeat: 3, yoyo: true }, '-=0.25')
        .to('.loader__title', { x: 0, skewX: 0, duration: 0.05 })
        // punch the title forward as we leave
        .to('.loader__content', { scale: 1.08, duration: 0.9, ease: 'power2.in' }, '+=0.15')
        .to('.loader__content', { opacity: 0, duration: 0.5 }, '<0.25')
        // wipe the whole panel upward, revealing the site
        .to(
          root.current,
          { yPercent: -100, duration: 1, ease: 'power4.inOut' },
          '-=0.35'
        );
    }, root);

    return () => ctx.revert();
  }, [onFinish]);

  return (
    <div className="loader" ref={root}>
      <div className="loader__dither">
        <Dither
          waveColor={[0.72, 0.06, 0.08]}
          waveSpeed={0.06}
          waveFrequency={4}
          waveAmplitude={0.42}
          colorNum={4}
          pixelSize={3}
          enableMouseInteraction={false}
        />
      </div>
      <div className="loader__scan" />
      <div className="loader__grain" />

      <span className="loader__corner loader__corner--tl">⛩</span>
      <span className="loader__corner loader__corner--tr">CH·II</span>
      <span className="loader__corner loader__corner--bl">HYDERABAD</span>

      <div className="loader__content">
        <p className="loader__eyebrow">KIRA · MODEL UNITED NATIONS</p>
        <h1 className="loader__title" aria-label="KIRA">
          {LETTERS.map((l, i) => (
            <span className="loader__ltr" key={i}>
              <span className="loader__ltr-inner">{l}</span>
            </span>
          ))}
        </h1>
        <p className="loader__sub">CHAPTER II · DIPLOMACY BENEATH THE RED SKY</p>
        <div className="loader__progress">
          <span className="loader__progress-label">LOADING</span>
          <div className="loader__bar">
            <span className="loader__bar-fill" />
          </div>
          <span className="loader__count" ref={countRef} aria-hidden="true">
            000
          </span>
        </div>
      </div>
    </div>
  );
}
