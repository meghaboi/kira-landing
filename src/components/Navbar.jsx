const LINKS = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'COMMITTEES', href: '#committees' },
  { label: 'SCHEDULE', href: '#schedule' },
  { label: 'CONTACT', href: '#contact' }
];

export default function Navbar({ menuOpen, setMenuOpen }) {
  const close = () => setMenuOpen(false);

  return (
    <header className={`nav ${menuOpen ? 'is-menu-open' : ''}`}>
      <a href="#home" className="nav__brand" onClick={close}>
        <span className="nav__brand-mark">KIRA</span>
        <span className="nav__brand-sub">MODEL UN · 2026</span>
      </a>

      <nav className={`nav__links ${menuOpen ? 'is-open' : ''}`}>
        {LINKS.map(l => (
          <a key={l.href} href={l.href} onClick={close}>
            {l.label}
          </a>
        ))}
        <a href="#contact" className="btn btn--register nav__cta-mobile" onClick={close}>
          REGISTER NOW
        </a>
      </nav>

      <a href="#contact" className="btn btn--register nav__cta">
        REGISTER NOW
      </a>

      <button
        className={`nav__burger ${menuOpen ? 'is-open' : ''}`}
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
