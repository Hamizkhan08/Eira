import React, { useState, useEffect } from 'react'
import BotanicalDecoration from './BotanicalDecoration'

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Ananya R.',
      text: "The most peaceful morning I've had in Nashik. The Lavender Latte is a masterpiece.",
      rating: 5
    },
    {
      id: 2,
      name: 'Vikram S.',
      text: "Eira feels like a hidden sanctuary. The botanical details and the light are just perfect.",
      rating: 5
    },
    {
      id: 3,
      name: 'Sarah M.',
      text: "Exceptional craft. The Truffle Mushroom Toast is out of this world. Highly recommend!",
      rating: 5
    },
    {
      id: 4,
      name: 'Rahul K.',
      text: "A true hidden gem. The attention to detail in every corner is inspiring.",
      rating: 5
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [reviews.length])

  return (
    <section className="reviews" id="reviews">
      <div className="parchment-layer"></div>
      <BotanicalDecoration side="left" />
      <BotanicalDecoration side="right" />

      <div className="reviews-header reveal">
        <span className="section-label">Journal</span>
        <h2 className="section-title">Kind Words</h2>
      </div>
      
      <div className="reviews-container reveal">
        <div className="reviews-3d-wrapper">
          {reviews.map((review, index) => {
            const position = index - activeIndex
            const isCenter = index === activeIndex
            
            let displayPosition = position
            if (position > 1) displayPosition = position - reviews.length
            if (position < -1) displayPosition = position + reviews.length

            return (
              <div 
                key={review.id} 
                className={`review-card-3d ${isCenter ? 'center' : ''}`}
                style={{
                  transform: `translateX(${displayPosition * 105}%) scale(${isCenter ? 1 : 0.8}) rotateY(${displayPosition * -30}deg)`,
                  opacity: Math.abs(displayPosition) > 1 ? 0 : 1 - Math.abs(displayPosition) * 0.5,
                  zIndex: isCenter ? 10 : 5
                }}
                onClick={() => setActiveIndex(index)}
              >
                <div className="glass-panel review-card-content">
                  <div className="review-stars">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="review-text">"{review.text}"</p>
                  <h4 className="review-author">— {review.name}</h4>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="reviews-dots">
          {reviews.map((_, index) => (
            <button 
              key={index} 
              className={`review-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
