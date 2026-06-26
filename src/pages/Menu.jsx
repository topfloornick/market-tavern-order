import { useState } from 'react'
import { menuData } from '../data/menu'
import MenuItem from '../components/MenuItem'

function Menu() {
  const [activeCategory, setActiveCategory] = useState('all')
  const categories = Object.keys(menuData)
  const filteredCategories = activeCategory === 'all' ? categories : [activeCategory]

  return (
    <main className="menu-page">
      <div className="menu-hero">
        <div className="container">
          <span className="section-tag">Our Menu</span>
          <h1>Crafted with Passion</h1>
          <p>Every dish tells a story of farm-fresh ingredients, wood-fired flavors, and culinary artistry</p>
        </div>
      </div>

      <div className="container">
        <div className="menu-filters">
          <button className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`} onClick={() => setActiveCategory('all')}>All</button>
          {categories.map(cat => (
            <button key={cat} className={`filter-btn ${activeCategory === cat ? 'active' : ''}`} onClick={() => setActiveCategory(cat)}>
              {menuData[cat].title}
            </button>
          ))}
        </div>

        <div className="menu-sections">
          {filteredCategories.map(cat => (
            <section key={cat} className="menu-section">
              <div className="menu-section-header">
                <h2>{menuData[cat].title}</h2>
                <p>{menuData[cat].description}</p>
              </div>
              <div className="menu-items-grid">
                {menuData[cat].items.map(item => (
                  <MenuItem key={item.id} item={item} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <style>{`
        .menu-page { padding-top: var(--header-height); }
        .menu-hero { text-align: center; padding: 60px 24px 40px; background: radial-gradient(ellipse at 50% 50%, rgba(201, 169, 110, 0.06) 0%, transparent 60%); }
        .menu-hero .section-tag { display: inline-block; font-size: 12px; color: var(--color-accent); text-transform: uppercase; letter-spacing: 2px; font-weight: 600; margin-bottom: 12px; }
        .menu-hero h1 { font-family: var(--font-display); font-size: clamp(32px, 5vw, 48px); margin-bottom: 12px; }
        .menu-hero p { color: var(--color-text-muted); font-size: 16px; max-width: 500px; margin: 0 auto; }
        .menu-filters { display: flex; gap: 8px; padding: 20px 0 40px; overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
        .menu-filters::-webkit-scrollbar { display: none; }
        .filter-btn { padding: 10px 20px; border-radius: 30px; font-size: 13px; font-weight: 500; background: var(--color-card); color: var(--color-text-muted); border: 1px solid var(--color-border); white-space: nowrap; transition: all 0.2s; }
        .filter-btn:hover { color: var(--color-text); border-color: var(--color-accent); }
        .filter-btn.active { background: var(--color-accent); color: var(--color-primary); border-color: var(--color-accent); font-weight: 600; }
        .menu-sections { padding-bottom: 60px; }
        .menu-section { margin-bottom: 60px; }
        .menu-section-header { margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--color-border); }
        .menu-section-header h2 { font-family: var(--font-display); font-size: 28px; margin-bottom: 6px; }
        .menu-section-header p { font-size: 14px; color: var(--color-text-muted); }
        .menu-items-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        @media (max-width: 768px) { .menu-items-grid { grid-template-columns: 1fr; } }
      `}</style>
    </main>
  )
}

export default Menu
