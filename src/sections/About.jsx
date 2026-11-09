import { useEffect, useState } from 'react'
import '../styles/about.css'

function Signature() {
  return (
    <svg
      className="about__signature"
      viewBox="0 0 260 56"
      role="img"
      aria-label="Mark Vetrov signature"
    >
      <text
        x="0"
        y="36"
        fill="currentColor"
        fontFamily="'Segoe Script', 'Snell Roundhand', 'Brush Script MT', Georgia, cursive"
        fontStyle="italic"
        fontSize="34"
      >
        Mark Vetrov
      </text>
    </svg>
  )
}

export default function About() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <section
      id="about"
      className={ready ? 'about is-ready' : 'about'}
      aria-label="About"
    >
      <div className="about__rules" aria-hidden="true">
        {Array.from({ length: 13 }, (_, i) => (
          <span key={i} className="about__rule" style={{ ['--i']: i }} />
        ))}
      </div>

      <div className="about__shell">
        <header className="about__bar">
          <p className="about__kicker">04 / About</p>
        </header>

        <div className="about__stage">
          <div className="about__copy">
            <h2 className="about__title">
              <span>Designing with</span>
              <span>
                <em className="about__intention">intention.</em>
              </span>
            </h2>

            <div className="about__aside">
              <p className="about__desc">
                Every garden begins with listening — to the land, the light and
                the people who will live with it. The result is a place that
                feels inevitable, as if it had always been there.
              </p>
              <hr className="about__rule-line" />
              <p className="about__meta-line">
                Private Gardens · Courtyards · Country Estates
              </p>
            </div>
          </div>

          <figure className="about__portrait">
            <div className="about__portrait-frame">
              <img
                src="/images/about-portrait.jpg"
                alt="Mark Vetrov, independent landscape architect"
                width={864}
                height={1152}
              />
            </div>
            <figcaption className="about__caption">
              Mark Vetrov / Independent Landscape Architect
            </figcaption>
          </figure>

          {/* Left edge on rule 7 / col 8 — same as portrait (red-mark override) */}
          <div className="about__sign">
            <Signature />
          </div>
        </div>
      </div>
    </section>
  )
}
