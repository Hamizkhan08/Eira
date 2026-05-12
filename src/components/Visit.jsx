import { useState } from 'react'
import BotanicalDecoration from './BotanicalDecoration'

const Visit = () => {
  const [formState, setFormState] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormState('submitting')
    setTimeout(() => {
      setFormState('success')
      setTimeout(() => {
        setFormState('idle')
        e.target.reset()
      }, 3000)
    }, 1000)
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <section className="visit" id="visit">
      <div className="parchment-layer"></div>
      <BotanicalDecoration side="left" />
      <BotanicalDecoration side="right" />

      <div className="visit-inner">
        <div className="visit-info reveal">
          <span className="section-label">Visit Us</span>
          <h2 className="section-title">Find your<br />quiet corner</h2>
          <div className="visit-details">
            <div className="visit-detail">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <div>
                <h4>Address</h4>
                <p>Eira Bistro & Cafe<br />College Road, Nashik<br />Maharashtra 422005</p>
              </div>
            </div>
            <div className="visit-detail">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
              </svg>
              <div>
                <h4>Hours</h4>
                <p>Mon – Fri: 8:00 AM – 10:00 PM<br />Sat – Sun: 9:00 AM – 11:00 PM</p>
              </div>
            </div>
            <div className="visit-detail">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <div>
                <h4>Contact</h4>
                <p>+91 98765 43210<br />hello@eiracafe.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="visit-form-wrapper reveal">
          <div className="reservation-panel">
            <h3 className="form-title">Reserve a Table</h3>
            <form className="reservation-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="resName">name</label>
                <input type="text" id="resName" placeholder="Your name" required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="resDate">date</label>
                  <input type="date" id="resDate" min={today} defaultValue={today} required />
                </div>
                <div className="form-group">
                  <label htmlFor="resTime">time</label>
                  <input type="time" id="resTime" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="resGuests">party size</label>
                  <select id="resGuests" defaultValue="2 people">
                    <option>1 person</option>
                    <option>2 people</option>
                    <option>3 people</option>
                    <option>4 people</option>
                    <option>5+ people</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="resPhone">phone</label>
                  <input type="tel" id="resPhone" placeholder="+91" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="resNotes">special requests</label>
                <textarea id="resNotes" rows="3" placeholder="Any preferences..."></textarea>
              </div>
              <button 
                type="submit" 
                className="btn btn-primary btn-full" 
                disabled={formState !== 'idle'}
              >
                {formState === 'idle' ? 'book now' : formState === 'submitting' ? 'sending...' : 'confirmed ✓'}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="map-container reveal">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.123!2d73.789!3d19.997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU5JzQ5LjIiTiA3M8KwNDcnMjAuNCJF!5e0!3m2!1sen!2sin!4v1" 
          width="100%" height="450" style={{ border: 0, borderRadius: '20px' }} allowFullScreen="" loading="lazy" 
          title="Eira Bistro location on Google Maps">
        </iframe>
      </div>
      
      <div className="visit-footer-grid reveal">
        <div className="glass-panel visit-footer-card">
          <h4>Private Events</h4>
          <p>Book our botanical space for your special occasions and intimate gatherings.</p>
          <a href="#" className="link-text">Inquire Now →</a>
        </div>
        <div className="glass-panel visit-footer-card">
          <h4>Gift Cards</h4>
          <p>Share the Eira experience with your loved ones. Available in various denominations.</p>
          <a href="#" className="link-text">Purchase →</a>
        </div>
        <div className="glass-panel visit-footer-card">
          <h4>Join the Team</h4>
          <p>We are always looking for passionate individuals to join our craft-led family.</p>
          <a href="#" className="link-text">Careers →</a>
        </div>
      </div>
    </section>
  )
}

export default Visit
