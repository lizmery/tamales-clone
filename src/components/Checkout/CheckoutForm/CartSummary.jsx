import React from 'react'

const CartSummary = ({ cart }) => {
    return (
        <div className="cart-summary">
            <h1 className="">Your Cart</h1>
            <div className="cart-items">
                {cart.line_items.map((item) => (
                    <div className="cart-item" key={item.id}>
                        <h3>{item.name}</h3>
                        {item.line_total.formatted_with_symbol}
                    </div>
                ))}
            </div>
            <hr />
            <div className="cart-total">
                <h3>Total</h3>
                <h3>{cart.subtotal.formatted_with_symbol}</h3>
            </div>
        </div>
    )
}

export default CartSummary
