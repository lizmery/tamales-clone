import React from 'react'

const CartSummary = ({ cart }) => {
    return (
        <div className="cart-summary">
            <h3 className="checkout-subheading">Cart Summary</h3>
            <div className="cart-items">
                {cart.line_items.map((item) => (
                    <div className="cart-item" key={item.id}>
                        <img src={item.image.url} alt={item.name} className="img" loading="lazy" />
                        <div className="cart-content">
                            <h3>{item.name}</h3>
                            <span>{item.quantity} x {item.line_total.formatted_with_symbol}</span>
                        </div>
                    </div>
                ))}
            </div>
            <hr />
            <div className="cart-total">
                <h3>Total: </h3>
                <h3>{cart.subtotal.formatted_with_symbol}</h3>
            </div>
        </div>
    )
}

export default CartSummary
