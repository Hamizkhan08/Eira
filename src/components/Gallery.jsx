import React from 'react'
import BotanicalDecoration from './BotanicalDecoration'

const Gallery = () => {
  const items = [
    { id: 1, src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800', alt: 'Pendant lotus lamps', label: 'Lotus Pendants' },
    { id: 2, src: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=800', alt: 'Mosaic countertop detail', label: 'Mosaic Detail' },
    { id: 3, src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800', alt: 'Terrazzo flooring', label: 'Terrazzo Floor' },
    { id: 4, src: 'https://images.unsplash.com/photo-1508766917616-d22f3f1eea14?auto=format&fit=crop&q=80&w=800', alt: 'Arched window view', label: 'Arched Windows' },
    { id: 5, src: 'https://images.unsplash.com/photo-1521017432531-fbd92d744264?auto=format&fit=crop&q=80&w=800', alt: 'Leather booth seating', label: 'Leather Booths' },
    { id: 6, src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800', alt: 'Warm cafe ambiance', label: 'Evening Glow' },
    { id: 7, src: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&q=80&w=800', alt: 'Fresh coffee brew', label: 'Morning Brew' },
  ]

  return (
    <section className="gallery" id="gallery">
      <div className="parchment-layer"></div>
      <BotanicalDecoration side="left" />
      <BotanicalDecoration side="right" />

      <div className="gallery-header reveal">
        <span className="section-label">Ambiance</span>
        <h2 className="section-title">Step Inside</h2>
        <p className="section-subtitle">Every corner tells a story of warmth and intention</p>
      </div>
      <div className="gallery-grid reveal">
        {items.map((item) => (
          <div key={item.id} className="gallery-item gallery-item--auto">
            <div className="arch-frame glass-panel">
              <img src={item.src} alt={item.alt} loading="lazy" />
              <div className="gallery-caption"><span>{item.label}</span></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery
