import { useCart } from '../context/CartContext'

function MenuItem({ item }) {
  const { addToCart } = useCart()

  return (
    <div className="menu-item">
      <div className="menu-item-content">
        <div className="menu-item-header">
          <h3 className="menu-item-name">
            {item.name}
            {item.tags?.includes('popular') && <span className="tag tag-popular">Popular</span>}
            {item.tags?.includes('signature') && <span className="tag tag-signature">Signature</span>}
            {item.tags?.includes('vegetarian') && <span className="tag tag-veg">V</span>}
          </h3>
          <span className="menu-item-price">${item.price.toFixed(2)}</span>
        </div>
        <p className="menu-item-desc">{item.description}</p>
      </div>
      <button className="add-to-cart-btn" onClick={() => addToCart(item)}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
        Add
      </button>

      <style>{`
        .menu-item { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; padding: 20px; border-radius: 12px; background: var(--color-card); border: 1px solid var(--color-border); transition: all 0.2s; }
        .menu-item:hover { background: var(--color-card-hover); border-color: var(--color-accent); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
        .menu-item-content { flex: 1; }
        .menu-item-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; margin-bottom: 8px; }
        .menu-item-name { font-family: var(--font-display); font-size: 16px; font-weight: 500; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .tag { font-family: var(--font-body); font-size: 10px; font-weight: 600; padding: 2px 8px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px; }
        .tag-popular { background: rgba(201, 169, 110, 0.15); color: var(--color-accent); border: 1px solid rgba(201, 169, 110, 0.3); }
        .tag-signature { background: rgba(231, 76, 60, 0.1); color: #e74c3c; border: 1px solid rgba(231, 76, 60, 0.3); }
        .tag-veg { background: rgba(76, 175, 80, 0.1); color: #4caf50; border: 1px solid rgba(76, 175, 80, 0.3); width: 20px; height: 20px; display: inline-flex; align-items: center; justify-content: center; padding: 0; border-radius: 50%; }
        .menu-item-price { font-size: 16px; font-weight: 700; color: var(--color-accent); white-space: nowrap; }
        .menu-item-desc { font-size: 13px; color: var(--color-text-muted); line-height: 1.5; }
        .add-to-cart-btn { display: flex; align-items: center; gap: 6px; padding: 10px 16px; background: transparent; border: 1.5px solid var(--color-accent); color: var(--color-accent); border-radius: 8px; font-size: 13px; font-weight: 600; white-space: nowrap; transition: all 0.2s; flex-shrink: 0; align-self: center; }
        .add-to-cart-btn:hover { background: var(--color-accent); color: var(--color-primary); transform: scale(1.05); }
        @media (max-width: 480px) {
          .menu-item { flex-direction: column; }
          .add-to-cart-btn { width: 100%; justify-content: center; }
        }
      `}</style>
    </div>
  )
}

export default MenuItem
