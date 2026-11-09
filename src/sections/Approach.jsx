import { useEffect, useEffectEvent, useRef, useState } from 'react'
import '../styles/approach.css'

const INTRO =
  'Four quiet steps, from the first walk on site to the day the garden takes root.'

const STAGES = [
  { num: '01', name: 'Observation' },
  {
    num: '02',
    name: 'Concept',
    italic: true,
    line: 'Finding the one idea that will hold the whole garden together.',
  },
  { num: '03', name: 'Design' },
  { num: '04', name: 'Realization' },
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

          <figure className="approach__sketch">
            <img
              src="/images/approach-sketch.jpg"
              alt="Hand-drawn landscape plan sketch with path, trees, and pond"
              width={864}
              height={1152}
            />
            <figcaption className="approach__caption">02 — Concept</figcaption>
          </figure>

          <div className="approach__divider" aria-hidden="true" />

          <div className="approach__right">
            <p className="approach__intro">{INTRO}</p>

            <ol className="approach__stages">
              {STAGES.map((step, index) => (
                <li
                  key={step.num}
                  className={
                    step.line
                      ? 'approach__stage-row has-body'
                      : 'approach__stage-row'
                  }
                  style={{ ['--i']: index }}
                >
                  <span className="approach__num">{step.num}</span>
                  <div className="approach__copy">
                    <h3
                      className={
                        step.italic
                          ? 'approach__name is-italic'
                          : 'approach__name'
                      }
                    >
                      {step.name}
                    </h3>
                    {step.line ? (
                      <p className="approach__line">{step.line}</p>
                    ) : null}
                  </div>
                  <span className="approach__dot" aria-hidden="true" />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
