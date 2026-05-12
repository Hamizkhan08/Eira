import React from 'react'
import BotanicalDecoration from './BotanicalDecoration'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="parchment-layer"></div>
      <BotanicalDecoration side="left" />
      <BotanicalDecoration side="right" />
      
      <div className="about-inner reveal">
        <div className="about-text">
          <span className="section-label">Our Story</span>
          <h2 className="section-title">A sanctuary of<br />slow discovery</h2>
          <p className="about-description">
            Eira was born from a simple desire: to create a space in Nashik where the pace of the city could be forgotten. Named after the Norse word for "calm" or "mercy", our bistro is a celebration of unhurried moments and refined craft.
          </p>
          <p className="about-description">
            From our hand-picked botanicals to our stone-ground coffees, every element is chosen with intention. We believe that true luxury lies in the quiet details — the warmth of a sunlit corner, the scent of fresh lavender, and the perfect balance of a seasonal plate.
          </p>
        </div>
        <div className="about-image">
          <div className="arch-frame">
            <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200" alt="Eira Bistro & Cafe facade" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
