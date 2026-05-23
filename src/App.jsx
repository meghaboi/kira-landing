import { useState, useEffect } from 'react';
import Loader from './components/Loader.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import CurvedLoop from './components/CurvedLoop.jsx';
import About from './sections/About.jsx';
import Committees from './sections/Committees.jsx';
import Schedule from './sections/Schedule.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);

  return (
    <div className="app">
      {loading && <Loader onFinish={() => setLoading(false)} />}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <div className="ribbon-band ribbon-band--top" aria-hidden="true">
          <CurvedLoop
            marqueeText="KIRA MUN ✦ DIPLOMACY BENEATH THE RED SKY ✦ CHAPTER II ✦"
            speed={1.4}
            curveAmount={90}
            bandColor="#c8161d"
            bandWidth={64}
            bandOffset={22}
            className="ribbon-band__text"
          />
        </div>
        <About />
        <Committees />
        <Schedule />
        <Contact />
        <div className="ribbon-band ribbon-band--bottom" aria-hidden="true">
          <CurvedLoop
            marqueeText="REGISTER NOW ✦ JULY 12 · 13 · 14 — 2026 ✦ HYDERABAD ✦"
            speed={1.4}
            curveAmount={-90}
            direction="right"
            bandColor="#c8161d"
            bandWidth={64}
            bandOffset={22}
            className="ribbon-band__text"
          />
        </div>
      </main>
      <Footer />
      <div className="subfooter">
        powered by{' '}
        <a href="https://telugu.social" target="_blank" rel="noopener noreferrer">
          telugu.social
        </a>
      </div>
    </div>
  );
}
