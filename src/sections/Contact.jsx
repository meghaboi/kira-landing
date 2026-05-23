import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="section contact">
      <div className="contact__inner">
        <div className="contact__left">
          <span className="section__kicker">REGISTER</span>
          <h2 className="section__title">Claim Your Placard</h2>
          <p className="contact__lead">
            Registrations for KIRA MUN 2026 are open. Secure your seat across six committees and
            three days of diplomacy. Delegations and individual delegates welcome.
          </p>

          <ul className="contact__meta">
            <li>
              <span className="contact__meta-jp">⛩</span>
              <span>Hyderabad, Telangana, India</span>
            </li>
            <li>
              <span className="contact__meta-jp">⛩</span>
              <span>12 — 14 July 2026</span>
            </li>
            <li>
              <span className="contact__meta-jp">⛩</span>
              <span>register@kiramun.in</span>
            </li>
            <li>
              <span className="contact__meta-jp">⛩</span>
              <span>+91 90000 00000</span>
            </li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          {sent ? (
            <div className="contact__success">
              <span className="contact__success-mark">⛩</span>
              <h3>Thank You</h3>
              <p>Your interest has been recorded. Our secretariat will reach out shortly.</p>
            </div>
          ) : (
            <>
              <label>
                Full Name
                <input type="text" name="name" placeholder="Your name" required />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="you@email.com" required />
              </label>
              <label>
                Institution
                <input type="text" name="institution" placeholder="School / College" />
              </label>
              <label>
                Committee Preference
                <select name="committee" defaultValue="">
                  <option value="" disabled>
                    Select a committee
                  </option>
                  <option>Lok Sabha</option>
                  <option>UNHRC</option>
                  <option>International Press</option>
                  <option>Indian Film Industry</option>
                  <option>DISEC</option>
                  <option>Dhurandhar</option>
                </select>
              </label>
              <button type="submit" className="btn btn--register contact__submit">
                REGISTER NOW
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
