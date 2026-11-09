import { useEffect, useState } from 'react'
import HeroNav from '../components/HeroNav.jsx'
import '../styles/hero.css'

function HeadlineLines() {
  return (
    <>
      <span>Spaces shaped</span>
      <span>
        by <em className="hero__nature">nature</em>
      </span>
      <span>Considered by people</span>
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
      <div className="hero__rules" aria-hidden="true">
        {Array.from({ length: 13 }, (_, i) => (
          <span key={i} className="hero__rule" style={{ ['--i']: i }} />
        ))}
      </div>

      <div className="hero__shell">
        <HeroNav />

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

            <p className="hero__desc">
              Private gardens and landscapes designed as a quiet continuation
              of the architecture around them.
            </p>

            <a className="hero__cta" href="#contact">
              Discuss a Project <span aria-hidden="true">→</span>
            </a>
          </div>

          <figure className="hero__main">
            <img
              src="/images/hero-main-landscape.jpg"
              alt="Private residence landscape with stone path, reflecting pool, and birch trees in mist"
              width={1280}
              height={720}
              fetchPriority="high"
            />
          </figure>
        </div>

        <footer className="hero__foot">
          <div className="hero__foot-left">
            <figure className="hero__detail">
              <img
                src="/images/hero-detail-grass.jpg"
                alt="Close-up of ornamental grass among stones"
                width={864}
                height={1152}
              />
            </figure>
            <p className="hero__project">01 / 06 — Private Residence</p>
          </div>

          <p className="hero__coords">(01) N 53°54′ E 27°34′</p>
        </footer>
      </div>
    </section>
  )
}
