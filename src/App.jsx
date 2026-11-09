import Hero from './sections/Hero.jsx'
import Philosophy from './sections/Philosophy.jsx'
import About from './sections/About.jsx'
import Approach from './sections/Approach.jsx'

export default function App() {
  return (
    <main>
      <Hero />
      <Philosophy />
      {/* Selected Work (#work) not built yet — About + Approach follow Philosophy */}
      <About />
      <Approach />
    </main>
  )
}
