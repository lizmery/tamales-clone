import { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { commerce } from '../../lib/commerce'
import AddressForm from './CheckoutForm/AddressForm'
import PaymentForm from './CheckoutForm/PaymentForm'
import CartSummary from './CheckoutForm/CartSummary'
import './Checkout.css'

const convertObjectToArray = (countries) => 
    Object.entries(countries || {}).map(([code, name]) => ({code, name}))

const Checkout = ({ cart, handleCheckout }) => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        zipCode: '',
        shippingOption: {},
        shippingOptions: [],
        shippingCountry: {},
        shippingCountries: [],
    })
    const [checkoutData, setCheckoutData] = useState({})
    
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSelectChange = (e, state) => {
        const { name, value } = e.target
        if (state === 'shippingOptions') {
          setUser({
            ...user,
            [name]: {
              id: value,
            },
          })
        } else {
          setUser({
            ...user,
            [name]: {
              name: user[state].find((country) => country.code === value).name,
              code: value,
            },
          })
        }
    }

    useEffect(() => {
        if (cart.id) {
            const generateToken = async () => {
                try {
                    const response = await commerce.checkout.generateToken(
                        cart.id,
                        {
                            type: 'cart',
                        }
                    )
                    setCheckoutData(response)
                } catch (error) {
                    console.error('Checkout error: ', error)
                }
            }
            generateToken()
        }
    }, [cart, navigate])

    useEffect(() => {
        const fetchShippingCountries = async () => {
            const { countries } = await commerce.services.localeListShippingCountries(checkoutData.id)
            const FormattedCountries = convertObjectToArray(countries)

            setUser({
                ...user,
                shippingCountries: FormattedCountries,
                shippingCountry: FormattedCountries[FormattedCountries.length - 1]
            })
        }
        if (!user.shippingCountries.length && checkoutData.id) {
            fetchShippingCountries()
        }
    }, [user, checkoutData])

    

    useEffect(() => {
        const fetchShippingOptions = async (
            checkoutDataId,
            country,
            stateProvince = null
        ) => {
            const options = await commerce.checkout.getShippingOptions(
                checkoutDataId,
                {
                    country,
                    region: stateProvince,
                }
            )

            setUser({
                ...user,
                shippingOptions: options,
                shippingOption: { id: options[0].id },
            })
        }

        if (!user.shippingOptions.length) {
            fetchShippingOptions(
                checkoutData.id,
                user.shippingCountry.code,
            )
        }
    }, [
        user,
        checkoutData.id,
        user.shippingCountry.code
    ])

    if (
        !user.shippingCountries.length || 
        !user.shippingOptions.length ||
        !checkoutData.live
    ) {
        return (
            <section className="checkout">
                <h1 className="heading">Loading...</h1>
            </section>
        )
    }

    return (
        <section className="checkout">
            <h1 className="heading">Checkout</h1>
            <div className="checkout-row">
                <CartSummary cart={cart} />
                <div className="checkout-forms">
                    <AddressForm
                        user={user}
                        handleChange={handleChange}
                        handleSelectChange={handleSelectChange} 
                    />
                    <PaymentForm
                        user={user}
                        checkoutData={checkoutData}
                        handleCheckout={handleCheckout}
                    />
                </div>
            </div>
        </section>
    )
}

export default Checkout