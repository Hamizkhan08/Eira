const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="experience-bg">
        <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1600" alt="Eira interior ambiance" loading="lazy" />
        <div className="image-placeholder-text">Full Interior Photo</div>
        <div className="experience-overlay"></div>
      </div>
      <div className="experience-content reveal">
        <svg className="lotus-icon-exp" viewBox="0 0 60 50" fill="none">
          <path d="M30 5C30 5 22 15 22 25C22 35 30 42 30 42C30 42 38 35 38 25C38 15 30 5 30 5Z" stroke="currentColor" strokeWidth="1" fill="none"/>
          <path d="M30 42C30 42 18 38 12 28C6 18 10 8 10 8C10 8 20 12 26 22" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5"/>
          <path d="M30 42C30 42 42 38 48 28C54 18 50 8 50 8C50 8 40 12 34 22" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5"/>
        </svg>
        <h2 className="experience-title" style={{ textTransform: 'lowercase' }}>a space designed for<br />slow mornings and<br />unhurried evenings</h2>
        <p className="experience-text">Serenity. Savored.</p>
      </div>
    </section>
  )
}

export default Experience
