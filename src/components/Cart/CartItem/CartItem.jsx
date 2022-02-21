import React from 'react'
import Button from '../../Button'

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
    return (
        <div className="card">
            <img src={item.image.url} alt={item.name} className="card-img" />
            <div className="content">
                <h4 className="name">{item.name}</h4>
                <h5 className="total">{item.line_total.formatted_with_symbol}</h5>
            </div>
            <div className="cart-buttons">
                <button onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</button>
            </div>
            <Button onClick={() => onRemoveFromCart(item.id)} name="Remove" secondary={true} />
        </div>
    )
}

export default CartItem
