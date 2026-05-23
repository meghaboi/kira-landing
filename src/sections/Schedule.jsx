const DAYS = [
  {
    date: 'JULY 12',
    day: 'Day One',
    jp: 'I',
    title: 'Opening Ceremony',
    items: ['Registration & Kit Distribution', 'Inaugural Address', 'Committee Session I', 'Ice-breaker & Lobbying']
  },
  {
    date: 'JULY 13',
    day: 'Day Two',
    jp: 'II',
    title: 'The Heart of Debate',
    items: ['Committee Session II', 'Working Papers & Caucus', 'Crisis Updates · Dhurandhar', 'Socials Night']
  },
  {
    date: 'JULY 14',
    day: 'Day Three',
    jp: 'III',
    title: 'Resolution & Honours',
    items: ['Final Committee Session', 'Voting Procedure', 'Awards & Closing Ceremony', 'Group Photograph']
  }
];

export default function Schedule() {
  return (
    <section id="schedule" className="section schedule">
      <div className="section__head">
        <span className="section__kicker">SCHEDULE</span>
        <h2 className="section__title">Three Days Under the Red Sky</h2>
        <p className="section__sub">12 — 14 July 2026 · Hyderabad</p>
      </div>

      <div className="schedule__grid">
        {DAYS.map(d => (
          <div className="day" key={d.date}>
            <div className="day__head">
              <span className="day__jp">{d.jp}</span>
              <span className="day__date">{d.date}</span>
              <span className="day__label">{d.day}</span>
            </div>
            <h3 className="day__title">{d.title}</h3>
            <ul className="day__items">
              {d.items.map(it => (
                <li key={it}>
                  <span className="day__bullet">⛩</span>
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
