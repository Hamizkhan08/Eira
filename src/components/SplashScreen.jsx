import React, { useState, useEffect } from 'react'

const SplashScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState('enter') // enter → hold → exit

  useEffect(() => {
    // Phase 1: Logo animates in (already happening via CSS)
    // Phase 2: Hold for a moment
    const holdTimer = setTimeout(() => setPhase('hold'), 800)
    // Phase 3: Exit animation
    const exitTimer = setTimeout(() => setPhase('exit'), 2200)
    // Phase 4: Remove from DOM
    const removeTimer = setTimeout(() => onComplete(), 3000)

    return () => {
      clearTimeout(holdTimer)
      clearTimeout(exitTimer)
      clearTimeout(removeTimer)
    }
  }, [onComplete])

  return (
    <div className={`splash-screen ${phase}`}>
      <div className="splash-content">
        {/* Lotus Icon */}
        <svg className="splash-lotus" viewBox="0 0 80 70" fill="none">
          <path 
            d="M40 8C40 8 29 22 29 35C29 48 40 58 40 58C40 58 51 48 51 35C51 22 40 8 40 8Z" 
            stroke="currentColor" strokeWidth="1" fill="none"
          />
          <path 
            d="M40 58C40 58 24 53 16 40C8 27 13 14 13 14C13 14 26 19 34 32" 
            stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5"
          />
          <path 
            d="M40 58C40 58 56 53 64 40C72 27 67 14 67 14C67 14 54 19 46 32" 
            stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5"
          />
        </svg>

        {/* Brand Name */}
        <h1 className="splash-title">eira</h1>
        
        {/* Tagline */}
        <p className="splash-tagline">bistro & cafe</p>

        {/* Loading line */}
        <div className="splash-loader">
          <div className="splash-loader-bar"></div>
        </div>
      </div>
    </div>
  )
}

export default SplashScreen
