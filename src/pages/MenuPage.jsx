import React from 'react'
import Menu from '../components/Menu'

const MenuPage = () => {
  return (
    <div className="menu-page-wrapper">
      <div className="page-header-simple">
        <div className="parchment-layer"></div>
        <div className="reveal">
          <span className="section-label"> nashik bistro </span>
          <h1 className="hero-title" style={{ fontSize: '72px', marginTop: '20px' }}>the menu</h1>
        </div>
      </div>
      <Menu />
    </div>
  )
}

export default MenuPage
