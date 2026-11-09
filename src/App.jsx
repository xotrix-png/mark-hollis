import Hero from './sections/Hero.jsx'
import Philosophy from './sections/Philosophy.jsx'
import About from './sections/About.jsx'

export default function App() {
  return (
    <main>
      <Hero />
      <Philosophy />
      {/* Selected Work (#work) not built yet — About sits below Philosophy for now */}
      <About />
    </main>
  )
}
