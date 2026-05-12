import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Menu from './components/Menu'
import Reviews from './components/Reviews'
import Visit from './components/Visit'
import Footer from './components/Footer'
import BotanicalDecoration from './components/BotanicalDecoration'

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app-container">
      <Navbar />
      
      <Hero />
      
      <div className="lotus-divider">
        <div className="divider-line"></div>
        <svg className="lotus-divider-icon" viewBox="0 0 40 35">
          <path d="M20 3C20 3 14 10 14 17C14 24 20 28 20 28C20 28 26 24 26 17C26 10 20 3 20 3Z" />
        </svg>
        <div className="divider-line"></div>
      </div>
      
      <About />
      
      <div className="lotus-divider">
        <div className="divider-line"></div>
        <svg className="lotus-divider-icon" viewBox="0 0 40 35">
          <path d="M20 3C20 3 14 10 14 17C14 24 20 28 20 28C20 28 26 24 26 17C26 10 20 3 20 3Z" />
        </svg>
        <div className="divider-line"></div>
      </div>
      
      <Menu />
      
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <BotanicalDecoration className="leaf-3" />
        <div className="lotus-divider">
          <div className="divider-line"></div>
          <svg className="lotus-divider-icon" viewBox="0 0 40 35">
            <path d="M20 3C20 3 14 10 14 17C14 24 20 28 20 28C20 28 26 24 26 17C26 10 20 3 20 3Z" />
          </svg>
          <div className="divider-line"></div>
        </div>
      </div>
      
      <Gallery />
      
      <div className="lotus-divider">
        <div className="divider-line"></div>
        <svg className="lotus-divider-icon" viewBox="0 0 40 35">
          <path d="M20 3C20 3 14 10 14 17C14 24 20 28 20 28C20 28 26 24 26 17C26 10 20 3 20 3Z" />
        </svg>
        <div className="divider-line"></div>
      </div>
      
      <Reviews />
      <Visit />
      <Footer />
    </div>
  )
}

export default App
