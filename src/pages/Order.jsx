import { useState } from 'react'
import { menuData } from '../data/menu'
import { useCart } from '../context/CartContext'
import MenuItem from '../components/MenuItem'

function Order() {
  const [activeCategory, setActiveCategory] = useState('starters')
  const [orderStep, setOrderStep] = useState('menu')
  const { cartItems, cartTotal, clearCart, cartCount } = useCart()
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', pickupTime: '20', notes: '' })
  const categories = Object.keys(menuData)

  const handleSubmit = (e) => { e.preventDefault(); setOrderStep('confirmed') }

  if (orderStep === 'confirmed') {
    return (
      <main className="order-page">
        <div className="container">
          <div className="confirmation">
            <div className="confirm-icon">&#10003;</div>
            <h2>Order Confirmed!</h2>
            <p>Thank you, {formData.name}! Your order has been received.</p>
            <div className="confirm-details">
              <div className="confirm-row"><span>Pickup Time</span><span>~{formData.pickupTime} minutes</span></div>
              <div className="confirm-row"><span>Items</span><span>{cartCount} items</span></div>
              <div className="confirm-row total"><span>Total</span><span>${(cartTotal * 1.0875).toFixed(2)}</span></div>
            </div>
            <p className="confirm-note">We will text you at {formData.phone} when your order is ready for pickup.</p>
            <button className="btn btn-primary" onClick={() => { clearCart(); setOrderStep('menu') }}>Place Another Order</button>
          </div>
        </div>
        <style>{`
          .order-page { padding-top: calc(var(--header-height) + 60px); min-height: 80vh; }
          .confirmation { max-width: 500px; margin: 0 auto; text-align: center; padding: 60px 40px; background: var(--color-card); border: 1px solid var(--color-border); border-radius: 24px; }
          .confirm-icon { width: 80px; height: 80px; background: rgba(76, 175, 80, 0.1); border: 2px solid #4caf50; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 36px; color: #4caf50; margin: 0 auto 24px; }
          .confirmation h2 { font-family: var(--font-display); font-size: 28px; margin-bottom: 8px; }
          .confirmation > p { color: var(--color-text-muted); margin-bottom: 24px; }
          .confirm-details { background: var(--color-secondary); border-radius: 12px; padding: 20px; margin-bottom: 24px; }
          .confirm-row { display: flex; justify-content: space-between; padding: 8px 0; font-size: 14px; color: var(--color-text-muted); }
          .confirm-row.total { font-size: 18px; font-weight: 700; color: var(--color-accent); border-top: 1px solid var(--color-border); margin-top: 8px; padding-top: 12px; }
          .confirm-note { font-size: 13px; color: var(--color-text-muted); margin-bottom: 24px; }
          .btn { padding: 14px 32px; border-radius: 12px; font-size: 15px; font-weight: 600; transition: all 0.2s; display: inline-flex; align-items: center; gap: 8px; }
          .btn-primary { background: linear-gradient(135deg, var(--color-accent), var(--color-accent-hover)); color: var(--color-primary); }
          .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(201, 169, 110, 0.3); }
        `}</style>
      </main>
    )
  }

  if (orderStep === 'checkout') {
    return (
      <main className="order-page">
        <div className="container">
          <div className="checkout-layout">
            <div className="checkout-form-section">
              <h2>Checkout</h2>
              <p className="checkout-subtitle">Complete your pickup order</p>
              <form onSubmit={handleSubmit} className="checkout-form">
                <div className="form-group"><label>Full Name *</label><input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Your name" /></div>
                <div className="form-row">
                  <div className="form-group"><label>Phone *</label><input type="tel" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="(209) 555-0123" /></div>
                  <div className="form-group"><label>Email</label><input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="you@email.com" /></div>
                </div>
                <div className="form-group"><label>Estimated Pickup Time</label>
                  <select value={formData.pickupTime} onChange={e => setFormData({...formData, pickupTime: e.target.value})}>
                    <option value="15">15 minutes</option><option value="20">20 minutes</option><option value="30">30 minutes</option><option value="45">45 minutes</option><option value="60">1 hour</option>
                  </select>
                </div>
                <div className="form-group"><label>Special Instructions</label><textarea value={formData.notes} onChange={e => setFormData({...formData, notes: e.target.value})} placeholder="Allergies, dietary needs, special requests..." rows={3} /></div>
                <button type="submit" className="btn btn-primary checkout-submit">Place Order &middot; ${(cartTotal * 1.0875).toFixed(2)}</button>
                <p className="checkout-note">Payment collected at pickup. This is a demo - no real charges.</p>
              </form>
            </div>
            <div className="checkout-summary">
              <h3>Order Summary</h3>
              <div className="summary-items">
                {cartItems.map(item => (
                  <div key={item.id} className="summary-item">
                    <span className="summary-qty">{item.quantity}x</span>
                    <span className="summary-name">{item.name}</span>
                    <span className="summary-price">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="summary-totals">
                <div className="summary-row"><span>Subtotal</span><span>${cartTotal.toFixed(2)}</span></div>
                <div className="summary-row"><span>Tax (8.75%)</span><span>${(cartTotal * 0.0875).toFixed(2)}</span></div>
                <div className="summary-row total"><span>Total</span><span>${(cartTotal * 1.0875).toFixed(2)}</span></div>
              </div>
              <button className="back-to-menu-btn" onClick={() => setOrderStep('menu')}>&#8592; Add more items</button>
            </div>
          </div>
        </div>
        <style>{`
          .order-page { padding-top: calc(var(--header-height) + 40px); min-height: 80vh; }
          .checkout-layout { display: grid; grid-template-columns: 1.5fr 1fr; gap: 40px; max-width: 900px; margin: 0 auto; padding-bottom: 60px; }
          .checkout-form-section h2 { font-family: var(--font-display); font-size: 28px; margin-bottom: 4px; }
          .checkout-subtitle { color: var(--color-text-muted); margin-bottom: 32px; }
          .checkout-form { display: flex; flex-direction: column; gap: 20px; }
          .form-group { display: flex; flex-direction: column; gap: 6px; }
          .form-group label { font-size: 13px; font-weight: 500; color: var(--color-text-muted); }
          .form-group input, .form-group select, .form-group textarea { padding: 12px 16px; background: var(--color-card); border: 1px solid var(--color-border); border-radius: 10px; color: var(--color-text); font-size: 15px; font-family: var(--font-body); transition: border-color 0.2s; }
          .form-group input:focus, .form-group select:focus, .form-group textarea:focus { outline: none; border-color: var(--color-accent); }
          .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
          .checkout-submit { width: 100%; justify-content: center; padding: 16px; font-size: 16px; margin-top: 8px; }
          .checkout-note { font-size: 12px; color: var(--color-text-muted); text-align: center; }
          .checkout-summary { background: var(--color-card); border: 1px solid var(--color-border); border-radius: 16px; padding: 24px; height: fit-content; position: sticky; top: calc(var(--header-height) + 20px); }
          .checkout-summary h3 { font-family: var(--font-display); font-size: 18px; margin-bottom: 16px; }
          .summary-items { margin-bottom: 16px; }
          .summary-item { display: flex; align-items: center; gap: 8px; padding: 8px 0; font-size: 13px; border-bottom: 1px solid var(--color-border); }
          .summary-qty { color: var(--color-accent); font-weight: 600; min-width: 24px; }
          .summary-name { flex: 1; color: var(--color-text-muted); }
          .summary-price { font-weight: 500; }
          .summary-totals { padding-top: 8px; }
          .summary-row { display: flex; justify-content: space-between; font-size: 13px; color: var(--color-text-muted); padding: 6px 0; }
          .summary-row.total { font-size: 18px; font-weight: 700; color: var(--color-accent); border-top: 1px solid var(--color-border); margin-top: 8px; padding-top: 12px; }
          .back-to-menu-btn { width: 100%; margin-top: 16px; padding: 10px; background: transparent; color: var(--color-text-muted); font-size: 13px; border-radius: 8px; transition: all 0.2s; }
          .back-to-menu-btn:hover { color: var(--color-accent); background: var(--color-secondary); }
          .btn { padding: 14px 32px; border-radius: 12px; font-size: 15px; font-weight: 600; transition: all 0.2s; display: inline-flex; align-items: center; gap: 8px; }
          .btn-primary { background: linear-gradient(135deg, var(--color-accent), var(--color-accent-hover)); color: var(--color-primary); }
          .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(201, 169, 110, 0.3); }
          @media (max-width: 768px) { .checkout-layout { grid-template-columns: 1fr; } .form-row { grid-template-columns: 1fr; } .checkout-summary { position: static; } }
        `}</style>
      </main>
    )
  }

  return (
    <main className="order-page">
      <div className="order-hero">
        <div className="container">
          <span className="section-tag">Order Online</span>
          <h1>Pickup Order</h1>
          <p>Select your items below and we will have them ready for pickup. No delivery fees!</p>
        </div>
      </div>
      <div className="container">
        <div className="order-layout">
          <aside className="order-sidebar">
            <nav className="order-nav">
              {categories.map(cat => (
                <button key={cat} className={`order-nav-btn ${activeCategory === cat ? 'active' : ''}`} onClick={() => setActiveCategory(cat)}>
                  {menuData[cat].title}
                  <span className="nav-count">{menuData[cat].items.length}</span>
                </button>
              ))}
            </nav>
            {cartCount > 0 && (
              <div className="order-sidebar-cart">
                <div className="sidebar-cart-info"><span>{cartCount} items</span><span className="sidebar-cart-total">${cartTotal.toFixed(2)}</span></div>
                <button className="btn btn-primary sidebar-checkout-btn" onClick={() => setOrderStep('checkout')}>Checkout &#8594;</button>
              </div>
            )}
          </aside>
          <div className="order-items">
            <div className="order-items-header"><h2>{menuData[activeCategory].title}</h2><p>{menuData[activeCategory].description}</p></div>
            <div className="order-items-grid">
              {menuData[activeCategory].items.map(item => (<MenuItem key={item.id} item={item} />))}
            </div>
          </div>
        </div>
      </div>
      {cartCount > 0 && (
        <div className="floating-cart">
          <button className="btn btn-primary floating-cart-btn" onClick={() => setOrderStep('checkout')}>Checkout &middot; {cartCount} items &middot; ${cartTotal.toFixed(2)}</button>
        </div>
      )}
      <style>{`
        .order-page { padding-top: var(--header-height); }
        .order-hero { text-align: center; padding: 50px 24px 30px; background: radial-gradient(ellipse at 50% 50%, rgba(201, 169, 110, 0.06) 0%, transparent 60%); }
        .order-hero .section-tag { display: inline-block; font-size: 12px; color: var(--color-accent); text-transform: uppercase; letter-spacing: 2px; font-weight: 600; margin-bottom: 12px; }
        .order-hero h1 { font-family: var(--font-display); font-size: clamp(28px, 4vw, 40px); margin-bottom: 8px; }
        .order-hero p { color: var(--color-text-muted); font-size: 15px; }
        .order-layout { display: grid; grid-template-columns: 240px 1fr; gap: 32px; padding: 32px 0 80px; }
        .order-sidebar { position: sticky; top: calc(var(--header-height) + 20px); height: fit-content; }
        .order-nav { display: flex; flex-direction: column; gap: 4px; margin-bottom: 20px; }
        .order-nav-btn { display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; background: transparent; color: var(--color-text-muted); font-size: 14px; font-weight: 500; border-radius: 10px; transition: all 0.2s; text-align: left; }
        .order-nav-btn:hover { background: var(--color-card); color: var(--color-text); }
        .order-nav-btn.active { background: var(--color-card); color: var(--color-accent); border: 1px solid var(--color-accent); }
        .nav-count { font-size: 11px; background: var(--color-secondary); padding: 2px 8px; border-radius: 10px; color: var(--color-text-muted); }
        .order-nav-btn.active .nav-count { background: rgba(201, 169, 110, 0.15); color: var(--color-accent); }
        .order-sidebar-cart { background: var(--color-card); border: 1px solid var(--color-border); border-radius: 12px; padding: 16px; }
        .sidebar-cart-info { display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 14px; color: var(--color-text-muted); }
        .sidebar-cart-total { font-weight: 700; color: var(--color-accent); }
        .sidebar-checkout-btn { width: 100%; justify-content: center; padding: 12px; font-size: 14px; }
        .order-items-header { margin-bottom: 20px; padding-bottom: 16px; border-bottom: 1px solid var(--color-border); }
        .order-items-header h2 { font-family: var(--font-display); font-size: 24px; margin-bottom: 4px; }
        .order-items-header p { font-size: 14px; color: var(--color-text-muted); }
        .order-items-grid { display: flex; flex-direction: column; gap: 12px; }
        .floating-cart { position: fixed; bottom: 24px; left: 24px; right: 24px; z-index: 50; display: none; }
        .floating-cart-btn { width: 100%; justify-content: center; padding: 16px; font-size: 15px; box-shadow: 0 8px 32px rgba(201, 169, 110, 0.4); }
        .btn { padding: 14px 32px; border-radius: 12px; font-size: 15px; font-weight: 600; transition: all 0.2s; display: inline-flex; align-items: center; gap: 8px; }
        .btn-primary { background: linear-gradient(135deg, var(--color-accent), var(--color-accent-hover)); color: var(--color-primary); }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(201, 169, 110, 0.3); }
        @media (max-width: 768px) {
          .order-layout { grid-template-columns: 1fr; }
          .order-sidebar { position: static; }
          .order-nav { flex-direction: row; overflow-x: auto; -webkit-overflow-scrolling: touch; padding-bottom: 8px; }
          .order-nav-btn { white-space: nowrap; padding: 10px 16px; }
          .floating-cart { display: block; }
          .order-sidebar-cart { display: none; }
        }
      `}</style>
    </main>
  )
}

export default Order
