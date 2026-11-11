import { useEffect, useState } from 'react'
import '../styles/process.css'

export default function Process() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <section
      id="process"
      className={ready ? 'process is-ready' : 'process'}
      aria-label="From Idea to Place"
    >
      <div className="process__shell">
        <header className="process__bar">
          <p className="process__kicker">05 / From Idea to Place</p>
        </header>

        <div className="process__stage">
          <figure className="process__main">
            <img
              src="/images/process-garden.jpg"
              alt="Stone path through a garden toward a white farmhouse"
              width={1280}
              height={720}
            />
          </figure>

          <div className="process__copy">
            <h2 className="process__title">
              <span>An idea</span>
              <span>
                takes <em className="process__shape">shape</em>
              </span>
            </h2>

            <div className="process__aside">
              <p className="process__desc">
                It starts as a line on tracing paper Then a plan,
                <br />
                a palette of stone and plants, and finally a place you can walk
                through
              </p>
              <hr className="process__aside-rule" />
              <p className="process__meta-line">
                Sketch · Plan · Material · Place
              </p>
            </div>
          </div>
        </div>

        <footer className="process__foot">
          <figure className="process__detail">
            <img
              src="/images/process-materials.jpg"
              alt="Flat lay of stone, moss, pine, and bark material samples"
              width={1024}
              height={1024}
            />
          </figure>
          <p className="process__caption">05 / 09 — Stone, Moss, Pine</p>
        </footer>
      </div>
    </section>
  )
}
