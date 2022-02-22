import React from 'react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem/CartItem'
import Button from '../Button'
import './Cart.css'

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {

    const EmptyCart = () => (
        <span className="empty">
            You have no items in your shopping cart,
            <Link to ='/menu' className='empty-link'>start adding some</Link>!
        </span>
    )

    const FilledCart = () => (
        <>
            <div className="cart-grid">
                {cart.line_items.map((item) => (
                    <div className="cart-item" key={item.id}>
                        <CartItem
                            item={item}
                            onUpdateCartQty={handleUpdateCartQty}
                            onRemoveFromCart={handleRemoveFromCart}
                        />
                    </div>
                ))}
            </div>
            <div className="checkout">
                <h4 className="subtotal">Subtotal: {cart.subtotal.formatted_with_symbol}</h4>
                <div className="checkout-btns">
                    <Link to="/"><Button name="Empty Cart" secondary={true} onClick={handleEmptyCart} /></Link>
                    <Link to="/"><Button name="Checkout" /></Link>
                </div>
            </div>
        </>
    )

    if(!cart.line_items) return 'Loading...'

    return (
        <section className="cart-container">
            <h3 className="heading">Your Shopping Cart</h3>
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </section>
    )
}

export default Cart