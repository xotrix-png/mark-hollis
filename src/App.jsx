import Hero from './sections/Hero.jsx'
import Philosophy from './sections/Philosophy.jsx'
import About from './sections/About.jsx'
import Approach from './sections/Approach.jsx'
import Process from './sections/Process.jsx'
import Materials from './sections/Materials.jsx'
import Contact from './sections/Contact.jsx'

export default function App() {
  return (
    <main>
      <Hero />
      <Philosophy />
      {/* Selected Work (#work) not built yet — About → Materials → Contact follow Philosophy */}
      <About />
      <Approach />
      <Process />
      <Materials />
      <Contact />
    </main>
  )
}
