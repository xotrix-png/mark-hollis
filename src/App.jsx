import Hero from './sections/Hero.jsx'
import Philosophy from './sections/Philosophy.jsx'
import About from './sections/About.jsx'
import Approach from './sections/Approach.jsx'
import Process from './sections/Process.jsx'

export default function App() {
  return (
    <main>
      <Hero />
      <Philosophy />
      {/* Selected Work (#work) not built yet — About + Approach + Process follow Philosophy */}
      <About />
      <Approach />
      <Process />
    </main>
  )
}
