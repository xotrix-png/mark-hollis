import { useEffect, useState } from 'react'
import HeroNav from '../components/HeroNav.jsx'
import '../styles/hero.css'

export default function Hero() {
  const [ready, setReady] = useState(false)
  const [settled, setSettled] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true))
    const settleTimer = window.setTimeout(() => setSettled(true), 880)

    return () => {
      cancelAnimationFrame(frame)
      window.clearTimeout(settleTimer)
    }
  }, [])

  const className = [
    'hero',
    ready ? 'is-ready' : '',
    settled ? 'is-settled' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section id="top" className={className} aria-label="Introduction">
      <div className="hero__media" aria-hidden="true">
        <img
          className="hero__image"
          src="/images/hero-garden.jpg"
          alt=""
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <div className="hero__veil" />
      </div>

      <div className="hero__frame">
        <HeroNav />

        <div className="hero__stage">
          <div className="hero__headline">
            <h1 className="hero__title">
              <span>Spaces shaped</span>
              <span>by nature.</span>
              <span>Considered by people.</span>
            </h1>
          </div>

          <div className="hero__aside">
            <p className="hero__desc">
              Private gardens and landscapes designed as a quiet continuation
              of the architecture around them.
            </p>

            <a className="hero__cta" href="#contact">
              Discuss a Project{' '}
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>

        <footer className="hero__meta">
          <p>Minsk Region · 2026</p>
          <p className="hero__meta-index" aria-hidden="true">
            01
          </p>
          <p className="hero__meta-project">01 / 06 — Private Residence</p>
        </footer>
      </div>
    </section>
  )
}
