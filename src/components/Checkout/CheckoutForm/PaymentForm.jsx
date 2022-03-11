import { Link } from 'react-router-dom'
import {
    Elements,
    CardElement,
    ElementsConsumer,
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Button from '../../Button'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

const PaymentForm = ({
    user,
    checkoutData,
    handleCheckout,
}) => {
    const handleSubmit = async (e, elements, stripe) => {
        e.preventDefault()

        if (!stripe || !elements) return
        
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        })

        if (error) {
            elements.getElement('card').focus()
        } else {
            const orderData = {
                payment: {
                    gateway: 'stripe',
                    stripe: {
                        payment_method_id: paymentMethod.id,
                    },
                },
                shipping: {
                    name: 'stander',
                    street: user.address,
                    town_city: user.city,
                    postal_zip_code: user.zipCode,
                    country: user.shippingCountry,
                },
                customer: {
                    firstname: user.firstName,
                    lastname: user.lastName,
                    email: user.email,
                },
                line_items: checkoutData.live.line_items,
                fulfillment: { shipping_method: user.shippingOptions },
            }

            handleCheckout(checkoutData.id, orderData)
        }
    }

    return (
        <>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({ elements, stripe }) => (
                        <form onSubmit={(e) => handleSubmit(e, elements, stripe)} className="payment-form">
                            <CardElement />
                            <div className="actions payment-actions">
                                <Link to='/confirmation'>
                                    <Button 
                                        name="Place Order" 
                                        disabled={!stripe} 
                                        type="submit"
                                        fullWidth
                                    />
                                </Link>
                            </div>
                        </form>
                    )}
                </ElementsConsumer>
            </Elements>
        </>
    )
}

export default PaymentForm