import SiteGrid from './components/SiteGrid.jsx'
import Hero from './sections/Hero.jsx'
import Philosophy from './sections/Philosophy.jsx'
import About from './sections/About.jsx'
import Approach from './sections/Approach.jsx'
import Process from './sections/Process.jsx'
import Materials from './sections/Materials.jsx'
import Contact from './sections/Contact.jsx'

export default function App() {
  return (
    <main className="site">
      <SiteGrid />
      <Hero />
      <Philosophy />
      {/* Selected Work not built yet — zero-height target so nav Work (#work) resolves */}
      <div id="work" className="site-anchor" tabIndex={-1} />
      <About />
      <Approach />
      <Process />
      <Materials />
      <Contact />
    </main>
  )
}
