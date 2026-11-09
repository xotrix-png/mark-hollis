import { useEffect, useEffectEvent, useRef, useState } from 'react'
import '../styles/approach.css'

const STAGES = [
  {
    num: '01',
    name: 'Observation',
    line: 'Walking the site, reading light, soil, wind and views',
  },
  {
    num: '02',
    name: 'Concept',
    line: 'A clear idea of how the place should feel',
  },
  {
    num: '03',
    name: 'Design',
    line: 'Plans, planting, materials and every detail drawn',
  },
  {
    num: '04',
    name: 'Realization',
    line: 'Guiding the build until the garden takes root',
  },
]

export default function Approach() {
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
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])

  return (
    <section
      id="approach"
      className={ready ? 'approach is-ready' : 'approach'}
      aria-label="Approach"
    >
      <div className="approach__rules" aria-hidden="true">
        {Array.from({ length: 13 }, (_, i) => (
          <span key={i} className="approach__rule" style={{ ['--i']: i }} />
        ))}
      </div>

      <div className="approach__shell">
        <header className="approach__bar">
          <p className="approach__kicker">04 / Approach</p>
        </header>

        <div
          ref={stageRef}
          className={
            visible ? 'approach__stage is-inview' : 'approach__stage'
          }
        >
          <h2 className="approach__title">
            <span>From land</span>
            <span>
              to <em className="approach__landscape">landscape.</em>
            </span>
          </h2>

          {/* Row 2: sketch top aligns with stages row 01 top */}
          <figure className="approach__sketch">
            <img
              src="/images/approach-sketch.jpg"
              alt="Hand-drawn landscape plan sketch with path, trees, and pond"
              width={864}
              height={1152}
            />
          </figure>

          <div className="approach__divider" aria-hidden="true" />

          <ol className="approach__stages">
            {STAGES.map((step, index) => (
              <li
                key={step.num}
                className="approach__stage-row"
                style={{ ['--i']: index }}
              >
                <span className="approach__num">{step.num}</span>
                <h3 className="approach__name">{step.name}</h3>
                <p className="approach__line">{step.line}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
