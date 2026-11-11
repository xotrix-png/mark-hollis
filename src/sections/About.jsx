import { useEffect, useState } from 'react'
import '../styles/about.css'

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
      <div className="about__shell">
        <header className="about__bar">
          <p className="about__kicker">03 / About</p>
        </header>

        <div className="about__stage">
          <div className="about__copy">
            <h2 className="about__title">
              <span>Designing with</span>
              <span>
                <em className="about__intention">intention</em>
              </span>
            </h2>

            <div className="about__aside">
              <p className="about__desc">
                Every garden begins with listening — to the land,
                <br />
                the light and the people who will live with it The result
                <br />
                is a place that feels inevitable, as if it had always
                been&nbsp;there
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
                alt="Mark Hollis, independent landscape architect"
                width={864}
                height={1152}
                decoding="async"
              />
            </div>
            <figcaption className="about__caption">
              Mark Hollis / Independent Landscape Architect
            </figcaption>
          </figure>

          {/* Left edge on markup grid line (rule 5 / col 6) */}
          <p className="about__signature">Mark Hollis</p>
        </div>
      </div>
    </section>
  )
}
