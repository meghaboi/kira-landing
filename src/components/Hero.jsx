import { Suspense, lazy } from 'react';

const Dither = lazy(() => import('./Dither.jsx'));

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg" />
      <div className="hero__dither">
        <Suspense fallback={null}>
          <Dither
            waveColor={[0.55, 0.05, 0.07]}
            waveSpeed={0.03}
            waveFrequency={3.2}
            waveAmplitude={0.32}
            colorNum={4}
            pixelSize={2}
            enableMouseInteraction={true}
            mouseRadius={0.1}
          />
        </Suspense>
      </div>
      <div className="hero__vignette" />

      {/* vertical accents, like the reference */}
      <div className="hero__kanji hero__kanji--left">EST · 2025</div>
      <div className="hero__kanji hero__kanji--right">CHAPTER · II</div>

      <div className="hero__content">
        <p className="hero__eyebrow">HYDERABAD&apos;S LARGEST PRIVATE MUN</p>
        <h1 className="hero__title">
          <span className="hero__title-top">KIRA</span>
          <span className="hero__title-bottom">MODEL UNITED NATIONS</span>
        </h1>
        <div className="hero__rule">
          <span></span>
          <span className="hero__rule-mark">⛩</span>
          <span></span>
        </div>
        <p className="hero__dates">JULY 12 · 13 · 14 — 2026</p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn--register">
            REGISTER NOW
          </a>
          <a href="#committees" className="btn btn--ghost">
            VIEW COMMITTEES
          </a>
        </div>
      </div>
    </section>
  );
}
