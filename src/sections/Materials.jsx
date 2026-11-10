import { useEffect, useEffectEvent, useRef, useState } from 'react'
import '../styles/materials.css'

const SHOTS = [
  {
    num: '01',
    name: 'Stone',
    kind: 'tall',
    src: '/images/materials-stone.jpg',
    alt: 'Close-up of cut stone meeting rough rock with a thin moss joint',
    width: 864,
    height: 1152,
  },
  {
    num: '02',
    name: 'Timber',
    kind: 'square',
    src: '/images/materials-timber.jpg',
    alt: 'Weathered grey timber boards with deep vertical grain',
    width: 1024,
    height: 1024,
  },
  {
    num: '03',
    name: 'Gravel',
    kind: 'tall',
    src: '/images/materials-gravel.jpg',
    alt: 'Light grey gravel with ornamental grasses and a fern frond',
    width: 864,
    height: 1152,
  },
]

export default function Materials() {
  const [ready, setReady] = useState(false)
  const [visible, setVisible] = useState(false)
  const stageRef = useRef(null)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  const onIntersect = useEffectEvent((isIntersecting) => {
    if (isIntersecting) setVisible(true)
  })

  useEffect(() => {
    const node = stageRef.current
    if (!node) return undefined
    const io = new IntersectionObserver(
      ([entry]) => onIntersect(entry.isIntersecting),
      { threshold: 0.18, rootMargin: '0px 0px -6% 0px' },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])

  return (
    <section
      id="materials"
      className={ready ? 'materials is-ready' : 'materials'}
      aria-label="Material and Details"
    >
      <div className="materials__rules" aria-hidden="true">
        {Array.from({ length: 13 }, (_, i) => (
          <span key={i} className="materials__rule" style={{ ['--i']: i }} />
        ))}
      </div>

      <div className="materials__shell">
        <header className="materials__bar">
          <p className="materials__kicker">06 / Material &amp; Details</p>
        </header>

        <div
          ref={stageRef}
          className={
            visible ? 'materials__stage is-inview' : 'materials__stage'
          }
        >
          <div className="materials__copy">
            <div className="materials__copy-stack">
              <h2 className="materials__title">
                <span>The beauty</span>
                <span>
                  of <em className="materials__restraint">restraint.</em>
                </span>
              </h2>

              <div className="materials__aside">
                <p className="materials__desc">
                  Few materials, used honestly. Stone, timber, gravel and
                  plants, chosen to age well and to belong to the place.
                </p>
                <hr className="materials__aside-rule" />
                <p className="materials__meta-line">Stone · Timber · Gravel</p>
              </div>
            </div>

            <a className="materials__cta" href="#contact">
              Discuss Your Garden <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="materials__gallery">
            {SHOTS.map((shot, index) => (
              <figure
                key={shot.num}
                className={`materials__shot materials__shot--${shot.kind}`}
                style={{ ['--i']: index }}
              >
                <div className="materials__frame">
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    width={shot.width}
                    height={shot.height}
                  />
                </div>
                <figcaption className="materials__caption">
                  {shot.num} — {shot.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
