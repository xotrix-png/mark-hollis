import { useEffect, useState } from 'react'
import '../styles/hero.css'

function HeadlineLines() {
  return (
    <>
      <span>Spaces shaped</span>
      <span>
        by <em className="hero__nature">nature</em>
      </span>
      <span>
        {'Considered by pe'}
        <span className="hero__people-o">o</span>
        {'ple'}
      </span>
    </>
  )
}

export default function Hero() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <section
      id="top"
      className={ready ? 'hero is-ready' : 'hero'}
      aria-label="Introduction"
    >
      <div className="hero__shell">
        <div className="hero__stage">
          <div className="hero__copy">
            <div className="hero__title-split">
              <h1 className="hero__title hero__title--graphite">
                <HeadlineLines />
              </h1>
              <p className="hero__title hero__title--ivory" aria-hidden="true">
                <HeadlineLines />
              </p>
            </div>

            <div className="hero__aside">
              <p className="hero__desc">
                Independent landscape architect creating thoughtful private
                gardens and outdoor environments
              </p>
              <hr className="hero__aside-rule" />
              <p className="hero__meta-line">
                Private Gardens · Spatial Design · Landscape Architecture
              </p>
            </div>
          </div>

          <figure className="hero__main">
            <img
              src="/images/hero-main-landscape.jpg"
              alt="Private residence landscape with stone path, reflecting pool, and birch trees in mist"
              width={1280}
              height={720}
              fetchPriority="high"
              decoding="async"
            />
          </figure>
        </div>

        {/* Spacer only — detail/label abspos to shell (never under a transforming foot) */}
        <div className="hero__foot" aria-hidden="true" />
        <figure className="hero__detail">
          <img
            src="/images/hero-detail-grass.jpg"
            alt="Dry grass between rocks with misty residence beyond"
            width={864}
            height={1152}
            decoding="async"
          />
        </figure>
        <p className="hero__project">01 / 06 — Private Residence</p>
        <p className="hero__locale">©2026 — Hudson Valley, NY</p>
      </div>
    </section>
  )
}
