import { useEffect, useEffectEvent, useRef, useState } from 'react'
import '../styles/contact.css'

const LINKS = [
  {
    id: 'email',
    label: 'Email',
    value: 'markhollisnature@mail.com',
    href: 'mailto:markhollisnature@mail.com',
    external: false,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    value: '@MarkHollisNature',
    href: 'https://www.instagram.com/MarkHollisNature/',
    external: true,
  },
]

export default function Contact() {
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
      { threshold: 0.16, rootMargin: '0px 0px -6% 0px' },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])

  return (
    <section
      id="contact"
      className={ready ? 'contact is-ready' : 'contact'}
      aria-label="Contact"
    >
      <div className="contact__shell">
        <header className="contact__bar">
          <p className="contact__kicker">07 / Contact</p>
        </header>

        <div
          ref={stageRef}
          className={visible ? 'contact__stage is-inview' : 'contact__stage'}
        >
          <p className="contact__belong">A place to belong</p>

          <div className="contact__main">
            <div className="contact__copy">
              <h2 className="contact__title">
                <span>Let&apos;s create</span>
                <span>something</span>
                <span>
                  <em className="contact__meaningful">
                    meanin<span className="contact__g-kern">g</span>ful
                  </em>
                </span>
              </h2>

              <p className="contact__desc">
                Have a place in mind? Let&apos;s talk about what it could become
              </p>

              <div className="contact__links">
                {LINKS.map((link) => (
                  <a
                    key={link.id}
                    className={`contact__row contact__row--${link.id}`}
                    href={link.href}
                    {...(link.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    <span className="contact__label">{link.label}</span>
                    <span className="contact__value">{link.value}</span>
                    <span className="contact__arrow" aria-hidden="true">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <figure className="contact__media">
              <div className="contact__frame">
                <img
                  src="/images/contact-gate.jpg"
                  alt="Open wooden gate in a stone wall leading into a misty garden path"
                  width={864}
                  height={1152}
                />
              </div>
              <figcaption className="contact__caption">
                07 / 07 — The Gate Is Open
              </figcaption>
            </figure>
          </div>
        </div>

        <footer className="contact__foot">
          <hr className="contact__foot-rule" />
          <div className="contact__foot-row">
            <p className="contact__brand">Mark Hollis</p>
            <p className="contact__place">©2026 — Hudson Valley, NY</p>
          </div>
        </footer>
      </div>
    </section>
  )
}
