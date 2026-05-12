import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  const bgRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const heroHeight = window.innerHeight

      if (scrollY > heroHeight) return // Skip once past hero

      // Background: zooms in + moves down slowly
      const scale = 1 + scrollY * 0.0003
      const translateY = scrollY * 0.35
      if (bgRef.current) {
        bgRef.current.style.transform = `scale(${scale}) translateY(${translateY}px)`
      }

      // Content: fades out + moves up
      const opacity = 1 - scrollY / (heroHeight * 0.6)
      const contentY = scrollY * -0.2
      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(${contentY}px)`
        contentRef.current.style.opacity = Math.max(0, opacity)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hero-bg" ref={bgRef}>
        <img 
          src="/images/facade.jpg" 
          alt="Eira Bistro Facade" 
          className="hero-img"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content" ref={contentRef}>
        <div className="hero-lotus animate-fade-up">
          <svg className="lotus-icon-hero" viewBox="0 0 80 70" fill="none">
            <path d="M40 8C40 8 29 22 29 35C29 48 40 58 40 58C40 58 51 48 51 35C51 22 40 8 40 8Z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            <path d="M40 58C40 58 24 53 16 40C8 27 13 14 13 14C13 14 26 19 34 32" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.6"/>
            <path d="M40 58C40 58 56 53 64 40C72 27 67 14 67 14C67 14 54 19 46 32" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.6"/>
          </svg>
        </div>
        <p className="hero-subtitle animate-fade-up">Bistro &amp; Cafe — Nashik</p>
        <h1 className="hero-title animate-fade-up">eira</h1>
        <p className="hero-tagline animate-fade-up">Where calm meets craft</p>
        <div className="hero-ctas animate-fade-up">
          <Link to="/menu" className="btn btn-outline">view menu</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
