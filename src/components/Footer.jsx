import { Link } from 'react-router-dom'
import { restaurantInfo } from '../data/menu'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/logo.png" alt="Market Tavern" className="footer-logo-img" />
            </div>
            <p className="footer-desc">
              Since 2013, serving farm-fresh ingredients with a passion for quality. 
              Wood-fired pizzas, naturally raised meats, and craft cocktails in the heart of Stockton.
            </p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/menu">Full Menu</Link>
            <Link to="/order">Order Online</Link>
          </div>
          <div className="footer-hours">
            <h4>Hours</h4>
            <div className="hours-row"><span>Mon - Fri</span><span>11:00 AM - 9:00 PM</span></div>
            <div className="hours-row"><span>Sat - Sun</span><span>10:00 AM - 9:00 PM</span></div>
            <div className="hours-row brunch"><span>Brunch</span><span>Sat & Sun 10AM - 2PM</span></div>
          </div>
          <div className="footer-contact">
            <h4>Contact</h4>
            <a href={`tel:${restaurantInfo.phone}`}>{restaurantInfo.phone}</a>
            <a href={`mailto:${restaurantInfo.email}`}>{restaurantInfo.email}</a>
            <p>{restaurantInfo.address}<br/>{restaurantInfo.city}, {restaurantInfo.state} {restaurantInfo.zip}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Market Tavern. All rights reserved.</p>
          <p className="footer-credit">Website by <a href="https://weborastudios.com" target="_blank" rel="noopener">Webora Studios</a></p>
        </div>
      </div>

      <style>{`
        .footer { background: var(--color-primary); border-top: 1px solid var(--color-border); padding: 60px 0 30px; margin-top: 80px; }
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; margin-bottom: 40px; }
        .footer-logo { margin-bottom: 16px; }
        .footer-logo-img { height: 60px; width: auto; object-fit: contain; filter: brightness(1.1); }
        .footer-desc { font-size: 14px; color: var(--color-text-muted); line-height: 1.7; }
        .footer-links h4, .footer-hours h4, .footer-contact h4 { font-family: var(--font-display); font-size: 16px; margin-bottom: 16px; color: var(--color-text); }
        .footer-links a { display: block; color: var(--color-text-muted); font-size: 14px; padding: 6px 0; transition: color 0.2s; }
        .footer-links a:hover { color: var(--color-accent); }
        .hours-row { display: flex; justify-content: space-between; font-size: 13px; color: var(--color-text-muted); padding: 6px 0; }
        .hours-row.brunch { color: var(--color-accent); margin-top: 8px; padding-top: 8px; border-top: 1px solid var(--color-border); }
        .footer-contact a, .footer-contact p { display: block; color: var(--color-text-muted); font-size: 14px; padding: 4px 0; transition: color 0.2s; }
        .footer-contact a:hover { color: var(--color-accent); }
        .footer-bottom { display: flex; justify-content: space-between; align-items: center; padding-top: 24px; border-top: 1px solid var(--color-border); font-size: 13px; color: var(--color-text-muted); }
        .footer-credit a { color: var(--color-accent); font-weight: 500; }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr; gap: 32px; }
          .footer-bottom { flex-direction: column; gap: 8px; text-align: center; }
        }
      `}</style>
    </footer>
  )
}

export default Footer
