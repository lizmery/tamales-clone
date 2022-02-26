import React from 'react'
import CartSummary from './CheckoutForm/CartSummary'
import './Checkout.css'
import AddressForm from './CheckoutForm/AddressForm'


const Checkout = ({ cart }) => {
    return (
        <section className="checkout">
            <AddressForm />
            <CartSummary cart={cart} />
        </section>
    )
}

export default Checkout
