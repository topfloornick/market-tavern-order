import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const { cartItems, cartTotal, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart } = useCart()
  const navigate = useNavigate()

  if (!isCartOpen) return null

  return (
    <>
      <div className="cart-overlay" onClick={() => setIsCartOpen(false)} />
      <div className="cart-drawer">
        <div className="cart-header">
          <h3>Your Order</h3>
          <button className="cart-close" onClick={() => setIsCartOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="1.5">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <p>Your cart is empty</p>
            <span>Add items from the menu to get started</span>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <span className="cart-item-price">${item.price.toFixed(2)}</span>
                  </div>
                  <div className="cart-item-controls">
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span className="qty-value">{item.quantity}</span>
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="3,6 5,6 21,6"/><path d="M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6M8,6V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"/>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-footer">
              <div className="cart-subtotal"><span>Subtotal</span><span>${cartTotal.toFixed(2)}</span></div>
              <div className="cart-tax"><span>Tax (8.75%)</span><span>${(cartTotal * 0.0875).toFixed(2)}</span></div>
              <div className="cart-total"><span>Total</span><span>${(cartTotal * 1.0875).toFixed(2)}</span></div>
              <button className="checkout-btn" onClick={() => { setIsCartOpen(false); navigate('/order') }}>Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>

      <style>{`
        .cart-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 200; }
        .cart-drawer { position: fixed; top: 0; right: 0; bottom: 0; width: 400px; max-width: 90vw; background: var(--color-primary); border-left: 1px solid var(--color-border); z-index: 201; display: flex; flex-direction: column; animation: slideIn 0.3s ease; }
        .cart-header { display: flex; align-items: center; justify-content: space-between; padding: 20px 24px; border-bottom: 1px solid var(--color-border); }
        .cart-header h3 { font-family: var(--font-display); font-size: 22px; }
        .cart-close { background: var(--color-card); border-radius: 8px; padding: 8px; color: var(--color-text); transition: all 0.2s; }
        .cart-close:hover { background: var(--color-card-hover); }
        .cart-empty { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; padding: 40px; }
        .cart-empty p { font-size: 16px; color: var(--color-text); }
        .cart-empty span { font-size: 13px; color: var(--color-text-muted); }
        .cart-items { flex: 1; overflow-y: auto; padding: 16px 24px; }
        .cart-item { padding: 16px 0; border-bottom: 1px solid var(--color-border); }
        .cart-item:last-child { border-bottom: none; }
        .cart-item-info { display: flex; justify-content: space-between; margin-bottom: 10px; }
        .cart-item-info h4 { font-size: 14px; font-weight: 500; }
        .cart-item-price { color: var(--color-accent); font-weight: 600; font-size: 14px; }
        .cart-item-controls { display: flex; align-items: center; gap: 8px; }
        .qty-btn { width: 30px; height: 30px; border-radius: 6px; background: var(--color-card); color: var(--color-text); font-size: 16px; font-weight: 600; display: flex; align-items: center; justify-content: center; border: 1px solid var(--color-border); transition: all 0.2s; }
        .qty-btn:hover { background: var(--color-accent); color: var(--color-primary); border-color: var(--color-accent); }
        .qty-value { font-size: 14px; font-weight: 600; min-width: 24px; text-align: center; }
        .remove-btn { margin-left: auto; background: none; color: var(--color-text-muted); padding: 4px; transition: all 0.2s; }
        .remove-btn:hover { color: #e74c3c; }
        .cart-footer { padding: 20px 24px; border-top: 1px solid var(--color-border); background: var(--color-secondary); }
        .cart-subtotal, .cart-tax { display: flex; justify-content: space-between; font-size: 14px; color: var(--color-text-muted); margin-bottom: 8px; }
        .cart-total { display: flex; justify-content: space-between; font-size: 18px; font-weight: 700; color: var(--color-text); padding-top: 12px; border-top: 1px solid var(--color-border); margin-top: 8px; margin-bottom: 16px; }
        .checkout-btn { width: 100%; padding: 16px; background: linear-gradient(135deg, var(--color-accent), var(--color-accent-hover)); color: var(--color-primary); font-size: 16px; font-weight: 700; border-radius: 12px; transition: all 0.2s; }
        .checkout-btn:hover { transform: translateY(-1px); box-shadow: 0 8px 24px rgba(201, 169, 110, 0.3); }
      `}</style>
    </>
  )
}

export default Cart
