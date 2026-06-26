import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content container">
          <span className="hero-badge">Since 2013 &middot; Stockton, CA</span>
          <h1 className="hero-title">Market Tavern</h1>
          <p className="hero-subtitle">New American Cuisine &middot; Wood-Fired &middot; Farm Fresh</p>
          <p className="hero-desc">
            Experience upscale dining with farm-fresh ingredients, wood-fired Neapolitan pizzas, 
            naturally raised meats, and craft cocktails in the heart of Lincoln Center.
          </p>
          <div className="hero-buttons">
            <Link to="/order" className="btn btn-primary">Order Online</Link>
            <Link to="/menu" className="btn btn-secondary">View Menu</Link>
          </div>
          <div className="hero-stats">
            <div className="stat"><span className="stat-number">4.0&#9733;</span><span className="stat-label">Yelp &middot; 1,700+ reviews</span></div>
            <div className="stat"><span className="stat-number">4.6&#9733;</span><span className="stat-label">DoorDash &middot; 4K+ ratings</span></div>
            <div className="stat"><span className="stat-number">11+</span><span className="stat-label">Years Serving Stockton</span></div>
          </div>
        </div>
      </section>

      <section className="features container">
        <div className="features-grid">
          <div className="feature-card"><div className="feature-icon">&#128293;</div><h3>Wood-Fired Oven</h3><p>Authentic Neapolitan-style pizzas baked at 900 degrees in our custom wood-burning oven</p></div>
          <div className="feature-card"><div className="feature-icon">&#127807;</div><h3>Farm-to-Table</h3><p>Locally sourced, organic ingredients from Central Valley farms and ranches</p></div>
          <div className="feature-card"><div className="feature-icon">&#129385;</div><h3>Premium Meats</h3><p>All-natural, sustainably raised steaks and chops from our wood-fueled grill & rotisserie</p></div>
          <div className="feature-card"><div className="feature-icon">&#127864;</div><h3>Craft Cocktails</h3><p>Signature cocktails, curated wine list, and local craft beers on tap</p></div>
        </div>
      </section>

      <section className="popular container">
        <div className="section-header">
          <span className="section-tag">Our Kitchen</span>
          <h2>Guest Favorites</h2>
          <p>The dishes our guests can not stop ordering</p>
        </div>
        <div className="popular-grid">
          <div className="popular-card">
            <div className="popular-img" style={{background: 'linear-gradient(135deg, #2d1810, #4a2c17)'}}><span className="popular-emoji">&#127829;</span></div>
            <div className="popular-info"><h4>Wood-Fired Pizzas</h4><p>Neapolitan-style from our 900 degree oven</p><span className="popular-price">from $18</span></div>
          </div>
          <div className="popular-card">
            <div className="popular-img" style={{background: 'linear-gradient(135deg, #1a0f0a, #3d2012)'}}><span className="popular-emoji">&#129385;</span></div>
            <div className="popular-info"><h4>Rib Eye Steak</h4><p>14oz bone-in, roasted garlic butter</p><span className="popular-price">$59</span></div>
          </div>
          <div className="popular-card">
            <div className="popular-img" style={{background: 'linear-gradient(135deg, #0f1a15, #1a3a28)'}}><span className="popular-emoji">&#127837;</span></div>
            <div className="popular-info"><h4>Mama Jo's Meatballs</h4><p>House-made, San Marzano sauce</p><span className="popular-price">$28</span></div>
          </div>
          <div className="popular-card">
            <div className="popular-img" style={{background: 'linear-gradient(135deg, #1a1020, #2a1530)'}}><span className="popular-emoji">&#128031;</span></div>
            <div className="popular-info"><h4>Pan-Seared Salmon</h4><p>Lemon beurre blanc, asparagus</p><span className="popular-price">$34</span></div>
          </div>
        </div>
        <div className="popular-cta"><Link to="/order" className="btn btn-primary">Order Now for Pickup</Link></div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <span className="section-tag">Skip the Wait</span>
              <h2>Order Online for Pickup</h2>
              <p>Skip the delivery fees. Order directly from us and pick up your meal fresh from our kitchen. No 25-30% third-party fees means better prices and fresher food.</p>
              <div className="cta-benefits">
                <div className="benefit"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.5"><polyline points="20,6 9,17 4,12"/></svg><span>No delivery fees</span></div>
                <div className="benefit"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.5"><polyline points="20,6 9,17 4,12"/></svg><span>Ready in 15-25 min</span></div>
                <div className="benefit"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.5"><polyline points="20,6 9,17 4,12"/></svg><span>Fresh from kitchen to you</span></div>
              </div>
              <Link to="/order" className="btn btn-primary">Start Your Order</Link>
            </div>
            <div className="cta-visual">
              <div className="cta-phone">
                <div className="phone-screen">
                  <div className="phone-header"><span>Market Tavern</span><span>&#128722; 3</span></div>
                  <div className="phone-item"><span>Rib Eye Steak</span><span>$59</span></div>
                  <div className="phone-item"><span>Citrus Beet Salad</span><span>$16</span></div>
                  <div className="phone-item"><span>Tiramisu</span><span>$13</span></div>
                  <div className="phone-total"><span>Total</span><span>$88.00</span></div>
                  <div className="phone-btn">Place Order</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="location container">
        <div className="section-header">
          <span className="section-tag">Visit Us</span>
          <h2>Find Market Tavern</h2>
          <p>Located in the heart of Lincoln Center, Stockton</p>
        </div>
        <div className="location-grid">
          <div className="location-info">
            <div className="location-detail">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <div><strong>Address</strong><p>236 Lincoln Center<br/>Stockton, CA 95207</p></div>
            </div>
            <div className="location-detail">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <div><strong>Phone</strong><p><a href="tel:(209)932-8001">(209) 932-8001</a></p></div>
            </div>
            <div className="location-detail">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
              <div><strong>Hours</strong><p>Mon-Fri: 11AM - 9PM<br/>Sat-Sun: 10AM - 9PM</p></div>
            </div>
            <div className="location-detail">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              <div><strong>Catering</strong><p>Available for events & private dining</p></div>
            </div>
          </div>
          <div className="location-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3138.5!2d-121.323!3d37.985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDU5JzA2LjAiTiAxMjHCsDE5JzIyLjgiVw!5e0!3m2!1sen!2sus!4v1" width="100%" height="100%" style={{border: 0, borderRadius: '16px'}} allowFullScreen="" loading="lazy" title="Market Tavern Location" />
          </div>
        </div>
      </section>

      <style>{`
        .home { padding-top: var(--header-height); }
        .hero { position: relative; padding: 100px 0 80px; overflow: hidden; min-height: 85vh; display: flex; align-items: center; }
        .hero-bg { position: absolute; inset: 0; background: radial-gradient(ellipse at 20% 50%, rgba(201, 169, 110, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(201, 169, 110, 0.05) 0%, transparent 50%), linear-gradient(180deg, var(--color-bg) 0%, var(--color-primary) 100%); }
        .hero-content { position: relative; text-align: center; max-width: 800px; margin: 0 auto; }
        .hero-badge { display: inline-block; padding: 8px 20px; background: rgba(201, 169, 110, 0.1); border: 1px solid rgba(201, 169, 110, 0.3); border-radius: 30px; font-size: 13px; color: var(--color-accent); letter-spacing: 1px; text-transform: uppercase; margin-bottom: 24px; animation: fadeInUp 0.6s ease-out; }
        .hero-title { font-family: var(--font-display); font-size: clamp(48px, 8vw, 80px); font-weight: 700; line-height: 1.1; margin-bottom: 16px; background: linear-gradient(135deg, var(--color-text) 0%, var(--color-warm) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: fadeInUp 0.6s ease-out 0.1s both; }
        .hero-subtitle { font-size: 18px; color: var(--color-accent); font-weight: 400; margin-bottom: 20px; letter-spacing: 2px; animation: fadeInUp 0.6s ease-out 0.2s both; }
        .hero-desc { font-size: 16px; color: var(--color-text-muted); max-width: 600px; margin: 0 auto 32px; line-height: 1.7; animation: fadeInUp 0.6s ease-out 0.3s both; }
        .hero-buttons { display: flex; gap: 16px; justify-content: center; margin-bottom: 48px; animation: fadeInUp 0.6s ease-out 0.4s both; }
        .btn { padding: 14px 32px; border-radius: 12px; font-size: 15px; font-weight: 600; transition: all 0.2s; display: inline-flex; align-items: center; gap: 8px; }
        .btn-primary { background: linear-gradient(135deg, var(--color-accent), var(--color-accent-hover)); color: var(--color-primary); }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(201, 169, 110, 0.3); }
        .btn-secondary { background: var(--color-card); color: var(--color-text); border: 1px solid var(--color-border); }
        .btn-secondary:hover { border-color: var(--color-accent); color: var(--color-accent); }
        .hero-stats { display: flex; justify-content: center; gap: 40px; animation: fadeInUp 0.6s ease-out 0.5s both; }
        .stat { text-align: center; }
        .stat-number { display: block; font-size: 22px; font-weight: 700; color: var(--color-text); margin-bottom: 4px; }
        .stat-label { font-size: 12px; color: var(--color-text-muted); }
        .features { padding: 80px 24px; }
        .features-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        .feature-card { background: var(--color-card); border: 1px solid var(--color-border); border-radius: 16px; padding: 32px 24px; text-align: center; transition: all 0.3s; }
        .feature-card:hover { border-color: var(--color-accent); transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.2); }
        .feature-icon { font-size: 36px; margin-bottom: 16px; }
        .feature-card h3 { font-family: var(--font-display); font-size: 18px; margin-bottom: 8px; }
        .feature-card p { font-size: 13px; color: var(--color-text-muted); line-height: 1.6; }
        .popular { padding: 80px 24px; }
        .section-header { text-align: center; margin-bottom: 48px; }
        .section-tag { display: inline-block; font-size: 12px; color: var(--color-accent); text-transform: uppercase; letter-spacing: 2px; font-weight: 600; margin-bottom: 12px; }
        .section-header h2 { font-family: var(--font-display); font-size: 36px; margin-bottom: 12px; }
        .section-header p { color: var(--color-text-muted); font-size: 16px; }
        .popular-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-bottom: 40px; }
        .popular-card { background: var(--color-card); border: 1px solid var(--color-border); border-radius: 16px; overflow: hidden; transition: all 0.3s; }
        .popular-card:hover { border-color: var(--color-accent); transform: translateY(-4px); }
        .popular-img { height: 140px; display: flex; align-items: center; justify-content: center; }
        .popular-emoji { font-size: 48px; }
        .popular-info { padding: 20px; }
        .popular-info h4 { font-family: var(--font-display); font-size: 16px; margin-bottom: 6px; }
        .popular-info p { font-size: 12px; color: var(--color-text-muted); margin-bottom: 8px; }
        .popular-price { font-size: 14px; font-weight: 700; color: var(--color-accent); }
        .popular-cta { text-align: center; }
        .cta-section { padding: 80px 0; }
        .cta-card { background: var(--color-card); border: 1px solid var(--color-border); border-radius: 24px; padding: 60px; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .cta-content .section-tag { text-align: left; display: block; }
        .cta-content h2 { font-family: var(--font-display); font-size: 32px; margin-bottom: 16px; }
        .cta-content p { color: var(--color-text-muted); font-size: 15px; line-height: 1.7; margin-bottom: 24px; }
        .cta-benefits { display: flex; flex-direction: column; gap: 12px; margin-bottom: 32px; }
        .benefit { display: flex; align-items: center; gap: 12px; font-size: 14px; color: var(--color-text); }
        .cta-visual { display: flex; justify-content: center; }
        .cta-phone { width: 260px; background: var(--color-primary); border: 2px solid var(--color-border); border-radius: 24px; padding: 16px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
        .phone-screen { background: var(--color-secondary); border-radius: 16px; padding: 16px; }
        .phone-header { display: flex; justify-content: space-between; font-size: 13px; font-weight: 600; padding-bottom: 12px; border-bottom: 1px solid var(--color-border); margin-bottom: 12px; }
        .phone-item { display: flex; justify-content: space-between; font-size: 12px; padding: 8px 0; color: var(--color-text-muted); }
        .phone-total { display: flex; justify-content: space-between; font-size: 14px; font-weight: 700; padding-top: 12px; margin-top: 8px; border-top: 1px solid var(--color-border); color: var(--color-accent); }
        .phone-btn { margin-top: 16px; background: var(--color-accent); color: var(--color-primary); text-align: center; padding: 10px; border-radius: 8px; font-size: 12px; font-weight: 700; }
        .location { padding: 80px 24px; }
        .location-grid { display: grid; grid-template-columns: 1fr 1.5fr; gap: 40px; align-items: start; }
        .location-info { display: flex; flex-direction: column; gap: 24px; }
        .location-detail { display: flex; gap: 16px; align-items: flex-start; }
        .location-detail svg { flex-shrink: 0; margin-top: 2px; }
        .location-detail strong { display: block; font-size: 14px; margin-bottom: 4px; }
        .location-detail p, .location-detail a { font-size: 14px; color: var(--color-text-muted); line-height: 1.5; }
        .location-detail a:hover { color: var(--color-accent); }
        .location-map { height: 350px; background: var(--color-card); border-radius: 16px; border: 1px solid var(--color-border); overflow: hidden; }
        @media (max-width: 1024px) {
          .features-grid, .popular-grid { grid-template-columns: repeat(2, 1fr); }
          .cta-card { grid-template-columns: 1fr; padding: 40px; }
          .cta-visual { display: none; }
        }
        @media (max-width: 768px) {
          .hero { padding: 60px 0; min-height: auto; }
          .hero-stats { flex-direction: column; gap: 16px; }
          .features-grid { grid-template-columns: 1fr; }
          .popular-grid { grid-template-columns: 1fr 1fr; }
          .location-grid { grid-template-columns: 1fr; }
          .location-map { height: 250px; }
          .hero-buttons { flex-direction: column; align-items: center; }
        }
        @media (max-width: 480px) { .popular-grid { grid-template-columns: 1fr; } }
      `}</style>
    </main>
  )
}

export default Home
