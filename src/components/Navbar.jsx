import { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : ''
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#hero" className="nav-logo">
            <svg className="lotus-icon-nav" viewBox="0 0 60 50" fill="none">
              <path d="M30 5C30 5 22 15 22 25C22 35 30 42 30 42C30 42 38 35 38 25C38 15 30 5 30 5Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <path d="M30 42C30 42 18 38 12 28C6 18 10 8 10 8C10 8 20 12 26 22" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7"/>
              <path d="M30 42C30 42 42 38 48 28C54 18 50 8 50 8C50 8 40 12 34 22" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7"/>
            </svg>
            <span>eira</span>
          </a>
          <ul className="nav-links">
            <li><a href="#about">Our Story</a></li>
            <li><a href="#gallery">The Space</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#visit">Find Us</a></li>
          </ul>
          <a href="#visit" className="nav-cta">Reserve</a>
          <button 
            className={`nav-toggle ${mobileMenuOpen ? 'active' : ''}`} 
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#about" onClick={closeMobileMenu}>Our Story</a></li>
          <li><a href="#gallery" onClick={closeMobileMenu}>Ambiance</a></li>
          <li><a href="#menu" onClick={closeMobileMenu}>Menu</a></li>
          <li><a href="#experience" onClick={closeMobileMenu}>Experience</a></li>
          <li><a href="#visit" onClick={closeMobileMenu}>Visit Us</a></li>
          <li><a href="#visit" className="mobile-cta" onClick={closeMobileMenu}>reserve a table</a></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
