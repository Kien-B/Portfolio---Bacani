import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            // determine section id for active state
            const section = e.target.id ? e.target : e.target.closest('section')
            if (section && section.id) setActiveSection(section.id)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -20% 0px' }
    )
    // observe all sections and revealable internal elements so top/home is detected
    const els = Array.from(document.querySelectorAll('section, .reveal'))
    els.forEach(el => obs.observe(el))

    // fallback: if IntersectionObserver misses (rare), reveal elements after short delay
    const fallback = setTimeout(() => {
      els.forEach(el => el.classList.add('visible'))
    }, 350)

    return () => {
      clearTimeout(fallback)
      obs.disconnect()
    }
  }, [])

  return (
    <div className="app">
      <Navbar active={activeSection} setActive={setActiveSection} />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about" className="reveal">
          <About />
        </section>
        <section id="skills" className="reveal">
          <Skills />
        </section>
        <section id="hobbies" className="reveal">
          <Hobbies />
        </section>
        <section id="contact" className="reveal">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}
