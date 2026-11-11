import { useEffect, useEffectEvent, useRef, useState } from 'react'
import '../styles/approach.css'

const INTRO =
  'Four quiet steps, from the first walk on site to the day the garden takes root.'

const STAGES = [
  {
    num: '01',
    name: 'Observation',
    image: '/images/approach-observation.jpg',
    alt: 'Wild misty undeveloped site among trees at dawn',
  },
  {
    num: '02',
    name: 'Concept',
    image: '/images/approach-concept.jpg',
    alt: 'Hand-drawn landscape plan sketch with path, trees, and pond',
  },
  {
    num: '03',
    name: 'Design',
    image: '/images/approach-design.jpg',
    alt: 'Technical landscape plan with material samples on a desk',
  },
  {
    num: '04',
    name: 'Realization',
    image: '/images/approach-realization.jpg',
    alt: 'Finished garden path with birch trees',
  },
]

export default function Approach() {
  const [ready, setReady] = useState(false)
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState(1)
  const stageRef = useRef(null)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  // Preload all four stage photos so hover crossfades without layout hitch
  useEffect(() => {
    const loaders = STAGES.map((step) => {
      const img = new Image()
      img.src = step.image
      return img
    })
    return () => {
      loaders.forEach((img) => {
        img.src = ''
      })
    }
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
      <div className="approach__shell">
        <header className="approach__bar">
          <p className="approach__kicker">04 / Approach</p>
          <p className="approach__coords">N 42°15′ W 73°47′</p>
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

          <p className="approach__intro">{INTRO}</p>

          <figure className="approach__sketch">
            {STAGES.map((step, index) => (
              <img
                key={step.num}
                src={step.image}
                alt={index === active ? step.alt : ''}
                width={864}
                height={1152}
                className={
                  index === active
                    ? 'approach__photo is-active'
                    : 'approach__photo'
                }
                aria-hidden={index === active ? undefined : true}
              />
            ))}
          </figure>

          <div className="approach__divider" aria-hidden="true" />

          <ol className="approach__stages">
            {STAGES.map((step, index) => {
              const isActive = index === active
              return (
                <li
                  key={step.num}
                  className={
                    isActive
                      ? 'approach__stage-row is-active'
                      : 'approach__stage-row'
                  }
                  style={{ ['--i']: index }}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                >
                  <button
                    type="button"
                    className="approach__stage-btn"
                    aria-pressed={isActive}
                    onFocus={() => setActive(index)}
                    onMouseEnter={() => setActive(index)}
                  >
                    <span className="approach__num">{step.num}</span>
                    <h3 className="approach__name">{step.name}</h3>
                  </button>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
