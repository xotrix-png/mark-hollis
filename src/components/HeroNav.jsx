export default function HeroNav() {
  return (
    <header className="hero-nav">
      <div className="hero-nav__identity">
        <a className="hero-nav__brand" href="#top">
          Mark Vetrov
        </a>
        <p className="hero-nav__role">
          Landscape Architect · Private Gardens
        </p>
      </div>

      <nav className="hero-nav__menu" aria-label="Primary">
        <ul className="hero-nav__list">
          <li>
            <a className="hero-nav__link" href="#work">
              Work
            </a>
          </li>
          <li>
            <a className="hero-nav__link" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="hero-nav__link" href="#approach">
              Approach
            </a>
          </li>
          <li>
            <a className="hero-nav__link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <a className="hero-nav__cta" href="#contact">
          Discuss a Project{' '}
          <span className="arrow" aria-hidden="true">
            →
          </span>
        </a>
      </nav>
    </header>
  )
}
