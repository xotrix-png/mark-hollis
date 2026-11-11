export default function HeroNav() {
  return (
    <header className="hero-nav">
      <div className="hero-nav__brand-block">
        <a className="hero-nav__brand" href="#top">
          Mark Vetrov
        </a>
        <p className="hero-nav__role">
          (Landscape Architect · Private Gardens)
        </p>
      </div>

      <nav className="hero-nav__links" aria-label="Primary">
        <a href="#work">Work</a>
        <span aria-hidden="true">,</span>
        <a href="#about">About</a>
        <span aria-hidden="true">,</span>
        <a href="#approach">Approach</a>
        <span aria-hidden="true">,</span>
        <a href="#contact">Contact</a>
      </nav>

      <a className="hero-nav__cta" href="#contact">
        Discuss a Project <span aria-hidden="true">→</span>
      </a>
    </header>
  )
}
