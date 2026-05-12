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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
            <span className="logo-text">eira</span>
          </Link>
          
          <div className="nav-links">
            <Link to="/" className={pathname === '/' ? 'active' : ''}>Our Story</Link>
            <Link to="/menu" className={pathname === '/menu' ? 'active' : ''}>Menu</Link>
            {pathname === '/' && (
              <>
                <a href="#gallery">The Space</a>
                <a href="#visit">Find Us</a>
              </>
            )}
          </div>
          
          <button 
            className={`nav-toggle ${isOpen ? 'open' : ''}`} 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <Link to="/" onClick={() => setIsOpen(false)} className={pathname === '/' ? 'active' : ''}>Our Story</Link>
          <Link to="/menu" onClick={() => setIsOpen(false)} className={pathname === '/menu' ? 'active' : ''}>Menu</Link>
          {pathname === '/' && (
            <>
              <a href="#gallery" onClick={() => setIsOpen(false)}>The Space</a>
              <a href="#visit" onClick={() => setIsOpen(false)}>Find Us</a>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Navbar
