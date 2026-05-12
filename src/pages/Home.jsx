import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Gallery from '../components/Gallery'
import Reviews from '../components/Reviews'
import Visit from '../components/Visit'

const Home = () => {
  return (
    <>
      <Hero />
      
      <About />
      
      {/* Simplified Menu Teaser */}
      <section className="menu-teaser">
        <div className="menu-teaser-inner reveal">
          <span className="section-label">Gastronomy</span>
          <h2 className="section-title">Artisanal Flavors</h2>
          <p className="section-subtitle">Discover our seasonal craft-led menu</p>
          <div className="menu-teaser-cta">
            <a href="/menu" className="btn btn-primary">View Full Menu</a>
          </div>
        </div>
      </section>

      <Gallery />
      
      <Reviews />
      <Visit />
    </>
  )
}

export default Home
