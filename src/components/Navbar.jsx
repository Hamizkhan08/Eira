import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          <span className="logo-text">eira</span>
        </Link>
        
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)} className={pathname === '/' ? 'active' : ''}>Our Story</Link>
          <Link to="/menu" onClick={() => setIsOpen(false)} className={pathname === '/menu' ? 'active' : ''}>Menu</Link>
          {pathname === '/' && (
            <>
              <a href="#gallery" onClick={() => setIsOpen(false)}>The Space</a>
              <a href="#visit" onClick={() => setIsOpen(false)}>Find Us</a>
            </>
          )}
        </div>
        
        <div className="nav-cta">
          <a href="/#visit" className="btn btn-primary btn-sm">reserve</a>
        </div>
        
        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
