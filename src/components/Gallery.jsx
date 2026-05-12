import React from 'react'
import BotanicalDecoration from './BotanicalDecoration'

const Gallery = () => {
  const items = [
    { id: 1, src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800', label: 'Lotus Pendants' },
    { id: 2, src: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=800', label: 'Mosaic Detail' },
    { id: 3, src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800', label: 'Terrazzo Floor' },
    { id: 4, src: 'https://images.unsplash.com/photo-1508766917616-d22f3f1eea14?auto=format&fit=crop&q=80&w=800', label: 'Arched Windows' },
    { id: 5, src: 'https://images.unsplash.com/photo-1521017432531-fbd92d744264?auto=format&fit=crop&q=80&w=800', label: 'Leather Booths' },
    { id: 6, src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800', label: 'Evening Glow' },
    { id: 7, src: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&q=80&w=800', label: 'Morning Brew' },
  ]

  // Duplicate for infinite scroll effect
  const railItems = [...items, ...items]

  return (
    <section className="gallery" id="gallery">
      <div className="parchment-layer"></div>
      <BotanicalDecoration side="left" />
      <BotanicalDecoration side="right" />

      <div className="gallery-header reveal">
        <span className="section-label">Ambiance</span>
        <h2 className="section-title">Step Inside</h2>
        <p className="section-subtitle">A slow rotation of our favorite corners</p>
      </div>
      
      <div className="gallery-rail-container reveal">
        <div className="gallery-rail">
          {railItems.map((item, index) => (
            <div key={`${item.id}-${index}`} className="gallery-rail-item">
              <div className="arch-frame glass-panel">
                <img src={item.src} alt={item.label} loading="lazy" />
                <div className="gallery-caption"><span>{item.label}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
