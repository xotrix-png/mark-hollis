import { useEffect, useState } from 'react'
import '../styles/philosophy.css'

export default function Philosophy() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <section
      id="philosophy"
      className={ready ? 'philosophy is-ready' : 'philosophy'}
      aria-label="Philosophy"
    >
      <div className="philosophy__shell">
        <header className="philosophy__bar">
          <p className="philosophy__kicker">02 / Philosophy</p>
        </header>

        <div className="philosophy__stage">
          <figure className="philosophy__study">
            <div className="philosophy__study-frame">
              <img
                src="/images/philosophy-pine.jpg"
                alt="Pine tree casting a shadow on a board-formed concrete wall"
                width={864}
                height={1152}
                decoding="async"
              />
            </div>
            <figcaption className="philosophy__caption">
              Study — Wall, Pine, Light
            </figcaption>
          </figure>

          <div className="philosophy__copy">
            <h2 className="philosophy__title">
              <span>A landscape is</span>
              <span className="philosophy__title-line2">
                more than a <em className="philosophy__garden">garden</em>
              </span>
            </h2>

            <div className="philosophy__aside">
              <p className="philosophy__desc">
                It is the way light moves across stone The silence between
                trees The weight of shade at noon The feeling of arriving
                somewhere you want to stay
              </p>
              <hr className="philosophy__rule-line" />
              <p className="philosophy__meta-line">
                Observe · Respect · Reveal
              </p>
            </div>
          </div>
        </div>

        <footer className="philosophy__foot">
          <figure className="philosophy__moss">
            <img
              src="/images/philosophy-moss.jpg"
              alt="Close study of moss on granite stone"
              width={1024}
              height={1024}
              decoding="async"
            />
          </figure>
        </footer>
      </div>
    </section>
  )
}
