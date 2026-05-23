const STATS = [
  { value: '6', label: 'Committees', tag: 'Arenas' },
  { value: '300+', label: 'Delegates', tag: 'Voices' },
  { value: '3', label: 'Days', tag: 'July 12–14' },
  { value: '#1', label: 'Private MUN · Hyderabad', tag: 'Ranked' }
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section__head">
        <span className="section__kicker">ABOUT</span>
        <h2 className="section__title">The Rising Sun of Diplomacy</h2>
      </div>

      <div className="about__grid">
        <div className="about__lead">
          <p>
            <span className="about__drop">K</span>IRA MUN returns for its second edition as
            Hyderabad&apos;s largest private Model United Nations. Beneath a sky of crimson and
            torii silhouettes, three days of debate transform students into statesmen — where
            rhetoric is a blade and consensus is the art.
          </p>
          <p>
            Inspired by the discipline of Japanese architecture — balance, restraint, and the
            quiet power of negotiation — KIRA brings together six committees spanning national
            politics, human rights, cinema, and crisis. Every placard raised is a decision that
            echoes.
          </p>
          <p className="about__sign">
            Begin with respect, end with respect.
          </p>
        </div>

        <div className="about__stats">
          {STATS.map(s => (
            <div key={s.label} className="stat">
              <span className="stat__jp">{s.tag}</span>
              <span className="stat__value">{s.value}</span>
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
