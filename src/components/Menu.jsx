import React, { useState } from 'react'
import BotanicalDecoration from './BotanicalDecoration'

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', 'Small Plates', 'Signature Plates', 'Drinks', 'Artisanal Bakes']

  const dishes = [
    {
      id: 1,
      category: 'Small Plates',
      name: 'Truffle Mushroom Toast',
      desc: 'Sourdough, wild mushroom medley, truffle oil, parmesan',
      price: '₹420',
      img: '/images/menu-1.jpg'
    },
    {
      id: 2,
      category: 'Drinks',
      name: 'Lavender Honey Latte',
      desc: 'Single-origin espresso, lavender syrup, oat milk',
      price: '₹280',
      img: '/images/menu-2.jpg'
    },
    {
      id: 3,
      category: 'Artisanal Bakes',
      name: 'Beetroot Rose Cake',
      desc: 'Organic beetroot sponge, rose cream, pistachios',
      price: '₹350',
      img: '/images/menu-3.jpg'
    },
    {
      id: 4,
      category: 'Signature Plates',
      name: 'Mediterranean Bowl',
      desc: 'Quinoa, roasted veg, hummus, lemon tahini',
      price: '₹480',
      img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 5,
      category: 'Drinks',
      name: 'Hibiscus Cold Brew',
      desc: '12-hour cold brew, dried hibiscus, orange zest',
      price: '₹260',
      img: 'https://images.unsplash.com/photo-1517701550927-30cf4bb1dba5?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 6,
      category: 'Small Plates',
      name: 'Burrata & Heirloom Tomato',
      desc: 'Fresh burrata, basil pesto, balsamic glaze',
      price: '₹550',
      img: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 7,
      category: 'Signature Plates',
      name: 'Pan-Seared Sea Bass',
      desc: 'Lemon butter sauce, asparagus, pea purée',
      price: '₹720',
      img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 8,
      category: 'Drinks',
      name: 'Eira Matcha Ceremonial',
      desc: 'Stone-ground Uji matcha, vanilla, coconut milk',
      price: '₹320',
      img: 'https://images.unsplash.com/photo-1515823662273-ad951e778401?auto=format&fit=crop&q=80&w=800'
    }
  ]

  const filteredDishes = activeCategory === 'All' 
    ? dishes 
    : dishes.filter(dish => dish.category === activeCategory)

  return (
    <section className="menu" id="menu">
      <div className="parchment-layer"></div>
      <BotanicalDecoration side="left" />
      <BotanicalDecoration side="right" />

      <div className="menu-header reveal">
        <span className="section-label">Gastronomy</span>
        <h2 className="section-title">The Menu</h2>
        <p className="section-subtitle">Artisan flavors designed for slow discovery</p>
      </div>

      <div className="menu-filter reveal">
        {categories.map(cat => (
          <button 
            key={cat} 
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="menu-grid reveal">
        {filteredDishes.map((dish) => (
          <div key={dish.id} className="menu-card glass-panel">
            <div className="menu-card-img">
              <img src={dish.img} alt={dish.name} loading="lazy" />
            </div>
            <div className="menu-card-body">
              <span className="menu-card-category">{dish.category}</span>
              <h3 className="menu-card-title">{dish.name}</h3>
              <p className="menu-card-desc">{dish.desc}</p>
              <span className="menu-card-price">{dish.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Menu
