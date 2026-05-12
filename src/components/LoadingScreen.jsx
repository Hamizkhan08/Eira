import React, { useState, useEffect } from 'react'

const LoadingScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState('loading') // loading → fadeout → done

  useEffect(() => {
    // Show splash for 2.2s, then fade out
    const timer = setTimeout(() => {
      setPhase('fadeout')
    }, 2200)

    const removeTimer = setTimeout(() => {
      setPhase('done')
      onComplete?.()
    }, 3000)

    return () => {
      clearTimeout(timer)
      clearTimeout(removeTimer)
    }
  }, [onComplete])

  if (phase === 'done') return null

  return (
    <div className={`loading-screen ${phase === 'fadeout' ? 'fade-out' : ''}`}>
      <div className="loading-content">
        {/* Lotus icon */}
        <svg className="loading-lotus" viewBox="0 0 80 70" fill="none">
          <path
            d="M40 8C40 8 29 22 29 35C29 48 40 58 40 58C40 58 51 48 51 35C51 22 40 8 40 8Z"
            stroke="currentColor" strokeWidth="1.2" fill="none"
          />
          <path
            d="M40 58C40 58 24 53 16 40C8 27 13 14 13 14C13 14 26 19 34 32"
            stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.6"
          />
          <path
            d="M40 58C40 58 56 53 64 40C72 27 67 14 67 14C67 14 54 19 46 32"
            stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.6"
          />
        </svg>

        <h1 className="loading-title">eira</h1>
        <p className="loading-tagline">where calm meets craft</p>

        <div className="loading-bar-track">
          <div className="loading-bar-fill"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
