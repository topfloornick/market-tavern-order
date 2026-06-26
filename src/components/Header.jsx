import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { cartCount, setIsCartOpen } = useCart()
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="header">
      <div className="header-inner container">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Market Tavern" className="logo-img" />
        </Link>

        <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/menu" className={`nav-link ${isActive('/menu') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Menu</Link>
          <Link to="/order" className={`nav-link ${isActive('/order') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Order Online</Link>
          <button className="cart-btn" onClick={() => { setIsCartOpen(true); setMobileMenuOpen(false) }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </nav>

        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
            <span></span><span></span><span></span>
          </span>
        </button>
      </div>

      <style>{`
        .header { position: fixed; top: 0; left: 0; right: 0; z-index: 100; background: rgba(15, 15, 26, 0.95); backdrop-filter: blur(20px); border-bottom: 1px solid var(--color-border); height: var(--header-height); }
        .header-inner { display: flex; align-items: center; justify-content: space-between; height: 100%; }
        .logo { display: flex; align-items: center; }
        .logo-img { height: 56px; width: auto; object-fit: contain; filter: brightness(1.1); }
        .nav { display: flex; align-items: center; gap: 8px; }
        .nav-link { padding: 8px 16px; border-radius: 8px; font-size: 14px; font-weight: 500; color: var(--color-text-muted); transition: all 0.2s; }
        .nav-link:hover, .nav-link.active { color: var(--color-text); background: var(--color-card); }
        .nav-link.active { color: var(--color-accent); }
        .cart-btn { position: relative; background: var(--color-card); border: 1px solid var(--color-border); border-radius: 10px; padding: 10px 14px; color: var(--color-text); display: flex; align-items: center; transition: all 0.2s; margin-left: 8px; }
        .cart-btn:hover { background: var(--color-card-hover); border-color: var(--color-accent); }
        .cart-badge { position: absolute; top: -6px; right: -6px; background: var(--color-accent); color: var(--color-primary); font-size: 11px; font-weight: 700; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        .mobile-toggle { display: none; background: none; padding: 8px; }
        .hamburger { display: flex; flex-direction: column; gap: 5px; width: 24px; }
        .hamburger span { height: 2px; background: var(--color-text); border-radius: 2px; transition: all 0.3s; }
        .hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }
        @media (max-width: 768px) {
          .mobile-toggle { display: block; }
          .nav { position: fixed; top: var(--header-height); left: 0; right: 0; background: rgba(15, 15, 26, 0.98); backdrop-filter: blur(20px); flex-direction: column; padding: 24px; gap: 8px; transform: translateY(-100%); opacity: 0; pointer-events: none; transition: all 0.3s; border-bottom: 1px solid var(--color-border); }
          .nav-open { transform: translateY(0); opacity: 1; pointer-events: auto; }
          .nav-link { width: 100%; text-align: center; padding: 14px; font-size: 16px; }
          .cart-btn { margin-left: 0; margin-top: 8px; justify-content: center; width: 100%; }
        }
      `}</style>
    </header>
  )
}

export default Header
