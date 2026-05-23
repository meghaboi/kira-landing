import FaultyTerminal from './FaultyTerminal.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__terminal" aria-hidden="true">
        <FaultyTerminal
          scale={1.6}
          gridMul={[2, 1]}
          digitSize={1.4}
          timeScale={0.4}
          scanlineIntensity={0.4}
          glitchAmount={1}
          flickerAmount={1}
          curvature={0.12}
          tint="#ff2b32"
          mouseReact={false}
          brightness={0.7}
        />
      </div>
      <div className="footer__top">
        <div className="footer__brand">
          <span className="footer__mark">KIRA</span>
          <span className="footer__jp">MODEL UNITED NATIONS · CHAPTER II</span>
          <p className="footer__tag">Hyderabad&apos;s largest private Model United Nations.</p>
        </div>
        <nav className="footer__links">
          <a href="#about">About</a>
          <a href="#committees">Committees</a>
          <a href="#schedule">Schedule</a>
          <a href="#contact">Register</a>
        </nav>
      </div>

      <div className="footer__bottom">
        <span>© 2026 KIRA MUN · Hyderabad</span>
        <span>Begin with respect, end with respect</span>
      </div>
    </footer>
  );
}
