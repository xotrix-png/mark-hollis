import { useEffect, useId, useRef, useState } from 'react'

const NAV_LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#approach', label: 'Approach' },
  { href: '#materials', label: 'Materials' },
  { href: '#contact', label: 'Contact' },
]

export default function HeroNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuId = useId()
  const panelRef = useRef(null)
  const burgerRef = useRef(null)
  const openRef = useRef(false)

  useEffect(() => {
    openRef.current = open
  }, [open])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const panel = panelRef.current
    const focusables = panel
      ? panel.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        )
      : []
    const first = focusables[0]
    const last = focusables[focusables.length - 1]
    first?.focus()

    const onKey = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setOpen(false)
        return
      }
      if (event.key !== 'Tab' || focusables.length === 0) return
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
      burgerRef.current?.focus()
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header
      className={[
        'hero-nav',
        scrolled ? 'is-scrolled' : '',
        open ? 'is-open' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="hero-nav__brand-block">
        <a className="hero-nav__brand" href="#top" onClick={closeMenu}>
          Mark Hollis
        </a>
        <p className="hero-nav__role">
          (Landscape Architect · Private Gardens)
        </p>
        <p className="hero-nav__coords" aria-label="Coordinates">
          N 42°15′ W 73°47′
        </p>
      </div>

      <nav className="hero-nav__links" aria-label="Primary">
        {NAV_LINKS.map((link, index) => (
          <span key={link.href} className="hero-nav__link-item">
            {index > 0 ? <span aria-hidden="true">,</span> : null}
            <a href={link.href}>{link.label}</a>
          </span>
        ))}
      </nav>

      <a className="hero-nav__cta" href="#contact">
        Discuss a Project <span aria-hidden="true">→</span>
      </a>

      <button
        ref={burgerRef}
        type="button"
        className="hero-nav__burger"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="hero-nav__burger-lines" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      <div
        id={menuId}
        ref={panelRef}
        className={open ? 'hero-nav__panel is-open' : 'hero-nav__panel'}
        hidden={!open}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        <div className="hero-nav__panel-inner">
          <div className="hero-nav__panel-top">
            <a className="hero-nav__panel-brand" href="#top" onClick={closeMenu}>
              Mark Hollis
            </a>
            <button
              type="button"
              className="hero-nav__close"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <nav className="hero-nav__panel-nav" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </nav>

          <a
            className="hero-nav__panel-cta"
            href="#contact"
            onClick={closeMenu}
          >
            Discuss a Project <span aria-hidden="true">→</span>
          </a>

          <div className="hero-nav__panel-foot">
            <a href="mailto:markhollisnature@mail.com">
              markhollisnature@mail.com
            </a>
            <a
              href="https://www.instagram.com/MarkHollisNature/"
              target="_blank"
              rel="noreferrer"
            >
              @MarkHollisNature
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
